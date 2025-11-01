# Deployment Guide for IEDC BOOTCAMP CEC Website

## Prerequisites
- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your machine

## Step-by-Step Deployment

### 1. Push to GitHub

First, create a new repository on GitHub, then push your code:

```bash
# If you haven't set up remote yet
git remote add origin https://github.com/YOUR_USERNAME/iedc-bootcamp-cec.git

# Push your code
git push -u origin main
```

### 2. Deploy on Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Wait 2-3 minutes for deployment
7. Your site is live! 🎉

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 3. Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Making Updates

Every time you push changes to GitHub, Vercel will automatically redeploy:

```bash
# Make your changes
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update: description of changes"

# Push to GitHub
git push

# Vercel automatically deploys!
```

## Environment Variables (if needed)

1. Go to Vercel dashboard → Your Project
2. Settings → Environment Variables
3. Add variables as needed

## Performance Tips

- Images are optimized automatically by Next.js
- CSS is minified in production
- JavaScript is bundled and optimized
- Vercel CDN ensures fast global delivery

## Troubleshooting

### Build Fails
- Check `package.json` dependencies
- Ensure Node.js version compatibility
- Review build logs in Vercel dashboard

### Site Not Updating
- Check if push was successful: `git log`
- Verify deployment in Vercel dashboard
- Clear browser cache

## Support

For issues:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## Project URLs

- **Development**: http://localhost:3000
- **Production**: Your Vercel URL (e.g., iedc-bootcamp-cec.vercel.app)

---

Happy Deploying! 🚀
