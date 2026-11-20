import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Film, Disc, Plane, BookOpen, Sparkles, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { softwareSkills, languageSkills, personalSkills, hobbies, services, aiSkills } from '../data/skills';
import { experiences, educations } from '../data/experiences';

gsap.registerPlugin(ScrollTrigger);

const getHobbyIcon = (iconName) => {
  switch (iconName) {
    case 'camera': return <Camera className="w-3.5 h-3.5" />;
    case 'film': return <Film className="w-3.5 h-3.5" />;
    case 'disc': return <Disc className="w-3.5 h-3.5" />;
    case 'plane': return <Plane className="w-3.5 h-3.5" />;
    case 'book': return <BookOpen className="w-3.5 h-3.5" />;
    default: return <Film className="w-3.5 h-3.5" />;
  }
};

export const Resume = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.resume-col',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="relative w-full min-h-screen bg-[#080A0D] py-24 sm:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Background Image - Architectural geometry with 45% opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/resume-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.45]"
        />
        {/* Subtle gradient overlay to smoothly transition top/bottom borders and preserve contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D] via-[#080A0D]/50 to-[#080A0D]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Title Header */}
        <div className="mb-16">
          <span className="text-[11px] font-mono tracking-widest text-accentBlue uppercase block mb-1">
            {language === 'fr' ? 'PROFIL PROFESSIONNEL & HISTORIQUE' : 'PROFESSIONAL PROFILE & TIMELINE'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-widest text-white uppercase">
            {language === 'fr' ? 'CURRICULUM VITAE & COMPÉTENCES' : 'RESUME & TECHNICAL COMPETENCIES'}
          </h2>
        </div>

        {/* 3-Column Editorial Architecture (Reproducing Screenshot 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* ======================================================== */}
          {/* COLUMN 1: SKILLS (Software Skills, Languages, Personal) */}
          {/* ======================================================== */}
          <div className="resume-col lg:col-span-4 space-y-12">
            
            {/* SOFTWARE SKILLS */}
            <div>
              <div className="border-b border-accentBlue/40 pb-2 mb-6">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2">
                  <span className="text-accentBlue">//</span>
                  {language === 'fr' ? 'LOGICIELS & POSTPRODUCTION' : 'SOFTWARE & POST-PRODUCTION'}
                </h3>
              </div>

              <div className="space-y-5">
                {softwareSkills.map((software, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between text-xs font-mono mb-2 text-mutedText">
                      <span className="text-white font-medium">{software.name}</span>
                      <span className="text-[10px] text-accentBlue">
                        {language === 'fr' ? software.badge : software.badgeEn}
                      </span>
                    </div>

                    {/* Thin horizontal line with subtle blue slider dot (as in Screenshot 3) */}
                    <div className="relative h-[2px] w-full bg-white/10 rounded-full">
                      <div
                        className="h-full bg-accentBlue rounded-full relative"
                        style={{ width: `${software.level}%` }}
                      >
                        {/* The circular marker dot */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border border-accentBlue shadow-sm" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LANGUAGES (Français, Anglais, Fon, Yoruba) */}
            <div>
              <div className="border-b border-accentBlue/40 pb-2 mb-6">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2">
                  <span className="text-accentBlue">//</span>
                  {language === 'fr' ? 'LANGUES' : 'LANGUAGES'}
                </h3>
              </div>

              <div className="space-y-4">
                {languageSkills.map((lang, lIdx) => (
                  <div key={lIdx}>
                    <div className="flex items-center justify-between text-xs font-mono mb-2 text-mutedText">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-[10px] text-mutedText/80">{lang.levelText}</span>
                    </div>
                    <div className="relative h-[2px] w-full bg-white/10 rounded-full">
                      <div
                        className="h-full bg-accentBlue rounded-full relative"
                        style={{ width: `${lang.levelScore}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border border-accentBlue" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PERSONAL SKILLS */}
            <div>
              <div className="border-b border-accentBlue/40 pb-2 mb-4">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2">
                  <span className="text-accentBlue">//</span>
                  {language === 'fr' ? 'QUALITÉS PROFESSIONNELLES' : 'PROFESSIONAL STRENGTHS'}
                </h3>
              </div>

              <p className="text-xs font-mono text-mutedText leading-relaxed">
                {personalSkills.map((p) => p[language]).join(' • ')}
              </p>
            </div>

          </div>


          {/* ======================================================== */}
          {/* COLUMN 2: EXPERIENCE & EDUCATION (Timeline)              */}
          {/* ======================================================== */}
          <div className="resume-col lg:col-span-5 space-y-12">
            
            {/* EXPERIENCE TIMELINE */}
            <div>
              <div className="border-b border-accentBlue/40 pb-2 mb-6">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2">
                  <span className="text-accentBlue">//</span>
                  {language === 'fr' ? 'EXPÉRIENCES PROFESSIONNELLES' : 'WORK EXPERIENCE'}
                </h3>
              </div>

              {/* Vertical timeline */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/15">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative group">
                    {/* Small circular blue marker */}
                    <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-[#080A0D] border-2 border-accentBlue" />

                    <div>
                      {/* Dates in monospace */}
                      <span className="text-[10px] font-mono text-accentBlue uppercase tracking-wider block mb-0.5">
                        {exp.period}
                      </span>

                      {/* Role & Company in bold */}
                      <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wide">
                        {exp.role[language]}
                      </h4>

                      <p className="text-xs font-sans text-accentBlue/90 font-medium mt-0.5 mb-1.5">
                        {exp.company} • <span className="text-mutedText/80">{exp.location}</span>
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1 text-xs text-mutedText/90 leading-relaxed font-normal">
                        {exp.highlights[language].map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5">
                            <span className="text-accentBlue mt-0.5">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORMATION ACADÉMIQUE */}
            <div>
              <div className="border-b border-accentBlue/40 pb-2 mb-6">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2">
                  <span className="text-accentBlue">//</span>
                  {language === 'fr' ? 'FORMATION ACADÉMIQUE' : 'EDUCATION'}
                </h3>
              </div>

              <div className="space-y-6">
                {educations.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <span className="text-[10px] font-mono text-accentBlue tracking-wider block">
                      {edu.year}
                    </span>
                    <h5 className="font-sans font-bold text-white mt-0.5 text-sm">
                      {edu.degree[language]}
                    </h5>
                    <p className="text-accentBlue/90 text-xs mt-0.5 font-medium">
                      {edu.institution[language]}
                    </p>
                    <p className="text-mutedText/80 text-[11px] mt-1 leading-relaxed">
                      {edu.specialization[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* ======================================================== */}
          {/* COLUMN 3: EXPERTISE, IA & CENTRES D'INTÉRÊT              */}
          {/* ======================================================== */}
          <div className="resume-col lg:col-span-3 space-y-12">
            
            {/* DOMAINES D'ACTION / WHAT CAN I DO ? */}
            <div>
              <div className="border-b border-accentBlue/40 pb-2 mb-4">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2">
                  <span className="text-accentBlue">//</span>
                  {language === 'fr' ? 'DOMAINES D’ACTION' : 'WHAT CAN I DO ?'}
                </h3>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-mutedText">
                {services.map((svc) => (
                  <div key={svc.id} className="leading-snug">
                    <span className="text-white/90 font-sans font-medium block">
                      {svc.title[language]}
                    </span>
                    <span className="text-[11px] text-mutedText/80 block line-clamp-1">
                      {svc.description[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* INTELLIGENCE ARTIFICIELLE & CRÉATION AUDIOVISUELLE */}
            <div>
              <div className="border-b border-accentBlue/40 pb-2 mb-4">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2">
                  <span className="text-accentBlue">//</span>
                  {language === 'fr' ? 'INTELLIGENCE ARTIFICIELLE' : 'AI & VIDEO WORKFLOWS'}
                </h3>
              </div>

              <div className="space-y-3 text-xs font-mono">
                {aiSkills.map((ai, idx) => (
                  <div key={idx} className="p-2.5 bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-1.5 text-accentBlue font-bold text-xs mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{ai.tool}</span>
                    </div>
                    <p className="text-[11px] text-mutedText leading-relaxed">
                      {ai.role[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTRES D'INTÉRÊT (With small monochrome circular icons as in Screenshot 3) */}
            <div>
              <div className="border-b border-accentBlue/40 pb-2 mb-5">
                <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2">
                  <span className="text-accentBlue">//</span>
                  {language === 'fr' ? 'CENTRES D’INTÉRÊT' : 'HOBBIES & INTERESTS'}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {hobbies.map((h, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-2.5 rounded bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-mutedText mb-1.5">
                      {getHobbyIcon(h.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-mutedText tracking-tight">
                      {h.title[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
