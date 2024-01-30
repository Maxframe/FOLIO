import { defineConfig } from "astro/config";
import { sanityIntegration as sanity } from "@narration-sd/sanity-astro";
// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "lctqiis2",
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
