# Deployment Guide

This guide will help you deploy the APR Hub demo to GitHub and host it on Vercel or Netlify.

## Step 1: Push to GitHub

### Create a new repository on GitHub
1. Go to [github.com](https://github.com) and create a new repository
2. Name it `apr-hub-demo` or your preferred name
3. Don't initialize with README, .gitignore, or license (already included)

### Push your code
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: APR Hub Analytics Dashboard & Report Builder"

# Add remote origin (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/apr-hub-demo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel (Recommended)

### Option A: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your `apr-hub-demo` repository
5. Vercel will auto-detect Vite settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"
7. Your app will be live in ~2 minutes!

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
# Your app will be deployed and you'll get a live URL
```

## Step 3: Deploy to Netlify (Alternative)

### Option A: Using Netlify Dashboard
1. Go to [netlify.com](https://netlify.com)
2. Sign in with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your `apr-hub-demo` repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"
7. Your app will be live in ~2 minutes!

### Option B: Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy

# Follow the prompts
# For production deployment
netlify deploy --prod
```

## Environment Setup

This demo uses placeholder data and doesn't require environment variables. For production with real APIs:

### Vercel
Add environment variables in: Settings → Environment Variables

### Netlify
Add environment variables in: Site settings → Environment variables

## Post-Deployment Checklist

- ✅ Dashboard loads correctly
- ✅ All metrics and charts display properly
- ✅ Report Builder components can be added
- ✅ Drag-and-drop functionality works
- ✅ Component resizing works
- ✅ Property editor updates components
- ✅ Responsive design works on mobile

## Troubleshooting

### Build fails with "Module not found"
- Ensure all dependencies are in `package.json`
- Try: `npm install && npm run build` locally first

### Drag-and-drop doesn't work
- Check if `react-dnd` and `react-rnd` installed correctly
- Clear browser cache

### Charts not displaying
- Verify `recharts` is installed
- Check browser console for errors

## Live Demo URLs

After deployment, you'll get URLs like:

**Vercel**: `https://apr-hub-demo.vercel.app`  
**Netlify**: `https://apr-hub-demo.netlify.app`

Share these URLs in your deliverables!

## Support

For issues with:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vite**: [vitejs.dev](https://vitejs.dev)
