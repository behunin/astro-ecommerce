import { defineConfig } from 'astro/config';
import devtools from 'solid-devtools/vite'

// https://astro.build/config
import solid from "@astrojs/solid-js";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), tailwind()],
  site: 'https://behunin.github.io',
  base: '/astro-ecommerce',
  vite: {
    plugins: [
      devtools({
        /* additional options */
        autoname: true, // e.g. enable autoname
      }),
    ]
  }
});