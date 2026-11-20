# Portfolio & Online CV — Carmel Ulrich AIKO

> **Monteur Vidéo & Chef Monteur / Video Editor & Chief Editor**  
> Direction de Post-Production • Cinéma • Publicité • Documentaire

Ce projet est le site web professionnel, cinématographique et bilingue (FR | EN) de **Carmel Ulrich AIKO**. Il a été pensé pour offrir une expérience internationale haut de gamme, préparée pour un nom de domaine personnalisé (`carmel-aiko.com`) et prête à accueillir un futur système d'administration de portfolio privé (Phase 2).

---

## 🚀 Fonctionnalités Clés (Phase 1)

1. **Expérience Bilingue Intégrale (Français / Anglais)** :
   - Sélecteur minimaliste `FR | EN` dans la barre de navigation.
   - Traduction centralisée sans rechargement de page via `LanguageContext`.
   - Persistance du choix dans le `localStorage`.
   - Métadonnées SEO et balises `hreflang` synchronisées.

2. **Présentation Cinématographique & Lecteur Vidéo** :
   - Grille de films avec filtres par catégorie (*Fiction & Cinéma*, *Publicité & Marque*, *Documentaire*, *Clips & Arts*).
   - Cartes immersives avec ratios d'aspect (2.39:1 / 16:9), durées et badges techniques.
   - Modale vidéo interactive avec lecteur responsive et métadonnées complètes de production.

3. **Système Dédié de Téléchargement de CV** :
   - Modale bilingue permettant de télécharger directement :
     - La version française : `cv-carmel-ulrich-aiko-fr.pdf`
     - La version anglaise : `cv-carmel-ulrich-aiko-en.pdf`
   - Fichiers remplaçables directement dans `public/documents/`.

4. **Tableau de Bord Technique & Compétences** :
   - Jauges logicielles avec curseurs interactifs (Premiere Pro, DaVinci Resolve, After Effects, Avid, Pro Tools).
   - Visualisation circulaire SVG des piliers de maîtrise (Rythme, Supervision, Étalonnage, Sound Design, Motion).
   - 6 cartes de services audiovisuels et indicateurs de langues.

5. **Architecture Modulaire Prête pour la Phase 2** :
   - Séparation stricte des données dans `src/data/` (`projects.js`, `experiences.js`, `skills.js`, `biography.js`).
   - Ajout et modification de projets sans toucher au code UI.

---

## 🛠 Stack Technique

- **Framework** : React 19 + Vite 6
- **Styling** : Tailwind CSS v3.4.17
- **Animations** : GSAP 3 (ScrollTrigger, contextes réactifs)
- **Icônes** : Lucide React
- **Typographie** : Plus Jakarta Sans (Titres), Playfair Display (Serif dramatique), JetBrains Mono (Données)
- **Déploiement** : Vercel (Configuration complète dans `vercel.json`)

---

## 📦 Installation & Démarrage Local

```bash
# Cloner le dépôt
git clone https://github.com/aikoulrich9-boop/carmel-aiko-portfolio.git

# Accéder au dossier
cd carmel-aiko-portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement local
npm run dev

# Générer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 🌐 Déploiement Vercel & Domaine Personnalisé

Le fichier `vercel.json` est déjà configuré à la racine avec :
- Les en-têtes de sécurité (HSTS, X-Content-Type-Options, Referrer-Policy).
- Les règles de mise en cache pour les médias et les PDFs.
- Le rewriting d'URL pour le routage propre.

### Liaison sur Vercel :
1. Rendez-vous sur [vercel.com](https://vercel.com).
2. Cliquez sur **Add New > Project** et sélectionnez **`aikoulrich9-boop/carmel-aiko-portfolio`**.
3. Cliquez sur **Deploy**.

### Configuration du Domaine (`carmel-aiko.com`) :
1. Dans votre projet Vercel : **Settings > Domains**.
2. Ajoutez `carmel-aiko.com` et `www.carmel-aiko.com`.
3. Configurez les DNS chez votre registrar :
   - **Type A** : `@` vers `76.76.21.21`
   - **Type CNAME** : `www` vers `cname.vercel-dns.com`

---

© 2026 Carmel Ulrich AIKO. Tous droits réservés.
