import { ImageIcon } from "@sanity/icons";

export default {
  title: "Image",
  name: "sectionImage",
  type: "object",
  icon: ImageIcon,
  fields: [
    {
      title: "Image",
      name: "sImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Alt",
      name: "altText",
      type: "string",
      description: "Was ist im Bild zu sehen?",
    },
    {
      title: "Image Settings",
      name: "imageSettings",
      type: "object",
      fields: [
        {
          name: "gridBegin",
          title: "Grid Begin",
          type: "number",
        },
        {
          name: "gridEnd",
          title: "Grid End",
          type: "number",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "altText",
      media: "sImage",
    },
  },
};
