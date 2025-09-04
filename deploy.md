# FlavorTrail GitHub Pages Deployment Guide

## Configuration

✅ **vite.config.ts** - Configured for custom domain support
✅ **package.json** - Includes gh-pages dependency and deployment scripts

## Manual Installation (if npm install fails)

If you're still having npm issues, manually add this to your package.json:

```json
"devDependencies": {
  "gh-pages": "^6.1.1"
}
```

And these scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Deployment Steps

### 1. Install Dependencies
```bash
npm install --save-dev gh-pages
```

### 2. Build and Deploy
```bash
npm run deploy
```

### 3. GitHub Repository Setup

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **gh-pages** branch and **/(root)** folder
5. Click **Save**

### 4. Custom Domain Setup

1. In the same **Pages** settings:
2. Enter `flavortrail.co` in the **Custom domain** field
3. Check **Enforce HTTPS**
4. Click **Save**

### 5. DNS Configuration

Add these DNS records at your domain registrar (where you bought flavortrail.co):

**For root domain (flavortrail.co):**
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain (www.flavortrail.co):**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

### 6. Wait for Propagation

DNS changes can take 5 minutes to 48 hours to propagate worldwide.

### 7. Verify

Visit `flavortrail.co` and `www.flavortrail.co` to see your site live!

## Troubleshooting

- If you see a 404 error, make sure the gh-pages branch was created
- If DNS doesn't work, check your registrar's DNS settings
- GitHub Pages may take a few minutes to build after deployment 