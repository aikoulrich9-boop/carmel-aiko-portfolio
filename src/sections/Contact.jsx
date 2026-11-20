import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, 
  Video, Linkedin, Instagram, Youtube, Download, Sparkles 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const Contact = ({ onOpenCvModal }) => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(biography.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 bg-charcoal-900 border-t border-white/10 overflow-hidden"
    >
      {/* Background radial atmosphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-gold uppercase">
            {t.contact.sectionTag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-cream mt-2 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slateText mt-3 font-serif italic">
            "{t.contact.subtitle}"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Inquiries & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Status Card */}
            <div className="p-6 rounded-[2rem] bg-charcoal-850/80 border border-white/10 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-400 mb-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>BOOKING STATUS</span>
              </div>
              <h3 className="text-lg font-sans font-bold text-cream mb-1">
                {biography.contact.availability[language]}
              </h3>
              <p className="text-xs text-slateText leading-relaxed">
                Interventions en post-production à Paris, déplacements sur tournage en France et à l'international, ou stations distantes sécurisées (Evercast / Frame.io).
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="p-6 rounded-[2rem] bg-charcoal-850/80 border border-white/10 shadow-xl space-y-4">
              <h4 className="text-xs font-mono text-gold uppercase tracking-wider mb-2">
                {t.contact.directContact}
              </h4>

              {/* Email with copy button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-charcoal-900 border border-white/5">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-cream select-all">
                    {biography.contact.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-charcoal-800 text-slateText hover:text-white transition-colors"
                  title={t.contact.copyEmail}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-charcoal-900 border border-white/5 text-xs sm:text-sm font-mono text-cream">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{biography.contact.phone}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-charcoal-900 border border-white/5 text-xs sm:text-sm font-sans text-cream">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>{biography.contact.location}</span>
              </div>
            </div>

            {/* Social Network Pills (Image 1 & 3 style) */}
            <div className="p-6 rounded-[2rem] bg-charcoal-850/80 border border-white/10 shadow-xl">
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
                Portfolios & Réseaux Professionnels
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {biography.contact.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 border border-white/5 hover:border-gold/30 flex items-center gap-2.5 transition-all link-hover"
                  >
                    <span className="text-gold font-mono text-xs font-bold">
                      {social.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono truncate">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={onOpenCvModal}
                  className="w-full py-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-cream border border-white/10 text-xs font-bold flex items-center justify-center gap-2 transition-all btn-magnetic"
                >
                  <Download className="w-4 h-4 text-gold" />
                  <span>{t.nav.downloadCv}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiries Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-charcoal-850 border border-white/10 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-cream">
                    Message transmis
                  </h3>
                  <p className="text-sm text-slateText max-w-md mx-auto">
                    {t.contact.sentSuccess}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slateText mb-2">
                        NOM & PRÉNOM *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border border-white/10 text-cream placeholder-slate-600 focus:outline-none focus:border-gold text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slateText mb-2">
                        ADRESSE COURRIEL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border border-white/10 text-cream placeholder-slate-600 focus:outline-none focus:border-gold text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slateText mb-2">
                      CATÉGORIE DE PROJET
                    </label>
                    <input
                      type="text"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      placeholder={t.contact.projectTypePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border border-white/10 text-cream placeholder-slate-600 focus:outline-none focus:border-gold text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slateText mb-2">
                      VOTRE MESSAGE & CALENDRIER *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-charcoal-900 border border-white/10 text-cream placeholder-slate-600 focus:outline-none focus:border-gold text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gold hover:bg-gold-light text-charcoal-950 font-sans font-bold text-sm tracking-wide shadow-glow-gold flex items-center justify-center gap-2 transition-all btn-magnetic disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.sendingBtn}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.submitBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

