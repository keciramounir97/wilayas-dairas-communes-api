# 📄 Documentation Détaillée : `data/dairas.js`

Le fichier `data/dairas.js` regroupe l'inventaire officiel exhaustif des **550 daïras** (sous-préfectures / arrondissements administratifs) réparties à travers les 69 wilayas d'Algérie. Il expose également deux fonctions utilitaires d'accès rapide (*helpers*).

---

## 📑 Sommaire

1. [Rôle du Fichier](#1-rôle-du-fichier)
2. [Structure des Données](#2-structure-des-données)
3. [Détail des Propriétés d'une Daïra](#3-détail-des-propriétés-dune-daïra)
4. [Exemples Concrets](#4-exemples-concrets)
5. [Fonctions Helpers Exportées](#5-fonctions-helpers-exportées)
   - [`getDairaById(id)`](#getdairabyidid)
   - [`getDairasByWilaya(wilayaId)`](#getdairasbywilayawilayaid)
6. [Intégration dans le Serveur](#6-intégration-dans-le-serveur)

---

## 1. Rôle du Fichier

Une daïra est une circonscription administrative intermédiaire entre la wilaya (niveau supérieur) et la commune (niveau municipal de base). 

Le module `data/dairas.js` :
- Contient la collection complète ordonnée de 550 daïras.
- Relie explicitement chaque daïra à sa wilaya de rattachement via la clé étrangère logique `wilaya_id`.
- Indique pour chaque daïra le nombre de communes qui lui sont subordonnées (`nombre_communes`).
- Fournit deux méthodes de sélection optimisées sans nécessiter de requête SQL ou de base externe.

---

## 2. Structure des Données

```javascript
import { wilayas } from './wilayas.js';

export const dairas = [
  {
    "wilaya_id": 1,
    "nom_francais": "Adrar",
    "nom_arabe": "أدرار",
    "id": 1,
    "nombre_communes": 3
  },
  {
    "wilaya_id": 1,
    "nom_francais": "Aoulef",
    "nom_arabe": "أولف",
    "id": 2,
    "nombre_communes": 4
  },
  ...
  {
    "wilaya_id": 69,
    "nom_francais": "Labiodh Sidi Cheikh",
    "nom_arabe": "الأبيض سيدي الشيخ",
    "id": 550,
    "nombre_communes": 3
  }
];
```

---

## 3. Détail des Propriétés d'une Daïra

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | `Number` | Identifiant numérique unique de la daïra (valeur de 1 à 550). |
| `wilaya_id` | `Number` | Clé de relation correspondant à l'`id` de la wilaya parente (de 1 à 69). |
| `nom_francais` | `String` | Nom de la daïra en français (ex: `"Bab El Oued"`, `"Dar El Beïda"`, `"Oran"`). |
| `nom_arabe` | `String` | Nom de la daïra en arabe (ex: `"باب الوادي"`, `"الدار البيضاء"`, `"وهران"`). |
| `nombre_communes` | `Number` | Nombre total de communes faisant partie de cette daïra. |

---

## 4. Exemples Concrets

### Exemple 1 : Daïra de Sidi M'Hamed (Wilaya d'Alger - ID 16)
```json
{
  "id": 169,
  "wilaya_id": 16,
  "nom_francais": "Sidi M'Hamed",
  "nom_arabe": "سيدي امحمد",
  "nombre_communes": 4
}
```

### Exemple 2 : Daïra de Timimoun (Wilaya de Timimoun - ID 49)
```json
{
  "id": 484,
  "wilaya_id": 49,
  "nom_francais": "Timimoun",
  "nom_arabe": "تيميمون",
  "nombre_communes": 2
}
```

---

## 5. Fonctions Helpers Exportées

### `getDairaById(id)`
```javascript
export const getDairaById = (id) => dairas.find(d => d.id === id);
```
- **Rôle** : Recherche et retourne l'objet daïra correspondant exactement à l'identifiant numérique fourni.
- **Paramètre** : `id` (`Number`) — L'identifiant unique de la daïra.
- **Retour** : L'objet daïra s'il existe, ou `undefined` si aucun élément ne correspond.
- **Utilisation** : Utilisée dans la route `GET /api/dairas/:id` pour retourner le détail unitaire d'une daïra.

---

### `getDairasByWilaya(wilayaId)`
```javascript
export const getDairasByWilaya = (wilayaId) => dairas.filter(d => d.wilaya_id === wilayaId);
```
- **Rôle** : Filtre le tableau des 550 daïras pour renvoyer toutes celles appartenant à une wilaya donnée.
- **Paramètre** : `wilayaId` (`Number`) — L'identifiant de la wilaya cible (1 à 69).
- **Retour** : Un nouveau tableau JavaScript (`Array`) contenant toutes les daïras rattachées.
- **Utilisation** :
  - Dans `GET /api/wilayas/:id` pour intégrer la liste `dairas` et le décompte `dairas_count`.
  - Dans `GET /api/wilayas/:id/dairas` pour exposer la liste directe.
  - Dans `GET /api/dairas?wilaya_id=X`.

---

## 6. Intégration dans le Serveur

Dans `server.js` :
- `dairas` est importé pour servir la route globale `GET /api/dairas` et alimenter le compteur `GET /api/stats`.
- `getDairaById` est appelé sur `GET /api/dairas/:id`.
- `getDairasByWilaya` est appelé sur `GET /api/wilayas/:id` et `GET /api/wilayas/:id/dairas`.
