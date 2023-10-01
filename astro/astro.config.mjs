import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";

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
});
