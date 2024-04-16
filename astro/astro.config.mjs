import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://maxwerner.ch",
  integrations: [
    sanity({
      projectId: "lctqiis2",
      dataset: "production",
      apiVersion: "v2021-03-25",
      useCdn: false,
    }),
    sitemap(),
  ],
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    clientPrerender: true,
  },
});
