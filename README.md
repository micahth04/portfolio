# Micah Truelove-Herrick — Portfolio

Personal journalism portfolio. Static site built with [Astro](https://astro.build),
hosted on Cloudflare Pages.

## Development

```sh
npm install
npm run dev       # localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Articles

Each article is a markdown file in `src/content/articles/` containing
frontmatter only. Articles link out to the original publication; full text
is never hosted.

```md
---
headline: Article headline
url: https://example.com/original-article
outlet: The Arrow
date: 2026-09-01
excerpt: >-
  Two to three sentences summarizing the piece.
featured: false
---
```

| Field        | Required | Notes                                              |
| :----------- | :------- | :------------------------------------------------- |
| `headline`   | yes      |                                                    |
| `url`        | yes      | Link to the original article                       |
| `outlet`     | yes      | Publication name                                   |
| `date`       | yes      | `YYYY-MM-DD`                                       |
| `excerpt`    | yes      | Two to three sentences                             |
| `featured`   | no       | Shown under "Selected work"; newest three only     |
| `draft`      | no       | Hidden from the site without deleting the file     |
| `archiveUrl` | no       | Wayback Machine link                               |

Non-featured articles appear in the archive, grouped by year. The schema is
defined in `src/content.config.ts`.

## Site copy

Name, tagline, bio, and contact links are in `src/site.config.ts`.

## Structure

```text
public/
  resume.pdf            served at /resume.pdf
reference/              design mockup
src/
  components/           page sections
  content/articles/     one file per article
  content.config.ts     article schema
  layouts/Layout.astro  document head, fonts, structured data
  pages/index.astro     homepage
  site.config.ts        site copy
  styles/global.css     global styles
```
