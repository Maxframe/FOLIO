import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schema";
import { myStructure } from "./deskStructure";

export default defineConfig({
  title: "FOLIO",
  projectId: "lctqiis2",
  dataset: "production",
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
