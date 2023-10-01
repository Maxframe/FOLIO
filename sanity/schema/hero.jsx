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
          title: "Subtitle",
          name: "subtitle",
          type: "string",
        }),
        defineField({
          title: "Subtitle Special",
          name: "subtitleSpecial",
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
