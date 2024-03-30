export type SiteConfig = {
  siteUrl: string;
  title: string;
  author: string;
  titleSeparator: string;
  subtitle?: string;
  description?: string;
  keywords?: string;
  lang: string;
  ogLocale: string;
  logo?: Image;
  ogImage?: Image;
  socialLinks?: Link[];
  hero?: Hero;
  projectsPerPage?: number;
};
export type Image = {
  src: string;
  alt?: string;
  caption?: string;
  lqip?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type About = {
  title: string;
  slug: string;
  aboutTextBlock: string;
  aboutImage: Image;
  mailLinkLabel: string;
  mailLink: Link;
  addLinksLabel: string;
  addLinks: Link[];
  cv: {
    text: string;
    file: string;
    altUrl: string;
  };
};
