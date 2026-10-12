// Photo albums shown on /photos.
//
// To add an album: make a folder under src/assets/photos/ (e.g.
// src/assets/photos/snowboarding/), drop .jpg/.png/.webp files in it, and add
// an entry below with `folder: "photos/snowboarding"`. Photos are sorted by
// file name, so prefix them (01-, 02-, ...) to control the order; the first
// few become the stacked "cluster" preview.
//
// The placeholder albums below reuse images already on the site. Replace or
// delete them once you've added your own.

export interface Album {
  /** URL-safe id, also used as the #anchor on /photos */
  slug: string;
  title: string;
  description?: string;
  /** Folder under src/assets/ holding this album's images */
  folder: string;
}

export const albums: Album[] = [
  {
    slug: "builds",
    title: "Builds",
    description: "Robots and hardware from my projects.",
    folder: "projects",
  },
  {
    slug: "space",
    title: "Space",
    description: "ESA Fly Your Satellite! test campaign in Belgium.",
    folder: "blogs",
  },
  {
    slug: "talks",
    title: "Talks",
    description: "Presenting at conferences.",
    folder: "talks",
  },
];
