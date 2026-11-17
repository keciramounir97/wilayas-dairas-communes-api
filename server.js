import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { wilayas, wilayaDairas } from './data/wilayas.js';
import { dairas, getDairasByWilaya, getDairaById } from './data/dairas.js';
import { communes, getCommunesByDaira, getCommunesByWilaya, getCommuneById } from './data/communes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ========== HELPERS ==========
function normalizeString(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

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

// ========== ROUTES API ==========

// GET /api/wilayas  ?q=  ?id=
app.get('/api/wilayas', (req, res) => {
  const { q, id } = req.query;
  let result = [...wilayas];

  if (id) {
    result = result.filter(w => w.id === Number(id));
  }
  if (q) {
    result = searchItems(result, q, ['nom_francais', 'nom_arabe']);
  }

  res.json({
    count: result.length,
    data: result
  });
});

// GET /api/wilayas/:id
app.get('/api/wilayas/:id', (req, res) => {
  const id = Number(req.params.id);
  const wilaya = wilayas.find(w => w.id === id);
  if (!wilaya) return res.status(404).json({ error: 'Wilaya non trouvée' });

  const dairasList = getDairasByWilaya(id);
  const communesList = getCommunesByWilaya(id);

  res.json({
    ...wilaya,
    dairas_count: dairasList.length,
    communes_count: communesList.length,
    dairas: dairasList
  });
});

// GET /api/wilayas/:id/dairas
app.get('/api/wilayas/:id/dairas', (req, res) => {
  const id = Number(req.params.id);
  const dairasList = getDairasByWilaya(id);
  if (!dairasList.length) return res.status(404).json({ error: 'Aucune daira trouvée pour cette wilaya' });

  res.json({
    wilaya_id: id,
    count: dairasList.length,
    data: dairasList
  });
});

// GET /api/dairas  ?q=  ?wilaya_id=
app.get('/api/dairas', (req, res) => {
  const { q, wilaya_id } = req.query;
  let result = [...dairas];

  if (wilaya_id) {
    result = result.filter(d => d.wilaya_id === Number(wilaya_id));
  }
  if (q) {
    result = searchItems(result, q, ['nom_francais', 'nom_arabe']);
  }

  res.json({
    count: result.length,
    data: result
  });
});

// GET /api/dairas/:id
app.get('/api/dairas/:id', (req, res) => {
  const daira = getDairaById(Number(req.params.id));
  if (!daira) return res.status(404).json({ error: 'Daira non trouvée' });

  const communesList = getCommunesByDaira(daira.id);
  res.json({
    ...daira,
    communes_count: communesList.length,
    communes: communesList
  });
});

// GET /api/dairas/:id/communes
app.get('/api/dairas/:id/communes', (req, res) => {
  const id = Number(req.params.id);
  const communesList = getCommunesByDaira(id);
  if (!communesList.length) return res.status(404).json({ error: 'Aucune commune trouvée pour cette daira' });

  res.json({
    daira_id: id,
    count: communesList.length,
    data: communesList
  });
});

// GET /api/communes  ?q=  ?wilaya_id=  ?daira_id=
app.get('/api/communes', (req, res) => {
  const { q, wilaya_id, daira_id } = req.query;
  let result = [...communes];

  if (wilaya_id) result = result.filter(c => c.wilaya_id === Number(wilaya_id));
  if (daira_id) result = result.filter(c => c.daira_id === Number(daira_id));
  if (q) result = searchItems(result, q, ['nom_francais', 'nom_arabe', 'daira', 'post_code']);

  res.json({
    count: result.length,
    data: result
  });
});

// GET /api/communes/:id
app.get('/api/communes/:id', (req, res) => {
  const commune = getCommuneById(Number(req.params.id));
  if (!commune) return res.status(404).json({ error: 'Commune non trouvée' });
  res.json(commune);
});

// GET /api/stats
app.get('/api/stats', (req, res) => {
  res.json({
    wilayas: wilayas.length,
    dairas: dairas.length,
    communes: communes.length
  });
});

// ========== PAGE D'ACCUEIL (TABLE) ==========
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Découpage Administratif Algérie</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; background: #f5f7fa; color: #1a1a1a; }
    h1 { margin-top: 0; }
    .stats { display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap; }
    .stat { background: white; padding: 16px 24px; border-radius: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .stat strong { font-size: 1.5rem; color: #0066cc; }
    .controls { background: white; padding: 16px; border-radius: 10px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
    select, input, button { padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; }
    button { background: #0066cc; color: white; border: none; cursor: pointer; }
    button:hover { background: #0052a3; }
    table { width: 100%; border-collapse: collapse; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #eee; }
    th { background: #f8f9fa; font-weight: 600; }
    tr:hover { background: #f8fbff; }
    .count { color: #666; font-size: 0.9rem; margin-bottom: 8px; }
    .api-info { margin-top: 30px; background: white; padding: 16px; border-radius: 10px; }
    .api-info code { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Découpage Administratif de l'Algérie</h1>
  <div class="stats" id="stats"></div>

  <div class="controls">
    <select id="type">
      <option value="wilayas">Wilayas</option>
      <option value="dairas">Dairas</option>
      <option value="communes">Communes</option>
    </select>
    <input type="text" id="search" placeholder="Rechercher..." />
    <button onclick="loadData()">Rechercher</button>
    <button onclick="loadData(true)">Tout afficher</button>
  </div>

  <div class="count" id="count"></div>
  <table>
    <thead id="thead"></thead>
    <tbody id="tbody"></tbody>
  </table>

  <div class="api-info">
    <h3>Endpoints API</h3>
    <ul>
      <li><code>GET /api/wilayas</code> — ?q=recherche</li>
      <li><code>GET /api/wilayas/:id</code></li>
      <li><code>GET /api/wilayas/:id/dairas</code></li>
      <li><code>GET /api/dairas</code> — ?q=  ?wilaya_id=</li>
      <li><code>GET /api/dairas/:id</code></li>
      <li><code>GET /api/dairas/:id/communes</code></li>
      <li><code>GET /api/communes</code> — ?q=  ?wilaya_id=  ?daira_id=</li>
      <li><code>GET /api/stats</code></li>
    </ul>
  </div>

  <script>
    async function loadStats() {
      const res = await fetch('/api/stats');
      const data = await res.json();
      document.getElementById('stats').innerHTML = \`
        <div class="stat"><strong>\${data.wilayas}</strong><br>Wilayas</div>
        <div class="stat"><strong>\${data.dairas}</strong><br>Dairas</div>
        <div class="stat"><strong>\${data.communes}</strong><br>Communes</div>
      \`;
    }

    async function loadData(all = false) {
      const type = document.getElementById('type').value;
      const q = all ? '' : document.getElementById('search').value;
      const url = \`/api/\${type}\${q ? '?q=' + encodeURIComponent(q) : ''}\`;
      
      const res = await fetch(url);
      const json = await res.json();
      const data = json.data || [];

      document.getElementById('count').textContent = \`\${json.count || data.length} résultat(s)\`;

      const thead = document.getElementById('thead');
      const tbody = document.getElementById('tbody');

      if (type === 'wilayas') {
        thead.innerHTML = '<tr><th>ID</th><th>Nom français</th><th>Nom arabe</th></tr>';
        tbody.innerHTML = data.map(w => \`<tr><td>\${w.id}</td><td>\${w.nom_francais}</td><td>\${w.nom_arabe}</td></tr>\`).join('');
      } else if (type === 'dairas') {
        thead.innerHTML = '<tr><th>ID</th><th>Wilaya</th><th>Nom français</th><th>Nom arabe</th><th>Communes</th></tr>';
        tbody.innerHTML = data.map(d => \`<tr><td>\${d.id}</td><td>\${d.wilaya_id}</td><td>\${d.nom_francais}</td><td>\${d.nom_arabe}</td><td>\${d.nombre_communes}</td></tr>\`).join('');
      } else {
        thead.innerHTML = '<tr><th>ID</th><th>Wilaya</th><th>Daira</th><th>Nom français</th><th>Nom arabe</th><th>Code postal</th></tr>';
        tbody.innerHTML = data.slice(0, 200).map(c => \`<tr><td>\${c.id}</td><td>\${c.wilaya_id}</td><td>\${c.daira || '-'}</td><td>\${c.nom_francais}</td><td>\${c.nom_arabe}</td><td>\${c.post_code || '-'}</td></tr>\`).join('');
        if (data.length > 200) {
          tbody.innerHTML += '<tr><td colspan="6" style="text-align:center;color:#666;">Affichage limité aux 200 premiers résultats. Utilisez la recherche pour filtrer.</td></tr>';
        }
      }
    }

    loadStats();
    loadData(true);
  </script>
</body>
</html>
  `);
});

// ========== EXPORT & START ==========
export default app;

if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log(`Wilayas: ${wilayas.length} | Dairas: ${dairas.length} | Communes: ${communes.length}`);
  });
}
