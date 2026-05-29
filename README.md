# Shuai Shuai - Premium Developer Portfolio

High-end personal brand website for **LinkedIn, GitHub, client acquisition, and conversion**.

Built with:
- Next.js 15
- TypeScript
- TailwindCSS
- Framer Motion
- App Router
- SEO metadata, OpenGraph, robots, sitemap

## Features

- Premium black-and-white visual direction inspired by Apple / Linear / Stripe / Vercel
- Fully responsive mobile-first layout
- Animated sections and interactive cards
- Hero, Projects, Services, About, Contact, Footer
- WeChat QR area and social conversion links
- Vercel-ready structure

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
    opengraph-image.tsx
    icon.svg
  components/
    home-page.tsx
    layout/
      header.tsx
      footer.tsx
    motion/
      reveal.tsx
    sections/
      hero-section.tsx
      projects-section.tsx
      services-section.tsx
      about-section.tsx
      contact-section.tsx
    ui/
      cta-link.tsx
      section-heading.tsx
  data/
    site-content.ts
  types/
    site.ts
public/
  images/
    professional-avatar.jpg
    wechat-qr.svg
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Set environment variable:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
4. Deploy.

## SEO Included

- Metadata title/description/keywords
- OpenGraph + Twitter cards
- `robots.txt` via App Router metadata route
- `sitemap.xml` via App Router metadata route
- Custom favicon/app icon

## License

Personal portfolio use.
