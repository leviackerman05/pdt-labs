---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# PDT Labs home surface

## Approved comp

- `.impeccable/mocks/comp-c-approved.png`
- Secondary composition reference: `.impeccable/mocks/comp-b.png`

## Visual thesis

PDT Labs is a senior product studio that turns rough ideas and fragile prototypes into products people can actually use. The page should feel like a precise delivery board, not a generic agency template. One continuous route runs through Scope, Build, and Ship while real product screenshots provide proof.

## Asset inventory

- Navigation, labels, headlines, pricing, CTAs: semantic HTML and CSS.
- Brand mark: simple typographic PDT Labs mark in HTML.
- Icons: Phosphor React icons only.
- Delivery route: CSS lines and nodes, responsive and decorative.
- Product proof: raster screenshots in `public/projects/*.webp`.
- Motion: Motion for React, one staged hero entrance and restrained scroll reveals.
- Theme: light and dark modes with a persistent header toggle and matching browser theme color.
- No photos, generated product UIs, fake logos, fake testimonials, or decorative texture assets.

## Page structure

1. Compact top navigation with Work, Services, Process, Pricing, FAQ, and Start a project.
2. Hero with oversized headline, founder-focused copy, two CTAs, and a Scope to Build to Ship routing board containing real product previews.
3. Proof rail: 6 years in production software, 4 products built and tested with real users, one senior builder from strategy to release.
4. Selected work: four asymmetric project cases using real screenshots, product outcome, stack/capability labels, and live/GitHub links.
5. Services: editorial accordion rows for Launch Site, Business Site, Product Rescue, and MVP Build.
6. Process: one linear 01 to 04 sequence, no equal card grid.
7. Pricing: transparent starting rates and durations only in days or weeks, plus a founding-client offer for the first three projects.
8. FAQ and a high-contrast project inquiry section.
9. Compact footer with real links.

## Design tokens

- Light canvas: cold off-white `#f4f5f3`.
- Light panel: `#e5e8e7`.
- Ink: `#101210`.
- Muted ink: `#5d625f`.
- Accent: safety orange `#ff5a2a`.
- Dark canvas: `#121412` with `#202320` panels.
- Display type: Bricolage Grotesque Variable.
- Body type: Figtree Variable.
- Utility type: JetBrains Mono.
- Borders: 1px solid current theme line color.
- Corner language: mostly square and small 10 to 16px radii. Pills only for compact statuses.

## Interaction and accessibility

- All interactive elements have visible focus states.
- The theme toggle persists the selected mode in local storage.
- Mobile navigation uses an accessible disclosure button.
- Accordion buttons expose expanded state.
- Motion is disabled or simplified under `prefers-reduced-motion`.
- Contrast targets WCAG AA.
- Product images have descriptive alt text, fixed aspect ratios, lazy loading below the fold.
- Keyboard users can reach every external link and form field.

## Content rules

- No em dashes.
- No fabricated client counts, revenue, testimonials, awards, or company logos.
- “From” pricing is indicative and every final quote depends on written scope.
- Describe Priyansh as a senior product engineer with six years in production software, without turning the site into a job-seeking portfolio.
- The four main products are Nest, Dictate, TriviaHub, and AnimeExplore. Do not expose the full project archive.
