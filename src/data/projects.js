/**
 * Portfolio Projects Data
 * Modular structure prepared for Phase 2 Management System
 */

export const projectCategories = [
  { id: 'all', label: { fr: 'Tous les projets', en: 'All Works' } },
  { id: 'cinema', label: { fr: 'Fiction & Cinéma', en: 'Cinema & Narrative' } },
  { id: 'commercial', label: { fr: 'Publicité & Marque', en: 'Commercials & Brands' } },
  { id: 'documentary', label: { fr: 'Documentaire', en: 'Documentary' } },
  { id: 'music_video', label: { fr: 'Clips & Arts', en: 'Music Video & Art' } },
];

export const projects = [
  {
    id: 'film-l-ombre-du-fleuve',
    title: {
      fr: "L'Ombre du Fleuve",
      en: "Shadow of the River",
    },
    category: 'cinema',
    productionCompany: 'Noir Silence Productions',
    client: 'Canal+ Cinéma / CNC',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Embed-friendly sample URL
    description: {
      fr: "Court-métrage dramatique tourné en 35mm. Travail rigoureux sur la tension narrative, les respirations dramatiques et un montage non-linéaire explorant la mémoire d'un retour aux origines.",
      en: "Dramatic short film shot on 35mm. Rigorous work on narrative tension, dramatic pacing, and non-linear editing exploring memory and homecoming.",
    },
    role: {
      fr: 'Chef Monteur & Post-Superviseur',
      en: 'Lead Editor & Post Supervisor',
    },
    published: true,
    duration: '24 min',
    aspectRatio: '2.39:1 (Cinemascope)',
    tags: ['Fiction', '35mm', 'Narration', 'DaVinci Resolve'],
  },
  {
    id: 'commercial-solaris-chronicles',
    title: {
      fr: 'Solaris — The Sound of Motion',
      en: 'Solaris — The Sound of Motion',
    },
    category: 'commercial',
    productionCompany: 'Apex Motion Lab',
    client: 'Solaris Electric Cars',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Campagne internationale publicitaire axée sur l'aérodynamisme et l'énergie pure. Montage rythmique ultra-précis synchronisé à un sound design hybride électro-organique.",
      en: "International commercial campaign centered on aerodynamics and pure momentum. Ultra-precise rhythmic editing synced to a hybrid electro-organic sound design.",
    },
    role: {
      fr: 'Monteur Image & Sound Design Rythmique',
      en: 'Picture Editor & Rhythmic Sound Design',
    },
    published: true,
    duration: '60 sec',
    aspectRatio: '16:9 / 9:16',
    tags: ['Publicité', 'Rythme', 'Premiere Pro', 'After Effects'],
  },
  {
    id: 'doc-horizons-invisibles',
    title: {
      fr: 'Horizons Invisibles',
      en: 'Invisible Horizons',
    },
    category: 'documentary',
    productionCompany: 'Meraki Documentaries',
    client: 'Arte Creative & TV5 Monde',
    year: 2023,
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Série documentaire immersive suivant les architectes de la terre crue dans le Sahel. Assemblage d'archives, voix-off intimiste et séquences contemplatives en lumière naturelle.",
      en: "Immersive documentary series following earth architects in the Sahel. Archive curation, intimate voice-over pacing, and contemplative sequences in natural light.",
    },
    role: {
      fr: 'Monteur Principal',
      en: 'Senior Documentarian Editor',
    },
    published: true,
    duration: '52 min',
    aspectRatio: '1.85:1',
    tags: ['Documentaire', 'Histoire', 'Archives', 'DaVinci Resolve'],
  },
  {
    id: 'music-echoes-in-the-abyss',
    title: {
      fr: 'Échos dans la Nuit — Femi K.',
      en: 'Echoes in the Abyss — Femi K.',
    },
    category: 'music_video',
    productionCompany: 'Studio 77 Records',
    client: 'Universal Music Africa',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Clip musical poétique à l'esthétique néo-noir. Transitions chromatiques fluides, jeu de vitesse (speed ramps) calculé sur les transitoires percussives et grain cinéma analogique.",
      en: "Poetic neo-noir music video. Fluid chromatic cuts, calculated speed ramps synced to percussion transients, and analog film grain textures.",
    },
    role: {
      fr: 'Monteur & Color Grading',
      en: 'Editor & Color Grading',
    },
    published: true,
    duration: '4 min 12s',
    aspectRatio: '2.00:1',
    tags: ['Clip', 'Néo-Noir', 'VFX', 'Color Grading'],
  },
  {
    id: 'commercial-aero-watchmaking',
    title: {
      fr: 'Maison V. — Haute Horlogerie',
      en: 'Maison V. — Fine Watchmaking',
    },
    category: 'commercial',
    productionCompany: 'Lumière Noire Paris',
    client: 'Maison V. Genève',
    year: 2023,
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Film de marque haute précision célébrant le geste artisanal et l'infiniment petit. Macro-plans minutieusement calibrés sur les pulsations des échappements mécaniques.",
      en: "High-precision brand film celebrating craftsmanship and the microscopic scale. Macro cuts meticulously calibrated to mechanical escapement pulses.",
    },
    role: {
      fr: 'Monteur Image',
      en: 'Picture Editor',
    },
    published: true,
    duration: '90 sec',
    aspectRatio: '16:9',
    tags: ['Luxe', 'Macro', 'Publicité', 'Montage Précision'],
  },
  {
    id: 'film-le-dernier-souffle',
    title: {
      fr: 'Le Dernier Souffle',
      en: 'The Final Breath',
    },
    category: 'cinema',
    productionCompany: 'Cinéastes Associés',
    client: 'Festival de Clermont-Ferrand / Sélection',
    year: 2023,
    thumbnail: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Thriller psychologique en huis-clos nocturne. Construction d'un suspense continu par des coupes imperceptibles et un étirement minutieux de la perception temporelle.",
      en: "Psychological thriller set in an enclosed nighttime space. Suspense sculpted through imperceptible cuts and deliberate stretching of perceived time.",
    },
    role: {
      fr: 'Chef Monteur',
      en: 'Chief Film Editor',
    },
    published: true,
    duration: '18 min',
    aspectRatio: '2.39:1',
    tags: ['Thriller', 'Suspense', 'Cinéma', 'Festival'],
  },
];

