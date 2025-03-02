// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import htmx from "astro-htmx";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
