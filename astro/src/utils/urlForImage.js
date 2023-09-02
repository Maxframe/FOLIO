import { useSanityClient } from "@sanity/astro";
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(useSanityClient());

export function urlFor(source) {
  return imageBuilder.image(source);
}
