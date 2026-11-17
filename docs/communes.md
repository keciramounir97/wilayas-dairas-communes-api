# 📄 Documentation Détaillée : `data/communes.js`

Le fichier `data/communes.js` représente le répertoire exhaustif des **1541 communes** (municipalités / collectivités territoriales locales) de l'ensemble du territoire algérien. Il s'agit du niveau administratif le plus granulaire, indispensable pour les formulaires de livraison e-commerce, les calculs de frais d'expédition, la facturation et la gestion logistique en Algérie.

---

## 📑 Sommaire

1. [Rôle du Fichier](#1-rôle-du-fichier)
2. [Structure des Données](#2-structure-des-données)
3. [Détail des Propriétés d'une Commune](#3-détail-des-propriétés-dune-commune)
4. [Exemples Concrets](#4-exemples-concrets)
5. [Fonctions Helpers Exportées](#5-fonctions-helpers-exportées)
   - [`getCommuneById(id)`](#getcommunebyidid)
   - [`getCommunesByWilaya(wilayaId)`](#getcommunesbywilayawilayaid)
   - [`getCommunesByDaira(dairaId)`](#getcommunesbydairadairaid)
6. [Cas d'Usage (E-Commerce, Yalidine, ZR Express, etc.)](#6-cas-dusage-e-commerce-yalidine-zr-express-etc)

---

## 1. Rôle du Fichier

Ce fichier exporte :
- La collection complète des 1541 communes d'Algérie sous forme d'un tableau JavaScript (`communes`).
- Trois fonctions helpers optimisées permettant de filtrer les communes par daïra, par wilaya ou de récupérer une commune unitaire par son identifiant.
- Chaque commune est enrichie des données de localisation directe : son code postal officiel (`post_code`), son nom en français et en arabe, sa wilaya de rattachement (`wilaya_id`), le libellé de sa daïra en français et en arabe, et l'identifiant numérique de sa daïra (`daira_id`).

---

## 2. Structure des Données

```javascript
import { dairas } from './dairas.js';
import { wilayas } from './wilayas.js';

export const communes = [
  {
    "id": 1,
    "nom_francais": "Adrar",
    "nom_arabe": "أدرار",
    "wilaya_id": 1,
    "daira": "Adrar",
    "daira_ar": "أدرار",
    "post_code": "01001",
    "daira_id": 1
  },
  {
    "id": 2,
    "nom_francais": "Tamest",
    "nom_arabe": "تأماست",
    "wilaya_id": 1,
    "daira": "Fenoughil",
    "daira_ar": "فنوغيل",
    "post_code": "01002",
    "daira_id": 3
  },
  ...
  {
    "id": 1541,
    "nom_francais": "Ouled Sidi Mihoub",
    "nom_arabe": "أولاد سيدي ميهوب",
    "wilaya_id": 48,
    "daira": "Djidiouia",
    "daira_ar": "جديوية",
    "post_code": "48038",
    "daira_id": 473
  }
];
```

---

## 3. Détail des Propriétés d'une Commune

Chaque objet représentant une commune comprend les attributs suivants :

| Propriété | Type | Exemple | Description |
|-----------|------|---------|-------------|
| `id` | `Number` | `1` | Identifiant unique de la commune (clé primaire locale, 1 à 1541). |
| `nom_francais` | `String` | `"Alger Centre"` | Nom officiel de la commune en langue française. |
| `nom_arabe` | `String` | `"الجزائر الوسطى"` | Nom officiel de la commune en langue arabe. |
| `wilaya_id` | `Number` | `16` | Identifiant de la wilaya de rattachement (1 à 69). |
| `daira` | `String` | `"Sidi M'Hamed"` | Nom de la daïra de tutelle en langue française. |
| `daira_ar` | `String` | `"سيدي امحمد"` | Nom de la daïra de tutelle en langue arabe. |
| `post_code` | `String` | `"16000"` | Code postal officiel à 5 chiffres attribué par Algérie Poste. |
| `daira_id` | `Number` | `169` | Identifiant numérique de la daïra parente dans le fichier `dairas.js`. |

---

## 4. Exemples Concrets

### Exemple 1 : Commune de Bab Ezzouar (Wilaya d'Alger)
```json
{
  "id": 558,
  "nom_francais": "Bab Ezzouar",
  "nom_arabe": "باب الزوار",
  "wilaya_id": 16,
  "daira": "Dar El Beïda",
  "daira_ar": "الدار البيضاء",
  "post_code": "16311",
  "daira_id": 164
}
```

### Exemple 2 : Commune d'Es Senia (Wilaya d'Oran)
```json
{
  "id": 1024,
  "nom_francais": "Es Senia",
  "nom_arabe": "السانية",
  "wilaya_id": 31,
  "daira": "Es Senia",
  "daira_ar": "السانية",
  "post_code": "31006",
  "daira_id": 332
}
```

---

## 5. Fonctions Helpers Exportées

### A. `getCommuneById(id)`
```javascript
export const getCommuneById = (id) => communes.find(c => c.id === id);
```
- **Description** : Renvoie l'objet commune correspondant à l'identifiant exact fourni en paramètre.
- **Paramètre** : `id` (`Number`) — Valeur comprise entre 1 et 1541.
- **Retour** : Objet `Commune` ou `undefined` si non trouvé.
- **Utilisation serveur** : Consommé par la route `GET /api/communes/:id`.

### B. `getCommunesByWilaya(wilayaId)`
```javascript
export const getCommunesByWilaya = (wilayaId) => communes.filter(c => c.wilaya_id === wilayaId);
```
- **Description** : Retourne toutes les communes dépendant de la wilaya spécifiée.
- **Paramètre** : `wilayaId` (`Number`) — Code wilaya (1 à 69).
- **Retour** : Tableau d'objets `Commune`.
- **Utilisation serveur** : Permet à `GET /api/wilayas/:id` d'alimenter `communes_count` et les relations globales.

### C. `getCommunesByDaira(dairaId)`
```javascript
export const getCommunesByDaira = (dairaId) => communes.filter(c => c.daira_id === dairaId);
```
- **Description** : Récupère les communes administrées par une daïra précise.
- **Paramètre** : `dairaId` (`Number`) — Identifiant unique de la daïra (1 à 550).
- **Retour** : Tableau d'objets `Commune`.
- **Utilisation serveur** : Consommé par `GET /api/dairas/:id` et `GET /api/dairas/:id/communes`.

---

## 6. Cas d'Usage (E-Commerce, Yalidine, ZR Express, etc.)

Le fichier `communes.js` répond aux exigences techniques des plateformes modernes :
- **Menus déroulants en cascade (Dependent Dropdowns)** :
  1. L'utilisateur choisit sa Wilaya (ex: ID 16 - Alger).
  2. L'interface filtre les Daïras ou Communes via `wilaya_id: 16`.
  3. L'utilisateur sélectionne sa commune pour afficher le code postal pré-rempli.
- **Intégration transporteurs de livraison** : Les transporteurs algériens (Yalidine, ZR Express, Maystro, Procolis, Kazitour, etc.) exigent la concordance exacte de la wilaya et de la commune pour le calcul des tarifs Stop-Desk ou livraison à domicile.
