# Effective Altruism Aachen

Website for Effective Altruism Aachen — a community in Aachen for people using evidence and reason to have a positive impact with their time and careers.

**Live:** https://ea-aachen.github.io/ea-aachen-website/

Static site built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages.

## Develop locally

Needs Node.js.

- `npm install` — install dependencies
- `npm run dev` — start the dev server with live reload
- `npm run build` — build the static site into `dist/`
- `npm run preview` — serve the built site locally

## Edit the site

- **Pages** are in `src/pages/`, one `.astro` file per page (`index.astro` is the home page).
- **Menu, footer links, socials and contact email** live in `src/data/site.ts` — edit there to change navigation site-wide.
- **Images** go in `src/assets/images/` and are imported into pages; Astro optimizes them at build time.
- **Shared layout** (header, footer, `<head>`) is `src/layouts/Base.astro`; smaller reusable pieces are in `src/components/`.

## Deploy

Push to `main` — GitHub Actions builds and publishes the site automatically (`.github/workflows/deploy.yml`). No manual steps.

## Structure

```
src/
  pages/         one file per page
  layouts/       the page shell
  components/    nav, footer, reusable UI
  data/site.ts   navigation + footer + contact
  assets/images  images, optimized at build
  styles/        global styles + theme
public/          files served as-is (favicon, ...)
```

## Custom domain

The site currently lives under `github.io`. To serve it from a custom domain: set `base` to `/` in `astro.config.mjs`, add a `public/CNAME` file containing the domain, and point the domain's DNS at GitHub Pages.
