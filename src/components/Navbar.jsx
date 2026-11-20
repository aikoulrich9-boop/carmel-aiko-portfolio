import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const Navbar = ({ onOpenCvModal }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: language === 'fr' ? 'Accueil' : 'Home', href: '#home' },
    { id: 'about', label: language === 'fr' ? 'À Propos' : 'About', href: '#about' },
    { id: 'resume', label: language === 'fr' ? 'CV & Profil' : 'Resume', href: '#resume' },
    { id: 'portfolio', label: language === 'fr' ? 'Portfolio' : 'Portfolio', href: '#portfolio' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080A0D]/90 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Left Navigation: Home / About / Resume / Portfolio */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest transition-colors font-medium ${
                    isActive
                      ? 'text-accentBlue'
                      : 'text-mutedText hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile brand/toggle */}
          <div className="md:hidden flex items-center gap-3">
            <span className="text-sm font-bold tracking-widest text-white uppercase">
              CARMEL AIKO
            </span>
          </div>

          {/* Right: Contact & Language Toggle */}
          <div className="flex items-center space-x-6 text-xs text-mutedText">
            {/* Phone or Direct Contact (Screenshot 1 Top-Right detail) */}
            <a
              href={`tel:${biography.contact.phone.replace(/\s+/g, '')}`}
              className="hidden sm:inline-block font-mono text-[11px] tracking-wider text-mutedText hover:text-white transition-colors"
            >
              {biography.contact.phone}
            </a>

            {/* Subtle separator */}
            <span className="hidden sm:inline-block text-white/20">|</span>

            {/* Minimal Language Switcher FR | EN */}
            <div className="flex items-center space-x-1.5 font-mono text-xs">
              <button
                onClick={() => setLanguage('fr')}
                className={`transition-colors uppercase tracking-wider ${
                  language === 'fr' ? 'text-accentBlue font-semibold' : 'text-mutedText hover:text-white'
                }`}
                aria-label="Version Française"
              >
                FR
              </button>
              <span className="text-white/20 select-none">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors uppercase tracking-wider ${
                  language === 'en' ? 'text-accentBlue font-semibold' : 'text-mutedText hover:text-white'
                }`}
                aria-label="English Version"
              >
                EN
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-mutedText hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#080A0D]/95 backdrop-blur-xl flex flex-col justify-center px-8 space-y-8 animate-fadeIn">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl uppercase tracking-widest font-medium ${
                  activeSection === link.id ? 'text-accentBlue' : 'text-mutedText hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="py-3 px-6 rounded-full btn-editorial-outline text-xs uppercase tracking-widest font-semibold text-center"
            >
              {language === 'fr' ? 'Télécharger CV (PDF)' : 'Download Resume (PDF)'}
            </button>

            <span className="font-mono text-xs text-mutedText">
              {biography.contact.email} • {biography.contact.phone}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
