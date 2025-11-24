# Educational & Concussion Assessment Tools - PWA

Progressive Web App (PWA) versions of your Educational Risk Assessment Tool and Concussion Recovery Protocol.

## 📱 What's Included

This package contains:
- **Home/Launcher Page** (`index.html`) - Main menu to access both tools
- **Educational Risk Assessment Tool** (`educational-risk-assessment.html`)
- **Concussion Recovery Protocol** (`concussion-recovery.html`)
- **PWA Manifest** (`manifest.json`) - App configuration
- **Service Worker** (`service-worker.js`) - Enables offline functionality
- **App Icons** (`icons/` directory) - Various sizes for different devices

## ✨ Features

- ✅ **Install on Any Device** - Works on phones, tablets, and desktops
- ✅ **Offline Access** - Works without internet connection
- ✅ **Automatic Updates** - Users get notified when new versions are available
- ✅ **Fast Loading** - Cached resources load instantly
- ✅ **Home Screen Icon** - Installs like a native app

## 🚀 Quick Setup Guide

### Option 1: GitHub Pages (Recommended - Free & Easy)

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create a New Repository**
   - Click the "+" icon → "New repository"
   - Name it: `assessment-tools` (or any name you prefer)
   - Make it **Public**
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop ALL files from this folder (keep the folder structure)
   - Make sure the `icons` folder is included
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/assessment-tools/`

5. **Done!** Share the URL with your staff

### Option 2: Netlify (Also Free & Very Easy)

1. **Go to Netlify**
   - Visit https://www.netlify.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy Your Site**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire folder into the upload area
   - Wait for deployment (takes ~30 seconds)

3. **Done!** Netlify gives you a URL like `https://random-name-123.netlify.app`
   - You can customise this name in Site settings

### Option 3: Your School's Web Hosting

If your school has web hosting with HTTPS support:
1. Upload all files to your web server
2. Ensure they're in a publicly accessible directory
3. Access via your school's domain

**Important:** PWAs **must** be served over HTTPS (except on localhost for testing)

## 📝 Testing Locally

To test before deploying:

1. **Using Python** (if installed):
   ```bash
   cd /path/to/folder
   python3 -m http.server 8000
   ```
   Then open: http://localhost:8000

2. **Using VS Code**:
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **Testing PWA Features**:
   - Open in Chrome/Edge
   - Press F12 for Developer Tools
   - Go to "Application" tab
   - Check "Manifest" and "Service Workers" sections

## 📲 How Users Install the PWA

### On Desktop (Chrome/Edge):
1. Visit the website
2. Look for the install icon in the address bar (⊕ or 🔽)
3. Click "Install"

### On Android:
1. Visit the website in Chrome
2. Tap the menu (⋮) → "Add to Home screen"
3. The app appears on the home screen

### On iPhone/iPad:
1. Visit the website in Safari
2. Tap the Share button (□↑)
3. Tap "Add to Home Screen"

## 🔄 Updating Your PWA

When you make changes to your tools:

1. **Update the files** on your hosting (GitHub Pages, Netlify, etc.)

2. **Update the version** in `service-worker.js`:
   - Change line 1: `const CACHE_NAME = 'assessment-tools-v1.0.0';`
   - Increment the version: `'assessment-tools-v1.0.1';`

3. **Users will see an update banner** next time they visit
   - They click "Update Now" to get the new version

## 🎨 Customising Icons

The included icons are basic placeholders. To add your school branding:

1. Create PNG icons in these sizes: 72, 96, 128, 144, 152, 192, 384, 512 pixels
2. Replace the files in the `icons/` directory
3. Keep the same filenames (e.g., `icon-192x192.png`)

**Tip:** Use a free tool like https://realfavicongenerator.net/ to generate all sizes from one image

## 🛠️ File Structure

```
/
├── index.html                        # Home/launcher page
├── educational-risk-assessment.html  # Risk assessment tool
├── concussion-recovery.html          # Concussion protocol
├── manifest.json                     # PWA configuration
├── service-worker.js                 # Offline functionality
├── icons/                           # App icons
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
└── README.md                        # This file
```

## ⚙️ Configuration Options

### Changing App Name

Edit `manifest.json`:
```json
{
  "name": "Your School Assessment Tools",
  "short_name": "Your Tools",
  ...
}
```

### Changing Colours

Edit `manifest.json`:
```json
{
  ...
  "theme_color": "#d61b26",        # Your school colour
  "background_color": "#ffffff",
  ...
}
```

## 🔍 Troubleshooting

### PWA Won't Install
- ✅ Ensure you're using HTTPS (or localhost)
- ✅ Check browser console for errors (F12)
- ✅ Verify manifest.json is accessible
- ✅ Check that service worker registered successfully

### Offline Mode Not Working
- ✅ Check Service Worker in DevTools → Application
- ✅ Verify files are being cached
- ✅ Try clearing cache and reloading

### Updates Not Appearing
- ✅ Change the CACHE_NAME version in service-worker.js
- ✅ Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- ✅ Check Service Worker has updated in DevTools

### Icons Not Showing
- ✅ Verify icon files exist in `/icons/` folder
- ✅ Check file names match manifest.json
- ✅ Ensure icons are valid PNG files

## 📱 Browser Support

| Browser | Desktop | Mobile | Install PWA |
|---------|---------|--------|-------------|
| Chrome  | ✅      | ✅     | ✅          |
| Edge    | ✅      | ✅     | ✅          |
| Safari  | ✅      | ✅     | ✅          |
| Firefox | ✅      | ✅     | ⚠️ Limited  |

## 🔒 Privacy & Data

- All data is stored **locally** on the user's device
- No data is sent to external servers
- Works completely offline after first load
- Users control their own data through the export/import features

## 📞 Support

If you need help:
1. Check the troubleshooting section above
2. Review browser console for error messages (F12)
3. Ensure all files are uploaded correctly with proper structure

## 📄 Licence

These tools are for educational use at your school.

---

## Quick Links

- GitHub Pages Guide: https://pages.github.com/
- Netlify Documentation: https://docs.netlify.com/
- PWA Documentation: https://web.dev/progressive-web-apps/
- Service Worker Guide: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

---

**Created:** November 2025  
**Version:** 1.0.0
