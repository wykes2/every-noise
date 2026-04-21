# 🚀 Deployment Guide

## GitHub Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `every-noise` (or any name you prefer)
3. **Don't** initialize with README, .gitignore, or license (we already have these)
4. Keep it public or private based on your preference

### 2. Push to GitHub

Your local git repository is already initialized. Just add the remote and push:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/every-noise.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username!**

---

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `every-noise` repository
4. Vercel will auto-detect the Vite framework
5. Click **"Deploy"**
6. Done! Your app will be live in ~2 minutes

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Post-Deployment

### 1. Update README

After deployment, update the Live Demo link in `README.md`:

```markdown
## 🚀 Live Demo

[View Live Demo](https://your-app-name.vercel.app)
```

### 2. Test Your Deployment

Visit your Vercel URL and test:
- ✅ Game loads properly
- ✅ Audio preview fetching works
- ✅ All 10 rounds play correctly
- ✅ Responsive design on mobile

### 3. Custom Domain (Optional)

In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Troubleshooting

### API Not Working
- Check Vercel function logs in the dashboard
- Ensure `api/preview/[trackId].js` is properly deployed
- Verify the function has the correct axios dependency

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Genres Not Loading
- The `public/genres.json` should be committed to git
- Check if the file is in your repository
- Verify the file size isn't too large for git (should be ~5MB)

---

## Environment Variables

This project doesn't require any environment variables! 🎉

Everything works out of the box with public APIs and included data.

---

## Updating Your Deployment

After pushing changes to GitHub:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically redeploy! 🚀

---

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Docs](https://docs.github.com)
