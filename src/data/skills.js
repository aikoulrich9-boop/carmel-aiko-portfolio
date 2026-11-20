/**
 * Skills & Technical Competencies Data
 * Inspired by Image 1 & 2 layout systems + cinematic editing tools
 */

export const softwareSkills = [
  {
    name: 'Adobe Premiere Pro',
    category: 'NLE Video Editing',
    level: 98,
    icon: 'film',
    badge: 'Maîtrise Experte',
    badgeEn: 'Expert Mastery',
  },
  {
    name: 'DaVinci Resolve Studio',
    category: 'Editing & Color Grading',
    level: 95,
    icon: 'sliders',
    badge: 'Étalonnage & Cut',
    badgeEn: 'Grading & Cut',
  },
  {
    name: 'Adobe After Effects',
    category: 'Motion Graphics & VFX',
    level: 88,
    icon: 'sparkles',
    badge: 'Compositing / Motion',
    badgeEn: 'Compositing / Motion',
  },
  {
    name: 'Avid Media Composer',
    category: 'Broadcast & Cinema Workflows',
    level: 82,
    icon: 'monitor',
    badge: 'Normes Broadcast',
    badgeEn: 'Broadcast Standards',
  },
  {
    name: 'Audition & Pro Tools',
    category: 'Sound Design & Audio Mix',
    level: 85,
    icon: 'volume-2',
    badge: 'Mix & Nettoyage',
    badgeEn: 'Mix & Cleanup',
  },
];

export const coreMastery = [
  {
    title: { fr: 'Rythme & Narration Dramatique', en: 'Rhythm & Dramatic Narrative' },
    percentage: 98,
    desc: {
      fr: 'Capacité à sculpter le temps, bâtir la tension émotionnelle et trouver la respiration juste de chaque scène.',
      en: 'Sculpting temporal perception, building emotional tension, and finding the precise natural breathing of each scene.',
    },
  },
  {
    title: { fr: 'Direction de Post-Production', en: 'Post-Production Supervision' },
    percentage: 94,
    desc: {
      fr: 'Gestion intégrale du flux d’ingest, proxy, sound design, color conform, mixage et livrables finaux multi-formats.',
      en: 'End-to-end management from ingest, proxy workflows, sound design, color conform, mix to multi-format deliverables.',
    },
  },
  {
    title: { fr: 'Étalonnage & Color Science', en: 'Color Grading & Color Science' },
    percentage: 90,
    desc: {
      fr: 'Création de LUTs sur mesure, respect des chartes chromatiques et étalonnage cinématographique (Log / RAW / ACES).',
      en: 'Custom LUT authoring, rigorous chromatic palette adherence, and cinematic grading (Log / RAW / ACES).',
    },
  },
  {
    title: { fr: 'Sound Design & Rhythmic Sync', en: 'Sound Design & Audio Pacing' },
    percentage: 92,
    desc: {
      fr: 'Habillage sonore immersif, découpe au millième de seconde sur les transitoires musicales et Foley réaliste.',
      en: 'Immersive soundscapes, micro-second transient cutting aligned to musical beats, and realistic Foley selection.',
    },
  },
  {
    title: { fr: 'Motion Design & Clean-up VFX', en: 'Motion Design & VFX Clean-up' },
    percentage: 86,
    desc: {
      fr: 'Intégration typographique cinétique, tracking 2D/3D, retouches beauté et suppression d’éléments indésirables.',
      en: 'Kinetic typography integration, 2D/3D point tracking, subtle beauty retouching, and plate clean-up.',
    },
  },
];

export const personalSkills = [
  { fr: 'Sens du Récit & Narration', en: 'Narrative Instinct & Arc' },
  { fr: 'Gestion de la Pression & Délais', en: 'High-Pressure Delivery' },
  { fr: 'Écoute & Dialogue Réalisateur', en: 'Director Creative Dialogue' },
  { fr: 'Rigueur des Formats Broadcast', en: 'Broadcast Standards Rigor' },
  { fr: 'Curiosité & Veille Esthétique', en: 'Cinematic Trendsetter' },
];

export const hobbies = [
  {
    icon: 'camera',
    title: { fr: 'Photographie 35mm', en: '35mm Film Photography' },
  },
  {
    icon: 'film',
    title: { fr: 'Cinéma d’Auteur', en: 'Auteur & World Cinema' },
  },
  {
    icon: 'disc',
    title: { fr: 'Sound Design Analogique', en: 'Modular Sound Synthesis' },
  },
  {
    icon: 'plane',
    title: { fr: 'Voyages & Explorations', en: 'Travel & Field Research' },
  },
];

export const languageSkills = [
  { name: 'Français', levelText: 'Langue maternelle / Native', levelScore: 100 },
  { name: 'English', levelText: 'Courant professionnel / Professional working', levelScore: 90 },
];

export const services = [
  {
    id: 'service-montage',
    icon: 'scissors',
    title: { fr: 'Montage Long & Court-Métrage', en: 'Feature & Short Film Editing' },
    description: {
      fr: 'Découpage narratif, construction des personnages et travail fin sur la temporalité dramatique.',
      en: 'Narrative structure, character rhythm, and nuanced sculpting of cinematic time.',
    },
  },
  {
    id: 'service-pub',
    icon: 'zap',
    title: { fr: 'Publicités & Brand Content', en: 'Commercials & High-Impact Ads' },
    description: {
      fr: 'Montages percutants pour les marques, captant l’attention dès les trois premières secondes.',
      en: 'High-octane commercial cuts engineered to grip audience attention within the first three seconds.',
    },
  },
  {
    id: 'service-doc',
    icon: 'compass',
    title: { fr: 'Documentaires & Grands Reportages', en: 'Documentaries & Deep Features' },
    description: {
      fr: 'Valorisation des témoignages, croisement d’archives historiques et narration humaine authentique.',
      en: 'Elevating real stories, seamlessly weaving archive footage, and crafting authentic human narratives.',
    },
  },
  {
    id: 'service-color',
    icon: 'palette',
    title: { fr: 'Étalonnage & Teinte Visuelle', en: 'Color Grading & Look Dev' },
    description: {
      fr: 'Harmonisation chromatique des caméras, ambiances denses et grain argentique texturé.',
      en: 'Camera matching, dense mood-setting palettes, and organic film grain emulation.',
    },
  },
  {
    id: 'service-sound',
    icon: 'headphones',
    title: { fr: 'Sound Design & Spatialisation', en: 'Sound Design & Foley Sculpting' },
    description: {
      fr: 'Création d’un univers sonore immersif qui donne de la texture et du poids à chaque image.',
      en: 'Crafting immersive audio architecture that injects texture, weight, and presence into every frame.',
    },
  },
  {
    id: 'service-mastering',
    icon: 'check-circle-2',
    title: { fr: 'Conformation & Mastering PAD', en: 'Conform & Broadcast Mastering' },
    description: {
      fr: 'Exports stricts conformes aux normes broadcast internationales, cinéma DCP et réseaux sociaux.',
      en: 'Strict mastering compliant with international broadcast specifications, cinema DCP, and modern web.',
    },
  },
];
