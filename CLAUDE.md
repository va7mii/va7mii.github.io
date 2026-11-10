# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Kevin Zhang's personal site: Astro 6 on the AstroPaper theme (v6.1.0), deployed to GitHub Pages. `docs/EDITING.md` is the owner-facing how-to guide (adding posts/projects/pages, icons, ideas for dynamic features); keep it in sync when changing how content is authored.

## Commands

Node >=22.12 (CI uses 24) and pnpm 11 (lockfile is `pnpm-lock.yaml`).

```sh
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # astro check (type-check) + astro build + pagefind index, copied into public/pagefind
pnpm preview        # serve dist/; search only works here, not in dev
pnpm lint           # eslint
pnpm format:check   # prettier (pnpm format to fix)
pnpm sync           # regenerate astro:content types after schema changes
```

There is no test suite. CI (`.github/workflows/ci.yml`, on PRs) runs lint, format:check and build, so run all three before pushing. `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

## Architecture

- **Config:** edit `astro-paper.config.ts` (site URL/title, socials, share links, feature flags). `src/config.ts` merges it with defaults into the resolved config that code imports as `@/config`; don't edit defaults there for site-level changes. `@/*` maps to `src/*`.
- **Content collections** (`src/content.config.ts`): `posts`, `projects` and `pages`, all Markdown/MDX loaded by glob. Files starting with `_` are ignored (e.g. `posts/_template.md`). Schemas define the allowed frontmatter; images in frontmatter (`cover`, `ogImage`) are relative paths into `src/assets/` and are optimized at build.
  - Posts are filtered by `src/utils/postFilter.ts`: `draft: true` always hidden; future `pubDatetime` hidden in production but shown in dev.
  - Projects are ordered by `importance` (lower first) via `getSortedProjects`.
  - `pages` holds prose for custom pages: `about.md` renders on the home page, `talks.md` on `/talks`. A new text page = a `pages/*.md` entry plus an `.astro` page calling `getEntry("pages", "<name>")`.
- **Pages** (`src/pages/`): the home page `index.astro` is heavily customized (hero, research interests, projects, posts). Custom additions beyond stock AstroPaper: `projects/`, `photos.astro`, `talks.astro`, `cv.astro`. Nav links live in `src/components/Header.astro`; UI strings in `src/i18n/lang/en.ts` (single `en` locale, unprefixed routes).
- **Data files** (`src/data/`): `interests.ts` drives the home page research interest cards (and the hero phrase on hover); `hobbies.ts` drives the `/photos` photo cloud, which globs `src/assets/**` images and groups them by each hobby's `folders`. Hobbies with no images are hidden; filename `01-` prefixes set order and are stripped from captions.
- **Static files** in `public/` are served as-is (CV PDF at `public/assets/pdf/`, talk slides at `public/assets/slides/`, favicon, `default-og.jpg`). Use `getAssetPath` from `src/utils/withBase.ts` when linking to them so the Astro `base` is respected.
- **Markdown pipeline** (`astro.config.ts`): remark-toc + remark-collapse (a "Table of contents" heading becomes a collapsible TOC), rehype-callouts, Shiki with diff/highlight/filename transformers. Dynamic OG images are generated with satori (`src/pages/og.png.ts`, `posts/[...slug]`).
- Styling is Tailwind v4 via the Vite plugin; theme colors are in `src/styles/theme.css`.
