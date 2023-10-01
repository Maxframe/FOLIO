import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "projectName",
      title: "Project Name",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectName",
        maxLength: 96,
      },
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      description: "minWidth: 1200px",
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      title: "Alt",
      name: "thumbAltText",
      type: "string",
      description: "Was ist im Bild zu sehen?",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "description",
      title: "Initial Description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      description: "Was ist es? Was macht es? Und für wen ist es?",
    }),
    defineField({
      name: "InfoSnippets",
      title: "Info Snippets",
      type: "object",
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
      of: [defineArrayMember({ type: "infoSnippet" })],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
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

  preview: {
    select: {
      title: "projectName",
      media: "thumbnailImage",
    },
  },
});
