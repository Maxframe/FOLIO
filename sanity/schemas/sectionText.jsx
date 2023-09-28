import { BlockContentIcon } from "@sanity/icons";

export default {
  title: "Text",
  name: "sectionText",
  type: "object",
  icon: BlockContentIcon,
  fields: [
    { name: "sectionTitle", title: "Section Title", type: "string" },
    {
      name: "sectionText",
      title: "Section Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "sectionText",
    },
  },
};
