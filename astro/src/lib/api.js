import { useSanityClient } from "astro-sanity";

export async function getAllProjects() {
  const query = `*[_type == 'project']`;
  const projects = await useSanityClient().fetch(query);
  return projects;
}

export async function getAboutContent() {
  const query = `*[_type == 'about']`;
  const about = await useSanityClient().fetch(query);
  return about;
}



/* {
  allProject(where: {_id: {eq: "0a71f66a-ac82-4b3a-b476-311d0ef16cb0"}}) {
    title
    slug {current}
    _id
    description
    image {asset {url}}
  }
} */
