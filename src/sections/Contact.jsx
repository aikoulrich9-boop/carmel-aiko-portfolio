import React, { useState } from 'react';
import { Send, Check, Copy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { biography } from '../data/biography';

export const Contact = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(biography.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#080A0D] py-24 sm:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Identity & Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-accentBlue uppercase block mb-1">
                {language === 'fr' ? 'COLLABORATION & BOOKING' : 'COLLABORATION & BOOKING'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-widest text-white uppercase">
                {language === 'fr' ? 'CONTACTEZ-MOI' : 'GET IN TOUCH'}
              </h2>
              <p className="text-mutedText text-sm sm:text-base mt-4 font-normal leading-relaxed">
                {language === 'fr'
                  ? 'Pour tout projet de fiction, publicité ou documentaire, contactez-moi directement pour échanger sur vos délais et vos ambitions créatives.'
                  : 'For film narratives, commercial campaigns, or documentary commissions, reach out directly to discuss schedules and creative vision.'}
              </p>
            </div>

            {/* Direct details */}
            <div className="space-y-4 pt-4 border-t border-white/5 font-mono text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-mutedText uppercase tracking-wider">Email</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${biography.contact.email}`}
                    className="text-white hover:text-accentBlue transition-colors"
                  >
                    {biography.contact.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-mutedText hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-accentBlue" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-mutedText uppercase tracking-wider">
                  {language === 'fr' ? 'Téléphone' : 'Phone'}
                </span>
                <a
                  href={`tel:${biography.contact.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-accentBlue transition-colors"
                >
                  {biography.contact.phone}
                </a>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-mutedText uppercase tracking-wider">
                  {language === 'fr' ? 'Localisation' : 'Location'}
                </span>
                <span className="text-white">{biography.contact.location}</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center space-x-6 text-xs font-mono text-mutedText pt-2">
              {biography.contact.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accentBlue uppercase tracking-wider transition-colors text-[11px]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Minimalist Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#111419] border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full border border-accentBlue text-accentBlue flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-sans font-bold text-white uppercase tracking-wider">
                    {language === 'fr' ? 'Message Transmis' : 'Message Sent'}
                  </h4>
                  <p className="text-xs font-mono text-mutedText">
                    {language === 'fr' ? 'Je vous répondrai dans les plus brefs délais.' : 'I will get back to you promptly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-mutedText mb-2">
                      {language === 'fr' ? 'NOM COMPLET *' : 'FULL NAME *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#080A0D] border border-white/15 px-4 py-3 text-white text-xs font-mono focus:outline-none focus:border-accentBlue transition-colors"
                      placeholder="Carmel Ulrich"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-mutedText mb-2">
                      {language === 'fr' ? 'COURRIEL *' : 'EMAIL ADDRESS *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080A0D] border border-white/15 px-4 py-3 text-white text-xs font-mono focus:outline-none focus:border-accentBlue transition-colors"
                      placeholder="client@production.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-mutedText mb-2">
                      {language === 'fr' ? 'MESSAGE *' : 'MESSAGE *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#080A0D] border border-white/15 px-4 py-3 text-white text-xs font-mono focus:outline-none focus:border-accentBlue transition-colors resize-none"
                      placeholder={language === 'fr' ? 'Décrivez votre projet, vos dates de tournage ou de post-prod...' : 'Share your project scope, timeline, and requirements...'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 btn-editorial-outline text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>{language === 'fr' ? 'Envoyer le message' : 'Send Message'}</span>
                    <Send className="w-3.5 h-3.5" />
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
