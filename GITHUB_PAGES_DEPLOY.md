# GitHub Pages Deployment Guide

## 🚀 How to Deploy to GitHub Pages

### Prerequisites
1. Your code must be pushed to a GitHub repository
2. The repository should be named `my-portfolio` (or update the `basePath` in `next.config.ts`)

### Automatic Deployment Setup

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin master
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Click on **Settings** tab
   - Scroll down to **Pages** section in the left sidebar
   - Under **Source**, select **GitHub Actions**

3. **The workflow will automatically:**
   - Build your Next.js app
   - Generate static files
   - Deploy to GitHub Pages
   - Your site will be available at: `https://yourusername.github.io/my-portfolio`

### Manual Build (Optional)
If you want to build locally:
```bash
npm run build
```

### Troubleshooting

**If deployment fails:**
1. Check the Actions tab in your GitHub repository
2. Make sure the repository is public (or you have GitHub Pro for private repos)
3. Verify the workflow file is in `.github/workflows/deploy.yml`

**If assets don't load:**
- The `basePath` is set to `/my-portfolio` for production
- Make sure your repository name matches this path

**If you want to change the repository name:**
Update the `basePath` and `assetPrefix` in `next.config.ts` to match your repo name.

## 📝 What's Been Configured

- ✅ Static export enabled (`output: 'export'`)
- ✅ GitHub Actions workflow for automatic deployment
- ✅ Asset path configuration for GitHub Pages
- ✅ Jekyll disabled (`.nojekyll` file)
- ✅ API routes removed (GitHub Pages doesn't support them)
- ✅ Direct file downloads for CV functionality

Your portfolio is now ready for GitHub Pages deployment! 🎉
