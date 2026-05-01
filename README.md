# UVerify Discovery

The landing page for [uverify.io](https://uverify.io) — an explainer for the UVerify service. It provides a comprehensive overview of the features offered by UVerify, a decentralized application that lets users place verifiable data fingerprints on the Cardano blockchain.

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/UVerify-io/uverify-discovery.git
   cd uverify-discovery
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3050`.

## Build

```bash
npm run build
```

The build output lands in `dist/client/` — this is the folder to deploy. It contains pre-rendered static HTML for all routes (including `/blog` and each post), so crawlers receive full content without needing JavaScript.

The `dist/server/` folder is an intermediate SSR bundle used during the build to generate the HTML; it does not need to be deployed.

## Deployment

The project deploys to GitHub Pages automatically on every push to `main` via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

For manual Firebase deployment:

```bash
npm run deploy
```

## Routes

| Path | Description |
|---|---|
| `/` | Landing page (About, How It Works, Stats, Use Cases, Features, Developer Docs, Roadmap, Contact) |
| `/blog` | Blog index |
| `/blog/<slug>` | Individual post |
| `/blog/rss.xml` | RSS 2.0 feed |
| `/sitemap.xml` | XML sitemap |
| `/terms-of-use` | Terms of Use |
| `/privacy-policy` | Privacy Policy |

## Writing a blog post

### File location

Posts are Markdown files committed to `content/blog/`. The filename (without `.md`) becomes the URL slug unless you specify one explicitly.

```
content/blog/
  hello-world.md        → /blog/hello-world
  my-custom-slug.md     → /blog/my-custom-slug (or use slug: field)
```

### Frontmatter fields

```yaml
---
title: "Your Post Title"           # required
description: "One-sentence summary" # required — used in meta description and OG
publishedAt: "2026-06-01T00:00:00Z" # required — ISO 8601
updatedAt: "2026-06-15T00:00:00Z"   # optional — shown as "Updated" date
slug: "custom-slug"                 # optional — falls back to filename
tags: ["cardano", "certification"]  # optional
ogImage: "/my-og-image.png"         # optional — defaults to /og-image.png
canonical: "https://..."            # optional — only set when cross-posting
draft: true                         # optional — drafts are excluded from build
---
```

All fields are validated with Zod at build time. An invalid schema fails `npm run build` immediately with a clear error pointing to the offending file.

### Local preview

```bash
npm run dev
```

Visit `http://localhost:3050/blog` to see the listing and `http://localhost:3050/blog/<slug>` for the post. Hot-reload is not supported for markdown content changes — restart the dev server after editing a `.md` file.

### Publish flow

1. Commit the `.md` file to `content/blog/` on `main`
2. The GitHub Actions workflow builds and deploys automatically
3. The post appears at `https://uverify.io/blog/<slug>` with its own pre-rendered HTML, meta description, OG tags, and JSON-LD schema

To keep a post unpublished while drafting, set `draft: true` — it will be ignored by the listing, sitemap, RSS feed, and prerender.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GPLv3 License. See `LICENSE` for more information.

## Contact

UVerify team — [hello@uverify.io](mailto:hello@uverify.io)
