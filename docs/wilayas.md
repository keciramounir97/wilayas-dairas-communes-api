# 📄 Documentation Détaillée : `data/wilayas.js`

Le fichier `data/wilayas.js` constitue la base de données de référence des **69 wilayas** de la République Algérienne Démocratique et Populaire, incluant les wilayas historiques (1 à 48) et les nouvelles wilayas issues du redécoupage territorial (49 à 69, telles que Timimoun, Bordj Badji Mokhtar, Ouled Djellal, Béni Abbès, In Salah, In Guezzam, Touggourt, Djanet, El M'Ghair, El Meniaa, etc.).

---

## 📑 Sommaire

1. [Rôle du Fichier](#1-rôle-du-fichier)
2. [Structure des Données](#2-structure-des-données)
   - [La collection `wilayas`](#la-collection-wilayas)
   - [Le dictionnaire de relation `wilayaDairas`](#le-dictionnaire-de-relation-wilayadairas)
3. [Détail des Propriétés](#3-détail-des-propriétés)
4. [Exemples d'Objets](#4-exemples-dobjets)
5. [Rôle du Mapping `wilayaDairas`](#5-rôle-du-mapping-wilayadairas)
6. [Cas d'Usage et Intégration](#6-cas-dusage-et-intégration)

---

## 1. Rôle du Fichier

Ce module exporte deux constantes JavaScript immuables :
1. **`wilayas`** : Un tableau contenant les 69 wilayas avec leur matricule officiel, leur désignation en langue française et leur désignation officielle en langue arabe.
2. **`wilayaDairas`** : Un dictionnaire indexé par le numéro de chaque wilaya, listant l'ensemble des identifiants (`id`) des daïras qui lui sont rattachées administrativement.

---

## 2. Structure des Données

### La collection `wilayas`

```javascript
export const wilayas = [
  {
    "id": 1,
    "nom_francais": "Adrar",
    "nom_arabe": "أدرار"
  },
  {
    "id": 16,
    "nom_francais": "Alger",
    "nom_arabe": "الجزائر"
  },
  ...
  {
    "id": 69,
    "nom_francais": "Labiodh Sidi Cheikh",
    "nom_arabe": "الأبيض سيدي الشيخ"
  }
];
```

### Le dictionnaire de relation `wilayaDairas`

```javascript
export const wilayaDairas = {
  "1": [1, 2, 3, 4, 5, 6],
  "2": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  ...
  "69": [548, 549, 550]
};
```

---

## 3. Détail des Propriétés

Chaque objet du tableau `wilayas` possède la structure stricte suivante :

| Propriété | Type | Obligatoire | Description détaillée |
|-----------|------|-------------|-----------------------|
| `id` | `Number` | Oui | Numéro d'ordre officiel (matricule administratif algérien) de la wilaya, allant de 1 à 69. Correspond au code utilisé sur les plaques d'immatriculation et documents officiels. |
| `nom_francais` | `String` | Oui | Nom officiel de la wilaya en caractères latins (orthographe française usuelle administrative). Exemples : `"Adrar"`, `"Alger"`, `"Oran"`, `"Constantine"`. |
| `nom_arabe` | `String` | Oui | Nom officiel de la wilaya en langue arabe (alphabet arabe). Exemples : `"أدرار"`, `"الجزائر"`, `"وهران"`, `"قسنطينة"`. |

---

## 4. Exemples d'Objets

### Exemple 1 : Wilaya historique (Alger - ID 16)
```json
{
  "id": 16,
  "nom_francais": "Alger",
  "nom_arabe": "الجزائر"
}
```

### Exemple 2 : Nouvelle wilaya du Sud (In Salah - ID 53)
```json
{
  "id": 53,
  "nom_francais": "In Salah",
  "nom_arabe": "عين صالح"
}
```

---

## 5. Rôle du Mapping `wilayaDairas`

La constante `wilayaDairas` associe chaque identifiant de wilaya (converti en chaîne de caractères pour servir de clé) à un tableau d'identifiants de daïras :
- **Clé** : String représentant l'`id` de la wilaya (ex: `"1"` pour Adrar, `"16"` pour Alger).
- **Valeur** : Array de nombres représentant les `id` uniques des daïras appartenant à cette wilaya.
- **Utilité algorithmique** :
  - Permet une résolution en complexité temporelle $O(1)$ pour connaître instantanément les identifiants des daïras d'une wilaya sans avoir à itérer sur l'intégralité du fichier des 550 daïras.
  - Sert de vérification d'intégrité référentielle entre les wilayas et les daïras.

Exemple pour la wilaya d'Adrar (`id: 1`) :
```javascript
"1": [1, 2, 3, 4, 5, 6]
```
Les daïras ayant les ID 1, 2, 3, 4, 5 et 6 appartiennent donc à la wilaya 1 (Adrar, Aoulef, Fenoughil, Reggane, Tsabit, Zaouiat Kounta).

---

## 6. Cas d'Usage et Intégration

Dans `server.js`, les données de `data/wilayas.js` sont utilisées par :
- `app.get('/api/wilayas')` : Renvoie la liste complète ou filtrée par texte `?q=` ou par numéro `?id=`.
- `app.get('/api/wilayas/:id')` : Trouve la wilaya via `wilayas.find(w => w.id === id)` et y adjoint les daïras et communes associées.
- `app.get('/api/stats')` : Calcule `wilayas.length` (= 69).
