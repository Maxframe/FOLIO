import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://maxwerner.ch",
  server: { open: "/" },
  image: {
    domains: ["cdn.sanity.io"],
  },
  integrations: [
    sanity({
      projectId: "lctqiis2",
      dataset: "production",
      apiVersion: "v2021-03-25",
      useCdn: false,
    }),
    sitemap(),
  ],
  experimental: {
    clientPrerender: true,
  },
});
