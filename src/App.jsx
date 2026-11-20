import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { CvDownloadModal } from './components/CvDownloadModal';
import { VideoModal } from './components/VideoModal';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Portfolio } from './sections/Portfolio';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export function AppContent() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-charcoal-950 text-cream relative selection:bg-gold selection:text-charcoal-950">
      {/* Global subtle film noise overlay */}
      <div className="bg-noise" />

      {/* Floating Morphing Navbar */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <About onOpenCvModal={() => setCvModalOpen(true)} />
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Skills />
        <Contact onOpenCvModal={() => setCvModalOpen(true)} />
      </main>

      {/* Cinematic Footer */}
      <Footer />

      {/* Dedicated Bilingual CV Download Modal */}
      <CvDownloadModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Cinematic Project Video Modal */}
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

