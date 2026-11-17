# 📚 Documentation Technique Complète — API Découpage Administratif Algérie

Bienvenue dans la documentation technique exhaustive de l'API de découpage administratif de l'Algérie (**Wilayas, Daïras et Communes**).

Ce projet fournit une API REST haute performance basée sur **Node.js** et **Express**, intégrant l'intégralité du découpage administratif algérien (décret exécutif portant création des 69 wilayas, 550 daïras et 1541 communes).

---

## 🗂️ Sommaire de la documentation

Chaque composant et fichier du projet possède son propre fichier de documentation détaillé expliquant son rôle, chaque ligne de code, ses méthodes, fonctions, propriétés et structures de données :

| Fichier de documentation | Fichier source concerné | Description détaillée |
|--------------------------|-------------------------|-----------------------|
| [docs/server.md](server.md) | `server.js` | Serveur Express, middlewares CORS, dotenv, fonctions de recherche avec normalisation diacritique, toutes les routes API et interface Web HTML intégrée. |
| [docs/wilayas.md](wilayas.md) | `data/wilayas.js` | Base de données des 69 wilayas, propriétés (`id`, `nom_francais`, `nom_arabe`), dictionnaire relationnel `wilayaDairas`. |
| [docs/dairas.md](dairas.md) | `data/dairas.js` | Base de données des 550 daïras, propriétés (`id`, `wilaya_id`, `nom_francais`, `nom_arabe`, `nombre_communes`), fonctions helpers de filtrage. |
| [docs/communes.md](communes.md) | `data/communes.js` | Base de données des 1541 communes, codes postaux, relations (`wilaya_id`, `daira_id`), fonctions d'accès rapide. |
| [docs/api.md](api.md) | Routes REST | Guide de référence de tous les endpoints HTTP, paramètres de requête, codes d'état et exemples de réponses JSON. |
| [docs/vercel.md](vercel.md) | `vercel.json` & `api/index.js` | Architecture de déploiement Serverless sur Vercel, nom de domaine `wilayas-dairas-communes-api.vercel.app`, configuration des réécritures d'URL. |
| [docs/package.md](package.md) | `package.json` | Configuration du projet, spécification ECMAScript Modules (`type: "module"`), dépendances (`express`, `cors`, `dotenv`) et scripts de démarrage. |
| [docs/env.md](env.md) | `.env` / `.env.example` | Variables d'environnement (`PORT`, `NODE_ENV`), gestion de la configuration locale vs production. |

---

## 🏛️ Vue d'ensemble de l'architecture

Le projet est conçu selon les principes de légèreté, portabilité et rapidité :
- **Pas de base de données externe requise (Zero-DB setup)** : Les données sont stockées en mémoire vive sous forme de collections JavaScript natives immuables. Le temps de réponse moyen est inférieur à **2ms**.
- **Double compatibilité** :
  - **Local** : Démarrage classique avec serveur HTTP persistant via `node server.js` ou `npm run dev`.
  - **Serverless (Vercel)** : Export de l'application Express via `api/index.js` et règles d'acheminement dans `vercel.json`.
- **Bilingue (Français & Arabe)** : Toutes les entités administratives comportent leurs dénominations officielles en alphabet latin et en alphabet arabe.
- **Support des recherches souples** : Algorithme de normalisation supprimant les accents (ex: `médéa` = `medea`) et insensible à la casse.
