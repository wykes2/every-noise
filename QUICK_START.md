# 🚀 Quick Start - GitHub & Vercel Deployment

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `every-noise`
3. Description: `Music genre guessing game with 6,291+ genres`
4. **Public** or Private (your choice)
5. **DON'T** check any initialization boxes
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

Copy your repository URL from GitHub, then run these commands:

```bash
# Navigate to your project (if not already there)
cd /Users/AL83537/Desktop/every-noise

# Add GitHub as remote (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/every-noise.git

# Verify remote was added
git remote -v

# Push your code to GitHub
git push -u origin main
```

**🎯 Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Deploy to Vercel

### Option A: Using Vercel Website (Recommended)

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click **"Add New..."** → **"Project"**
4. Find and import your `every-noise` repository
5. Vercel will auto-detect Vite framework
6. Click **"Deploy"** (no configuration needed!)
7. Wait ~2 minutes ☕
8. Done! 🎉

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Step 4: Test Your Deployment

Your app will be live at: `https://your-project-name.vercel.app`

Test these features:
- ✅ Game loads and looks good
- ✅ Play button works
- ✅ Audio plays correctly
- ✅ All 10 rounds work
- ✅ Score tracking works
- ✅ Mobile responsive design

## Step 5: Update README (Optional)

After deployment, update line 20 in `README.md` with your live URL:

```markdown
[View Live Demo](https://your-project-name.vercel.app)
```

Then commit and push:
```bash
git add README.md
git commit -m "docs: Add live demo URL"
git push
```

Vercel will auto-redeploy! 🚀

---

## 🎯 That's It!

Your game is now:
- ✅ On GitHub
- ✅ Deployed on Vercel
- ✅ Live on the internet
- ✅ Auto-deploys on every push

## 🔥 Pro Tips

1. **Custom Domain**: Add in Vercel Dashboard → Settings → Domains
2. **Analytics**: Enable in Vercel Dashboard → Analytics
3. **Preview Deployments**: Every git branch gets its own preview URL
4. **Environment Variables**: Not needed for this project!

## 📊 Repository Stats to Add

Add these badges to your README (after deployment):

```markdown
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/every-noise?style=social)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/every-noise?style=social)
![Vercel](https://img.shields.io/badge/deployed-vercel-black)
```

---

**Need help? Check `DEPLOYMENT.md` for detailed troubleshooting!**
