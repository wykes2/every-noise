# 🎵 Every Noise - Music Genre Guessing Game

An interactive music genre guessing game powered by data from [everynoise.com](https://everynoise.com). Built with vanilla JavaScript and styled with the Stripe.dev design system.

![Every Noise Game](https://img.shields.io/badge/Status-Live-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

## ✨ Features

- **6,291+ Music Genres** - Comprehensive genre database scraped from everynoise.com
- **Audio Previews** - Listen to real Spotify track samples for each genre
- **10 Round Gameplay** - Test your music knowledge across multiple rounds
- **Score Tracking** - Keep track of your correct guesses
- **Beautiful UI** - Minimalist design inspired by Stripe.dev
- **Responsive** - Works seamlessly on desktop and mobile
- **Dark Theme** - Sophisticated dark mode interface

## 🚀 Live Demo

[View Live Demo](#) _(Add your Vercel URL after deployment)_

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **Build Tool:** Vite
- **Styling:** Stripe.dev Design System
- **API:** Vercel Serverless Functions
- **Data Source:** everynoise.com
- **Deployment:** Vercel

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/every-noise.git
cd every-noise
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the scraper** (Optional - project includes pre-scraped data)
```bash
npm run scrape
```
*Note: Scraping takes ~5-10 minutes to fetch 6,291 genres*

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:5173
```

### Alternative: Using Express Server
```bash
npm run server
```
Then open `http://localhost:3000`

## 🌐 Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/every-noise)

### Manual Deployment

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Deploy to Production**
```bash
vercel --prod
```

### Environment Setup

No environment variables required! The app uses public APIs and includes pre-scraped data.

## 📁 Project Structure

```
every-noise/
├── api/
│   └── preview/
│       └── [trackId].js      # Vercel serverless function
├── public/
│   ├── genres.json           # Pre-scraped genre data
│   └── genres-sample.json    # Sample data for testing
├── index.html                # Main HTML
├── main.js                   # Game logic
├── style.css                 # Stripe.dev inspired styles
├── scraper.js                # Data scraping utility
├── server.js                 # Local Express server
├── vercel.json               # Vercel configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎮 How to Play

1. Click the **play button** to hear a music sample
2. Choose the correct genre from **4 options**
3. Get instant feedback on your answer
4. Complete **10 rounds** and see your final score
5. Click **Play Again** to start a new game

## 🎨 Design System

This project implements the [Stripe.dev design system](https://stripe.dev):

- **Dark Theme** - Pure black (#000000) with subtle gray layers
- **Typography** - Light font weight (300) with tight letter-spacing
- **Shadows** - Geometric box shadows (2px 2px with no blur)
- **Responsive** - Fluid typography using `clamp()`
- **Minimalist** - Clean, uncluttered interface

See `STRIPE_DEV_DESIGN_REFERENCE.md` for full design documentation.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start Express server (local testing)
- `npm run scrape` - Scrape fresh data from everynoise.com

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 📊 Data Source

Genre data is sourced from [everynoise.com](https://everynoise.com), an ongoing attempt at an algorithmically-generated, readability-adjusted scatter-plot of the musical genre-space.

Audio previews are fetched from Spotify via everynoise.com's proxy.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [everynoise.com](https://everynoise.com) for the incredible music genre data
- [Stripe.dev](https://stripe.dev) for design inspiration
- [Spotify](https://spotify.com) for audio previews

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/YOUR_USERNAME/every-noise](https://github.com/YOUR_USERNAME/every-noise)

---

**Built with ❤️ and 🎵**
