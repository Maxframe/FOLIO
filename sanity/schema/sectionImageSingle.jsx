import { ImageIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  title: "Single Image",
  name: "sectionImageSingle",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      title: "Image",
      name: "sImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Alt",
      name: "altText",
      type: "string",
      description: "Was ist im Bild zu sehen?",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      title: "Optional Caption",
      name: "captionText",
      type: "string",
      description: "Gibt es dazu was zu sagen?",
    }),
    defineField({
      title: "Image Settings",
      name: "imageSettings",
      type: "object",
      options: {
        columns: 2,
      },
      fields: [
        {
          name: "gridBegin",
          title: "Grid Begin",
          type: "number",
          description: "Range: 1-10",
          validation: (Rule) => [Rule.min(1), Rule.max(10)],
        },
        {
          name: "gridEnd",
          title: "Grid End",
          type: "number",
          description: "Range: 1-10",
          validation: (Rule) => [Rule.min(1), Rule.max(10)],
        },
        {
          name: "maxHeight",
          title: "Maximal Height (px)",
          type: "number",
          validation: (Rule) => [Rule.positive()],
        },
      ],
    }),
  ],
  preview: {
    select: {
      img: "sImage",
      altText: "altText",
    },
    prepare(select) {
      const { altText, img } = select;
      return {
        title: `1 | ${altText}`,
        media: img,
      };
    },
  },
});
