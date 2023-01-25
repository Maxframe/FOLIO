export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectName",
      },
    },

    {
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 5,
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "sectionContent" }],
    },
  ],
  preview: {
    select: {
      title: "projectName",
      media: "thumbnailImage",
    },
  },
};
