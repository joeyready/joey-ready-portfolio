# Joey Ready Portfolio

A modern photography portfolio built with Next.js, TypeScript, and React.

## Why I’m Building This

This project is a **two birds, one stone** build:

1. Rebuild my outdated photo portfolio with a faster, cleaner, more modern experience.
2. Add a polished, real-world project to my programming portfolio.

I wanted one site that showcases both my visual work and my ability to design/build production-quality web apps — especially in case recruiters or collaborators come across it *cough cough*, if thats you, please feel free to reach out ;)

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** React
- **Animation:** Framer Motion
- **Styling:** Global CSS (with Tailwind tooling available in the project)
- **Image Rendering:** `next/image` for optimization and responsive behavior
- **Linting:** ESLint

## Project Structure (Important)

- `src/lib/photos.ts`
  - Source of truth for all photo metadata
  - Includes category, alt text, dimensions, and featured flags
- `public/images/`
  - Stores image files used by the gallery
- `src/components/MasonryGallery.tsx`
  - Renders the portfolio grid and lightbox
- `src/app/work/page.tsx`
  - “All Work” page
- `src/app/work/[category]/page.tsx`
  - Category-specific gallery pages

## Notes for Future Me

- Add images to `public/images/`, then register them in `src/lib/photos.ts`.
- Keep `width`/`height` values accurate for proper masonry proportions.
- `/work` currently follows the order of the `photos` array.
- Category pages are generated from the category values in `photos.ts`.
- If I want custom ordering later, add an `order` field and sort before render.

## Local Development

```bash
npm install
npm run dev