# BytesBuild.app

Marketing landing page for **BytesBuild LLC** — a boutique software / product engineering studio at [bytesbuild.app](https://bytesbuild.app).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Static export for Cloudflare Pages
- Google fonts: Syne + IBM Plex Sans / Mono

## Run locally

```bash
npm install
npm run dev
```

Dev server: **http://127.0.0.1:3847**

```bash
npm run build   # writes static site to out/
npm start       # not used for Pages; preview with: npx serve out
```

## Cloudflare Pages

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) or None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Node version | `22` (or `20`) |

`next.config.ts` sets `output: "export"` so the build emits static HTML/CSS/JS under `out/`.

## Project structure

- `app/` — App Router pages, global styles, metadata
- `components/BuildVisual.tsx` — full-bleed hero visual
- `out/` — static export (generated; not committed)

## Design

Cool daylight “Blueprint Forge” direction: mist concrete atmosphere, electric teal signals, amber CTA heat, expressive Syne display type.
