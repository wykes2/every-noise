import axios from 'axios';
import https from 'https';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { trackId } = req.query;

  if (!trackId) {
    return res.status(400).json({ error: 'Track ID is required' });
  }

  try {
    const url = `https://everynoise.com/spotproxy.cgi?track=${trackId}`;
    
    console.log(`Fetching preview for track: ${trackId}`);
    
    const response = await axios.get(url, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    });

    console.log(`Response received:`, response.data);

    if (!response.data.preview_url) {
      console.log(`⚠️  No preview URL for track ${trackId}`);
      return res.status(404).json({ error: 'No preview URL available' });
    }

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('❌ Error fetching preview:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch preview URL',
      details: error.message 
    });
  }
}
