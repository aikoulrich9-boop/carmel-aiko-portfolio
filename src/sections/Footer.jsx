import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const Footer = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#080A0D] border-t border-white/10 py-12 px-6 sm:px-12 text-mutedText text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity & Rights */}
        <div>
          <span className="text-white font-bold tracking-wider uppercase mr-2">
            {biography.name}
          </span>
          <span className="text-mutedText/60">
            — © {new Date().getFullYear()} • {language === 'fr' ? 'Tous droits réservés.' : 'All Rights Reserved.'}
          </span>
        </div>

        {/* Center: Online Status Indicator */}
        <div className="flex items-center gap-2 text-[11px] text-mutedText">
          <span className="w-1.5 h-1.5 rounded-full bg-accentBlue" />
          <span>{biography.contact.availability[language]}</span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-mutedText hover:text-white transition-colors tracking-widest uppercase text-[11px]"
          aria-label="Back to top"
        >
          <span>{language === 'fr' ? 'Haut de page' : 'Top'}</span>
          <ArrowUp className="w-3.5 h-3.5 text-accentBlue" />
        </button>

      </div>
    </footer>
  );
};
