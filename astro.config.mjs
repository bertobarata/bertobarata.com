// @ts-check
import { defineConfig } from 'astro/config';

// Custom domain (GitHub Pages) → served at root, no base path needed.
// https://astro.build/config
export default defineConfig({
  site: 'https://bertobarata.com',
  trailingSlash: 'ignore',
});
