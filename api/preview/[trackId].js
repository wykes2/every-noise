import axios from 'axios';
import https from 'https';

export default async function handler(req, res) {
  const { trackId } = req.query;

  if (!trackId) {
    return res.status(400).json({ error: 'Track ID is required' });
  }

  try {
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

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error fetching preview:', error.message);
    res.status(500).json({ error: 'Failed to fetch preview URL' });
  }
}
