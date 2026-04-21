import express from 'express';
import axios from 'axios';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.static('.'));

app.get('/api/preview/:trackId', async (req, res) => {
  try {
    const { trackId } = req.params;
    const url = `https://everynoise.com/spotproxy.cgi?track=${trackId}`;
    
    const response = await axios.get(url, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.data.preview_url) {
      console.log(`⚠️  No preview URL for track ${trackId}`);
    }
    
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error fetching preview:', error.message);
    res.status(500).json({ error: 'Failed to fetch preview URL' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
