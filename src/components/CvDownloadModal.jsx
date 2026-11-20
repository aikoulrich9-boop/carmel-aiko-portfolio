import React from 'react';
import { X, FileText, Download, CheckCircle, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const CvDownloadModal = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const cvFiles = biography.cvFiles;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn">
      {/* Modal backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-charcoal-900 border border-white/10 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>PDF FORMAT • 2026</span>
            </div>
            <h3 className="text-2xl font-sans font-bold text-cream">
              {t.cvModal.title}
            </h3>
            <p className="text-slateText text-sm mt-1">
              {t.cvModal.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-charcoal-800 text-slateText hover:text-white hover:bg-charcoal-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {/* French CV Card */}
          <div className={`p-5 rounded-3xl border transition-all ${
            language === 'fr' 
              ? 'bg-charcoal-800/90 border-gold/40 shadow-glow-gold' 
              : 'bg-charcoal-800/50 border-white/5 hover:border-white/20'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-semibold text-gold uppercase tracking-wider">
                FRANÇAIS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slateText">
                PDF
              </span>
            </div>
            <h4 className="font-sans font-semibold text-white text-base mb-1">
              {t.cvModal.frVersionTitle}
            </h4>
            <p className="text-xs text-slateText mb-4 line-clamp-2">
              {t.cvModal.frVersionDesc}
            </p>
            <a
              href={cvFiles.fr.path}
              download={cvFiles.fr.filename}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gold text-charcoal-950 text-xs font-bold hover:bg-gold-light transition-all btn-magnetic"
            >
              <Download className="w-4 h-4" />
              <span>{t.cvModal.downloadAction}</span>
            </a>
          </div>

          {/* English CV Card */}
          <div className={`p-5 rounded-3xl border transition-all ${
            language === 'en' 
              ? 'bg-charcoal-800/90 border-gold/40 shadow-glow-gold' 
              : 'bg-charcoal-800/50 border-white/5 hover:border-white/20'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-semibold text-gold uppercase tracking-wider">
                ENGLISH
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slateText">
                PDF
              </span>
            </div>
            <h4 className="font-sans font-semibold text-white text-base mb-1">
              {t.cvModal.enVersionTitle}
            </h4>
            <p className="text-xs text-slateText mb-4 line-clamp-2">
              {t.cvModal.enVersionDesc}
            </p>
            <a
              href={cvFiles.en.path}
              download={cvFiles.en.filename}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-charcoal-700 hover:bg-charcoal-600 text-cream border border-white/10 text-xs font-bold transition-all btn-magnetic"
            >
              <Download className="w-4 h-4 text-gold" />
              <span>{t.cvModal.downloadAction}</span>
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-slateText">
          <span className="flex items-center gap-1.5 font-mono">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            Vérifié & à jour (2026)
          </span>
          <button
            onClick={onClose}
            className="text-xs hover:text-white transition-colors"
          >
            {t.cvModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
};

