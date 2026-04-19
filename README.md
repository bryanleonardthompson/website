# bryanleonardthompson.com

Source code for my personal website, built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
│   └── fonts/           # Web fonts
├── src/
│   ├── assets/          # Icons and images used in components
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts in Markdown format (organised by year)
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── vercel.json          # Vercel deployment configuration
└── package.json         # Project dependencies and scripts
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally before deploying  |

## Writing a Post

Add a `.md` file to `src/content/blog/YEAR/` with the following frontmatter:

```markdown
---
title: "Post title"
description: "Short description"
pubDatetime: 2026-04-19T12:00:00+01:00
tags: ["tag1", "tag2"]
---

Content here.
```

## Deployment

Connected to Vercel — any push to `main` triggers an automatic build and deploy.

## License

- **Blog Posts**: [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **Code**: [MIT](LICENSE)
