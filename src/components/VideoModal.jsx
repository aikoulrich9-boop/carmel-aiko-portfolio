import React from 'react';
import { X, Play, Clock, Film, Award, ShieldCheck, Tag, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const VideoModal = ({ project, onClose }) => {
  const { t, language } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-950/90 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-charcoal-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-charcoal-950/50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-gold font-semibold">
              {project.category.toUpperCase()} • {project.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-charcoal-800 text-slateText hover:text-white hover:bg-charcoal-700 transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Responsive Video Container (16:9 / 2.39:1) */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl">
            {/* If project has an embed URL, display iframe, else poster with play indicator */}
            {project.videoUrl ? (
              <iframe
                src={`${project.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={project.title[language]}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={project.thumbnail}
                  alt={project.title[language]}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-gold/90 text-charcoal-950 flex items-center justify-center shadow-glow-gold">
                    <Play className="w-7 h-7 ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-cream">
                {project.title[language]}
              </h2>
              <span className="px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-mono font-medium">
                {project.role[language]}
              </span>
            </div>

            <p className="text-slateText text-sm sm:text-base leading-relaxed mb-6">
              {project.description[language]}
            </p>

            {/* Production Specifications Bento Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-charcoal-850 border border-white/5 text-xs">
              <div>
                <span className="block text-slate-500 font-mono mb-1">{t.portfolio.clientLabel}</span>
                <span className="font-semibold text-white">{project.client}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono mb-1">{t.portfolio.prodLabel}</span>
                <span className="font-semibold text-white">{project.productionCompany}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono mb-1">{t.portfolio.durationLabel}</span>
                <span className="font-semibold text-white">{project.duration}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono mb-1">{t.portfolio.aspectLabel}</span>
                <span className="font-semibold text-white">{project.aspectRatio}</span>
              </div>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-charcoal-800 text-slateText text-[11px] font-mono border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

