# 📄 Documentation Détaillée : `server.js`

Le fichier `server.js` constitue le point d'entrée central du backend applicatif. Il configure le serveur HTTP avec le framework **Express.js**, applique les middlewares de sécurité et de parsing, déclare l'ensemble des routes d'API REST pour les Wilayas, Daïras et Communes, intègre une interface utilisateur web responsive sur la racine `/`, et gère l'exécution conditionnelle pour les environnements serveur classique et Serverless (Vercel).

---

## 📑 Sommaire

1. [Rôle et Vue Globale](#1-rôle-et-vue-globale)
2. [Imports et Modules](#2-imports-et-modules)
3. [Initialisation et Middlewares](#3-initialisation-et-middlewares)
4. [Fonctions Utilitaires (Helpers)](#4-fonctions-utilitaires-helpers)
5. [Endpoints de l'API REST](#5-endpoints-de-lapi-rest)
   - [GET /api/wilayas](#get-apiwilayas)
   - [GET /api/wilayas/:id](#get-apiwilayasid)
   - [GET /api/wilayas/:id/dairas](#get-apiwilayasiddairas)
   - [GET /api/dairas](#get-apidairas)
   - [GET /api/dairas/:id](#get-apidairasid)
   - [GET /api/dairas/:id/communes](#get-apidairasidcommunes)
   - [GET /api/communes](#get-apicommunes)
   - [GET /api/communes/:id](#get-apicommunesid)
   - [GET /api/stats](#get-apistats)
6. [Interface Web Intégrée (Route GET /)](#6-interface-web-intégrée-route-get-)
7. [Gestion de l'Export et Démarrage Conditionnel](#7-gestion-de-lexport-et-démarrage-conditionnel)

---

## 1. Rôle et Vue Globale

`server.js` a pour mission :
- Charger les variables d'environnement (`.env`) via `dotenv`.
- Instancier l'application Express.
- Fournir un support **CORS** universel permettant aux applications Frontend (React, Vue, Angular, Flutter, applications mobiles ou requêtes AJAX externes) d'interroger l'API sans blocage de politique Cross-Origin.
- Importer en mémoire vive les jeux de données administratifs (`wilayas`, `dairas`, `communes`) et leurs fonctions d'accès rapide.
- Implémenter la logique de filtrage multicritère (recherche textuelle bilingue arabe/français, filtrage par identifiant, par wilaya parente ou par daïra parente).
- Exposer une interface de démonstration prête à l'emploi accessible directement via le navigateur web sur `/`.
- Permettre à la fois le lancement local (`npm start` / `node server.js`) et l'exportation propre en tant que fonction Serverless pour **Vercel** (`export default app`).

---

## 2. Imports et Modules

```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { wilayas, wilayaDairas } from './data/wilayas.js';
import { dairas, getDairasByWilaya, getDairaById } from './data/dairas.js';
import { communes, getCommunesByDaira, getCommunesByWilaya, getCommuneById } from './data/communes.js';
```

### Explication ligne par ligne :
- **`import express from 'express';`** : Importe le framework web Express, permettant de définir des routes HTTP, de manipuler les objets de requête (`req`) et de réponse (`res`), et d'attacher des middlewares.
- **`import cors from 'cors';`** : Importe le middleware gérant les en-têtes HTTP `Access-Control-Allow-Origin`. Il autorise les requêtes provenant de domaines différents de celui de l'API.
- **`import dotenv from 'dotenv';`** : Importe la bibliothèque permettant d'injecter automatiquement les variables définies dans le fichier `.env` au sein de l'objet global Node.js `process.env`.
- **`import { wilayas, wilayaDairas } from './data/wilayas.js';`** : Récupère le tableau des 69 wilayas ainsi que le dictionnaire de correspondance des identifiants de daïras associées.
- **`import { dairas, getDairasByWilaya, getDairaById } from './data/dairas.js';`** : Récupère la collection des 550 daïras ainsi que les deux fonctions utilitaires de recherche par ID et par Wilaya.
- **`import { communes, getCommunesByDaira, getCommunesByWilaya, getCommuneById } from './data/communes.js';`** : Récupère les 1541 communes et leurs fonctions de filtrage par commune, par daïra ou par wilaya.

---

## 3. Initialisation et Middlewares

```javascript
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
```

### Explication ligne par ligne :
- **`dotenv.config();`** : Lit le fichier `.env` à la racine du projet et ajoute ses clés/valeurs dans `process.env`.
- **`const app = express();`** : Crée une instance de l'application Express.
- **`const PORT = process.env.PORT || 3000;`** : Définit le port d'écoute HTTP. Si la variable d'environnement `PORT` existe (par exemple définie par un hébergeur ou dans `.env`), elle est utilisée ; sinon, la valeur par défaut `3000` est retenue.
- **`app.use(cors());`** : Active le middleware CORS sur toutes les routes. Cela ajoute les en-têtes HTTP nécessaires (`Access-Control-Allow-Origin: *`) pour autoriser n'importe quel client externe à consommer l'API.
- **`app.use(express.json());`** : Middleware natif d'Express qui analyse automatiquement le corps des requêtes HTTP entrantes au format JSON (`Content-Type: application/json`) et peuple `req.body`.

---

## 4. Fonctions Utilitaires (Helpers)

### A. `normalizeString(str)`
```javascript
function normalizeString(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}
```
- **Rôle** : Nettoie et standardise une chaîne de caractères pour faciliter la recherche textuelle insensible aux accents, à la casse et aux espaces superflus.
- **Méthode `.normalize('NFD')`** : Décompose les caractères accentués en caractères de base suivis de leurs marques diacritiques (ex: `é` devient `e` + `´`).
- **`.replace(/[\u0300-\u036f]/g, '')`** : Supprime toutes les marques diacritiques par expression régulière (ex: `Médéa` devient `Medea`).
- **`.toLowerCase()`** : Convertit en minuscules pour rendre la recherche insensible aux majuscules.
- **`.trim()`** : Élimine les espaces blancs au début et à la fin.

### B. `searchItems(items, query, fields)`
```javascript
function searchItems(items, query, fields) {
  if (!query) return items;
  const rawQ = query.toLowerCase().trim();
  const normQ = normalizeString(query);
  return items.filter(item =>
    fields.some(field => {
      const val = item[field];
      if (!val) return false;
      const strVal = String(val);
      const lowerVal = strVal.toLowerCase();
      const normVal = normalizeString(strVal);
      return lowerVal.includes(rawQ) || normVal.includes(normQ);
    })
  );
}
```
- **Paramètres** :
  - `items` *(Array)* : Tableau d'objets dans lequel effectuer la recherche (wilayas, daïras ou communes).
  - `query` *(String)* : Texte recherché saisi par l'utilisateur via le paramètre de requête HTTP `?q=`.
  - `fields` *(Array<String>)* : Liste des propriétés de l'objet sur lesquelles appliquer le filtre (ex: `['nom_francais', 'nom_arabe']`).
- **Fonctionnement** :
  - Si `query` est vide, la fonction renvoie l'ensemble du tableau intact.
  - Elle calcule la version brute en minuscules `rawQ` (essentielle pour la correspondance exacte en caractères arabes comme `"الجزائر"`) et la version sans accents `normQ` (pour le français comme `"bejaia"` correspondant à `"Béjaïa"`).
  - Pour chaque élément, la méthode `.some()` teste si au moins un des champs cibles contient la chaîne recherchée.

---

## 5. Endpoints de l'API REST

### GET `/api/wilayas`
- **Description** : Renvoie la liste complète des wilayas avec possibilité de filtrage par texte ou par identifiant exact.
- **Paramètres de requête (Query params)** :
  - `?q=` *(optionnel)* : Recherche insensible aux accents et bilingue sur le nom français et le nom arabe.
  - `?id=` *(optionnel)* : Filtre par numéro officiel de wilaya (ex: `?id=16`).
- **Code de retour** : `200 OK`
- **Format de réponse** :
  ```json
  {
    "count": 69,
    "data": [
      { "id": 1, "nom_francais": "Adrar", "nom_arabe": "أدرار" },
      ...
    ]
  }
  ```

### GET `/api/wilayas/:id`
- **Description** : Retourne les détails complets d'une wilaya spécifique, accompagnés de la liste de toutes ses daïras, du nombre total de ses daïras et du nombre total de ses communes.
- **Paramètres d'URL** :
  - `:id` : Identifiant numérique de la wilaya (de 1 à 69).
- **Logique interne** :
  - Convertit `:id` en entier via `Number(req.params.id)`.
  - Recherche l'objet wilaya correspondant avec `wilayas.find()`.
  - Si introuvable, renvoie un statut `404 Not Found` avec `{ "error": "Wilaya non trouvée" }`.
  - Si trouvée, interroge `getDairasByWilaya(id)` et `getCommunesByWilaya(id)` pour enrichir la réponse.
- **Exemple de réponse** :
  ```json
  {
    "id": 16,
    "nom_francais": "Alger",
    "nom_arabe": "الجزائر",
    "dairas_count": 13,
    "communes_count": 57,
    "dairas": [ ... ]
  }
  ```

### GET `/api/wilayas/:id/dairas`
- **Description** : Liste exclusivement les daïras rattachées à la wilaya indiquée.
- **Codes de retour** :
  - `200 OK` avec la liste des daïras.
  - `404 Not Found` si aucune daïra n'est associée à cet ID.

### GET `/api/dairas`
- **Description** : Liste les daïras d'Algérie avec support de recherche et de filtrage par wilaya parente.
- **Paramètres de requête** :
  - `?q=` : Recherche textuelle sur `nom_francais` ou `nom_arabe`.
  - `?wilaya_id=` : Filtrage numérique par ID de la wilaya de rattachement.
- **Format de réponse** :
  ```json
  {
    "count": 550,
    "data": [
      {
        "wilaya_id": 1,
        "nom_francais": "Adrar",
        "nom_arabe": "أدرار",
        "id": 1,
        "nombre_communes": 3
      }
    ]
  }
  ```

### GET `/api/dairas/:id`
- **Description** : Détail d'une daïra par son ID unique, incluant la liste complète de ses communes membres.
- **Codes de retour** :
  - `200 OK` avec objet daïra enrichi (`communes_count`, tableau `communes`).
  - `404 Not Found` si l'identifiant n'existe pas.

### GET `/api/dairas/:id/communes`
- **Description** : Renvoie uniquement le tableau des communes appartenant à la daïra spécifiée.

### GET `/api/communes`
- **Description** : Retourne la liste des 1541 communes d'Algérie avec options de filtres combinés.
- **Paramètres de requête** :
  - `?q=` : Recherche textuelle appliquée à `nom_francais`, `nom_arabe`, `daira`, `post_code`.
  - `?wilaya_id=` : Filtre par numéro de wilaya.
  - `?daira_id=` : Filtre par numéro de daïra.
- **Exemple** : `GET /api/communes?wilaya_id=16&q=Hussein` renverra la commune d'Hussein Dey.

### GET `/api/communes/:id`
- **Description** : Détail individuel d'une commune par son identifiant unique (1 à 1541).
- **Format de réponse** :
  ```json
  {
    "id": 1,
    "nom_francais": "Adrar",
    "nom_arabe": "أدرار",
    "wilaya_id": 1,
    "daira": "Adrar",
    "daira_ar": "أدرار",
    "post_code": "01001",
    "daira_id": 1
  }
  ```

### GET `/api/stats`
- **Description** : Fournit les totaux chiffrés du découpage administratif algérien.
- **Réponse JSON** :
  ```json
  {
    "wilayas": 69,
    "dairas": 550,
    "communes": 1541
  }
  ```

---

## 6. Interface Web Intégrée (Route GET /)

La route racine `app.get('/', ...)` sert une page HTML5 complète directement en mémoire avec du CSS natif et du JavaScript asynchrone côté client :
- **Compteurs dynamiques** : Appel initial vers `/api/stats` affichant 3 cartes (Wilayas: 69, Daïras: 550, Communes: 1541).
- **Contrôles interactifs** :
  - Un sélecteur `<select id="type">` permettant d'alterner entre Wilayas, Daïras et Communes.
  - Un champ de saisie `<input id="search">` pour la recherche en direct.
  - Deux boutons d'action : "Rechercher" et "Tout afficher".
- **Tableau de données responsive** : Généré dynamiquement en DOM avec les colonnes adaptées au type d'entité sélectionné.
- **Optimisation d'affichage** : Pour les communes (1541 entrées), le navigateur tronque l'affichage aux 200 premiers éléments afin de préserver une fluidité maximale lors du rendu initial.

---

## 7. Gestion de l'Export et Démarrage Conditionnel

```javascript
// ========== EXPORT & START ==========
export default app;

if (!process.env.VERCEL && process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log(`Wilayas: ${wilayas.length} | Dairas: ${dairas.length} | Communes: ${communes.length}`);
  });
}
```

### Explication de l'architecture Serverless / Local :
1. **`export default app;`** : Exporte l'application Express configurée. C'est le point d'ancrage requis par **Vercel** pour exécuter le serveur sous forme de Serverless Function sans avoir à gérer de socket réseau persistant.
2. **Condition `!process.env.VERCEL && process.env.NODE_ENV !== 'test'`** :
   - En environnement **Vercel**, la variable d'environnement `process.env.VERCEL` vaut `"1"`. L'appel `app.listen()` est alors volontairement ignoré, évitant l'erreur de port déjà utilisé ou non autorisé.
   - En environnement **Local** (exécution via `node server.js` ou `npm start`), `process.env.VERCEL` n'est pas défini. Express démarre son serveur HTTP sur le port configuré et affiche les messages de confirmation dans le terminal.
