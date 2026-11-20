import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Film, Sparkles, Filter, Clock, Eye, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects, projectCategories } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export const Portfolio = ({ onSelectProject }) => {
  const { t, language } = useLanguage();
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
        '.portfolio-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-charcoal-950 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cinema-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold tracking-widest text-gold uppercase">
            {t.portfolio.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-cream mt-2 tracking-tight">
            {t.portfolio.title}
          </h2>
          <p className="text-base sm:text-lg text-slateText mt-3 font-serif italic">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Category Filters Bar (Inspired by Image 3) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 btn-magnetic ${
                  isActive
                    ? 'bg-gold text-charcoal-950 font-bold shadow-glow-gold'
                    : 'bg-charcoal-900 text-slateText hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat.label[language]}
              </button>
            );
          })}
        </div>

        {/* Cinematic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="portfolio-card group relative bg-charcoal-900 border border-white/10 hover:border-gold/50 rounded-[2.2rem] overflow-hidden cursor-pointer card-hover shadow-2xl flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Gradient darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-black/30" />

                {/* Category Pill Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-gold text-[10px] font-mono uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Duration / Aspect Ratio Pill Top Right */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-slateText text-[10px] font-mono">
                  <Clock className="w-3 h-3 text-gold" />
                  <span>{project.duration}</span>
                </div>

                {/* Hover Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-charcoal-950/40 backdrop-blur-[2px]">
                  <div className="w-14 h-14 rounded-full bg-gold text-charcoal-950 flex items-center justify-center shadow-glow-gold scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Card Information */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                    <span>{project.client}</span>
                    <span className="text-gold">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-sans font-bold text-cream group-hover:text-gold transition-colors line-clamp-1">
                    {project.title[language]}
                  </h3>

                  <p className="text-slateText text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.description[language]}
                  </p>
                </div>

                {/* Role badge & View Project trigger */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {project.role[language]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:underline">
                    {t.portfolio.watchVideo}
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note / Future Expansion */}
        <div className="mt-14 text-center">
          <p className="text-xs font-mono text-slate-500">
            Showreel complet & films sous accord de confidentialité disponibles sur demande privée.
          </p>
        </div>
      </div>
    </section>
  );
};

