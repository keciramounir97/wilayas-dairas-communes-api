# 🚀 Guide de Déploiement Vercel : `wilayas-dairas-communes-api.vercel.app`

Ce document détaille la configuration Serverless, l'architecture d'hébergement sur **Vercel**, et les étapes pour que l'API soit active et accessible sous l'adresse officielle :
👉 **`https://wilayas-dairas-communes-api.vercel.app`**

---

## 📑 Sommaire

1. [Architecture Serverless sur Vercel](#1-architecture-serverless-sur-vercel)
2. [Rôle de `vercel.json`](#2-rôle-de-verceljson)
3. [Rôle de `api/index.js`](#3-rôle-de-apiindexjs)
4. [Attribution du Domaine `wilayas-dairas-communes-api.vercel.app`](#4-attribution-du-domaine-wilayas-dairas-communes-api-vercelapp)
5. [Déploiement pas-à-pas](#5-déploiement-pas-à-pas)
   - [Option A : Déploiement automatique via GitHub (Recommandé)](#option-a--déploiement-automatique-via-github-recommandé)
   - [Option B : Déploiement via Vercel CLI](#option-b--déploiement-via-vercel-cli)
6. [Vérification du Fonctionnement](#6-vérification-du-fonctionnement)

---

## 1. Architecture Serverless sur Vercel

Sur un serveur classique (VPS, conteneur Docker), Node.js maintient un processus persistant qui écoute sur un port TCP (`app.listen(3000)`). 

Sur **Vercel**, l'infrastructure fonctionne en **Serverless** (fonctions sans serveur à la demande) :
- Les requêtes HTTP entrantes réveillent instantanément une fonction Node.js légère hébergée sur le réseau Edge de Vercel.
- L'application Express traite la requête, renvoie le JSON et se met en veille.
- Il n'y a **aucun coût d'infrastructure continu**, la disponibilité est de **99.99%**, et le passage à l'échelle (scalabilité) est automatique face aux pics de charge.

---

## 2. Rôle de `vercel.json`

Le fichier `vercel.json` situé à la racine du projet contient les règles de configuration :

```json
{
  "version": 2,
  "name": "wilayas-dairas-communes-api",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/api/index.js"
    }
  ]
}
```

### Explication des paramètres :
- **`"version": 2`** : Utilise le moteur de build et d'exécution moderne de Vercel.
- **`"name": "wilayas-dairas-communes-api"`** : Définit le nom officiel du projet sur la plateforme Vercel. Ce nom détermine automatiquement le sous-domaine par défaut attribué par Vercel : **`wilayas-dairas-communes-api.vercel.app`**.
- **`"rewrites"`** : Règle de réécriture universelle. Toute requête arrivant sur n'importe quel chemin (`/`, `/api/stats`, `/api/wilayas`, etc.) est redirigée en interne vers le point d'entrée Serverless `api/index.js`.

---

## 3. Rôle de `api/index.js`

Le fichier `api/index.js` fait le pont entre Express et l'environnement Serverless de Vercel :

```javascript
import app from '../server.js';

export default app;
```

Vercel détecte automatiquement tout fichier situé dans le dossier `api/` et l'exécute avec le runtime `@vercel/node`. Comme `server.js` exporte `app` (`export default app;`), Vercel peut directement acheminer les événements HTTP vers Express.

Dans `server.js`, la condition suivante empêche Express de tenter d'ouvrir un port réseau sur Vercel :
```javascript
if (!process.env.VERCEL && process.env.NODE_ENV !== 'test') {
  app.listen(PORT, ...);
}
```
Vercel définissant automatiquement la variable d'environnement `VERCEL=1`, aucun conflit de port ne peut survenir.

---

## 4. Attribution du Domaine `wilayas-dairas-communes-api.vercel.app`

Lorsqu'un projet nommé `wilayas-dairas-communes-api` est créé sur un compte Vercel :
1. Vercel génère le nom d'hôte : `<nom-du-projet>.vercel.app`.
2. Le projet s'appelant `wilayas-dairas-communes-api`, le lien public généré est :
   👉 **`https://wilayas-dairas-communes-api.vercel.app`**
3. Si le sous-domaine est déjà réservé par votre compte, il pointera directement sur ce déploiement. Si vous souhaitez forcer ou vérifier le domaine dans le dashboard Vercel :
   - Allez dans **Settings** > **Domains**.
   - Vérifiez la présence de `wilayas-dairas-communes-api.vercel.app`.
   - Vercel provisionne automatiquement le certificat SSL gratuit (HTTPS).

---

## 5. Déploiement pas-à-pas

### Option A : Déploiement automatique via GitHub (Recommandé)

1. Pousser le code vers le dépôt GitHub :
   ```bash
   git push -u origin main
   ```
2. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub.
3. Cliquez sur **"Add New..."** > **"Project"**.
4. Sélectionnez le dépôt `wilayas-dairas-communes-api`.
5. Dans le champ **Project Name**, assurez-vous qu'il indique :
   `wilayas-dairas-communes-api`
6. Laissez le champ **Framework Preset** sur `Other` (détection automatique Node.js).
7. Cliquez sur **Deploy**.
8. En moins de 30 secondes, l'API est déployée et accessible sur :
   `https://wilayas-dairas-communes-api.vercel.app`

### Option B : Déploiement via Vercel CLI

Si vous avez installé `vercel` globalement (`npm i -g vercel`) :
```bash
vercel login
vercel --prod
```

---

## 6. Vérification du Fonctionnement

Une fois déployé, vous pouvez tester en direct :

```bash
# Tester la route racine (Interface web)
curl -I https://wilayas-dairas-communes-api.vercel.app/

# Tester les compteurs
curl https://wilayas-dairas-communes-api.vercel.app/api/stats

# Tester la recherche d'une wilaya
curl https://wilayas-dairas-communes-api.vercel.app/api/wilayas/16
```
Toutes ces routes répondent instantanément en HTTPS avec en-têtes CORS configurés.
