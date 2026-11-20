import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { experiences, educations } from '../data/experiences';

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline cards animation
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 80%',
          },
        }
      );

      // Education cards animation
      gsap.fromTo(
        '.edu-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.edu-container',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-charcoal-900 border-t border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold tracking-widest text-gold uppercase">
            {t.experience.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-cream mt-2 tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-base sm:text-lg text-slateText mt-3 font-serif italic">
            "{t.experience.subtitle}"
          </p>
        </div>

        {/* Vertical Living Timeline */}
        <div className="timeline-container relative mb-24">
          {/* Central Line on Desktop (left on mobile) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/50 via-gold/30 to-white/10 -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`timeline-item relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Pulse Node Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 z-20 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-charcoal-950 border-2 border-gold flex items-center justify-center shadow-glow-gold">
                      <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side for desktop alternation */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="p-7 rounded-[2rem] bg-charcoal-850/90 border border-white/10 hover:border-gold/40 card-hover shadow-xl">
                      {/* Period Badge & Year in Monospace */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-mono font-semibold border border-gold/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {exp.location}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl sm:text-2xl font-sans font-bold text-cream mb-1">
                        {exp.role[language]}
                      </h3>

                      {/* Company / Agency */}
                      <div className="text-sm font-sans font-medium text-gold/90 mb-4">
                        {exp.company}
                      </div>

                      {/* Description */}
                      <p className="text-slateText text-sm leading-relaxed mb-5">
                        {exp.description[language]}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-3 border-t border-white/5">
                        {exp.highlights[language].map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Certifications (Section F from GEMINI.MD) */}
        <div className="edu-container pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <GraduationCap className="w-6 h-6 text-gold" />
            <h3 className="text-2xl font-sans font-bold text-cream">
              {t.experience.educationTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educations.map((edu) => (
              <div
                key={edu.id}
                className="edu-card p-6 sm:p-7 rounded-[2rem] bg-charcoal-850/60 border border-white/5 hover:border-white/15 card-hover shadow-lg"
              >
                <div className="inline-block px-3 py-1 rounded-lg bg-charcoal-800 text-gold font-mono text-xs font-semibold mb-3">
                  {edu.year}
                </div>
                <h4 className="text-lg font-sans font-bold text-cream mb-1">
                  {edu.degree[language]}
                </h4>
                <p className="text-sm text-slate-400 font-medium mb-3">
                  {edu.institution[language]}
                </p>
                <p className="text-xs font-mono text-slate-500">
                  {edu.specialization[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

