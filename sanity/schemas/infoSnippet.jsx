import { InfoOutlineIcon } from "@sanity/icons";

export default {
  title: "Additional Info Snippet",
  name: "infoSnippet",
  type: "object",
  icon: InfoOutlineIcon,
  fields: [
    { name: "snippetTitle", title: "Snippet title", type: "string" },
    {
      name: "snippetText",
      title: "Snippet Text",
      type: "string",
      options: {
        maxLength: 200,
      },
    },
  ],
  preview: {
    select: {
      title: "snippetTitle",
      subtitle: "snippetText",
    },
  },
};
