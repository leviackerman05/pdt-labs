# PDT Labs

The public studio website for PDT Labs, an independent product engineering practice led by Priyansh Singh.

The site presents a focused service offer for early-stage founders and growing businesses, backed by four real products built and tested with users: Nest, Dictate, TriviaHub, and AnimeExplore.

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
```

Visual capture expects the Vite site to be running. Start it in one terminal:

```bash
npm run dev -- --host 127.0.0.1
```

Then run the capture in another terminal:

```bash
npm run capture
```

The capture script targets `http://127.0.0.1:5173/` by default. Set `PDT_CAPTURE_URL` to capture another local or preview URL. It uses Google Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` and writes six visual QA artifacts to `.impeccable/review/`: full desktop light and dark pages, the full mobile light page, the open mobile menu, the expanded Product rescue service, and the contact-section keyboard focus state.

## Contact email

The enquiry form currently composes an email to Priyansh's existing public address. After the PDT Labs domain mailbox is configured, update the `contactEmail` constant in `src/App.tsx`.

## Deployment status

The project is ready for a Cloudflare Pages connection, but it has not been deployed by this repository setup.

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Recommended Node version: 22 or newer

The repository contains no deployment credentials. `public/_headers` provides the security and cache headers that Vite copies into the production output.

## Visual source of truth

The implemented visual system lives in `src/index.css` and `src/App.tsx`: a cold off-white and charcoal theme pair, safety-orange accent, Bricolage Grotesque display type, Figtree body type, JetBrains Mono utility labels, fine rules, compact corners, and restrained Motion reveals. The theme toggle persists the visitor's choice in local storage.

The approved design comp, prompt provenance, home-surface brief, and final review screenshots live under `.impeccable/`. The approved comp defines the direction, while the source and final review captures record the shipped result.

All product images in `public/projects/` were captured from the corresponding live product pages.
