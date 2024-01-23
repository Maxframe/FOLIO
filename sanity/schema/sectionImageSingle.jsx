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
          validation: (Rule) => [Rule.required(), Rule.min(1), Rule.max(10)],
        },
        {
          name: "gridEnd",
          title: "Grid End",
          type: "number",
          description: "Range: 1-10",
          validation: (Rule) => [Rule.required(), Rule.min(1), Rule.max(10)],
        },
        {
          name: "isDarkImage",
          title: "Border for dark image",
          type: "boolean",
          initialValue: false,
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
