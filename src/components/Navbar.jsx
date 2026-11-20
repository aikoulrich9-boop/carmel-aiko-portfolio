import React, { useState, useEffect } from 'react';
import { Download, Globe, Menu, X, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = ({ onOpenCvModal }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-6xl transition-all duration-500 rounded-full ${
          isScrolled
            ? 'bg-charcoal-900/85 backdrop-blur-xl border border-white/10 shadow-2xl py-2.5 px-4 sm:px-6'
            : 'bg-transparent py-4 px-3 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Carmel Ulrich AIKO Home"
          >
            <div className="w-8 h-8 rounded-full bg-charcoal-800 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal-950 transition-all duration-300">
              <Film className="w-4 h-4" />
            </div>
            <span className="font-sans font-bold tracking-tight text-sm sm:text-base text-cream">
              AIKO<span className="text-gold">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs lg:text-sm font-sans font-medium text-slateText hover:text-white transition-colors link-hover"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Selector + CV Button */}
          <div className="flex items-center gap-3">
            {/* Minimalist Language Switcher FR | EN */}
            <div className="flex items-center bg-charcoal-800/80 border border-white/10 rounded-full p-1 text-xs font-mono">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'fr'
                    ? 'bg-gold text-charcoal-950 font-bold shadow-sm'
                    : 'text-slateText hover:text-white'
                }`}
                aria-label="Switch to French"
              >
                FR
              </button>
              <span className="text-white/20 select-none">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-gold text-charcoal-950 font-bold shadow-sm'
                    : 'text-slateText hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Download CV Button */}
            <button
              onClick={onOpenCvModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 hover:bg-gold text-gold hover:text-charcoal-950 border border-gold/40 text-xs font-bold transition-all duration-300 btn-magnetic"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.nav.downloadCv}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-charcoal-800 text-slateText hover:text-white border border-white/10"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-charcoal-950/95 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-10 animate-fadeIn">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-sans font-medium text-cream hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full max-w-xs py-3 rounded-full bg-gold text-charcoal-950 text-sm font-bold flex items-center justify-center gap-2 shadow-glow-gold"
              >
                <Download className="w-4 h-4" />
                <span>{t.nav.downloadCv}</span>
              </button>
            </div>
          </div>

          <div className="text-center font-mono text-xs text-slateText">
            Carmel Ulrich AIKO • {t.nav.selectCvLanguage}
          </div>
        </div>
      )}
    </>
  );
};

