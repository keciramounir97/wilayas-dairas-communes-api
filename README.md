# 🇩🇿 API Découpage Administratif de l'Algérie

[![Vercel Deployment](https://img.shields.io/badge/Vercel-wilayas--dairas--communes--api.vercel.app-black?logo=vercel&style=for-the-badge)](https://wilayas-dairas-communes-api.vercel.app)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.21.0-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Une API REST complète, ultra-rapide et bilingue (**Français & Arabe**) fournissant l'intégralité du découpage administratif de l'Algérie conformément aux derniers décrets officiels :

- **69 Wilayas** (les 48 wilayas historiques + les 21 nouvelles wilayas du Sud et des Hauts-Plateaux).
- **550 Daïras** avec cartographie exacte et décompte des communes associées.
- **1541 Communes** avec leurs codes postaux officiels d'Algérie Poste et leurs liaisons de daïras et wilayas.
- **Interface web interactive intégrée** avec filtres et recherche instantanée.
- **Zéro base de données externe requise** : Données servies en mémoire avec des temps de réponse inférieurs à **2ms**.

---

## 🚀 Démo en Ligne (Production)

L'API est déployée et accessible publiquement sur **Vercel** :

👉 **[https://wilayas-dairas-communes-api.vercel.app](https://wilayas-dairas-communes-api.vercel.app)**

Exemples d'accès direct en production :
- **Interface & Table** : [https://wilayas-dairas-communes-api.vercel.app/](https://wilayas-dairas-communes-api.vercel.app/)
- **Statistiques** : [https://wilayas-dairas-communes-api.vercel.app/api/stats](https://wilayas-dairas-communes-api.vercel.app/api/stats)
- **Wilayas** : [https://wilayas-dairas-communes-api.vercel.app/api/wilayas](https://wilayas-dairas-communes-api.vercel.app/api/wilayas)
- **Wilaya d'Alger (ID 16)** : [https://wilayas-dairas-communes-api.vercel.app/api/wilayas/16](https://wilayas-dairas-communes-api.vercel.app/api/wilayas/16)
- **Daïras d'Oran** : [https://wilayas-dairas-communes-api.vercel.app/api/dairas?wilaya_id=31](https://wilayas-dairas-communes-api.vercel.app/api/dairas?wilaya_id=31)
- **Communes de Constantine** : [https://wilayas-dairas-communes-api.vercel.app/api/communes?wilaya_id=25](https://wilayas-dairas-communes-api.vercel.app/api/communes?wilaya_id=25)

---

## 📁 Structure du Projet

```
wilayas-dairas-communes-api/
├── api/
│   └── index.js              # Point d'entrée Serverless pour Vercel
├── data/
│   ├── wilayas.js            # 69 wilayas + dictionnaire de mapping des daïras
│   ├── dairas.js             # 550 daïras + fonctions helpers de filtrage
│   └── communes.js           # 1541 communes + codes postaux + helpers
├── docs/                     # Documentation technique exhaustive en français
│   ├── README.md             # Sommaire de la documentation
│   ├── server.md             # Analyse détaillée de server.js
│   ├── wilayas.md            # Structure et propriétés de wilayas.js
│   ├── dairas.md             # Structure et propriétés de dairas.js
│   ├── communes.md           # Structure et propriétés de communes.js
│   ├── api.md                # Guide exhaustif des endpoints HTTP & exemples
│   ├── vercel.md             # Guide de déploiement et configuration Vercel
│   ├── package.md            # Analyse de package.json et dépendances
│   └── env.md                # Configuration des variables d'environnement
├── .env                      # Variables d'environnement locales
├── .env.example              # Modèle de configuration
├── .gitignore                # Exclusion Git (node_modules, .env, etc.)
├── package.json              # Dépendances et scripts (ES Modules)
├── server.js                 # Serveur Express, middlewares, routes et UI
├── vercel.json               # Configuration des règles de réécriture Vercel
└── README.md                 # Ce document
```

---

## 🛠️ Installation et Démarrage Local

### Prérequis
- [Node.js](https://nodejs.org) version 18.0.0 ou supérieure
- [Git](https://git-scm.com/)

### 1. Cloner le dépôt
```bash
git clone git@github.com:keciramounir97/wilayas-dairas-communes-api.git
cd wilayas-dairas-communes-api
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'environnement (Optionnel)
```bash
cp .env.example .env
```
Par défaut, le serveur tourne sur le port `3000`.

### 4. Lancer le serveur

**Mode standard :**
```bash
npm start
```

**Mode développement (avec rechargement automatique) :**
```bash
npm run dev
```

Ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000) pour tester l'interface.

---

## 📖 Endpoints de l'API REST

| Méthode | Route | Description | Filtres supportés |
|---------|-------|-------------|-------------------|
| `GET` | `/` | Interface web avec tableau interactif et recherche | - |
| `GET` | `/api/stats` | Totaux des wilayas, daïras et communes | - |
| `GET` | `/api/wilayas` | Liste des wilayas | `?q=` *(texte bilingue)*, `?id=` |
| `GET` | `/api/wilayas/:id` | Détail d'une wilaya + ses daïras + totaux | - |
| `GET` | `/api/wilayas/:id/dairas` | Liste des daïras d'une wilaya | - |
| `GET` | `/api/dairas` | Liste des daïras | `?q=`, `?wilaya_id=` |
| `GET` | `/api/dairas/:id` | Détail d'une daïra + ses communes | - |
| `GET` | `/api/dairas/:id/communes` | Liste des communes d'une daïra | - |
| `GET` | `/api/communes` | Liste des 1541 communes | `?q=`, `?wilaya_id=`, `?daira_id=` |
| `GET` | `/api/communes/:id` | Détail d'une commune par son identifiant | - |

---

## 💡 Exemples de Réponses JSON

### `GET /api/stats`
```json
{
  "wilayas": 69,
  "dairas": 550,
  "communes": 1541
}
```

### `GET /api/wilayas/16`
```json
{
  "id": 16,
  "nom_francais": "Alger",
  "nom_arabe": "الجزائر",
  "dairas_count": 13,
  "communes_count": 57,
  "dairas": [
    {
      "wilaya_id": 16,
      "nom_francais": "Bab El Oued",
      "nom_arabe": "باب الوادي",
      "id": 162,
      "nombre_communes": 5
    }
  ]
}
```

### `GET /api/communes?wilaya_id=31&q=oran`
```json
{
  "count": 1,
  "data": [
    {
      "id": 1020,
      "nom_francais": "Oran",
      "nom_arabe": "وهران",
      "wilaya_id": 31,
      "daira": "Oran",
      "daira_ar": "وهران",
      "post_code": "31000",
      "daira_id": 331
    }
  ]
}
```

---

## 💻 Intégration Client (JavaScript / TypeScript)

```javascript
// Récupérer toutes les communes d'Alger (ID 16)
async function getCommunesAlger() {
  const res = await fetch('https://wilayas-dairas-communes-api.vercel.app/api/communes?wilaya_id=16');
  const json = await res.json();
  console.log(`Nombre de communes trouvées : ${json.count}`);
  console.log(json.data);
}

getCommunesAlger();
```

---

## 📚 Documentation Technique Détaillée (`docs/`)

Chaque module fait l'objet d'un fichier de documentation dédié expliquant chaque ligne, fonction, paramètre et cas d'usage :

- 📘 [docs/README.md](docs/README.md) — Sommaire et architecture générale
- 📘 [docs/server.md](docs/server.md) — Analyse complète de `server.js` (Express, middlewares, routes, helpers, UI)
- 📘 [docs/wilayas.md](docs/wilayas.md) — Base de données des 69 wilayas et dictionnaire `wilayaDairas`
- 📘 [docs/dairas.md](docs/dairas.md) — Base de données des 550 daïras et fonctions helpers
- 📘 [docs/communes.md](docs/communes.md) — Base de données des 1541 communes et codes postaux
- 📘 [docs/api.md](docs/api.md) — Guide complet des endpoints REST avec exemples cURL & JS
- 📘 [docs/vercel.md](docs/vercel.md) — Guide de déploiement Serverless sur Vercel
- 📘 [docs/package.md](docs/package.md) — Manifeste npm et configuration des dépendances
- 📘 [docs/env.md](docs/env.md) — Configuration des variables d'environnement

---

## 🚢 Déploiement sur Vercel

Le projet est configuré nativement pour être hébergé sur Vercel sans aucune modification requise :

1. Connectez votre compte GitHub sur [vercel.com](https://vercel.com).
2. Importez le dépôt `wilayas-dairas-communes-api`.
3. Conservez le nom de projet `wilayas-dairas-communes-api`.
4. Cliquez sur **Deploy**.
5. Votre API est instantanément en ligne sur **`https://wilayas-dairas-communes-api.vercel.app`**.

Voir le guide détaillé : [docs/vercel.md](docs/vercel.md).

---

## 👤 Auteur

- **Mounir Kecira** — GitHub : [@keciramounir97](https://github.com/keciramounir97)

## 📄 Licence

Ce projet est sous licence libre [MIT](LICENSE). Vous êtes libre de l'utiliser, le modifier et l'intégrer dans vos applications personnelles et commerciales.
