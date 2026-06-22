# Nazmul Hasan — E-Portfolio

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](CHANGELOG.md)
[![Live](https://img.shields.io/badge/live-portfolio-2563eb?style=flat-square)](https://portfolio-eight-red-48.vercel.app)
[![GitHub](https://img.shields.io/badge/github-nazmul--cyber-181717?style=flat-square)](https://github.com/nazmul-cyber)

A modern, responsive portfolio website showcasing projects in energy science and full-stack development.

## Preview Locally

```powershell
cd $env:USERPROFILE\portfolio
Start-Process index.html
```

Or serve with Python:

```powershell
cd $env:USERPROFILE\portfolio
python -m http.server 8080
# Open http://localhost:8080
```

## Deploy Options

### GitHub Pages (free)

1. Create a repo named `portfolio` on GitHub
2. Push this folder
3. Go to Settings → Pages → Source: `main` branch
4. Your site will be at `https://YOUR_USERNAME.github.io/portfolio/`

### Vercel (free)

```powershell
cd $env:USERPROFILE\portfolio
npx vercel
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio page |
| `styles.css` | Dark green theme styling |
| `script.js` | Scroll animations, mobile nav |
| `assets/` | Project images |
| `LINKEDIN_PROFILE.md` | Copy-paste LinkedIn redesign |
| `GITHUB_PROFILE_README.md` | GitHub profile README template |

## Customize

1. Update `GITHUB_USERNAME` in `script.js`
2. Add your email and GitHub URL in `index.html`
3. Add your university name in the Experience section
4. Deploy and add the URL to LinkedIn Featured section