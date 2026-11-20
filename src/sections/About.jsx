import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
  }, []);

  const manifesto = biography.manifesto[language];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-[90vh] bg-[#080A0D] py-24 sm:py-32 flex items-center overflow-hidden border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: ABOUT Heading, Email, Bio Text & Location (6 or 7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between z-10">
            <div>
              {/* Heading */}
              <h2 className="about-reveal text-2xl sm:text-3xl font-sans font-bold tracking-widest text-white uppercase mb-2">
                {language === 'fr' ? 'À PROPOS' : 'ABOUT'}
              </h2>

              {/* Email underneath heading (as in Screenshot 2) */}
              <div className="about-reveal mb-8">
                <a
                  href={`mailto:${biography.contact.email}`}
                  className="font-mono text-xs sm:text-sm text-accentBlue hover:underline transition-all tracking-wider"
                >
                  {biography.contact.email}
                </a>
              </div>

              {/* Biography Paragraphs */}
              <div className="about-reveal space-y-5 max-w-xl text-mutedText text-sm sm:text-base leading-relaxed font-normal">
                <p className="text-white font-medium text-base sm:text-lg leading-snug">
                  {manifesto.lead}
                </p>

                {manifesto.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-mutedText">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom Location Indicator (as in Screenshot 2: "Florida, Orlando / 12529 State Road...") */}
            <div className="about-reveal mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-mutedText/80">
              <div>
                <span className="block text-white uppercase tracking-wider text-[11px] font-semibold">
                  {biography.contact.location}
                </span>
                <span className="text-mutedText text-[11px]">
                  {biography.contact.availability[language]}
                </span>
              </div>

              <div className="mt-2 sm:mt-0 text-[11px] text-accentBlue font-medium">
                8+ {language === 'fr' ? "ans d'expérience" : "years experience"}
              </div>
            </div>
          </div>

          {/* Right Column: Large Photographic Portrait (Seamlessly Blended) */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none h-[480px] sm:h-[580px] lg:h-[640px] overflow-hidden">
              {/* The Portrait Image */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="Carmel Ulrich AIKO"
                className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-90 transition-transform duration-1000 hover:scale-105"
              />

              {/* Cinematic Vignette & Edge Blend (Fades seamlessly into #080A0D) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D] via-transparent to-transparent opacity-95 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D] via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
