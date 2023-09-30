import { ImagesIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  title: "Double Image",
  name: "sectionImageDouble",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      title: "Double Image Upload",
      name: "dImageUpload",
      type: "object",
      icon: ImagesIcon,
      fields: [
        defineField({
          title: "Image Left",
          name: "dImageLeft",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: "Image Right",
          name: "dImageRight",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: "Alt",
          name: "altTextLeft",
          type: "string",
          description: "Was ist im Bild zu sehen?",
          validation: (Rule) => [Rule.required()],
        }),
        defineField({
          title: "Alt",
          name: "altTextRight",
          type: "string",
          description: "Was ist im Bild zu sehen?",
          validation: (Rule) => [Rule.required()],
        }),
      ],
      options: {
        columns: 2,
      },
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
        defineField({
          name: "maxHeight",
          title: "Maximal Height",
          type: "number",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      img: "dImageUpload.dImageLeft",
      altText: "dImageUpload.altTextLeft",
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
