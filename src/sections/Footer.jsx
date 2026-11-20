import React from 'react';
import { ArrowUp, Film, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-charcoal-950 rounded-t-[3rem] sm:rounded-t-[4rem] border-t border-white/10 pt-16 pb-12 px-6 sm:px-12 text-slateText relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-charcoal-900 border border-gold/40 flex items-center justify-center text-gold shadow-sm">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans font-bold text-cream text-lg tracking-tight block">
                {biography.name}
              </span>
              <span className="font-mono text-xs text-slate-500">
                Monteur Vidéo & Chef Monteur
              </span>
            </div>
          </div>

          {/* Online Pulsing Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-900 border border-white/10 text-xs font-mono">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-slate-300 font-semibold">{t.footer.statusOnline}</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-xs font-mono text-slateText hover:text-white transition-colors border border-white/5"
            aria-label="Back to top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <p>
            © {new Date().getFullYear()} {biography.name}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-1.5">
            <span>{t.footer.craftedWith}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

