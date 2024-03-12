import { defineConfig } from "astro/config";
import { sanityIntegration as sanity } from "@sanity/astro";
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: "production",
      apiVersion: "v2021-03-25",
      useCdn: false,
    }),
  ],
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    clientPrerender: true,
  },
});
