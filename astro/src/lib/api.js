import { useSanityClient } from "astro-sanity";

export async function getAllProjects() {
  const query = `*[_type == 'project']`;
  const projects = await useSanityClient().fetch(query);
  return projects;
}

export async function getAboutContent() {
  const query = `*[_type == 'about'][0]`;
  const about = await useSanityClient().fetch(query);
  return about;
}

export async function getHeroContent() {
  const query = `*[_type == 'hero'][0]`;
  const hero = await useSanityClient().fetch(query);
  return hero;
}

export async function getContactContent() {
  const query = `*[_type == 'contact'][0]`;
  const contact = await useSanityClient().fetch(query);
  return contact;
}
