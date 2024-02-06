import { defineType, defineField, defineArrayMember } from "sanity";
import { LaunchIcon, LeaveIcon } from "@sanity/icons";

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: defineArrayMember([
    defineField({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 1", value: "h1" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "Internal link",
            name: "internalLink",
            icon: LeaveIcon,
            type: "object",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                weak: true,
                to: [{ type: "project" }],
              },
            ],
          },
          {
            title: "External link",
            name: "externalLink",
            icon: LaunchIcon,
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
  ]),
});
