import axios from 'axios';
import * as cheerio from 'cheerio';
import https from 'https';
import fs from 'fs';

async function fetchGenreAudio(genreName) {
  try {
    const encodedGenre = genreName.replace(/»/g, '').trim();
    const scanUrl = `https://everynoise.com/engenremap-${encodedGenre}.html`;
    
    const response = await axios.get(scanUrl, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 5000
    });
    
    const $ = cheerio.load(response.data);
    const audioUrls = [];
    
    $('div.genre').each((index, element) => {
      if (index >= 5) return false;
      const onclick = $(element).attr('onclick') || '';
      const previewMatch = onclick.match(/preview\('([^']+)'\)/);
      if (previewMatch) {
        audioUrls.push(`https://everynoise.com/${previewMatch[1]}`);
      }
    });
    
    return audioUrls.length > 0 ? audioUrls[Math.floor(Math.random() * audioUrls.length)] : null;
  } catch (error) {
    return null;
  }
}

async function scrapeEveryNoise() {
  try {
    console.log('Fetching Every Noise at Once...');
    const response = await axios.get('https://everynoise.com/', {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const $ = cheerio.load(response.data);
    
    const genres = [];
    
    $('div.genre').each((index, element) => {
      const $element = $(element);
      const genreName = $element.text().trim();
      const style = $element.attr('style') || '';
      const onclick = $element.attr('onclick') || '';
      
      const topMatch = style.match(/top:\s*([\d.]+)px/);
      const leftMatch = style.match(/left:\s*([\d.]+)px/);
      const colorMatch = style.match(/color:\s*rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      
      const top = topMatch ? parseFloat(topMatch[1]) : 0;
      const left = leftMatch ? parseFloat(leftMatch[1]) : 0;
      const color = colorMatch ? `rgb(${colorMatch[1]}, ${colorMatch[2]}, ${colorMatch[3]})` : '';
      
      let spotifyId = '';
      const playxMatch = onclick.match(/playx\("([^"]+)"/);
      if (playxMatch) {
        spotifyId = playxMatch[1];
      }
      
      if (genreName && spotifyId) {
        const cleanName = genreName.replace(/»/g, '').trim();
        if (cleanName) {
          genres.push({
            name: cleanName,
            position: { top, left },
            color,
            spotifyTrackId: spotifyId
          });
        }
      }
    });
    
    console.log(`Scraped ${genres.length} genres with audio`);
    
    fs.writeFileSync('./public/genres.json', JSON.stringify(genres, null, 2));
    console.log('Data saved to public/genres.json');
    
    return genres;
  } catch (error) {
    console.error('Error scraping:', error.message);
    throw error;
  }
}

scrapeEveryNoise();
