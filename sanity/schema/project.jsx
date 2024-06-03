import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentsIcon,
  groups: [
    {
      name: "main",
      title: "Main",
    },
    {
      name: "thumb",
      title: "Thumb Image",
    },

    {
      name: "sections",
      title: "Sections",
    },
  ],
  fields: [
    defineField({
      name: "projectName",
      title: "Project Name",
      type: "string",
      group: "main",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "main",
      options: {
        source: "projectName",
        maxLength: 96,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      group: "main",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "figure",
      group: "thumb",
    }),
    defineField({
      name: "altHeroImage",
      title: "Alternative Hero Image?",
      type: "boolean",
      initialValue: false,
      group: "thumb",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "figure",
      group: "thumb",
      hidden: ({ document }) => !document?.altHeroImage,
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      group: "main",
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "description",
      title: "Initial Description",
      type: "blockContent",
      group: "main",
      description: "Was ist es? Was macht es? Und für wen ist es?",
    }),
    defineField({
      name: "infoSnippets",
      title: "Info Snippets",
      type: "object",
      group: "main",
      fields: [
        {
          name: "contextText",
          title: "Kontext",
          type: "string",
          description: "Wie und wo ist es entstanden?",
        },
        {
          name: "roleText",
          title: "Rolle",
          type: "string",
          description: "Was war meine Rolle?",
        },
        {
          name: "techText",
          title: "Technologie",
          type: "string",
          description: "Was wurde dafür alles benutzt?",
        },
      ],
    }),
    defineField({
      name: "AddiInfoSnippets",
      title: "Additional Info Snippets",
      type: "array",
      description:
        "Zum Beispiel: Link zum Projekt, evtl. Preise oder Nominierungen, Artikel zum Projekt mit mehr Infos",
      of: [defineArrayMember({ type: "infoSnippet" })],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      group: "sections",
      of: [
        { type: "sectionText" },
        { type: "sectionImageSingle" },
        { type: "sectionImageDouble" },
        { type: "sectionVideo" },
      ],
      preview: {
        select: {
          title: "sectionTitle",
        },
      },
    }),
  ],
  initialValue: {
    altHeroImage: false,
  },

  preview: {
    select: {
      title: "projectName",
      media: "thumbnailImage.image",
    },
  },
});
