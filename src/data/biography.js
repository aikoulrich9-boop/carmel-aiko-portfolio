/**
 * Biography & Personal Information Data
 * Centralized data file prepared for Phase 2 Management System
 */

export const biography = {
  name: 'Carmel Ulrich AIKO',
  shortName: 'Carmel AIKO',
  title: {
    fr: 'Monteur Vidéo & Chef Monteur',
    en: 'Video Editor & Chief Editor',
  },
  subtitle: {
    fr: 'Cinéma • Publicité • Documentaire • Direction de Post-Production',
    en: 'Cinema • Commercials • Documentary • Post-Production Direction',
  },
  tagline: {
    fr: 'Sculpter le temps, révéler l’émotion, orchestrer le rythme.',
    en: 'Sculpting time, revealing emotion, orchestrating narrative rhythm.',
  },
  stats: [
    { value: '8+', label: { fr: "Années d'expérience", en: 'Years Experience' } },
    { value: '120+', label: { fr: 'Projets finalisés', en: 'Delivered Projects' } },
    { value: '15+', label: { fr: 'Sélections & Prix', en: 'Festival Selections' } },
    { value: '100%', label: { fr: 'Rigueur & Passion', en: 'Commitment & Craft' } },
  ],
  manifesto: {
    fr: {
      lead: "Le montage n'est pas une simple succession de coupes mécaniques : c'est la véritable écriture finale du film.",
      paragraphs: [
        "Depuis plus de 8 ans, j'accompagne réalisateurs, marques internationales et producteurs dans la concrétisation de leur vision artistique. Mon travail s'articule autour de l'écoute fine du récit, de la recherche du tempo invisible et de l'harmonie symbiotique entre l'image et l'univers sonore.",
        "De la fiction intimiste aux campagnes publicitaires percutantes, chaque plan est pesé pour générer un impact mémorable. Ma maîtrise approfondie de la chaîne de post-production (de l'assemblage narratif à l'étalonnage ACES et au mastering broadcast) garantit une exécution sans compromis technique ni esthétique."
      ],
      quote: "Une bonne coupe ne se remarque pas ; elle se ressent.",
    },
    en: {
      lead: "Editing is never just a mechanical succession of cuts: it is the definitive rewriting of the film.",
      paragraphs: [
        "For over 8 years, I have collaborated alongside visionary directors, global brands, and independent producers to breathe life into their cinematic intent. My craft centers on deep narrative listening, sculpting invisible tempo, and orchestrating seamless symbiosis between imagery and sound.",
        "From intimate festival narrative shorts to high-octane international commercial films, every frame is weighed to achieve visceral impact. My comprehensive command over the post pipeline (from initial assembly to ACES color conform and final broadcast delivery) ensures uncompromising artistic integrity and technical mastery."
      ],
      quote: "A great cut is not observed; it is felt.",
    },
  },
  contact: {
    email: 'contact@carmel-aiko.com',
    phone: '+33 6 00 00 00 00', // Clear placeholder formatted elegantly
    location: 'Paris, France / International (Remote & On-set)',
    availability: {
      fr: 'Disponible pour collaborations & projets 2026',
      en: 'Available for international bookings & commissions 2026',
    },
    socials: [
      { name: 'Vimeo', url: 'https://vimeo.com', icon: 'video', handle: '@carmelaiko' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', handle: 'Carmel Ulrich AIKO' },
      { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram', handle: '@carmel.aiko' },
      { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube', handle: '@CarmelAikoEdit' },
    ],
  },
  cvFiles: {
    fr: {
      filename: 'CV-Carmel-Ulrich-AIKO-FR.pdf',
      path: '/documents/cv-carmel-ulrich-aiko-fr.pdf',
      label: 'Télécharger CV (Français)',
    },
    en: {
      filename: 'CV-Carmel-Ulrich-AIKO-EN.pdf',
      path: '/documents/cv-carmel-ulrich-aiko-en.pdf',
      label: 'Download Resume (English)',
    },
  },
};

