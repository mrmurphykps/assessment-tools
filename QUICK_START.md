# 🚀 Quick Start - Deploy in 5 Minutes

This guide will get your PWA online in the fastest way possible.

## Method 1: GitHub Pages (Easiest)

### Step 1: Create GitHub Account
- Go to https://github.com
- Click "Sign up"
- Follow the registration process

### Step 2: Create Repository
1. Click the "+" icon (top right) → "New repository"
2. Repository name: `assessment-tools`
3. Description: "Educational risk assessment tools"
4. Select: **Public**
5. Click "Create repository"

### Step 3: Upload Files
1. On the repository page, click "uploading an existing file"
2. Drag ALL files from your PWA folder into the browser:
   - index.html
   - educational-risk-assessment.html
   - concussion-recovery.html
   - manifest.json
   - service-worker.js
   - The entire `icons` folder
   - README.md
3. Scroll down and click "Commit changes"

### Step 4: Enable GitHub Pages
1. Click "Settings" (top menu)
2. Click "Pages" (left sidebar)
3. Under "Source":
   - Branch: select "main"
   - Folder: select "/ (root)"
4. Click "Save"
5. Wait 1-2 minutes

### Step 5: Get Your URL
- Your site will be at: `https://YOUR-USERNAME.github.io/assessment-tools/`
- GitHub will show you the URL on the Pages settings page
- Share this URL with your staff!

---

## Method 2: Netlify (Also Very Easy)

### Step 1: Create Netlify Account
- Go to https://www.netlify.com
- Click "Sign up"
- Use your email or GitHub account

### Step 2: Deploy
1. Click "Add new site" → "Deploy manually"
2. Drag the ENTIRE PWA folder into the upload box
3. Wait 30 seconds for deployment

### Step 3: Get Your URL
- Netlify gives you a URL like: `https://random-name-123.netlify.app`
- Click "Site settings" → "Change site name" to customise it
- Example: `https://kingswood-tools.netlify.app`

---

## Testing Before Deployment

### Quick Local Test:
1. **If you have Python installed:**
   ```bash
   cd /path/to/pwa/folder
   python3 -m http.server 8000
   ```
   Then open: http://localhost:8000

2. **If you have VS Code:**
   - Install "Live Server" extension
   - Right-click index.html → "Open with Live Server"

### Check PWA Features:
1. Open in Chrome
2. Press F12 (Developer Tools)
3. Go to "Application" tab
4. Check "Manifest" and "Service Workers" sections
5. Both should show as working

---

## What Users Will See

### First Visit:
1. They go to your URL
2. They see the home page with both tools
3. An "Install App" prompt appears (they can dismiss or install)

### Installing:
- **Desktop:** Install icon appears in address bar
- **Mobile:** "Add to Home Screen" in browser menu

### After Installing:
- App icon appears on home screen/desktop
- Opens in standalone mode (no browser UI)
- Works offline automatically

---

## Updating the App

When you make changes:

1. **GitHub Pages:**
   - Edit files in your repository
   - Or upload new versions
   - Changes go live in 1-2 minutes

2. **Netlify:**
   - Drag new files to deploy
   - Or connect to GitHub for automatic updates

3. **Update Service Worker:**
   - Edit `service-worker.js`
   - Change line 1: `const CACHE_NAME = 'assessment-tools-v1.0.1';`
   - Increment version number each time

4. **Users See:**
   - "New version available" banner
   - Click to update instantly

---

## Troubleshooting

### "Install" button doesn't appear
- Make sure you're using HTTPS (GitHub Pages and Netlify provide this automatically)
- Check the manifest.json file uploaded correctly

### Changes not showing
- GitHub Pages: Wait 1-2 minutes after upload
- Clear browser cache (Ctrl+Shift+R)
- Update service worker version number

### Icons not showing
- Make sure the `icons` folder was uploaded
- Check folder structure is preserved

---

## Next Steps

✅ Deploy to GitHub Pages or Netlify  
✅ Share URL with staff  
✅ Show staff how to install  
✅ Test on different devices  
✅ Customise icons with school branding (optional)  

---

## Need More Help?

- Full documentation: See README.md
- GitHub Pages help: https://pages.github.com/
- Netlify help: https://docs.netlify.com/

**Good luck! Your PWA will be live in minutes.** 🎉
