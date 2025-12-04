// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Usamos la integración oficial
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Quitamos el bloque 'vite' manual porque la integración lo maneja sola
  integrations: [
    tailwind(), 
    react()
  ]
});