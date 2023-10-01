export default {
  name: "ui",
  title: "UI",
  type: "document",
  fields: [
    {
      name: "someting",
      title:
        "You can add there something if you know that you want it changed quickly :)",
      type: "string",
    },
    /* {
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
    }, */
  ],
  preview: {
    prepare() {
      const myTitle = "UI Settings and Strings";
      return {
        title: myTitle,
      };
    },
  },
};
