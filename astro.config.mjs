// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Project page lives at https://ea-aachen.github.io/ea-aachen-website/ for now.
// When a custom domain is connected later, set site to the domain and base to '/'.
export default defineConfig({
  site: 'https://ea-aachen.github.io',
  base: '/ea-aachen-website',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
