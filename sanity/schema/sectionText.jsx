import { BlockContentIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  title: "Text",
  name: "sectionText",
  type: "object",
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Optional Title",
      type: "string",
      description:
        "Beispiele: Wer ist der Kunde? Wer ist die Zielgruppe? Was sind die Anforderungen oder Bedürfnisse? Welche Lösung wurde gefunden? Was waren die Resultate? Welche Herausforderungen hat es gegeben? Was hat man daraus gelernt?",
    }),
    defineField({
      name: "sectionText",
      title: "Text",
      type: "blockContent",
      description: "Try to keep it compact (max. 300 chars)",
    }),
    defineField({
      name: "textGridPos",
      title: "Text Grid Position",
      type: "number",
      description: "Links = 3 / Rechts = 5",
      validation: (Rule) => [Rule.required(), Rule.min(3), Rule.max(5)],
    }),
    defineField({
      name: "rightToLeft",
      title: "Inversed Layout? (RtL)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "sectionText",
    },
  },
});
