import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  siteUrl: "https://maxwerner.ch",
  author: "Max Werner",
  title: "Portfolio Website",
  titleSeparator: "|",
  description:
    "Website von Max Werner, Designer digitaler und interaktiver Medien.",
  keywords:
    "Portfolio, Max, Werner, Design, Code, Interaction, UX, UI, Designer, Zurich, Lucerne",
  ogImage: {
    src: "/image.jpg",
    alt: "Max Werner - Portfolio Website",
  },
  lang: "de-CH",
  ogLocale: "de_CH",
  projectsPerPage: 6,
};
