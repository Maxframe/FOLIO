import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schema";
import { myStructure } from "./deskStructure";

console.log(process.env.SANITY_STUDIO_TITLE);

export default defineConfig({
  title: "FOLIO",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
