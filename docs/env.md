# 📄 Documentation Détaillée : `.env` & `.env.example`

Cette documentation détaille la gestion de la configuration d'environnement du projet via les fichiers `.env` et `.env.example`.

---

## 📑 Sommaire

1. [Rôle des Fichiers d'Environnement](#1-rôle-des-fichiers-denvironnement)
2. [Variables Disponibles](#2-variables-disponibles)
3. [Différence entre `.env` et `.env.example`](#3-différence-entre-env-et-envexample)
4. [Sécurité et Bonnes Pratiques Git](#4-sécurité-et-bonnes-pratiques-git)

---

## 1. Rôle des Fichiers d'Environnement

Dans une application Node.js moderne, la configuration varie selon le contexte d'exécution (développement local, test, pré-production, production sur Vercel). 

Le package `dotenv` lit à l'initialisation de `server.js` le fichier `.env` situé à la racine du projet et injecte ses valeurs dans la variable globale `process.env`.

---

## 2. Variables Disponibles

Le fichier contient les variables suivantes :

```env
PORT=3000
NODE_ENV=development
```

### Explication de chaque variable :

| Variable | Valeur par défaut | Description détaillée |
|----------|-------------------|-----------------------|
| `PORT` | `3000` | Port d'écoute TCP utilisé par Express lors du démarrage du serveur local (`http://localhost:3000`). Si vous modifiez cette valeur (ex: `PORT=5000`), le serveur écoutera sur le port 5000. Sur Vercel, cette variable est automatiquement gérée par la plateforme Serverless. |
| `NODE_ENV` | `development` | Indique l'environnement d'exécution. Les valeurs courantes sont `development` (en local) ou `production` (lorsque déployé en production). |

---

## 3. Différence entre `.env` et `.env.example`

- **`.env`** : Fichier local utilisé par votre machine pendant le développement. Il ne doit **jamais** être versionné dans Git lorsqu'il contient des clés secrètes.
- **`.env.example`** : Fichier modèle versionné dans le dépôt Git. Il sert de guide pour les développeurs ou contributeurs qui clonent le projet, leur montrant quelles variables configurer.

Pour initialiser un environnement neuf :
```bash
cp .env.example .env
```

---

## 4. Sécurité et Bonnes Pratiques Git

Dans le fichier `.gitignore`, la ligne suivante est présente :
```gitignore
.env
```
Cela garantit que les configurations spécifiques à votre machine locale ne seront pas accidentellement poussées sur GitHub.
