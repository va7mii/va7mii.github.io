import type { CollectionEntry } from "astro:content";

export const getSortedProjects = (projects: CollectionEntry<"projects">[]) =>
  projects
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        a.data.importance - b.data.importance ||
        a.data.title.localeCompare(b.data.title)
    );
