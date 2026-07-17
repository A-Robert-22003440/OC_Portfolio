export const profile = {
  firstName: 'Prenom',
  lastName: 'Nom',
  role: 'Developpeur front-end React',
  intro:
    'Je conçois des interfaces claires, responsives et soignees, avec une attention particuliere portee a l experience utilisateur et a la qualite de l integration.',
  availability: 'Disponible pour alternance, freelance ou CDI',
}

export const navLinks = [
  { href: '#projets', label: 'Projets' },
  { href: '#apropos', label: 'A propos' },
  { href: '#contact', label: 'Contact' },
]

export const metrics = [
  { value: '4', label: 'projets OC_DW valorises' },
  { value: 'Front + Back', label: 'progression technique visible' },
  { value: 'React modulaire', label: 'base simple a maintenir' },
]

export const strengths = [
  'Une progression visible du HTML/CSS vers React et le backend Node.js',
  'Des fiches projet structurees pour parler a la fois technique et metier',
  'Une base React decoupee pour etre maintenable plus simplement par toi et par des agents IA',
]

const commonLinks = (github) => [
  { label: 'Repository GitHub', href: github },
  { label: 'Demo live a ajouter', href: null },
  { label: 'Video demo optionnelle', href: null },
]

export const projects = [
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
]

export const workflow = [
  'Choisir les projets qui montrent une progression claire entre integration, interactivite, React et backend.',
  'Reformuler chaque exercice comme une mission avec enjeux, objectifs et livrables identifiables.',
  'Conserver une structure identique par projet pour rendre la lecture plus rapide cote recruteur.',
]

export const aiPrompt = `Contexte : Je suis developpeur web junior et je prepare mon portfolio professionnel.

Voici les details de mon projet [NOM_PROJET] :
[Description technique, technologies utilisees, difficultes rencontrees, solutions apportees]

Mission : Aide-moi a rediger une fiche projet professionnelle structuree selon ce format :
- Contexte
- Objectifs
- Stack technique
- Competences developpees
- Resultats et impact
- Perspectives d amelioration

Ton : Professionnel mais accessible.
Longueur : 8 a 10 phrases maximum reparties sur les 6 sections.`

export const contact = {
  description:
    'Tu peux maintenant remplacer ces liens par tes vraies coordonnees. La structure est deja prete pour afficher un email, un GitHub et un LinkedIn credibles.',
  links: [
    { label: 'bonjour@exemple.fr', href: 'mailto:bonjour@exemple.fr', external: false },
    { label: 'GitHub', href: 'https://github.com/A-Robert-22003440', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', external: true },
  ],
}