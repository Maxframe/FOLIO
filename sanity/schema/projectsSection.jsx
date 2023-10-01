import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "projectsSection",
  type: "document",
  fields: [
    { name: "heading", title: "Heading", type: "string" },

    {
      name: "projectsFeatured",
      title: "Featured Projects",
      type: "array",
      of: [
        {
          name: "fProject",
          title: "Featured Project",
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    },
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
