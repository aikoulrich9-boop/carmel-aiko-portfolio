import React, { createContext, useContext, useState, useEffect } from 'react';
import { fr } from '../locales/fr';
import { en } from '../locales/en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    // 1. Check local storage first
    try {
      const saved = localStorage.getItem('aiko_portfolio_lang');
      if (saved === 'fr' || saved === 'en') return saved;
    } catch (e) {
      // LocalStorage access might fail in private browsing
    }

    // 2. Browser language check as initial suggestion (default to 'fr')
    if (typeof navigator !== 'undefined' && navigator.language) {
      if (navigator.language.toLowerCase().startsWith('en')) {
        return 'en';
      }
    }
    return 'fr';
  });

  const setLanguage = (lang) => {
    if (lang !== 'fr' && lang !== 'en') return;
    setLanguageState(lang);
    try {
      localStorage.setItem('aiko_portfolio_lang', lang);
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }
  };

  const t = language === 'en' ? en : fr;

  // Sync document head and metadata dynamically
  useEffect(() => {
    document.documentElement.lang = language;
    
    // Update Title & Meta Description dynamically
    if (language === 'en') {
      document.title = 'Carmel Ulrich AIKO | Video Editor & Chief Editor';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Professional portfolio of Carmel Ulrich AIKO, Senior Video Editor & Chief Editor specializing in cinema narrative, commercials, documentaries, and post-production supervision.');
      }
    } else {
      document.title = 'Carmel Ulrich AIKO | Monteur Vidéo & Chef Monteur';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Portfolio professionnel de Carmel Ulrich AIKO, Monteur Vidéo et Chef Monteur spécialisé en cinéma, fiction, publicité, documentaires et clips vidéo. Direction de post-production.');
      }
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

