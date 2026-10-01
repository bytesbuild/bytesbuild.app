# BytesBuild.app

Marketing landing page for **BytesBuild LLC** — boutique software / product engineering studio at [bytesbuild.app](https://bytesbuild.app).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- **Static HTML export** (`output: "export"`) → `out/`
- Cloudflare Pages / Workers **static assets** (not OpenNext)

## Run locally

```bash
npm install
npm run dev          # http://127.0.0.1:3847
npm run build        # writes out/
npx serve out        # optional static preview
```

## Cloudflare Pages / Workers settings

Use **static assets**, not the Next.js / OpenNext Worker path.

| Setting | Value |
| --- | --- |
| Framework preset | **None** (or Next.js Static HTML Export — not “Next.js”) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Deploy command | **leave empty** for classic Pages; or `npx wrangler deploy` only if `wrangler.jsonc` is present (this repo) |
| Node.js version | `22` |

### Why the previous deploy failed

`npm run build` succeeded and emitted `out/`. Cloudflare then ran `npx wrangler deploy`, which **auto-detected Next.js and ran OpenNext migrate**. OpenNext expects a server/standalone build and crashed looking for `.next/standalone/.../pages-manifest.json` — incompatible with `output: "export"`.

This repo now includes `wrangler.jsonc` that deploys `./out` as static assets only, so `wrangler deploy` will not try OpenNext.

```bash
npm run deploy   # build + wrangler deploy (static assets from out/)
```

## Project structure

- `app/` — pages, styles, metadata
- `components/BuildVisual.tsx` — hero visual
- `wrangler.jsonc` — Cloudflare static assets config
- `out/` — generated (gitignored)
