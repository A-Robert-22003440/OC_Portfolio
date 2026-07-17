# Portfolio React + Sass

Base de portfolio personnelle construite avec React, Vite et Sass, prete pour un deploiement sur GitHub Pages.

## Demarrage

```bash
npm install
npm run dev
```

## Scripts utiles

```bash
npm run dev
npm run build
npm run lint
npm run deploy
```

## Personnalisation rapide

- Modifie le contenu principal dans src/App.jsx.
- Adapte le style global dans src/index.scss.
- Affine les sections et composants dans src/App.scss.

## Deploiement GitHub Pages

Le projet est configure pour etre publie sur le depot GitHub Pages suivant :

https://a-robert-22003440.github.io/OC_Portfolio/

Si le nom du depot change, pense a mettre a jour :

- la propriete homepage dans package.json
- la valeur base dans vite.config.js

## Configuration GitHub (a faire une seule fois)

1. Va dans GitHub > ton depot > Settings > Pages.
2. Dans Build and deployment, choisis Deploy from a branch.
3. Selectionne la branche gh-pages et le dossier /(root), puis Save.

## Deploiement recommande (automatique)

Un workflow GitHub Actions est fourni dans .github/workflows/deploy-gh-pages.yml.

- A chaque push sur main, le site est reconstruit et publie sur gh-pages.
- Tu peux aussi le lancer manuellement dans l'onglet Actions (workflow_dispatch).

## Deploiement manuel (optionnel)

Puis lance :

```bash
npm run deploy
```

## Checklist si la page ne marche pas

- Verifie que l'URL correspond bien a la valeur homepage.
- Verifie dans Actions que le workflow Deploy GitHub Pages est en succes.
- Verifie dans Settings > Pages que la source est bien gh-pages /(root).
- Attends 1 a 3 minutes apres un deploiement (propagation GitHub Pages).
