export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    /* {
        name: "RichDescription",
        title: "Rich description",
        type: "blockContent",
      }, */
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
