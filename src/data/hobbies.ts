// Hobbies shown as clusters in the photo cloud on /photos.
//
// To add photos: drop .jpg/.png/.webp files into the hobby's folder under
// src/assets/ (e.g. src/assets/photos/snowboarding/). Hobbies whose folders
// are empty are hidden, so the empty snowboarding/bouldering/cycling folders
// below appear as soon as you add photos. Photos are sorted by file name; a
// leading "01-" style prefix sets the order and is dropped from the caption.
//
// The "Tinkering" and "Space" entries are placeholders that reuse images
// already on the site. Delete them once you've added your own photos.

export interface Hobby {
  /** URL-safe id */
  slug: string;
  title: string;
  /** Short line shown when the hobby is selected */
  description?: string;
  /** Folders under src/assets/ holding this hobby's photos */
  folders: string[];
}

export const hobbies: Hobby[] = [
  {
    slug: "snowboarding",
    title: "Snowboarding",
    description: "Cypress, Whistler, and teaching as a CASI instructor.",
    folders: ["photos/snowboarding"],
  },
  {
    slug: "bouldering",
    title: "Bouldering",
    folders: ["photos/bouldering"],
  },
  {
    slug: "cycling",
    title: "Cycling",
    folders: ["photos/cycling"],
  },
  {
    slug: "tinkering",
    title: "Tinkering",
    description: "Robots and hardware I've built.",
    folders: ["projects"],
  },
  {
    slug: "space",
    title: "Space & Talks",
    description: "ESA Fly Your Satellite! in Belgium, and conference talks.",
    folders: ["blogs", "talks"],
  },
];
