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
npm run publish:docs
npm run lint
```

## Personnalisation rapide

- Modifie le contenu principal dans src/App.jsx.
- Adapte le style global dans src/index.scss.
- Affine les sections et composants dans src/App.scss.

## Deploiement GitHub Pages

Le site public est servi depuis le dossier docs de la branche main :

https://a-robert-22003440.github.io/OC_Portfolio/

Le fichier [index.html](index.html) est l'unique entree source pour Vite.
La version publiee est generee automatiquement dans le dossier docs.

Pour republier la version actuelle du portfolio :

```bash
npm run publish:docs
git add docs package.json package-lock.json vite.config.js README.md
git commit -m "Publish updated portfolio"
git push
```

Si le nom du depot change, pense a mettre a jour :

- la propriete homepage dans package.json
- la valeur base dans vite.config.js

## Checklist si la page ne marche pas

- Verifie que l'URL correspond bien a la valeur homepage.
- Verifie dans Settings > Pages que la source est bien main /docs.
- Relance npm run publish:docs si tu viens de modifier l'application React.
- Attends 1 a 3 minutes apres un deploiement (propagation GitHub Pages).
