/**
 * Portfolio Projects Data
 * Authentic Productions & Collaborations — Carmel Ulrich AIKO
 */

export const projectCategories = [
  { id: 'all', label: { fr: 'Tous les projets', en: 'All Works' } },
  { id: 'commercial', label: { fr: 'Publicité & Marques', en: 'Commercials & Brands' } },
  { id: 'cinema', label: { fr: 'Fictions & Séries', en: 'Cinema & Series' } },
  { id: 'institutional', label: { fr: 'Institutionnel & Campagnes', en: 'Institutional & Campaigns' } },
  { id: 'digital', label: { fr: 'Réseaux Sociaux & Événements', en: 'Digital & Events' } },
];

export const projects = [
  {
    id: 'celtis-benin-commercial',
    title: {
      fr: 'Celtis Bénin — Campagnes Publicitaires Télécom',
      en: 'Celtis Benin — Telecom Commercial Campaigns',
    },
    category: 'commercial',
    productionCompany: 'Boss Playa International',
    client: 'Celtis Bénin',
    year: 2026,
    thumbnail: '/images/celtis-benin-thumbnail.jpg',
    videoUrl: '/videos/celtis-benin-master.mp4',
    description: {
      fr: "Montage de spots publicitaires télévisés et digitaux pour l'opérateur Celtis Bénin en collaboration avec Boss Playa International. Découpage dynamique, rythme calibré et habillage visuel.",
      en: "Broadcast and digital commercial editing for telecom provider Celtis Benin in partnership with Boss Playa International. High-energy cuts, brand pacing, and graphics.",
    },
    role: {
      fr: 'Monteur Vidéo',
      en: 'Video Editor',
    },
    published: true,
    duration: '46 sec',
    aspectRatio: '16:9 (Full HD 1080p)',
    tags: ['Publicité', 'Télécom', 'Celtis Bénin', 'Boss Playa', 'Premiere Pro'],
  },
  {
    id: 'arc-en-ciel-productions-mali',
    title: {
      fr: 'Arc-en-ciel Films — Séries & Fictions TV Mali',
      en: 'Arc-en-ciel Films — TV Series & Narrative Films',
    },
    category: 'cinema',
    productionCompany: 'Arc-en-ciel Films',
    client: 'Chaînes Télévisées & Diffuseurs Régionaux',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Supervision complète du montage des productions audiovisuelles d'Arc-en-ciel Films : séries télévisées, longs métrages et courts métrages. Coordination de l'équipe de monteurs et respect des exigences de diffusion.",
      en: "Chief editorial direction across all Arc-en-ciel Films productions in Mali: television series, narrative features, and short films. Crew supervision and broadcast delivery conform.",
    },
    role: {
      fr: 'Chef Monteur & Superviseur Postproduction',
      en: 'Chief Video Editor & Post Supervisor',
    },
    published: true,
    duration: 'Série 26 min & Formats longs',
    aspectRatio: '16:9 / 2.39:1',
    tags: ['Chef Monteur', 'Séries TV', 'Fiction', 'Mali', 'Arc-en-ciel Films'],
  },
  {
    id: 'campagne-electorale-ci-2025',
    title: {
      fr: 'Campagne Électorale Côte d’Ivoire 2025',
      en: 'Ivory Coast Electoral Campaign 2025',
    },
    category: 'institutional',
    productionCompany: 'Boss Playa International',
    client: 'Communication Politique & Institutionnelle',
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Participation au montage de contenus audiovisuels à forte visibilité pour la campagne électorale en Côte d’Ivoire. Assemblage de discours, capsules percutantes et déclinaisons multi-formats pour les réseaux sociaux.",
      en: "Lead editing participation on high-stakes political and institutional campaign videos for the 2025 Ivory Coast election. Rapid speech cutting and multi-platform digital deliverables.",
    },
    role: {
      fr: 'Monteur Vidéo',
      en: 'Video Editor',
    },
    published: true,
    duration: 'Capsules 60s à 3 min',
    aspectRatio: '16:9 & 9:16',
    tags: ['Institutionnel', 'Politique', 'Côte d’Ivoire', 'Social Media'],
  },
  {
    id: 'film-incompris-kokpemedji',
    title: {
      fr: 'Film « INCOMPRIS » — Jaress Kokpémèdji',
      en: '"INCOMPRIS" Feature Film — Jaress Kokpémèdji',
    },
    category: 'cinema',
    productionCompany: 'Production Cinéma Bénin',
    client: 'Festival & Sortie Cinéma',
    year: 2018,
    thumbnail: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Assistant monteur sur le projet de film « INCOMPRIS » du réalisateur Jaress Kokpémèdji. Dérushage, organisation des timelines et pré-montage des séquences de fiction.",
      en: "Assistant editor on the narrative film 'INCOMPRIS' directed by Jaress Kokpémèdji. Rushes logging, project structuring, and initial scene assembly.",
    },
    role: {
      fr: 'Assistant Monteur',
      en: 'Assistant Editor',
    },
    published: true,
    duration: 'Format Fiction',
    aspectRatio: '2.39:1',
    tags: ['Cinéma', 'Fiction', 'Assistant Monteur', 'Bénin'],
  },
  {
    id: 'suny-purchase-isma',
    title: {
      fr: 'Projet SUNY Purchase USA & ISMA',
      en: 'SUNY Purchase College USA & ISMA Co-Production',
    },
    category: 'institutional',
    productionCompany: 'ISMA Bénin & Purchase College USA',
    client: 'Coopération Audiovisuelle Internationale',
    year: 2019,
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: {
      fr: "Projet de coopération audiovisuelle internationale mené conjointement par l'Institut Supérieur des Métiers de l'Audiovisuel (ISMA) et Purchase College State University of New York (USA).",
      en: "International collaborative media production conducted jointly by the Higher Institute of Audiovisual Professions (ISMA) and SUNY Purchase College (USA).",
    },
    role: {
      fr: 'Assistant Monteur',
      en: 'Assistant Editor',
    },
    published: true,
    duration: 'Documentaire & Débats',
    aspectRatio: '16:9',
    tags: ['International', 'SUNY Purchase USA', 'ISMA', 'Bénin'],
  },
  {
    id: 'focus-films-evenementiel',
    title: {
      fr: 'Focus Films — Le Grand Rendez-Vous de la Sape & Événements',
      en: 'Focus Films — "Le Grand Rendez-Vous de la Sape" & Live Events',
    },
    category: 'digital',
    productionCompany: 'Focus Films',
    client: 'Particuliers, Entreprises & Institutions',
    year: 2022,
    thumbnail: '/images/focus-films-thumbnail.jpg',
    videoUrl: '/videos/focus-films-scp1.mp4',
    description: {
      fr: "Captation et montage de grands événements pour Focus Films à Cotonou, incluant le prestigieux événement « Le Grand Rendez-Vous de la Sape » (2022). Cadrage, mise en lumière et postproduction dynamique.",
      en: "Camera operation and dynamic editing for premier events with Focus Films in Cotonou, including the prestigious 'Le Grand Rendez-Vous de la Sape' (2022). Multi-camera filming, lighting and postproduction.",
    },
    role: {
      fr: 'Cadreur & Monteur Vidéo',
      en: 'Camera Operator & Video Editor',
    },
    published: true,
    duration: '25 sec',
    aspectRatio: '16:9',
    tags: ['Focus Films', 'Sape 2022', 'Cadreur', 'Monteur', 'Événementiel'],
  },
];
