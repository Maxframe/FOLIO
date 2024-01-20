import { ImageIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  title: "Single Image",
  name: "sectionImageSingle",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      title: "Single Image",
      name: "sImage",
      type: "figure",
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
      img: "sImage.image",
      altText: "sImage.alt",
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
