import React from 'react';
import { X, FileText, Download, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const CvDownloadModal = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const cvFiles = biography.cvFiles;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080A0D]/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#111419] border border-white/15 p-6 sm:p-8 z-10 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-accentBlue uppercase block mb-1">
              CURRICULUM VITAE • PDF
            </span>
            <h3 className="text-xl font-sans font-bold text-white uppercase tracking-wider">
              {t.cvModal.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-mutedText hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options Grid */}
        <div className="space-y-4 my-6">
          {/* French Edition */}
          <div className="p-4 bg-[#080A0D] border border-white/10 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-accentBlue uppercase tracking-wider block">
                FRANÇAIS
              </span>
              <h4 className="text-sm font-sans font-bold text-white mt-0.5">
                {t.cvModal.frVersionTitle}
              </h4>
              <p className="text-[11px] text-mutedText mt-0.5">
                {t.cvModal.frVersionDesc}
              </p>
            </div>
            <a
              href={cvFiles.fr.path}
              download={cvFiles.fr.filename}
              className="px-4 py-2 btn-editorial-outline text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.cvModal.downloadAction}</span>
            </a>
          </div>

          {/* English Edition */}
          <div className="p-4 bg-[#080A0D] border border-white/10 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-accentBlue uppercase tracking-wider block">
                ENGLISH
              </span>
              <h4 className="text-sm font-sans font-bold text-white mt-0.5">
                {t.cvModal.enVersionTitle}
              </h4>
              <p className="text-[11px] text-mutedText mt-0.5">
                {t.cvModal.enVersionDesc}
              </p>
            </div>
            <a
              href={cvFiles.en.path}
              download={cvFiles.en.filename}
              className="px-4 py-2 btn-editorial-outline text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.cvModal.downloadAction}</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-mutedText">
          <span className="flex items-center gap-1.5 text-[11px]">
            <Check className="w-3.5 h-3.5 text-accentBlue" />
            PDF Verified • 2026
          </span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors uppercase tracking-wider text-[11px]"
          >
            {t.cvModal.cancel}
          </button>
        </div>

      </div>
    </div>
  );
};
