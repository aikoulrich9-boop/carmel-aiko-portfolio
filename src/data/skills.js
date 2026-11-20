/**
 * Skills & Technical Competencies Data
 * Authentic Information from Curriculum Vitae Carmel Ulrich AIKO
 */

export const softwareSkills = [
  {
    name: 'Adobe Premiere Pro',
    category: 'Montage Vidéo & Postproduction NLE',
    level: 95,
    icon: 'film',
    badge: 'Expertise Principale',
    badgeEn: 'Primary Expertise',
  },
  {
    name: 'DaVinci Resolve',
    category: 'Montage & Étalonnage de base',
    level: 80,
    icon: 'sliders',
    badge: 'Montage & Color Base',
    badgeEn: 'Editing & Base Color',
  },
  {
    name: 'Adobe After Effects',
    category: 'Animation Graphique & Effets Visuels',
    level: 75,
    icon: 'sparkles',
    badge: 'Animation & VFX',
    badgeEn: 'Motion & VFX',
  },
  {
    name: 'Adobe Photoshop',
    category: 'Retouche & Traitement d’Images',
    level: 85,
    icon: 'palette',
    badge: 'Retouche Graphique',
    badgeEn: 'Graphic Retouching',
  },
  {
    name: 'Adobe Illustrator',
    category: 'Conception Graphique Vectorielle',
    level: 78,
    icon: 'monitor',
    badge: 'Design Vectoriel',
    badgeEn: 'Vector Design',
  },
  {
    name: 'IA & Création Vidéo (Higgsfield / Seedance 2.5)',
    category: 'Génération & Workflows IA',
    level: 88,
    icon: 'sparkles',
    badge: 'Workflows IA Créative',
    badgeEn: 'Creative AI Pipelines',
  },
];

export const aiSkills = [
  {
    tool: 'Higgsfield',
    role: {
      fr: 'Génération et transformation de séquences vidéo cinématiques',
      en: 'Cinematic video sequence generation and transformation',
    },
  },
  {
    tool: 'Seedance 2.5',
    role: {
      fr: 'Génération vidéo avancée à partir de prompts textuels et d’images',
      en: 'Advanced text-to-video and image-to-video generation',
    },
  },
  {
    tool: 'ChatGPT & LLMs',
    role: {
      fr: 'Assistance créative, découpage narratif et automatisation de workflows',
      en: 'Creative ideation, script breakdown, and workflow architecture',
    },
  },
  {
    tool: 'IA Environnements & Décors',
    role: {
      fr: 'Transformation d’environnements, habillages visuels et extensions de plans',
      en: 'Environment manipulation, visual branding, and plate extension',
    },
  },
];

export const personalSkills = [
  { fr: 'Coordination d’Équipes de Montage', en: 'Editing Crew Coordination' },
  { fr: 'Supervision & Contrôle Qualité', en: 'Post Quality Control' },
  { fr: 'Sens du Rythme & Narration Visuelle', en: 'Rhythm & Narrative Pacing' },
  { fr: 'Intégration d’Outils Innovants (IA)', en: 'AI Tools & Innovation' },
  { fr: 'Adaptabilité Délais & Événementiel', en: 'Fast-Turnaround Delivery' },
];

export const hobbies = [
  {
    icon: 'film',
    title: { fr: 'Films & Cinéma', en: 'Cinema & Films' },
  },
  {
    icon: 'plane',
    title: { fr: 'Voyages & Découvertes', en: 'Travel & Exploration' },
  },
  {
    icon: 'disc',
    title: { fr: 'Musique', en: 'Music' },
  },
  {
    icon: 'book',
    title: { fr: 'Lecture & Récits', en: 'Reading & Literature' },
  },
];

export const languageSkills = [
  { name: 'Français', levelText: 'Courant / Langue de travail', levelScore: 100 },
  { name: 'Anglais', levelText: 'Intermédiaire (professionnel)', levelScore: 65 },
  { name: 'Fon', levelText: 'Langue nationale (Bénin)', levelScore: 95 },
  { name: 'Yoruba', levelText: 'Langue régionale (Bénin / Nigéria)', levelScore: 85 },
];

export const services = [
  {
    id: 'service-montage-pub',
    icon: 'zap',
    title: { fr: 'Spots Publicitaires & Marques', en: 'Commercials & Brand Content' },
    description: {
      fr: 'Montage percutant pour la télévision et le digital (notamment Celtis Bénin, campagnes télécom et corporate).',
      en: 'High-impact commercial cutting for broadcast and digital (notably Celtis Benin, telecom, and corporate).',
    },
  },
  {
    id: 'service-supervision',
    icon: 'scissors',
    title: { fr: 'Chef Monteur & Supervision', en: 'Chief Editor & Post Supervision' },
    description: {
      fr: 'Coordination de monteurs, répartition des tâches et garantie du niveau de finition artistique et technique.',
      en: 'Post-production crew coordination, task distribution, and technical/artistic quality assurance.',
    },
  },
  {
    id: 'service-fiction-series',
    icon: 'film',
    title: { fr: 'Cinéma, Séries & Courts Métrages', en: 'Cinema, Series & Fiction' },
    description: {
      fr: 'Montage de fictions, séries et longs métrages (expérience acquise notamment chez Arc-en-ciel Films au Mali).',
      en: 'Editing feature films, TV series, and narrative shorts (notably with Arc-en-ciel Films in Mali).',
    },
  },
  {
    id: 'service-institutionnel',
    icon: 'monitor',
    title: { fr: 'Films Institutionnels & Politiques', en: 'Institutional & Campaign Media' },
    description: {
      fr: 'Communication vidéo d’envergure, dont la campagne électorale en Côte d’Ivoire 2025 et films d’entreprises.',
      en: 'High-stakes video assets, including the 2025 Ivory Coast election campaign and institutional films.',
    },
  },
  {
    id: 'service-ia-video',
    icon: 'sparkles',
    title: { fr: 'Workflows Vidéo & IA Créative', en: 'Creative AI & Video Pipelines' },
    description: {
      fr: 'Exploration d’outils génératifs (Higgsfield, Seedance 2.5) pour la transformation de décors et création d’assets.',
      en: 'Leveraging generative video tools (Higgsfield, Seedance 2.5) for environment replacement and asset synthesis.',
    },
  },
  {
    id: 'service-digital-cadrage',
    icon: 'camera',
    title: { fr: 'Captation Vidéo & Contenus Sociaux', en: 'Camera Shooting & Social Media' },
    description: {
      fr: 'Prise de vue, cadrage et formats courts dynamiques à fort engagement pour les plateformes digitales.',
      en: 'Camera shooting, framing, and dynamic short-form social video formats for digital platforms.',
    },
  },
];
