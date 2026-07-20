# Manny De Guzman — Portfolio

React + Vite + Tailwind CSS site. Only the **Hero** section (plus Navbar) is
built out; every other section is a stub in `src/components/` ready for you
to fill in.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Project structure

```
src/
  components/
    Navbar.jsx        ✅ built
    Hero.jsx           ✅ built
    About.jsx          ⬜ stub
    Services.jsx       ⬜ stub
    Portfolio.jsx       ⬜ stub
    Stats.jsx           ⬜ stub
    Testimonials.jsx    ⬜ stub
    Contact.jsx         ⬜ stub
    Footer.jsx           ⬜ stub
  App.jsx
  main.jsx
  index.css
```

## Notes

- The character illustration in the hero is a placeholder circle — swap the
  placeholder `<div>` in `Hero.jsx` for your own image/illustration.
- Icons come from `lucide-react`.
- Fonts: Sora (display) + Inter (body), loaded via Google Fonts in `index.html`.
- Color tokens live in `tailwind.config.js` under `theme.extend.colors`
  (`base`, `accent`).

## Deploy

**GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: hero section"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

**Vercel:** import the repo at vercel.com/new — it auto-detects Vite
(build command `npm run build`, output dir `dist`). No env vars needed.
