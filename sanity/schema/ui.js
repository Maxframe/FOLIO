export default {
  name: "ui",
  title: "UI",
  type: "document",
  fields: [
    {
      name: "textAccent",
      title: "Accent text",
      type: "string",
    },
    {
      name: "textFirstLine",
      title: "Text First Line",
      type: "string",
    },

    {
      name: "textParagraphOne",
      title: "Text Paragraph One",
      type: "text",
      rows: 3,
    },
    {
      name: "textParagraphTwo",
      title: "Text Paragraph Two",
      type: "text",
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: "textFirstLine",
    },
  },
};
