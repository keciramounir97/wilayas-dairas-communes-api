# 🌐 Référence Complète de l'API REST

Cette documentation présente l'ensemble des points d'accès (endpoints) exposés par l'API de découpage administratif de l'Algérie.

---

## 📌 Informations Générales

- **URL de Production (Vercel)** : `https://wilayas-dairas-communes-api.vercel.app`
- **URL Locale par défaut** : `http://localhost:3000`
- **Format d'échange** : JSON (`application/json; charset=utf-8`)
- **Gestion CORS** : Activée (`Access-Control-Allow-Origin: *`)
- **Méthode supportée** : `GET` (Consultation)

---

## 📋 Récapitulatif des Endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/` | Interface web interactive (table HTML + recherche) |
| `GET` | `/api/stats` | Compteurs globaux (wilayas, daïras, communes) |
| `GET` | `/api/wilayas` | Liste des wilayas (filtre `?q=`, `?id=`) |
| `GET` | `/api/wilayas/:id` | Détail d'une wilaya + ses daïras + compteurs |
| `GET` | `/api/wilayas/:id/dairas` | Liste des daïras d'une wilaya |
| `GET` | `/api/dairas` | Liste des daïras (filtre `?q=`, `?wilaya_id=`) |
| `GET` | `/api/dairas/:id` | Détail d'une daïra + ses communes |
| `GET` | `/api/dairas/:id/communes` | Liste des communes d'une daïra |
| `GET` | `/api/communes` | Liste des communes (`?q=`, `?wilaya_id=`, `?daira_id=`) |
| `GET` | `/api/communes/:id` | Détail d'une commune par son ID |

---

## 🔍 Détail des Endpoints

### 1. `GET /api/stats`
Renvoie les totaux numériques des entités administratives.

#### Exemple de requête :
```bash
curl https://wilayas-dairas-communes-api.vercel.app/api/stats
```

#### Réponse (`200 OK`) :
```json
{
  "wilayas": 69,
  "dairas": 550,
  "communes": 1541
}
```

---

### 2. `GET /api/wilayas`
Retourne la liste des wilayas d'Algérie.

#### Paramètres d'URL :
- `q` *(string, optionnel)* : Terme de recherche textuel insensible aux accents et à la casse (recherche sur le français et l'arabe).
- `id` *(number, optionnel)* : Numéro officiel de la wilaya.

#### Exemple :
```bash
curl "https://wilayas-dairas-communes-api.vercel.app/api/wilayas?q=oran"
```

#### Réponse (`200 OK`) :
```json
{
  "count": 1,
  "data": [
    {
      "id": 31,
      "nom_francais": "Oran",
      "nom_arabe": "وهران"
    }
  ]
}
```

---

### 3. `GET /api/wilayas/:id`
Récupère les informations complètes d'une wilaya, le nombre total de daïras, le nombre total de communes, et la liste détaillée de ses daïras.

#### Exemple :
```bash
curl https://wilayas-dairas-communes-api.vercel.app/api/wilayas/16
```

#### Réponse (`200 OK`) :
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
    },
    ...
  ]
}
```

#### Réponse en cas d'erreur (`404 Not Found`) :
```json
{
  "error": "Wilaya non trouvée"
}
```

---

### 4. `GET /api/wilayas/:id/dairas`
Retourne uniquement la liste des daïras appartenant à la wilaya `:id`.

#### Exemple :
```bash
curl https://wilayas-dairas-communes-api.vercel.app/api/wilayas/31/dairas
```

#### Réponse (`200 OK`) :
```json
{
  "wilaya_id": 31,
  "count": 9,
  "data": [
    {
      "wilaya_id": 31,
      "nom_francais": "Oran",
      "nom_arabe": "وهران",
      "id": 331,
      "nombre_communes": 1
    },
    ...
  ]
}
```

---

### 5. `GET /api/dairas`
Liste les daïras d'Algérie avec possibilité de recherche ou de filtrage par wilaya.

#### Paramètres :
- `q` *(string)* : Recherche sur `nom_francais` ou `nom_arabe`.
- `wilaya_id` *(number)* : Filtre par numéro de wilaya.

#### Exemple :
```bash
curl "https://wilayas-dairas-communes-api.vercel.app/api/dairas?wilaya_id=16"
```

---

### 6. `GET /api/dairas/:id`
Retourne le détail d'une daïra avec la liste de toutes ses communes associées.

#### Exemple :
```bash
curl https://wilayas-dairas-communes-api.vercel.app/api/dairas/164
```

#### Réponse (`200 OK`) :
```json
{
  "wilaya_id": 16,
  "nom_francais": "Dar El Beïda",
  "nom_arabe": "الدار البيضاء",
  "id": 164,
  "nombre_communes": 7,
  "communes_count": 7,
  "communes": [
    {
      "id": 558,
      "nom_francais": "Bab Ezzouar",
      "nom_arabe": "باب الزوار",
      "wilaya_id": 16,
      "daira": "Dar El Beïda",
      "daira_ar": "الدار البيضاء",
      "post_code": "16311",
      "daira_id": 164
    },
    ...
  ]
}
```

---

### 7. `GET /api/communes`
Recherche et liste les communes d'Algérie.

#### Paramètres :
- `q` *(string)* : Recherche textuelle multicritère (nom français, arabe, nom de daïra, code postal).
- `wilaya_id` *(number)* : Filtrage par wilaya.
- `daira_id` *(number)* : Filtrage par daïra.

#### Exemple (Recherche par code postal) :
```bash
curl "https://wilayas-dairas-communes-api.vercel.app/api/communes?q=16000"
```

#### Exemple (Toutes les communes d'Oran) :
```bash
curl "https://wilayas-dairas-communes-api.vercel.app/api/communes?wilaya_id=31"
```

---

### 8. `GET /api/communes/:id`
Détail individuel d'une commune par son identifiant unique.

#### Exemple :
```bash
curl https://wilayas-dairas-communes-api.vercel.app/api/communes/558
```

#### Réponse (`200 OK`) :
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

---

## 💻 Exemples d'intégration Frontend (JavaScript / Fetch)

### Remplir un menu déroulant des Wilayas :
```javascript
async function fetchWilayas() {
  const response = await fetch('https://wilayas-dairas-communes-api.vercel.app/api/wilayas');
  const { data } = await response.json();
  
  const select = document.getElementById('wilaya-select');
  data.forEach(wilaya => {
    const option = document.createElement('option');
    option.value = wilaya.id;
    option.textContent = `${wilaya.id} - ${wilaya.nom_francais} (${wilaya.nom_arabe})`;
    select.appendChild(option);
  });
}
```

### Charger les communes dès qu'une Wilaya est sélectionnée :
```javascript
async function onWilayaChanged(wilayaId) {
  const response = await fetch(`https://wilayas-dairas-communes-api.vercel.app/api/communes?wilaya_id=${wilayaId}`);
  const { data } = await response.json();
  
  const communeSelect = document.getElementById('commune-select');
  communeSelect.innerHTML = '<option value="">Choisir une commune...</option>';
  
  data.forEach(commune => {
    const opt = document.createElement('option');
    opt.value = commune.id;
    opt.textContent = `${commune.nom_francais} - ${commune.post_code}`;
    communeSelect.appendChild(opt);
  });
}
```
