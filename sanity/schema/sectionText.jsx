import { BlockContentIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  title: "Text",
  name: "sectionText",
  type: "object",
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Optional Title",
      type: "string",
    }),
    defineField({
      name: "sectionText",
      title: "Text",
      type: "array",
      description: "Try to keep it compact (max. 300 chars)",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "textGridPos",
      title: "Text Grid Position",
      type: "number",
      description: "Links = 3 / Rechts = 5",
      validation: (Rule) => [Rule.min(3), Rule.max(5)],
    }),
    defineField({
      name: "rightToLeft",
      title: "Inversed Layout? (RtL)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "sectionText",
    },
  },
});
