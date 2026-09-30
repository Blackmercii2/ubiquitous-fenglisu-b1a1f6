# Frontier Systems — Company Website

A modern, fully responsive company website for **Frontier Systems**, a Nigerian technology company delivering custom software, data platforms, and IT consulting solutions.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict) |
| Deployment | Netlify |

## Pages & Sections

The site is a single-page application with anchor-based navigation:

- **Hero** — Full-screen with headline, CTA buttons, and trust badges
- **About Us** — Company overview with stats callout
- **Services** — Four service cards (Software Dev, Data & Analytics, IT Consulting, Cloud)
- **Team of Excellence** — Developer, Business Analyst, Project Manager roles
- **Our Work** — Three featured project showcases with alternating layout
- **Why Us** — Stats section with key metrics
- **Contact** — Email (`project@frontiersystems.io`) and phone (`08036591626`) with active `mailto:` / `tel:` links
- **Footer** — Navigate, Services, Details columns (no Socials section)

## Running Locally

```bash
npm install
npm run dev          # starts dev server on http://localhost:3000
```

Or with the Netlify CLI for full platform emulation:

```bash
netlify dev          # starts on http://localhost:8888
```

## Building

```bash
npm run build        # production build → dist/client
npm run preview      # preview production build
```

## Environment Variables

For the AI assistant feature (if re-enabled):

| Variable | Purpose |
|----------|---------|
| `ANTHROPIC_API_KEY` | Claude AI |
| `OPENAI_API_KEY` | OpenAI (optional) |
| `GEMINI_API_KEY` | Google Gemini (optional) |
