import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects, projectCategories } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export const Portfolio = ({ onSelectProject }) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  const filteredProjects = projects.filter((project) => {
    if (!project.published) return false;
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full min-h-screen bg-[#080A0D] py-24 sm:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-accentBlue uppercase block mb-1">
              {language === 'fr' ? 'ŒUVRES SÉLECTIONNÉES' : 'SELECTED WORKS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-widest text-white uppercase">
              PORTFOLIO
            </h2>
          </div>

          {/* Minimalist Editorial Tabs */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`uppercase tracking-wider transition-colors pb-1 border-b ${
                    isActive
                      ? 'text-accentBlue border-accentBlue font-semibold'
                      : 'text-mutedText border-transparent hover:text-white'
                  }`}
                >
                  {cat.label[language]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Asymmetric & Balanced Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout span
            const colSpan = idx % 3 === 0 ? 'lg:col-span-8' : idx % 3 === 1 ? 'lg:col-span-4' : 'lg:col-span-12';
            const aspectClass = idx % 3 === 0 ? 'aspect-[16/9]' : idx % 3 === 1 ? 'aspect-[4/3]' : 'aspect-[21/9]';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`portfolio-item ${colSpan} group cursor-pointer`}
              >
                {/* Image Frame */}
                <div className={`relative ${aspectClass} overflow-hidden bg-[#111419] border border-white/10`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title[language]}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark hover tint with play icon */}
                  <div className="absolute inset-0 bg-[#080A0D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/30 bg-[#080A0D]/80 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-4 h-4 ml-0.5 fill-current text-accentBlue" />
                    </div>
                  </div>

                  {/* Top Right Duration Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 bg-[#080A0D]/80 backdrop-blur-sm text-mutedText border border-white/10">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Minimalist Editorial Metadata */}
                <div className="mt-3 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-accentBlue uppercase tracking-wider mb-1">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                      {project.client && (
                        <>
                          <span>•</span>
                          <span className="text-mutedText">{project.client}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-sans font-bold text-white uppercase tracking-tight group-hover:text-accentBlue transition-colors">
                      {project.title[language]}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-mutedText/80 text-right shrink-0 ml-4">
                    {project.role[language]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
