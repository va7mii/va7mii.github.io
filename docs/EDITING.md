# Editing your Astro site

Run `npm run dev` (or `pnpm dev`) and changes show up live at http://localhost:4321. Push to `main` to publish.

## 1. Add content

### Blog post
Create `src/content/posts/my-post.md`. The file name becomes the URL (`/posts/my-post/`).

```md
---
title: Wii Sensor Hacking
pubDatetime: 2025-06-16T11:39:00-07:00
description: Trying some crazy things with the Wii remote
tags: [coding]
featured: false   # true pins it in "Featured" on the home page
draft: false      # true hides it
---

Write in Markdown here. Images: put them in src/assets/blogs/ and use
![alt text](../../assets/blogs/photo.jpg)
```

Your 4 migrated posts are in that folder with `draft: true`. Fill one in and delete that line to publish it.

### Project
Create `src/content/projects/my-project.md` → `/projects/my-project/`. Put its images in `src/assets/projects/my-project/`.

```md
---
title: PlasRov
description: One line shown on the project card.
cover: ../../assets/projects/my-project/cover.png   # optional
importance: 1      # lower = shown first
repo: https://github.com/va7mii/PlasRov            # optional
tags: [robotics, computer-vision]
---

Markdown write-up here.
```

### New page (e.g. /photos)
Text-only pages are easiest copied from Talks:

1. Create `src/content/pages/photos.md` with a `title` and `description` in the frontmatter, then Markdown.
2. Copy `src/pages/talks.astro` to `src/pages/photos.astro` and change `"talks"` to `"photos"` in `getEntry("pages", "talks")`.
3. Add a nav link in `src/components/Header.astro`: copy one of the `<li>` blocks and change the path and label. The labels live in `src/i18n/lang/en.ts` (`nav`), or just type plain text.

Other places to edit:
- About page text: `src/content/pages/about.md`
- Home intro paragraph: `src/pages/index.astro` (the `hero` section)
- Name, socials, site URL: `astro-paper.config.ts`
- CV: replace `public/assets/pdf/Resume_Kevin_Zhang.pdf`

## 2. Change the icon

- **Browser tab icon:** replace `public/favicon.svg` with your own SVG (same file name). If you only have a PNG, put it in `public/favicon.png` and change line 42 of `src/layouts/Layout.astro` to `<link rel="icon" type="image/png" href={getAssetPath("favicon.png")} />`. https://realfavicongenerator.net makes one from a photo or logo.
- **Link preview image** (the image shown when a link is shared): replace `public/default-og.jpg`, 1200×630.
- **Social icons:** SVGs in `src/assets/icons/socials/`. Add a file such as `youtube.svg` from https://tabler.io/icons, then reference it as `{ name: "youtube", url: "..." }` in `astro-paper.config.ts`.
- **Colours:** `src/styles/theme.css`.

## 3. Making it more dynamic

Recommended first: **interactive islands**. Astro can embed small React, Svelte or Vue components that run in the browser on otherwise static pages (`npx astro add react`, then `<MyThing client:visible />`). Good fits for you:
- An ALEASAT live tracker that shows the satellite's position on a map from public TLE data (satellite.js + Leaflet). Very on-brand for a radio amateur.
- A project filter: clickable tag chips on /projects.

Other options:
- **GitHub activity:** pull your latest repos and stars at build time with the GitHub API. Add a scheduled GitHub Action so the site rebuilds daily and stays fresh.
- **Comments on posts:** Giscus, which stores comments in GitHub Discussions. There's an official AstroPaper guide.
- **Motion polish:** page transitions are already on (Astro View Transitions). You could add hover and scroll-in animations with a little CSS.
- **Embeds:** Strava/Garmin snowboard stats, a photo gallery, or MDX posts with live demos such as interactive plots of your Lambert W talk.
- **Analytics:** Umami, Plausible or GoatCounter (privacy-friendly; one script tag in `src/layouts/Layout.astro`).
