export default {
  name: "projectV2",
  title: "ProjectsV2",
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
      title: "Initial Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Was ist es? Was macht es? Und für wen ist es?",
    },
    {
      name: "InfoSnippets",
      title: "Info Snippets",
      type: "object",
      fields: [
        {
          name: "contextText",
          title: "Kontext",
          type: "string",
          description: "Wie und wo ist es entstanden?",
        },
        {
          name: "roleText",
          title: "Rolle",
          type: "string",
          description: "Was war meine Rolle?",
        },
        {
          name: "techText",
          title: "Technologie",
          type: "string",
          description: "Was wurde dafür alles benutzt?",
        },
      ],
    },
    {
      name: "AddiInfoSnippets",
      title: "Additional Info Snippets",
      type: "array",
      of: [{ type: "infoSnippet" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "sectionText" },
        { type: "sectionImage" },
        { type: "sectionVideo" },
      ],
      preview: {
        select: {
          title: "sectionTitle",
        },
      },
    },
  ],

  preview: {
    select: {
      title: "projectName",
      media: "thumbnailImage",
    },
  },
};
