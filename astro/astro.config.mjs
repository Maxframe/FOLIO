import { loadEnv } from "vite";
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ""
);
import { defineConfig } from "astro/config";

const projectId = PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_DATASET;

import sanity from "@sanity/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://maxwerner.ch",
  server: { open: "/" },
  integrations: [
    sanity({
      projectId,
      dataset,
      apiVersion: "v2021-03-25",
      useCdn: false,
    }),
    sitemap(),
  ],
  experimental: {
    clientPrerender: true,
  },
});
