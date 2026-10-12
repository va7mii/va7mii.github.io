import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // Custom domain: change this to e.g. "https://kevinzhang.dev/" and add
    // public/CNAME (see README.md → "Custom domain").
    url: "https://va7mii.github.io/",
    title: "Kevin Zhang",
    description:
      "Kevin (He-Jun) Zhang: integrated engineering student at UBC, robotics and AI tinkerer, amateur radio operator (VA7MII), snowboard instructor.",
    author: "Kevin Zhang",
    profile: "https://va7mii.github.io/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Vancouver",
    dir: "ltr",
  },
  posts: {
    perPage: 5,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/va7mii" },
    { name: "linkedin", url: "https://www.linkedin.com/in/kzhang47/" },
    { name: "instagram", url: "https://www.instagram.com/kvzhxng/" },
    { name: "mail", url: "mailto:kzhang47@student.ubc.ca" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
