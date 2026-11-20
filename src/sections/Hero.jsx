import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Film, Play, Download, Sparkles, Video, ArrowDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const Hero = ({ onOpenCvModal }) => {
  const { t, language } = useLanguage();
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.15,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-charcoal-950 pt-24 pb-16 px-4 sm:px-6"
    >
      {/* Cinematic Ambient Background Overlay & Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter saturate-50 contrast-125 scale-105 pointer-events-none transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      {/* Radial Dark Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#07070a_85%)] pointer-events-none" />

      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[35rem] h-[20rem] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cinema-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Profile Circle / Avatar Badge (120-140px) */}
        <div className="hero-animate mb-6 relative group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-gold via-white/20 to-cinema-cyan/40 shadow-glow-gold">
            <div className="w-full h-full rounded-full overflow-hidden bg-charcoal-850 flex items-center justify-center relative">
              {/* Monogram / Portrait Avatar */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                alt="Carmel Ulrich AIKO"
                className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle status indicator */}
              <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-charcoal-900 shadow-sm" title="Available for bookings" />
            </div>
          </div>
        </div>

        {/* Status Pill Badge */}
        <div className="hero-animate inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal-850/80 border border-gold/30 text-gold text-xs font-mono uppercase tracking-widest mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span>{t.hero.greeting}</span>
        </div>

        {/* Massive Bold Name */}
        <h1 className="hero-animate text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-white uppercase leading-[1.05] max-w-4xl">
          CARMEL ULRICH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold-light to-gold">AIKO</span>
        </h1>

        {/* Dramatic Serif Italic Subtitle */}
        <p className="hero-animate mt-3 text-xl sm:text-2xl md:text-3xl font-serif italic text-gold font-medium tracking-wide">
          {biography.title[language]}
        </p>

        {/* Audiovisual Discipline Tags */}
        <p className="hero-animate text-xs sm:text-sm font-mono text-slateText mt-2 tracking-wider uppercase">
          {biography.subtitle[language]}
        </p>

        {/* Stats Row in Monospace */}
        <div className="hero-animate grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 my-8 max-w-3xl w-full p-4 sm:p-5 rounded-3xl bg-charcoal-900/60 border border-white/10 backdrop-blur-md">
          {biography.stats.map((stat, idx) => (
            <div key={idx} className="text-center px-2">
              <span className="block text-2xl sm:text-3xl font-mono font-bold text-cream">
                {stat.value}
              </span>
              <span className="block text-[11px] sm:text-xs font-mono text-slateText tracking-tight uppercase mt-0.5">
                {stat.label[language]}
              </span>
            </div>
          ))}
        </div>

        {/* Dual CTAs & Actions */}
        <div className="hero-animate flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-7 py-3.5 rounded-full bg-gold hover:bg-gold-light text-charcoal-950 font-sans font-bold text-sm tracking-wide shadow-glow-gold flex items-center gap-2.5 transition-all btn-magnetic"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{t.hero.watchShowreel}</span>
          </a>

          <button
            onClick={onOpenCvModal}
            className="px-7 py-3.5 rounded-full bg-charcoal-850 hover:bg-charcoal-800 text-cream border border-white/20 hover:border-gold/50 font-sans font-semibold text-sm tracking-wide flex items-center gap-2.5 transition-all btn-magnetic"
          >
            <Download className="w-4 h-4 text-gold" />
            <span>{t.nav.downloadCv}</span>
          </button>
        </div>

        {/* Quick Social Channels Row (Image 1 style) */}
        <div className="hero-animate flex items-center gap-5 mt-10 text-slateText text-xs font-mono">
          <span className="text-slate-500 uppercase tracking-widest hidden sm:inline">Channels:</span>
          {biography.contact.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors link-hover uppercase tracking-wider flex items-center gap-1"
            >
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="hero-animate mt-12 flex flex-col items-center gap-1.5 text-slate-500 hover:text-gold transition-colors text-xs font-mono"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
};

