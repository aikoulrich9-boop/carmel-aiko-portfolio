import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { CvDownloadModal } from './components/CvDownloadModal';
import { VideoModal } from './components/VideoModal';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Resume } from './sections/Resume';
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export function AppContent() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#080A0D] text-white relative selection:bg-accentBlue selection:text-white font-sans antialiased">
      {/* Top Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Editorial Sections */}
      <main>
        {/* Section 01: Hero / Home (Screenshot 1) */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Section 02: About (Screenshot 2) */}
        <About />

        {/* Section 03: Resume / Profile - 3 Columns (Screenshot 3) */}
        <Resume />

        {/* Section 04: Portfolio / Selected Works */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 05: Contact & Inquiries */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Bilingual CV Download Modal */}
      <CvDownloadModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Cinematic Video Player Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
