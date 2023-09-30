import { BlockContentIcon } from "@sanity/icons";

export default {
  title: "Text",
  name: "sectionText",
  type: "object",
  icon: BlockContentIcon,
  fields: [
    { name: "sectionTitle", title: "Optional Title", type: "string" },
    {
      name: "sectionText",
      title: "Text",
      type: "array",
      description: "Try to keep it compact (max. 300 chars)",
      of: [{ type: "block" }],
    },
    {
      title: "Inversed Layout? (RtL)",
      name: "rightToLeft",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "sectionText",
    },
  },
};
