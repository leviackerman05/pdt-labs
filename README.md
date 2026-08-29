# PDT Labs

The public studio website for PDT Labs, an independent product engineering practice led by Priyansh Singh.

The site presents a focused service offer for early-stage founders and growing businesses, backed by four real products built and tested with users: Nest, Dictate, TriviaHub, and AnimeExplore.

The current founding package structure is a $249 Idea Validation sprint in 7 days, a $1,799 business site in 2 to 3 weeks, a $1,299 product rescue in 2 weeks, and a $2,499 MVP build in 4 weeks. Each package shows the planned standard price that takes effect after the first three founding-client projects are filled.

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- Motion for React
- Phosphor Icons
- Self-hosted Bricolage Grotesque, Figtree, and JetBrains Mono fonts

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Quality checks

```bash
npm run typecheck
npm run build
npm run check:responsive
```

Visual capture expects the Vite site to be running. Start it in one terminal:

```bash
npm run dev -- --host 127.0.0.1
```

Then run the capture in another terminal:

```bash
npm run capture
```

The capture script targets `http://127.0.0.1:5173/` by default. Set `PDT_CAPTURE_URL` to capture another local or preview URL. It uses Google Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` and writes six visual QA artifacts to `.impeccable/review/`: full desktop light and dark pages, the full mobile light page, the open mobile menu, the expanded Product rescue service, and the contact-section keyboard focus state. The responsive check verifies overflow and hero CTA alignment at widths from 320 to 1440 pixels.

The hero keeps the conversion action in the persistent desktop navigation and shows only “See shipped work” beneath the desktop introduction. Mobile keeps both “Book a call” and “See shipped work” together in the hero.

## Contact email

The enquiry form composes an email to `hello@pdtlabs.dev`. Cloudflare Email Routing initially forwards that address to `singhpriyansh2000@gmail.com`. The forwarding destination can be replaced later without changing the public address in the website.

## Deployment status

The project is configured for Cloudflare Pages using `wrangler.jsonc`.

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Recommended Node version: 22 or newer

The repository contains no deployment credentials. `public/_headers` provides the security and cache headers that Vite copies into the production output. Run `npm run deploy` after authenticating Wrangler to create a production deployment.

## Visual source of truth

The implemented visual system lives in `src/index.css` and `src/App.tsx`: a cold off-white and charcoal theme pair, safety-orange accent, PDT slash wordmark, Bricolage Grotesque display type, Figtree body type, JetBrains Mono utility labels, fine rules, compact corners, and restrained Motion reveals. The theme toggle persists the visitor's choice in local storage.

The approved design comp, prompt provenance, home-surface brief, and final review screenshots live under `.impeccable/`. The approved comp defines the direction, while the source and final review captures record the shipped result.

All product images in `public/projects/` were captured from the corresponding live product pages.
