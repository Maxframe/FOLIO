import { defineConfig } from "astro/config";
import { sanityIntegration as sanity } from "@narration-sd/sanity-astro";
import vercel from "@astrojs/vercel/static";
// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
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
});
