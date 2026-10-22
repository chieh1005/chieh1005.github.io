# Shang-Chieh Wang's Personal Website

A professional personal website built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) showcasing academic work, research experience, and professional interests in cognitive neuroscience and brain imaging.

## Overview

This website serves as a digital portfolio for Shang-Chieh Wang, a graduate student in Brain Science at National Yang Ming Chiao Tung University, Taiwan. The site highlights research focus areas, curriculum vitae, publications, teaching materials, and personal interests.

**Version:** 1.0  
**Release Date:** July 31, 2026  
**Live Site:** https://chieh1005.github.io

## Project Structure

### Key Files & Directories

| Content Section | File Path | Description |
|---|---|---|
| **Homepage** | docs/index.md | Main landing page with introduction, research focus, and favorite leisure activities |
| **Curriculum Vitae** | docs/cv.md | Education, coursework, research experience, skills, and awards |
| **Publications** | docs/publications.md | Journal articles and conference proceedings |
| **Teaching Materials** | docs/teaching-materials.md | Course materials (Neuroimaging Methods) with links to external resources |
| **Blog** | docs/blog.md | Blog page |
| **About** | docs/about.md | About page |
| **Profile Photo** | docs/assets/images/profile.jpg | Profile picture displayed on homepage |
| **Styling** | docs/stylesheets/extra.css | Custom CSS including color scheme, typography, timeline layouts, and page styles |
| **Scripts** | docs/javascripts/spotlight.js | Custom JavaScript effects |
| **Theme Overrides** | overrides/ | Template overrides (favicon) |
| **Configuration** | mkdocs.yml | Site-wide configuration (theme, colors, navigation, extensions) |
| **Dependencies** | requirements.txt | Python dependencies for building the site |

## How to Edit Content

### Edit the Homepage
- Edit docs/index.md
  - Introduction paragraph
  - Research Focus section
  - Favorite Leisure Activities section

### Edit the Curriculum Vitae
- Edit docs/cv.md
  - Education (Master's & Bachelor's degrees)
  - Selected Coursework (grouped by category)
  - Research Experience (organized by lab)
  - Skills (experimental techniques & programming)
  - Awards

### Edit Publications
- Edit docs/publications.md
  - Journal papers (with DOI links)
  - Conference proceedings

### Edit Teaching Materials
- Edit docs/teaching-materials.md
  - Course Materials → Neuroimaging Methods
  - Add a Markdown link to any external resource, e.g. `- [Title](https://...)`

### Edit Website Styling & Colors
- **CSS Customization:** docs/stylesheets/extra.css
  - Primary color: Classic Blue (#0F4C81)
  - Accent color: Sky Blue (#00A4EF)
  - Typography hierarchy
  - Timeline styles
  - Button styles
  - Emoji logo (🧠)

### Edit Site Configuration
- **Theme & Navigation:** mkdocs.yml
  - Site name, URL, description
  - Color scheme (light/dark mode)
  - Navigation menu structure
  - Markdown extensions
  - Social links in footer

### Change Profile Photo
- Replace docs/assets/images/profile.jpg with your new image
- Filename must remain profile.jpg or update the reference in docs/index.md

## Technical Stack

- **Static Site Generator:** MkDocs
- **Theme:** Material for MkDocs
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Language:** Markdown, YAML, CSS
- **Color Scheme:** Classic Blue (PANTONE 19-4052)

## Building Locally

```bash
# Install dependencies
pip install -r requirements.txt

# Build the site
mkdocs build

# Preview locally
mkdocs serve
# Access at http://localhost:8000
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the main branch. Deployment typically completes within 2-3 minutes.

**Site URL:** https://chieh1005.github.io

## Features

- ✨ Responsive design (mobile & desktop)
- 🌓 Light/dark mode toggle
- 🧠 Brain emoji branding
- 📱 Clean, professional layout
- 🔍 Full-text search capability
- ⚡ Fast static site performance

## License

This is a personal portfolio website. All content is authored by Shang-Chieh Wang unless otherwise noted.

---

**Last Updated:** October 22, 2026  
**Version:** 1.0
