import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Film, Sliders, Sparkles, Monitor, Volume2, 
  Scissors, Zap, Compass, Palette, Headphones, CheckCircle2, Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { softwareSkills, coreMastery, services, languageSkills } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'scissors': return <Scissors className="w-5 h-5" />;
    case 'zap': return <Zap className="w-5 h-5" />;
    case 'compass': return <Compass className="w-5 h-5" />;
    case 'palette': return <Palette className="w-5 h-5" />;
    case 'headphones': return <Headphones className="w-5 h-5" />;
    default: return <CheckCircle2 className="w-5 h-5" />;
  }
};

export const Skills = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress lines
      gsap.fromTo(
        '.skill-progress-bar',
        { width: 0 },
        {
          width: (i, target) => target.dataset.width + '%',
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.software-skills-container',
            start: 'top 80%',
          },
        }
      );

      // Animate SVG circular progress
      gsap.fromTo(
        '.circle-progress',
        { strokeDashoffset: 283 },
        {
          strokeDashoffset: (i, target) => {
            const pct = parseInt(target.dataset.percentage, 10);
            return 283 - (283 * pct) / 100;
          },
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.mastery-container',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-charcoal-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold tracking-widest text-gold uppercase">
            {t.skills.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-cream mt-2 tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-base sm:text-lg text-slateText mt-3 font-serif italic">
            "{t.skills.subtitle}"
          </p>
        </div>

        {/* 1. Software NLE & Technical Tools (Inspired by Image 1) */}
        <div className="software-skills-container p-8 sm:p-10 rounded-[2.5rem] bg-charcoal-900 border border-white/10 shadow-2xl mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-cream">
                {t.skills.softwareTitle}
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-1">
                PROFESSIONAL POST-PRODUCTION SUITE • MAC & LINUX RIGS
              </p>
            </div>
            <Film className="w-6 h-6 text-gold hidden sm:block" />
          </div>

          <div className="space-y-6">
            {softwareSkills.map((software, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center justify-between text-xs sm:text-sm font-sans mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold/60 group-hover:bg-gold transition-colors" />
                    <span className="font-bold text-white tracking-wide">
                      {software.name}
                    </span>
                    <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 px-2 py-0.5 rounded bg-charcoal-800">
                      {software.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gold font-semibold">
                      {language === 'fr' ? software.badge : software.badgeEn}
                    </span>
                    <span className="text-xs font-mono font-bold text-cream w-8 text-right">
                      {software.level}%
                    </span>
                  </div>
                </div>

                {/* Progress bar line with custom slider dot (Image 1 style) */}
                <div className="relative h-2 w-full bg-charcoal-800 rounded-full overflow-visible">
                  <div
                    className="skill-progress-bar h-full bg-gradient-to-r from-gold/60 via-gold to-gold-light rounded-full relative"
                    data-width={software.level}
                    style={{ width: '0%' }}
                  >
                    {/* Glowing slider thumb */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cream border-2 border-gold shadow-glow-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages Section Bar */}
          <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languageSkills.map((lang, lIdx) => (
              <div key={lIdx} className="p-4 rounded-2xl bg-charcoal-850/60 border border-white/5">
                <div className="flex items-center justify-between mb-2 text-xs font-mono">
                  <span className="font-bold text-cream flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-cinema-cyan" />
                    {lang.name}
                  </span>
                  <span className="text-slateText">{lang.levelText}</span>
                </div>
                <div className="h-1.5 w-full bg-charcoal-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cinema-cyan/80 rounded-full"
                    style={{ width: `${lang.levelScore}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Core Pillars of Mastery (Circular Dashboard - Pattern 2 from GEMINI.MD) */}
        <div className="mastery-container mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-sans font-bold text-cream">
              {t.skills.masteryTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreMastery.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[2rem] bg-charcoal-900 border border-white/10 hover:border-gold/30 card-hover shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Circular Progress Gauge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-16 h-16 transform -rotate-90">
                        {/* Background circle */}
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="rgba(255, 255, 255, 0.08)"
                          strokeWidth="4"
                          fill="transparent"
                        />
                        {/* Animated meter circle (r=28 -> circumference ~ 175.9, using 283 standard scale) */}
                        <circle
                          className="circle-progress"
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#D4A843"
                          strokeWidth="4"
                          fill="transparent"
                          strokeDasharray="176"
                          strokeDashoffset="176"
                          strokeLinecap="round"
                          data-percentage={item.percentage}
                          style={{
                            strokeDashoffset: 176 - (176 * item.percentage) / 100,
                            transition: 'stroke-dashoffset 1.5s ease',
                          }}
                        />
                      </svg>
                      <span className="absolute font-mono text-xs font-bold text-cream">
                        {item.percentage}%
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-gold/10 text-gold border border-gold/20">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-sans font-bold text-cream mb-2">
                    {item.title[language]}
                  </h4>

                  <p className="text-slateText text-xs sm:text-sm leading-relaxed">
                    {item.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Audiovisual Services & Production Value (Inspired by Image 2 "Services") */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-sans font-bold text-cream">
              {t.skills.servicesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="p-6 sm:p-7 rounded-[2rem] bg-charcoal-900/60 border border-white/5 hover:border-gold/30 card-hover shadow-lg group"
              >
                <div className="w-12 h-12 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal-950 transition-all duration-300 mb-5 shadow-sm">
                  {getServiceIcon(svc.icon)}
                </div>

                <h4 className="text-base font-sans font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                  {svc.title[language]}
                </h4>

                <p className="text-xs sm:text-sm text-slateText leading-relaxed">
                  {svc.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

