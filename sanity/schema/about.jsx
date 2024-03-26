import { defineType, defineField, defineArrayMember } from "sanity";
import { LinkIcon } from "@sanity/icons";

export default defineType({
  name: "about",
  type: "document",
  fields: [
    defineField({
      name: "aboutTitle",
      title: "About Heading",
      type: "string",
      options: {
        maxLength: 96,
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Für den Anchor Link",
      options: {
        source: "aboutTitle",
      },
    }),
    defineField({
      name: "aboutTextBlock",
      title: "Über mich",
      description: "Wer bin ich?",
      type: "blockContent",
    }),
    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "figure",
    }),
    {
      name: "cvFile",
      title: "CV",
      type: "file",
      fields: [
        defineArrayMember({
          title: "CV Link",
          description: "Alternativer Link für gehostetes CV",
          name: "cvLink",
          type: "url",
        }),
        defineArrayMember({
          name: "cvText",
          title: "Button Text",
          type: "string",
        }),
      ],
    },

    defineField({
      name: "contactLinks",
      title: "Contact",
      type: "object",
      fields: [
        defineField({
          title: "E-Mail Label",
          name: "mailLinkLabel",
          type: "string",
        }),
        defineField({
          title: "E-Mail",
          name: "mailLink",
          type: "string",
          validation: (Rule) => [Rule.email()],
        }),
        defineField({
          title: "Social Links Label",
          name: "addLinksLabel",
          type: "string",
        }),
        defineField({
          name: "addLinks",
          title: "Additional Social Links",
          type: "array",
          of: [
            defineField({
              name: "addLink",
              title: "Contact Link",
              icon: LinkIcon,
              type: "object",
              fields: [
                defineArrayMember({
                  title: "Name",
                  name: "contactName",
                  type: "string",
                }),
                defineArrayMember({
                  title: "Link",
                  name: "contactLink",
                  type: "url",
                }),
                defineArrayMember({
                  title: "Type",
                  name: "contactType",
                  type: "string",
                  options: {
                    list: [
                      { title: "Instagram", value: "instagram" },
                      { title: "Linkedin", value: "linkedin" },
                    ],
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "contactName",
            },
          },
        }),
      ],
      options: {
        columns: 2,
      },
    }),
  ],
  preview: {
    prepare() {
      const myTitle = "About Section";
      return {
        title: myTitle,
      };
    },
  },
});
