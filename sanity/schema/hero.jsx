import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "hero",
  type: "document",
  fields: [
    defineField({
      title: "Double Image Upload",
      name: "heroText",
      type: "object",
      fields: [
        defineField({
          title: "Title Special",
          name: "titleSpecial",
          type: "string",
        }),
        defineField({
          title: "Title",
          name: "title",
          type: "string",
        }),
        defineField({
          title: "Subtitle Links",
          name: "subtitleLeft",
          type: "string",
        }),
        defineField({
          title: "Subtitle Connector",
          name: "subtitleConnect",
          type: "string",
        }),
        defineField({
          title: "Subtitle Rechts",
          name: "subtitleRight",
          type: "string",
        }),
      ],
      options: {
        columns: 2,
      },
    }),
  ],
  preview: {
    prepare() {
      const myTitle = "Hero Section";
      return {
        title: myTitle,
      };
    },
  },
});
