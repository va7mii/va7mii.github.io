# va7mii.github.io

Kevin Zhang's personal site, built with [Astro](https://astro.build/) on the [AstroPaper](https://github.com/satnaing/astro-paper) theme (v6.1.0) and deployed to GitHub Pages.

## Develop

Requires Node 22.12+ and pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # type-check, build to dist/, build the search index
pnpm preview    # serve dist/
```

For a step-by-step guide to adding posts, projects and pages, changing the icon, and ideas for more dynamic features, see [docs/EDITING.md](docs/EDITING.md).

## Where things live

| What                     | Where                                      |
| ------------------------ | ------------------------------------------ |
| Site title, socials, URL | `astro-paper.config.ts`                    |
| Home page                | `src/pages/index.astro`                    |
| About / Talks text       | `src/content/pages/about.md`, `talks.md`   |
| Blog posts               | `src/content/posts/*.md`                   |
| Projects                 | `src/content/projects/*.md`                |
| Images used in content   | `src/assets/` (optimized at build time)    |
| CV PDF                   | `public/assets/pdf/Resume_Kevin_Zhang.pdf` |
| Talk slides              | `public/assets/slides/`                    |
| Nav links                | `src/components/Header.astro`              |

### New blog post

Add `src/content/posts/my-post.md`:

```md
---
title: My Post
pubDatetime: 2025-07-01T10:00:00-07:00
description: One-line summary shown in lists and previews.
tags: [coding]
---

Post body in Markdown.
```

Posts with `draft: true` are not published. The four posts migrated from the Jekyll site are drafts until they're written.

### New project

Add `src/content/projects/my-project.md` with `title`, `description`, an optional `cover` image (relative path into `src/assets/projects/`), `importance` (lower is listed first), `repo` and `tags`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** (one-time).

## Custom domain

1. Add `public/CNAME` containing just the domain, e.g. `kevinzhang.dev`.
2. Set `site.url` in `astro-paper.config.ts` to `https://kevinzhang.dev/`.
3. Point DNS at GitHub Pages ([docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)) and set the domain in **Settings → Pages**.
