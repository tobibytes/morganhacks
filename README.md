# morganhacks

Marketing site for **Morgan Hacks**, Morgan State University's annual hackathon. Built with Next.js (App Router), styled with Tailwind, and ships with NextUI + Radix + Framer Motion for the interactive bits.

## What's on the page

- **Intro** — hero with date, registration CTA, what the hackathon is
- **Tracks** — judging tracks for the year
- **Teams** — the organizing crew
- **Sponsors** — sponsor logos / tiers
- **Panelists** — judges + speakers
- **Carousel** — photos from previous events (sourced from `public/prev_images.json`)
- **Bus routes** — shuttle info for attendees
- **FAQ** — collapsible Q&A
- **Schedule** — a separate `/schedule` route with the day-of timeline

## Run it

```sh
./runscript.sh           # installs deps and starts `next dev`
# or
npm install
npm run dev
```

Visit http://localhost:3000.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind · NextUI · Radix UI · Framer Motion · Lucide · `@vercel/analytics`
