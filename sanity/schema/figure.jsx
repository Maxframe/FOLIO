import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "figure",
  type: "object",
  title: "Figure",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative Text",
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption",
    }),
    defineField({
      name: "captionUrl",
      type: "string",
      title: "Caption URL",
    }),
  ],
});
