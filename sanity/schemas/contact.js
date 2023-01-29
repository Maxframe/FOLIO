export default {
  name: "contact",
  title: "Contact Links",
  type: "document",
  fields: [
    {
      name: "mailAddress",
      title: "Current Mail Address",
      type: "string",
    },
    {
      name: "instagramLink",
      title: "Instagram Link",
      type: "string",
    },
    {
      name: "linkedinLink",
      title: "Linkedin Link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "mailAddress",
    },
  },
};
