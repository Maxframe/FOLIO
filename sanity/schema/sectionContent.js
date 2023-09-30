export default {
  title: "Section Content",
  name: "sectionContent",
  type: "object",
  fields: [
    { name: "sectionTitle", title: "Section Title", type: "string" },
    { name: "sectionText", title: "Section Text", type: "text" },
    {
      name: "sectionImages",
      title: "Section Image(s)",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "sectionText",
      media: "sectionImages.0.image.asset",
    },
  },
};
