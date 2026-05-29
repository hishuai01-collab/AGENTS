# AGENTS.md

## Project Overview

This repository contains a premium personal brand portfolio website for **Shuai Shuai**, targeting freelance opportunities, business showcases, and lead conversion.

## Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion

## Development Rules

- Keep all sections modular and reusable.
- Maintain strong visual hierarchy and whitespace.
- Preserve black-and-white minimal premium styling.
- Any new section must include responsive behavior and motion polish.
- Keep SEO metadata updated for any new route.

## Key Files

- `src/app/layout.tsx`: global metadata and layout shell
- `src/app/page.tsx`: homepage entry
- `src/components/home-page.tsx`: section composition
- `src/data/site-content.ts`: content source of truth
- `src/types/site.ts`: typed content contracts

## Deployment

- Vercel-ready by default.
- Set `NEXT_PUBLIC_SITE_URL` in production.
- Validate with `npm run lint` and `npm run build` before each release.
