import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "projectsSection",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Für den Anchor Link",
      options: {
        source: "heading",
      },
    }),
    defineField({
      name: "projectsFeatured",
      title: "Featured Projects",
      type: "array",
      of: [
        defineArrayMember({
          name: "fProject",
          title: "Featured Project",
          type: "reference",
          to: [{ type: "project" }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      const myTitle = "Projects Section";
      return {
        title: myTitle,
      };
    },
  },
});
