import { ImagesIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  title: "Double Image",
  name: "sectionImageDouble",
  type: "object",
  icon: ImagesIcon,

  fields: [
    defineField({
      title: "Images",
      name: "dImage",
      type: "object",
      options: {
        columns: 2,
      },
      fields: [
        defineField({
          title: "Image Left",
          name: "dImageLeft",
          type: "figure",
        }),
        defineField({
          title: "Image Right",
          name: "dImageRight",
          type: "figure",
        }),
      ],
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
          name: "gridBeginLeft",
          title: "Grid Begin Left",
          type: "number",
          description: "Range: 1-10",
          validation: (Rule) => [Rule.required(), Rule.min(1), Rule.max(10)],
        }),
        defineField({
          name: "gridBeginRight",
          title: "Grid Begin Right",
          type: "number",
          description: "Range: 1-10",
          validation: (Rule) => [Rule.required(), Rule.min(1), Rule.max(10)],
        }),
        defineField({
          name: "gridEndLeft",
          title: "Grid End Left",
          type: "number",
          description: "Range: 1-10",
          validation: (Rule) => [Rule.required(), Rule.min(1), Rule.max(10)],
        }),
        defineField({
          name: "gridEndRight",
          title: "Grid End Left",
          type: "number",
          description: "Range: 1-10",
          validation: (Rule) => [Rule.required(), Rule.min(1), Rule.max(10)],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      img: "dImage.dImageLeft.image",
      altText: "dImage.dImageLeft.alt",
    },
    prepare(select) {
      const { altText, img } = select;
      return {
        title: `2 | ${altText}`,
        media: img,
      };
    },
  },
});
