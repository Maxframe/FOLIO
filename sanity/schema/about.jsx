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
      name: "aboutText",
      title: "Text",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      description: "Wer bin ich?",
    }),
    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      title: "Alt",
      name: "aboutAltText",
      type: "string",
      description: "Was ist im Bild zu sehen?",
      validation: (Rule) => [Rule.required()],
    }),

    {
      name: "cvFile",
      title: "CV",
      type: "file",
      fields: [
        {
          name: "cvText",
          title: "Button Text",
          type: "string",
        },
      ],
    },

    /* 
https://www.sanity.io/docs/file-type
Download file
In order to download a file from your front-end you need to append ?dl=<filename-of-your-choice.pdf> to the file URL. 
If you leave the filename blank, the original filename will be used if present. 
If the original filename is not available, the id of the file will be used instead.

// GROQ query
*[_type == 'movie'] {
  title,
  "manuscriptURL": manuscript.asset->url
}

// Then you can use the URL in HTML for example like this:
// <a href={`${manuscriptURL}?dl=`}>Manuscript</a> 
*/
    defineField({
      name: "contactLinks",
      title: "Contact",
      type: "object",
      fields: [
        defineField({
          title: "E-Mail",
          name: "mailLink",
          type: "string",
        }),
        defineField({
          name: "addLinks",
          title: "Additional Contact Links",
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
