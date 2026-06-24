# AGENTS.md

## Project

VitePress documentation site ("Ducky Note") for red team cybersecurity notes. Single-package, no monorepo.

## Commands

| Action | Command |
|--------|---------|
| Dev server | `pnpm dev` |
| Build | `pnpm build` |
| Preview build | `pnpm preview` |

Package manager: **pnpm**. No npm/yarn lockfiles.

## Structure

```
docs/                          # VitePress root (all content + config here)
  .vitepress/
    config.mts                 # Site config (title, head, nav, sidebar, search)
    sidebar.ts                 # Sidebar definition (DefaultTheme.Sidebar)
    theme/                     # Custom theme extending DefaultTheme
      index.ts                 # Theme entry
      style.css                # CSS variable overrides (brand color = indigo)
    dist/                      # Build output (committed to repo)
  categories/
    overview.md
    interview/overview.md      # Large single-file Q&A document
    youtube/                   # Subcategories: cheatsheet/, resources/, tools/, tricks/
  public/images/               # Static assets (favicon, etc.)
  index.md                     # Homepage (VitePress frontmatter layout: home)
```

## Key details

- **Config imports sidebar as `.js`**: `config.mts` does `import sidebar from './sidebar.js'` even though the source file is `sidebar.ts` — VitePress/tsx handles this, do not rename the import.
- **Build output (`dist/`) is committed**: `docs/.vitepress/dist/` exists in the repo. This is intentional (likely for static hosting).
- **No tailwind/postcss config files at root**: TailwindCSS is a devDependency but no `tailwind.config.*` or `postcss.config.*` exists at the project root. Styling is primarily through VitePress CSS variable overrides.
- **Empty directories**: `docs/.vitepress/sidebar/`, `docs/.vitepress/theme/styles/`, `docs/.vitepress/theme/components/ui/` exist but are empty — likely placeholders for future expansion.
- **Local search**: Enabled via `themeConfig.search.provider: 'local'` in config.mts.
- **`@vercel/analytics`**: Runtime dependency, integrated into the Vue app.
- **No test, lint, typecheck, or CI config**: This project has no automated checks. Only `dev` / `build` / `preview` scripts exist.

## Content conventions

- Markdown files use VitePress frontmatter for hero/feature sections (`index.md`)
- Content is organized under `docs/categories/<topic>/`
- Images referenced in markdown can live alongside the file or in `docs/public/images/`
- **Raw HTML in markdown must be on contiguous lines** — blank lines between `<a>`, `<img>`, `</a>` etc. cause VitePass's markdown renderer to split them into separate HTML blocks. Vue's template compiler then sees unclosed elements and fails with "Element is missing end tag."
- **`.NET` in text** — wrap in backticks (`` `ASP.NET` ``) to prevent Vue's template compiler from misinterpreting it as a custom element tag
