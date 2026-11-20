import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Mail, MapPin, Globe, CheckCircle, Sparkles, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

gsap.registerPlugin(ScrollTrigger);

export const About = ({ onOpenCvModal }) => {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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

  const manifesto = biography.manifesto[language];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-charcoal-900 border-t border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="about-card mb-16 text-center md:text-left">
          <span className="text-xs font-mono font-semibold tracking-widest text-gold uppercase">
            {t.about.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-cream mt-2 tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg font-serif italic text-gold/90 mt-1">
            "{t.about.subtitle}"
          </p>
        </div>

        {/* Two-Column Layout with Vertical Accent Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative">
          
          {/* Left Column: Portrait & Personal Credentials (5 cols) */}
          <div className="about-card lg:col-span-5 flex flex-col gap-6">
            {/* Visual Frame / Cinematic Portrait */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-charcoal-850 shadow-glow-card aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Carmel Ulrich AIKO Portrait"
                className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
              
              {/* Bottom Card Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-charcoal-900/90 border border-white/10 backdrop-blur-md">
                <span className="block text-xs font-mono text-gold uppercase tracking-wider">
                  Carmel Ulrich AIKO
                </span>
                <span className="text-sm font-sans font-semibold text-white">
                  {biography.title[language]}
                </span>
              </div>
            </div>

            {/* Quick Details Table (Inspired by Image 2) */}
            <div className="p-6 rounded-[2rem] bg-charcoal-850/80 border border-white/5 space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                <span className="text-slate-500 font-mono">{t.about.locationLabel}</span>
                <span className="text-cream font-medium">{biography.contact.location}</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                <span className="text-slate-500 font-mono">{t.about.emailLabel}</span>
                <span className="text-gold font-mono font-medium">{biography.contact.email}</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                <span className="text-slate-500 font-mono">{t.about.phoneLabel}</span>
                <span className="text-cream font-mono">{biography.contact.phone}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-500 font-mono">{t.about.statusLabel}</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {t.about.availableStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Vertical Fine Accent Divider (Desktop) */}
          <div className="hidden lg:block lg:col-span-1 self-stretch flex justify-center">
            <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          </div>

          {/* Right Column: The Manifesto (6 cols) */}
          <div className="about-card lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Lead statement */}
              <p className="text-xl sm:text-2xl font-serif text-cream leading-snug font-medium">
                {manifesto.lead}
              </p>

              {/* Paragraphs */}
              {manifesto.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slateText text-base sm:text-lg leading-relaxed font-sans font-normal">
                  {p}
                </p>
              ))}

              {/* Quote Callout */}
              <div className="p-6 rounded-3xl bg-gold/5 border border-gold/20 relative my-6">
                <Quote className="w-8 h-8 text-gold/30 absolute -top-3 -left-2" />
                <p className="text-lg font-serif italic text-gold-light pl-4">
                  "{manifesto.quote}"
                </p>
                <span className="block text-right text-xs font-mono text-slateText mt-2">
                  — Carmel Ulrich AIKO
                </span>
              </div>
            </div>

            {/* Direct CV Download CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCvModal}
                className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-charcoal-950 font-sans font-bold text-sm tracking-wide shadow-glow-gold flex items-center gap-3 transition-all btn-magnetic"
              >
                <Download className="w-4 h-4" />
                <span>{t.about.downloadCvBtn}</span>
              </button>

              <a
                href="#contact"
                className="px-7 py-4 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-cream border border-white/10 font-sans font-medium text-sm transition-all btn-magnetic"
              >
                {t.hero.getInTouch}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

