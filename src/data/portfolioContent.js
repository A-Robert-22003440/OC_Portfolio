export const profile = {
  firstName: 'Alexandre',
  lastName: 'Robert',
  role: 'Developpeur web en formation chez OpenClassrooms',
  intro:
    'Je construis un portfolio qui met en avant mon parcours OpenClassrooms Developpeur Web, avec une progression visible du front-end vers React, Node.js et les bonnes pratiques de qualite web.',
  availability: 'Disponible pour alternance, freelance ou CDI junior',
}

export const navLinks = [
  { href: '#projets', label: 'Projets' },
  { href: '#formation', label: 'Formation' },
  { href: '#apropos', label: 'A propos' },
  { href: '#contact', label: 'Contact' },
]

export const metrics = [
  { value: '8 projets', label: 'parcours professionnalisant' },
  { value: 'RNCP niveau 5', label: 'objectif de certification' },
  { value: 'Front + Back', label: 'progression technique visible' },
]

export const strengths = [
  'Une progression claire du HTML/CSS vers JavaScript, React et le backend Node.js',
  'Des projets presentes comme des cas concrets de la formation OpenClassrooms',
  'Une base React decoupee pour rester simple a faire evoluer et a maintenir',
]

export const trainingHighlights = [
  {
    title: 'Projets professionnalisants',
    label: 'Apprendre par la pratique',
    content:
      'Le parcours OpenClassrooms repose sur des cas concrets qui permettent de montrer une methode de travail, pas seulement un resultat visuel.',
  },
  {
    title: 'Du front au back',
    label: 'Progression technique',
    content:
      'Le portfolio illustre une montée en competence qui couvre HTML, CSS, JavaScript, React, Node.js, Express et MongoDB.',
  },
  {
    title: 'SEO, performance et accessibilite',
    label: 'Qualite web',
    content:
      'La formation met aussi l accent sur la maintenance, la visibilite et l accessibilite, trois axes que je rends visibles dans mes projets.',
  },
  {
    title: 'Mentorat et autonomie',
    label: 'Cadre de progression',
    content:
      'Le rythme du parcours valorise le mentorat, la redaction de livrables et la capacite a expliquer ses choix comme en contexte professionnel.',
  },
]

export const profilePitch = {
  intro:
    'Bonjour, je suis Alexandre Robert, developpeur web en formation chez OpenClassrooms, avec une base front-end React et un intérêt fort pour les interfaces claires, l accessibilite et les systemes faciles a maintenir.',
  acts: [
    {
      title: 'Accroche identitaire',
      content:
        'Je me presente comme un profil front-end qui aime traduire une intention produit en interface nette, lisible et efficace, avec une attention forte au detail.',
    },
    {
      title: 'Parcours et legitimite',
      content:
        'J ai construit mon parcours via la formation OpenClassrooms Developpeur Web, avec l envie d apprendre une discipline qui combine logique, design et resolution de probleme.',
    },
    {
      title: 'Stack technique et expertise',
      content:
        'Je travaille principalement avec React, Sass, JavaScript, Vite et Node.js, tout en gardant une approche pragmatique sur la structuration, les routes et la maintenabilite.',
    },
    {
      title: 'Projets marquants et impact',
      content:
        'Kasa et Mon Vieux Grimoire m ont appris a passer d une maquette a une application fonctionnelle, avec des enjeux de routing, de gestion des donnees et de separation des composants.',
    },
    {
      title: 'Approche et differenciation',
      content:
        'Je privilegie une architecture simple, des composants reutilisables et une presentation qui parle autant a un recruteur qu a un collaborateur amené a reprendre le code.',
    },
    {
      title: 'Projection et ambitions',
      content:
        'Mon objectif est d integrer une equipe produit ou je pourrai continuer a progresser sur React, l accessibilite, la performance et la qualite de l experience utilisateur.',
    },
  ],
}

const commonLinks = (github) => [
  { label: 'Repository GitHub', href: github },
  { label: 'Demo disponible sur demande', href: null },
  { label: 'Video de presentation sur demande', href: null },
]

export const projects = [
  {
    slug: 'booki',
    category: 'Projet 2 OpenClassrooms',
    title: 'Booki, page d accueil responsive orientee conversion',
    hook:
      'Transformer une maquette en page d accueil claire et efficace, avec recherche, filtres et cartes hebergements adaptées au mobile.',
    preview: {
      kind: 'blueprint',
      src: '/OC_Portfolio/projects/booki-preview.svg',
      alt: 'Apercu stylise du projet Booki',
      caption: 'Landing page responsive avec recherche, filtres et cartes hebergements',
    },
    technologies: [
      { name: 'HTML5', icon: 'html5', color: 'E34F26' },
      { name: 'CSS3', icon: 'css', color: '1572B6' },
      { name: 'Flexbox', icon: null, color: null },
      { name: 'Responsive', icon: null, color: null },
      { name: 'Accessibilite', icon: null, color: null },
    ],
    sections: [
      {
        label: 'Contexte',
        content:
          'Booki est le premier gros exercice d integration de la formation, centre sur la transformation d une maquette Figma en interface web fonctionnelle.',
      },
      {
        label: 'Objectifs',
        content:
          'Reproduire fidèlement la maquette desktop et mobile, structurer la page en sections lisibles et mettre en avant un moteur de recherche et des filtres de navigation.',
      },
      {
        label: 'Stack technique',
        content:
          'HTML sémantique, CSS, Flexbox, mise en page responsive et travail de hiérarchie visuelle pour les cartes et le formulaire de recherche.',
      },
      {
        label: 'Competences developpees',
        content:
          'Lecture de maquette, intégration responsive, création de composants visuels simples et compréhension des contraintes d affichage multi-écran.',
      },
      {
        label: 'Resultats et impact',
        content:
          'Le projet livre une page d accueil propre et crédible pour un produit de réservation, avec une structure claire et prête pour des évolutions plus fonctionnelles.',
      },
      {
        label: 'Perspectives d amelioration',
        content:
          'Une amélioration naturelle serait d enrichir l accessibilité, d alléger davantage les styles et d ajouter plus d interactions de recherche.',
      },
    ],
    links: commonLinks('https://github.com/A-Robert-22003440/OC_DW_Projet2_Robert_Alexandre'),
  },
  {
    slug: 'sophie-bluel',
    category: 'Projet 3 OpenClassrooms',
    title: 'Sophie Bluel, portfolio dynamique avec interface d administration',
    hook:
      'Faire evoluer un portfolio statique en interface interactive connectee a une API, avec login, mode edition et gestion de galerie.',
    preview: {
      kind: 'image',
      src: '/OC_Portfolio/projects/sophie-bluel.png',
      alt: 'Capture du portfolio Sophie Bluel',
      caption: 'Front office, filtres dynamiques et base d interface admin',
    },
    technologies: [
      { name: 'HTML5', icon: 'html5', color: 'E34F26' },
      { name: 'CSS3', icon: 'css', color: '1572B6' },
      { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
      { name: 'Express', icon: 'express', color: 'FFFFFF' },
      { name: 'SQLite', icon: 'sqlite', color: '003B57' },
      { name: 'JWT', icon: null, color: null },
    ],
    sections: [
      {
        label: 'Contexte',
        content:
          'Ce projet repose sur un portfolio d architecte d interieur qu il fallait rendre dynamique, en connectant un frontend vanilla a un backend expose via API.',
      },
      {
        label: 'Objectifs',
        content:
          'Afficher les travaux depuis l API, filtrer les projets par categorie, ajouter une authentification et proposer un mode edition avec ajout et suppression de contenus.',
      },
      {
        label: 'Stack technique',
        content:
          'HTML, CSS et JavaScript cote navigateur, avec un backend Express, Sequelize, SQLite, JWT, upload d images et documentation Swagger.',
      },
      {
        label: 'Competences developpees',
        content:
          'Manipulation avancee du DOM, appels fetch, gestion de token, conception de modale, formulaires multipart et lecture d une architecture front/back simple.',
      },
      {
        label: 'Resultats et impact',
        content:
          'Le site passe d une simple galerie a un outil administrable, avec filtres, login, interface d edition et synchronisation des donnees avec le backend.',
      },
      {
        label: 'Perspectives d amelioration',
        content:
          'Le prochain levier logique serait de migrer cette interface vers React pour mieux separer les composants, les etats et les interactions UI.',
      },
    ],
    links: commonLinks('https://github.com/A-Robert-22003440/OC_DW_Projet3_Robert_Alexandre'),
  },
  {
    slug: 'nina-carducci',
    category: 'Projet 4 OpenClassrooms',
    title: 'Nina Carducci, site vitrine optimise pour SEO, performance et accessibilite',
    hook:
      'Optimiser un site existant de photographe pour le rendre plus visible, plus rapide et plus robuste sur les usages reels.',
    preview: {
      kind: 'image',
      src: '/OC_Portfolio/projects/nina-carducci.webp',
      alt: 'Portrait de Nina Carducci utilise dans le site optimise',
      caption: 'Page vitrine avec meta SEO, images responsives et galerie filtrable',
    },
    technologies: [
      { name: 'HTML5', icon: 'html5', color: 'E34F26' },
      { name: 'CSS3', icon: 'css', color: '1572B6' },
      { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
      { name: 'jQuery', icon: 'jquery', color: '0769AD' },
      { name: 'Bootstrap', icon: 'bootstrap', color: '7952B3' },
      { name: 'Schema.org', icon: null, color: null },
    ],
    sections: [
      {
        label: 'Contexte',
        content:
          'Le site de la photographe Nina Carducci devait etre optimise pour corriger ses faiblesses techniques et mieux soutenir sa visibilite locale.',
      },
      {
        label: 'Objectifs',
        content:
          'Ameliorer les performances, enrichir le balisage SEO, rendre les images plus efficaces et verifier la compatibilite responsive et accessibilite.',
      },
      {
        label: 'Stack technique',
        content:
          'HTML, CSS, JavaScript, Bootstrap, jQuery, galerie filtree, donnees structurees LocalBusiness et images converties en WebP avec srcset.',
      },
      {
        label: 'Competences developpees',
        content:
          'Audit de performance, optimisation d assets, travail sur les metadonnees, bonnes pratiques Lighthouse et lecture critique d un site deja existant.',
      },
      {
        label: 'Resultats et impact',
        content:
          'Le projet montre une capacite a traiter la qualite percue et la qualite technique ensemble, avec une vitrine plus legere, plus semantique et plus exploitable.',
      },
      {
        label: 'Perspectives d amelioration',
        content:
          'Une prochaine iteration pourrait remplacer une partie des scripts par des composants plus modernes et ajouter une vraie mesure de suivi des performances.',
      },
    ],
    links: commonLinks('https://github.com/A-Robert-22003440/OC_DW_Projet4_Robert_Alexandre'),
  },
  {
    slug: 'kasa',
    category: 'Projet 5 OpenClassrooms',
    title: 'Kasa, application React de location avec routing et composants reutilisables',
    hook:
      'Construire une application monopage complete en React a partir d une maquette, avec navigation, pages detail et composants reutilisables.',
    preview: {
      kind: 'image',
      src: '/OC_Portfolio/projects/kasa-home.png',
      alt: 'Banniere de la page d accueil Kasa',
      caption: 'SPA React avec cartes logements, slideshow, collapse et route 404',
    },
    technologies: [
      { name: 'React', icon: 'react', color: '61DAFB' },
      { name: 'Sass', icon: 'sass', color: 'CC6699' },
      { name: 'Vite', icon: 'vite', color: '646CFF' },
      { name: 'React Router', icon: 'reactrouter', color: 'CA4245' },
      { name: 'ESLint', icon: 'eslint', color: '4B32C3' },
    ],
    sections: [
      {
        label: 'Contexte',
        content:
          'Ce projet marque le passage a React avec une application de location composee de plusieurs vues et de donnees locales a exploiter proprement.',
      },
      {
        label: 'Objectifs',
        content:
          'Mettre en place le routing, construire les composants d interface, afficher les details d un logement et gerer les cas d erreur avec une page 404.',
      },
      {
        label: 'Stack technique',
        content:
          'React, React Router, Vite, Sass, ESLint, composants reutilisables, pages dediees et donnees JSON pour piloter le rendu.',
      },
      {
        label: 'Competences developpees',
        content:
          'Decoupage en composants, gestion d etat local, navigation front, composition d interfaces et mise en place d une base de projet moderne.',
      },
      {
        label: 'Resultats et impact',
        content:
          'Le projet met en avant une application React complete avec banniere, grille de cartes, slideshow, collapses et detail logement route par identifiant.',
      },
      {
        label: 'Perspectives d amelioration',
        content:
          'Les prochaines evolutions naturelles seraient des tests, une source de donnees distante et une meilleure instrumentation des erreurs et chargements.',
      },
    ],
    links: commonLinks('https://github.com/A-Robert-22003440/OC_DW_Projet5_Robert_Alexandre'),
  },
  {
    slug: 'mon-vieux-grimoire',
    category: 'Projet 6 OpenClassrooms',
    title: 'Mon Vieux Grimoire, API securisee pour gestion et notation de livres',
    hook:
      'Concevoir un backend Node.js qui gere authentification, CRUD, notation et optimisation des images pour une application de recommandations.',
    preview: {
      kind: 'blueprint',
      src: '/OC_Portfolio/projects/grimoire-api-preview.svg',
      alt: 'Schema simplifie de l API Mon Vieux Grimoire',
      caption: 'API Express avec auth JWT, MongoDB, upload et compression d images',
    },
    technologies: [
      { name: 'Node.js', icon: 'nodedotjs', color: '5FA04E' },
      { name: 'Express', icon: 'express', color: 'FFFFFF' },
      { name: 'MongoDB', icon: 'mongodb', color: '47A248' },
      { name: 'JWT', icon: null, color: null },
      { name: 'Multer', icon: null, color: null },
      { name: 'Sharp', icon: null, color: null },
    ],
    sections: [
      {
        label: 'Contexte',
        content:
          'Ce projet de fin de parcours backend consiste a fournir une API robuste pour une application de notation de livres avec authentification utilisateur.',
      },
      {
        label: 'Objectifs',
        content:
          'Creer les routes de livres et d authentification, proteger les operations, gerer l upload d images et calculer correctement la moyenne des notes.',
      },
      {
        label: 'Stack technique',
        content:
          'Node.js, Express, MongoDB avec Mongoose, JWT, bcrypt, Multer, Sharp et middleware personnalises pour la securisation et le traitement des fichiers.',
      },
      {
        label: 'Competences developpees',
        content:
          'Conception d API REST, gestion des droits utilisateur, validation des donnees, manipulation de fichiers, optimisation d images et logique metier cote serveur.',
      },
      {
        label: 'Resultats et impact',
        content:
          'L API prend en charge les principaux parcours metier : inscription, connexion, creation de livre, suppression, modification, notation et classement des mieux notes.',
      },
      {
        label: 'Perspectives d amelioration',
        content:
          'La suite logique serait d ajouter des tests automatises, une documentation plus poussee du contrat API et une couche de logs ou monitoring.',
      },
    ],
    links: commonLinks('https://github.com/A-Robert-22003440/OC_DW_Projet6_Robert_Alexandre'),
  },
  {
    slug: 'mon-vieux-grimoire-old',
    category: 'Projet 6 - prototype initial',
    title: 'Mon Vieux Grimoire, prototype React initial de la bibliothèque',
    hook:
      'Explorer l evolution d une application de livres côté front, avec navigation, affichage des ouvrages et premiers formulaires de contribution.',
    preview: {
      kind: 'blueprint',
      src: '/OC_Portfolio/projects/grimoire-api-preview.svg',
      alt: 'Apercu de la version initiale de Mon Vieux Grimoire',
      caption: 'Version initiale orientee interface livre, connexion et ajout de contenu',
    },
    technologies: [
      { name: 'React', icon: 'react', color: '61DAFB' },
      { name: 'CSS Modules', icon: null, color: null },
      { name: 'React Router', icon: 'reactrouter', color: 'CA4245' },
      { name: 'React Hook Form', icon: null, color: null },
      { name: 'Axios', icon: null, color: null },
    ],
    sections: [
      {
        label: 'Contexte',
        content:
          'Cette version precedente montre une interface React de bibliotheque avant le renforcement complet du backend securise.',
      },
      {
        label: 'Objectifs',
        content:
          'Afficher les livres, gérer la connexion utilisateur, préparer l ajout et la modification de livres et structurer un parcours plus riche que la simple lecture.',
      },
      {
        label: 'Stack technique',
        content:
          'React, React Router, Axios, formulaires contrôlés, CSS Modules, logique de connexion et composants réutilisables autour des ouvrages.',
      },
      {
        label: 'Competences developpees',
        content:
          'Gestion d état, navigation, lecture d API, formulaires, contrôle des accès et structuration d une application multi-écrans.',
      },
      {
        label: 'Resultats et impact',
        content:
          'Le projet apporte une base fonctionnelle pour comprendre le cycle complet du produit, entre consultation, connexion et contribution d ouvrages.',
      },
      {
        label: 'Perspectives d amelioration',
        content:
          'La logique d authentification, de rating et de gestion de formulaires peut être consolidée par des composants plus explicitement découplés.',
      },
    ],
    links: commonLinks('https://github.com/A-Robert-22003440/OC_DW_Projet6_Robert_Alexandre_old'),
  },
]

export const personalProjects = [
  {
    slug: 'taskmaster',
    category: 'Projet personnel concept',
    title: 'Taskmaster, gestionnaire de tâches orienté concentration',
    hook:
      'Un outil personnel pensé pour prioriser les tâches, suivre l avancement et rendre la charge mentale plus lisible au quotidien.',
    preview: {
      kind: 'blueprint',
      src: '/OC_Portfolio/projects/taskmaster-preview.svg',
      alt: 'Apercu conceptuel de Taskmaster',
      caption: 'Dashboard personnel avec priorités, calendrier et progression visuelle',
    },
    technologies: [
      { name: 'React', icon: 'react', color: '61DAFB' },
      { name: 'Sass', icon: 'sass', color: 'CC6699' },
      { name: 'LocalStorage', icon: null, color: null },
      { name: 'Animations', icon: null, color: null },
      { name: 'Design system', icon: null, color: null },
    ],
    sections: [
      {
        label: 'Contexte',
        content:
          'Ce projet personnel répond a un besoin concret d organisation personnelle, avec l idée de produire un tableau de bord qui motive au lieu de surcharger.',
      },
      {
        label: 'Objectifs',
        content:
          'Créer un suivi de tâches plus visuel qu une simple todo list, avec priorités, progression, filtres et une mise en avant du focus quotidien.',
      },
      {
        label: 'Stack technique',
        content:
          'React, Sass, stockage local, composants d interface réutilisables et micro-interactions pour renforcer la sensation de fluidité.',
      },
      {
        label: 'Competences developpees',
        content:
          'Conception produit, logique de priorisation, architecture front modulaire et création d un design system personnel cohérent.',
      },
      {
        label: 'Resultats et impact',
        content:
          'Le concept apporte une vraie valeur ajoutée à mon profil car il montre une initiative autonome orientée usage quotidien et amélioration personnelle.',
      },
      {
        label: 'Perspectives d amelioration',
        content:
          'On peut aller plus loin avec des notifications, une synchronisation multi-appareils et une persistance côté backend.',
      },
    ],
    links: [
      { label: 'Repository GitHub', href: 'https://github.com/A-Robert-22003440/OC_Portfolio', external: true },
      { label: 'Prototype non deploye', href: null },
      { label: 'Presentation sur demande', href: null },
    ],
  },
  {
    slug: 'culturelist',
    category: 'Projet personnel concept',
    title: 'Culturelist, plateforme de partage de ressources dev',
    hook:
      'Un espace pour centraliser des ressources, recommander du contenu et suivre ce qui vaut vraiment le détour dans la veille technique.',
    preview: {
      kind: 'blueprint',
      src: '/OC_Portfolio/projects/culturelist-preview.svg',
      alt: 'Apercu conceptuel de Culturelist',
      caption: 'Plateforme de veille avec cartes de ressources, tags et favoris',
    },
    technologies: [
      { name: 'React', icon: 'react', color: '61DAFB' },
      { name: 'Sass', icon: 'sass', color: 'CC6699' },
      { name: 'API', icon: null, color: null },
      { name: 'Search', icon: null, color: null },
      { name: 'Favoris', icon: null, color: null },
    ],
    sections: [
      {
        label: 'Contexte',
        content:
          'Ce projet personnel part d un besoin de veille structuré pour mieux organiser les contenus utiles à un developpeur junior.',
      },
      {
        label: 'Objectifs',
        content:
          'Permettre de sauvegarder, classer et filtrer des ressources afin de transformer la veille en outil partageable et actionnable.',
      },
      {
        label: 'Stack technique',
        content:
          'React, Sass, filtres de recherche, composants carte et architecture prête pour une API ou un backend de sauvegarde.',
      },
      {
        label: 'Competences developpees',
        content:
          'Organisation d informations, logique de recherche, UX éditoriale et travail sur une présentation plus inspirée d une vraie plateforme produit.',
      },
      {
        label: 'Resultats et impact',
        content:
          'Le projet valorise ma curiosité et ma capacité à créer un outil utile au-delà des exercices imposés par la formation.',
      },
      {
        label: 'Perspectives d amelioration',
        content:
          'Une évolution naturelle serait d ajouter des comptes utilisateurs, du partage et une synchronisation cloud des sélections.',
      },
    ],
    links: [
      { label: 'Repository GitHub', href: 'https://github.com/A-Robert-22003440/OC_Portfolio', external: true },
      { label: 'Prototype non deploye', href: null },
      { label: 'Presentation sur demande', href: null },
    ],
  },
]

export const contact = {
  description:
    'Voici mes coordonnées professionnelles et mes principaux points de contact. Le portfolio est structuré pour que recruteur ou mentor identifie rapidement mon GitHub, mon profil LinkedIn et mon email.',
  links: [
    { label: 'Email professionnel', href: 'mailto:contact@exemple.fr', external: false },
    { label: 'GitHub', href: 'https://github.com/A-Robert-22003440', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', external: true },
  ],
}