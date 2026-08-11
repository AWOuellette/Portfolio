# Andrew Ouellette — Portfolio v3

Personal portfolio website built with React, Vite, and Tailwind CSS. Deployed to GitHub Pages.

**Live site:** https://awouellette.github.io/Portfolio/

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Deployment | GitHub Pages (`gh-pages`) |

---

## Sections

- **Hero** — intro, CTA buttons, and resume download
- **About** — background and personal blurb
- **Experience** — work history
- **Skills** — tech stack overview
- **Projects** — six featured projects with tech badges, status labels, and links
- **Contact** — email, LinkedIn, and GitHub links

### Featured Projects

| Project | Stack | Status |
|---------|-------|--------|
| BU Course Inquiry | Java, Spring Boot, React, MongoDB, Docker | Deployed |
| SoloSavings | Java, Spring Boot, React, PostgreSQL, Docker | Complete |
| AXIOM.MARKETS | JavaScript, HTML, CSS, Yahoo Finance API | Deployed |
| Spring React Todo App | Java, Spring Boot, React, JWT, H2 | Complete |
| Homies | Kotlin, Android, MVVM, Room | Complete |
| League of Legends Analytics DB | Oracle SQL, PL/SQL | Complete |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev
```

## Build & Deploy

```bash
# Build for production (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

The deploy script runs `vite build` first (`predeploy`), then publishes the `dist` folder to the `gh-pages` branch.

The site is served from the `/Portfolio/` base path, which is set in `vite.config.js`.

---

## Project Structure

```
portfolio-v3/
├── public/
│   └── resume.html          # Downloadable resume
├── src/
│   ├── assets/              # Images (headshot, photo)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```
