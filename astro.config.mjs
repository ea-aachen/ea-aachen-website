// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eaachen.org',
  base: '/',
  redirects: {
    '/cal': '/join',
    '/news': '/join',
    '/gutes-besser-tun': '/learn/gutes-besser-tun',
    '/uni-course': '/news/leonardo-course',
    '/info': '/news/intro-talk',
  },
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
