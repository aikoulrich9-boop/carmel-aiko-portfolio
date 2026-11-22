import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const Hero = ({ onOpenCvModal }) => {
  const { language, t } = useLanguage();
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-[100dvh] min-h-[640px] flex items-center bg-[#080A0D] overflow-hidden select-none"
    >
      {/* Photographic Cinematic Background with 50% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-50 transition-opacity duration-700"
        style={{
          backgroundImage: `url('/images/carmel-aiko-hero.jpg')`,
        }}
      />

      {/* Dark Cinematic Vignette & Gradient Overlays (preserving contrast for text) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-[#080A0D]/75 to-transparent w-full md:w-3/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-[#080A0D]/40 pointer-events-none" />

      {/* Main Content (Left Aligned as in Screenshot 1) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-between h-full py-28 md:py-32">
        
        {/* Empty top spacer to balance layout */}
        <div />

        {/* Identity & Main Typography */}
        <div className="max-w-2xl">
          {/* Main Name in Bold Uppercase Typography */}
          <div className="hero-fade">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white uppercase leading-[0.95]">
              CARMEL
              <span className="block font-light text-white/90">
                AIKO
              </span>
            </h1>
          </div>

          {/* Professional Title in smaller, elegant font with tracking */}
          <div className="hero-fade mt-4">
            <p className="text-sm sm:text-base font-sans tracking-widest text-mutedText uppercase font-light">
              {biography.title[language]}
            </p>
          </div>

          {/* Minimalist Outlined Buttons: Resume & Portfolio */}
          <div className="hero-fade flex items-center gap-4 mt-8">
            <button
              onClick={onOpenCvModal}
              className="px-8 py-2.5 rounded-full btn-editorial-outline text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            >
              {language === 'fr' ? 'CV' : 'Resume'}
            </button>

            <a
              href="#portfolio"
              className="px-8 py-2.5 rounded-full btn-editorial-outline text-xs uppercase tracking-widest font-semibold transition-all duration-300"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Bottom Bar: Social Icons (Bottom-Left) */}
        <div className="hero-fade flex items-center justify-between pt-8 border-t border-white/5">
          <div className="flex items-center space-x-6 text-xs text-mutedText font-mono">
            {biography.contact.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accentBlue transition-colors uppercase tracking-widest text-[11px]"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="hidden sm:block text-[11px] font-mono text-mutedText/60 tracking-widest uppercase">
            {biography.subtitle[language].split('•')[0]}
          </div>
        </div>

      </div>
    </section>
  );
};
