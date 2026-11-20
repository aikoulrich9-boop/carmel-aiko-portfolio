import React from 'react';
import { X, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const VideoModal = ({ project, onClose }) => {
  const { t, language } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080A0D]/90 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#111419] border border-white/15 overflow-hidden z-10 max-h-[92vh] flex flex-col shadow-2xl">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080A0D]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accentBlue" />
            <span className="font-mono text-xs uppercase tracking-widest text-mutedText">
              {project.category} • {project.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-mutedText hover:text-white transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Responsive Video Container (16:9) */}
          <div className="relative w-full aspect-video bg-black border border-white/10">
            {project.videoUrl ? (
              project.videoUrl.endsWith('.mp4') || project.videoUrl.endsWith('.mov') || project.videoUrl.startsWith('/videos/') ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              ) : (
                <iframe
                  src={`${project.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title[language]}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={project.thumbnail}
                  alt={project.title[language]}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-14 h-14 rounded-full border border-white/30 bg-[#080A0D]/80 flex items-center justify-center text-white">
                    <Play className="w-5 h-5 ml-0.5 fill-current text-accentBlue" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-white uppercase tracking-tight">
                {project.title[language]}
              </h2>
              <span className="text-xs font-mono text-accentBlue border border-accentBlue/30 px-2.5 py-1">
                {project.role[language]}
              </span>
            </div>

            <p className="text-mutedText text-xs sm:text-sm leading-relaxed mb-6">
              {project.description[language]}
            </p>

            {/* Production Specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#080A0D] border border-white/5 text-xs font-mono">
              <div>
                <span className="block text-mutedText/60 text-[10px] uppercase mb-1">
                  {t.portfolio.clientLabel}
                </span>
                <span className="text-white">{project.client}</span>
              </div>
              <div>
                <span className="block text-mutedText/60 text-[10px] uppercase mb-1">
                  {t.portfolio.prodLabel}
                </span>
                <span className="text-white">{project.productionCompany}</span>
              </div>
              <div>
                <span className="block text-mutedText/60 text-[10px] uppercase mb-1">
                  {t.portfolio.durationLabel}
                </span>
                <span className="text-white">{project.duration}</span>
              </div>
              <div>
                <span className="block text-mutedText/60 text-[10px] uppercase mb-1">
                  {t.portfolio.aspectLabel}
                </span>
                <span className="text-white">{project.aspectRatio}</span>
              </div>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 text-[10px] font-mono text-mutedText">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-[#080A0D] border border-white/5">
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
