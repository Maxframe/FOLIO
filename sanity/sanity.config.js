import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "FOLIO2",
  projectId: "lctqiis2",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});
