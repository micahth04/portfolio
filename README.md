# Micah's Portfolio

A static journalism portfolio built with Astro.

## Status

- ✅ Phase 1 — static site rendering from local markdown, matching
  `reference/micah-portfolio-mockup.html`
- ⏳ Phase 2 — deploy to Cloudflare Pages
- ⏳ Phase 3 — Sveltia CMS + Cloudflare Worker OAuth, so Micah can publish
  without touching code

## Adding an article (until the CMS is wired up)

Add a markdown file to `src/content/articles/`. No body content — the file
is just frontmatter:

```md
---
headline: Some headline
url: https://example.com/the-actual-article
outlet: The Arrow
date: 2026-09-01
excerpt: >-
  Two to three sentences summarizing the piece.
featured: false
---
```

- `featured: true` articles appear in "Selected work" on the homepage,
  newest three only (the cap is enforced in `src/pages/index.astro`, not by
  trusting this flag).
- Everything else shows up in the archive, grouped by year.
- `archiveUrl` is optional — a Wayback Machine link for the piece, added
  automatically once that pipeline exists (not yet built).
- `draft: true` hides an article from the site without deleting it.

Schema lives in [`src/content.config.ts`](./src/content.config.ts).

## Site copy

Name, tagline, bio, and contact links live in
[`src/site.config.ts`](./src/site.config.ts) — some of it is still
placeholder pending real answers from Micah.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the static site to `./dist/`            |
| `npm run preview`   | Preview the production build locally          |

## Project structure

```text
/
├── reference/                    # design mockup Micah was promised
├── src/
│   ├── components/                # Masthead, Hero, Featured, Archive, About, Footer
│   ├── content/articles/          # one markdown file per article
│   ├── content.config.ts          # articles collection schema
│   ├── layouts/Layout.astro       # <head>, fonts, Person schema, analytics
│   ├── pages/index.astro          # homepage — assembles everything above
│   ├── site.config.ts             # name, bio, contact, resume link
│   └── styles/global.css          # ported from the mockup, do not add to it
└── public/
    └── resume.pdf                 # stable download link, currently a placeholder
```
