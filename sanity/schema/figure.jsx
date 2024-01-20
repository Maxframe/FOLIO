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
      description: "Was ist im Bild zu sehen?",
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption",
      description: "Was gibt es dazu noch zu sagen?",
    }),
    defineField({
      name: "captionUrl",
      title: "Caption URL",
      type: "url",
    }),
  ],
});
