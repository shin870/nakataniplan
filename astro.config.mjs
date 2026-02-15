import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://nakataniplan.com',

  output: 'static',

  adapter: cloudflare(),

  build: {
    format: 'directory'
  },

  compressHTML: true
});

