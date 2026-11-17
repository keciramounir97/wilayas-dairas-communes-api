# 📄 Documentation Détaillée : `package.json`

Le fichier `package.json` est le manifeste du projet Node.js. Il définit l'identité du paquet, sa configuration de modules (ES Modules), ses dépendances de production et ses scripts de démarrage.

---

## 📑 Sommaire

1. [Contenu Complet](#1-contenu-complet)
2. [Propriétés de Métadonnées](#2-propriétés-de-métadonnées)
3. [Configuration ES Modules (`"type": "module"`)](#3-configuration-es-modules-type-module)
4. [Scripts NPM](#4-scripts-npm)
5. [Dépendances de Production](#5-dépendances-de-production)

---

## 1. Contenu Complet

```json
{
  "name": "wilayas-dairas-communes-api",
  "version": "1.0.0",
  "description": "API REST Node.js / Express pour le découpage administratif de l'Algérie (69 wilayas, 550 daïras, 1541 communes)",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/keciramounir97/wilayas-dairas-communes-api.git"
  },
  "keywords": [
    "algeria",
    "algerie",
    "wilayas",
    "dairas",
    "communes",
    "api",
    "express",
    "dz"
  ],
  "author": "keciramounir97",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0"
  }
}
```

---

## 2. Propriétés de Métadonnées

- **`"name"`** : Nom du paquet (`wilayas-dairas-communes-api`), aligné avec le nom du dépôt GitHub et le projet Vercel.
- **`"version"`** : Version sémantique de l'API (`1.0.0`).
- **`"description"`** : Résumé explicatif destiné aux gestionnaires de paquets et aux moteurs de recherche.
- **`"main"`** : Point d'entrée principal de l'application (`server.js`).
- **`"repository"`** : Lien vers le dépôt GitHub source (`https://github.com/keciramounir97/wilayas-dairas-communes-api`).
- **`"keywords"`** : Mots-clés facilitant l'indexation.
- **`"author"`** : Créateur et mainteneur du projet (`keciramounir97`).
- **`"license"`** : Licence libre MIT autorisant l'utilisation commerciale et privée.

---

## 3. Configuration ES Modules (`"type": "module"`)

La ligne :
```json
"type": "module"
```
est essentielle :
- Elle indique à Node.js d'interpréter tous les fichiers `.js` du projet comme des modules ECMAScript natifs (**ESM**).
- Cela permet d'utiliser la syntaxe standardisée moderne `import ... from ...` et `export ...` au lieu de la syntaxe héritée CommonJS `require()` / `module.exports`.
- C'est également le format privilégié par les environnements Serverless récents comme **Vercel Functions**.

---

## 4. Scripts NPM

### `npm start` (`node server.js`)
- Exécute le serveur en mode production à l'aide de Node.js standard.
- C'est la commande exécutée par défaut lors d'un déploiement ou d'une exécution conteneurisée.

### `npm run dev` (`node --watch server.js`)
- Exécute le serveur en mode développement avec rechargement à chaud automatique (**Hot Reload**).
- Utilise l'option native `--watch` introduite dans Node.js (disponible depuis Node v18+). Chaque fois qu'un fichier (`server.js`, `data/wilayas.js`, etc.) est modifié, le serveur redémarre instantanément sans avoir besoin de dépendance externe lourde telle que `nodemon`.

---

## 5. Dépendances de Production

Le projet reste délibérément ultra-léger avec seulement 3 dépendances de production soigneusement choisies :

| Dépendance | Version | Rôle et Utilité |
|------------|---------|-----------------|
| **`express`** | `^4.21.0` | Framework web minimaliste et rapide pour Node.js. Il gère l'aiguillage des routes, les paramètres d'URL, la sérialisation JSON et le cycle de vie requête/réponse HTTP. |
| **`cors`** | `^2.8.5` | Middleware Express fournissant la gestion des en-têtes Cross-Origin Resource Sharing (CORS) afin d'autoriser l'accès depuis n'importe quelle origine web ou mobile. |
| **`dotenv`** | `^16.4.5` | Module sans dépendance qui charge les variables d'environnement depuis un fichier `.env` dans `process.env`. |
