import { ImagesIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  title: "Double Image",
  name: "sectionImageDouble",
  type: "object",
  icon: ImagesIcon,
  options: {
    columns: 2,
  },
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
    defineField({
      name: "gridBeginLeft",
      title: "Grid Begin Left",
      type: "number",
      description: "Range: 1-10",
      validation: (Rule) => [Rule.min(1), Rule.max(10)],
    }),
    defineField({
      name: "gridBeginRight",
      title: "Grid Begin Right",
      type: "number",
      description: "Range: 1-10",
      validation: (Rule) => [Rule.min(1), Rule.max(10)],
    }),
    defineField({
      name: "gridEndLeft",
      title: "Grid End Left",
      type: "number",
      description: "Range: 1-10",
      validation: (Rule) => [Rule.min(1), Rule.max(10)],
    }),
    defineField({
      name: "gridEndRight",
      title: "Grid End Left",
      type: "number",
      description: "Range: 1-10",
      validation: (Rule) => [Rule.min(1), Rule.max(10)],
    }),
  ],

  preview: {
    select: {
      img: "dImageLeft",
      altText: "altTextLeft",
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
