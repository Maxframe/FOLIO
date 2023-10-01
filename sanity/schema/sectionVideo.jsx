import { DocumentVideoIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  title: "Video",
  name: "sectionVideo",
  type: "object",
  icon: DocumentVideoIcon,

  fields: [
    defineField({ name: "videoTitle", title: "Video Title", type: "string" }),
    defineField({
      title: "Video URL",
      name: "VideoUrl",
      type: "url",
    }),
    defineField({
      title: "Image Settings",
      name: "imageSettings",
      type: "object",
      options: {
        columns: 2,
      },
      fields: [
        defineField({
          name: "gridBegin",
          title: "Grid Begin",
          type: "number",
          validation: (Rule) => [Rule.min(1), Rule.max(9)],
        }),
        defineField({
          name: "gridEnd",
          title: "Grid End",
          type: "number",
          validation: (Rule) => [Rule.min(1), Rule.max(9)],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "videoTitle",
    },
  },
});
