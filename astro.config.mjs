// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Usamos la integración oficial
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://paulinalopezescritora.com', // ¡Vital para el sitemap!
  integrations: [tailwind(), react(), sitemap()],
});