# AGENTS.md — Frontier Systems Website

This file is read by AI agents in future sessions to understand the project architecture and conventions.

## Project Overview

A modern single-page company website for **Frontier Systems**, a Nigerian technology company delivering custom software, data platforms, and IT consulting solutions. Built on TanStack Start and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS classes |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root HTML shell: fonts (Inter via Google Fonts), meta, styles
│   └── index.tsx           # Entire site — all sections as a single SPA route
├── styles.css              # Tailwind 4 + custom CSS (card-hover, hero-gradient, brand colours)
└── router.tsx              # TanStack Router setup with scroll restoration
public/
├── favicon.ico
└── placeholder.png
```

## Architecture Decisions

- **Single-route SPA**: All sections (Hero, About, Services, Team, Our Work, Why Us, Contact, Footer) live in `src/routes/index.tsx`. Navigation is anchor-link-based (`href="#section-id"`).
- **No contact form**: The Contact section uses `mailto:` and `tel:` links only (per client request). Email: `project@frontiersystems.io`, Phone: `08036591626`.
- **No Socials section**: Footer intentionally has no social media column — removed per client request.

## Styling Conventions

| Class | Value | Usage |
|-------|-------|-------|
| `.text-brand` | `#d63031` | Brand red text |
| `.bg-brand` | `#d63031` | Brand red backgrounds |
| `.section-pink` | `#fef0ee` | Alternating section bg |
| `.card-hover` | translateY + shadow | Interactive cards |
| `.hero-gradient` | dark overlay | Hero section overlay |
| `.animate-fade-up` | keyframe | Hero entrance animation |

- Tailwind utility classes for layout and spacing
- Custom CSS classes in `styles.css` for reusable branded patterns
- Inter font loaded from Google Fonts in `__root.tsx`

## Contact Information

These are the live, active contact details used throughout the site:
- **Email**: `project@frontiersystems.io`
- **Phone**: `08036591626` (international: `+2348036591626`)

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
netlify dev      # Start with Netlify platform emulation (port 8888)
npm run build    # Production build → dist/client
npm run preview  # Preview production build
```

## Routing (TanStack Router)

Routes are file-based in `src/routes/`:
- `__root.tsx` — Root HTML document shell
- `index.tsx` — Route for `/` (the full site)
- `api.*.ts` — Server API endpoints

## Adding Content

- **New page/route**: create `src/routes/pagename.tsx` with `createFileRoute('/pagename')()`
- **New homepage section**: add `<section id="new-id">` in `index.tsx` and add anchor to `navLinks` array and footer Navigate column
- **Update projects**: edit the `projects` array in `index.tsx`
- **Update services**: edit the `services` array in `index.tsx`

## TypeScript Conventions

- Strict mode enabled
- `@/` path alias maps to `src/`
- Type-only imports use `import type`
- No external UI component library (Radix, shadcn) in current build
