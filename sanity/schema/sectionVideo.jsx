import { DocumentVideoIcon } from "@sanity/icons";

export default {
  title: "Video",
  name: "sectionVideo",
  type: "object",
  icon: DocumentVideoIcon,

  fields: [
    { name: "videoTitle", title: "Video Title", type: "string" },
    {
      title: "Video URL",
      name: "VideoUrl",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "videoTitle",
    },
  },
};
