# CLAUDE.md — TBM website

## What this repo is
A single-page marketing website for **TBM** (TBM Ventures LLC) — a client-acquisition partner for U.S. immigration law firms. One long scrolling homepage. No other pages.

The site's job is **establishing trust**, not converting. Simple, clean, professional, restrained.

## Stack
- Astro (static output) + Tailwind CSS
- No React, no client-side framework, no CMS
- Deployed as a static build (Vercel or Netlify)
- Zero new dependencies without asking first

## Commands
```
npm install
npm run dev      # local dev server
npm run build    # static build to ./dist
npm run preview  # preview the build
```

## Source of truth for the design
1. `design/screens/` — full-page screenshots of the approved design (desktop + mobile). These are authoritative for layout, spacing, and hierarchy.
2. `design/exported/` — code exported from Claude Design, if present. Use as reference for structure and exact values, not as the shipped code — rewrite it cleanly into the component structure below.
3. `design/design-prompt.md` — the original brief. Authoritative for copy, content order, and the hard constraints below.

If the screenshots and the brief disagree, follow the screenshots for **visual** decisions and the brief for **content and constraint** decisions. If they disagree in a way that matters, ask rather than guessing.

## Design tokens
Define these in `tailwind.config.mjs` and use the token names everywhere. Never hardcode a hex value in a component.

| Token | Hex |
|---|---|
| `blue` | `#2563EB` |
| `blue-deep` | `#1E3A8A` |
| `charcoal` | `#0F1115` |
| `gray-light` | `#F2F4F7` |
| `gray-muted` | `#687280` |
| `border` | `#E5E7EB` |
| `white` | `#FFFFFF` |

Color budget: ~90% white/near-white, ~8% charcoal/gray, ~2% blue. Blue is an accent only — buttons, one accent word, eyebrow labels, icon strokes. Never a blue section background.

Type: Inter, self-hosted via `@fontsource/inter` (weights 400/500/600/700 only). No Google Fonts CDN.
Spacing: 8px grid. Content max-width 1120px; text blocks max-width 720px. Section padding 120px desktop / 72px mobile.
Radii: 8px buttons, 12px cards. Borders: 1px `border`. **No drop shadows anywhere.**
Motion: fade-and-rise on scroll only — 300ms, 12px travel, `prefers-reduced-motion` respected. Nothing else.

## Hard content constraints — never violate
TBM is new: no clients, no case studies, no testimonials, no metrics, no logos.

Never add, even as placeholder or filler:
- Stat counters, "X firms helped", star ratings, review counts
- Testimonials or quote blocks
- Client logo walls or "trusted by" strips
- Fake dashboards, screenshots, or result charts
- Any specific appointment/consultation count claim
- Countdown timers, scarcity copy, exit popups, chat widgets
- Stock photos of people; the founder photo slot takes a real photo only
- Dark mode, neon, glow, gradient meshes, animated blobs
- Emoji

Use lorem ipsum nowhere. If copy is missing, leave a `{{TODO: copy}}` marker and say so in the PR.

## Structure
```
src/
  pages/index.astro          # composes sections in order, nothing else
  components/
    Nav.astro
    Hero.astro
    Problem.astro
    Method.astro
    Install.astro
    Guarantee.astro
    Requirements.astro
    Founder.astro
    Faq.astro
    ClosingCta.astro
    Footer.astro
    ui/                      # Button, Card, Eyebrow, Section, Icon
  styles/global.css
public/
  images/                    # real assets only
design/                      # reference material, never imported into the build
```
Section order in `index.astro` is fixed: Nav → Hero → Problem → Method → Install → Guarantee → Requirements → Founder → FAQ → ClosingCta → Footer.

## Conventions
- Semantic HTML: one `<h1>`, `<section>` per block, real `<button>`/`<a>`, `<details>`/`<summary>` for the FAQ accordion (no JS accordion)
- Tailwind utilities inline; extract to a `ui/` component when a pattern appears three times
- Every section anchor-linkable by `id` (`#method`, `#guarantee`, `#requirements`, `#faq`)
- Mobile-first; verify at 375px, 768px, 1280px, 1600px
- Accessibility: visible focus rings, 44px minimum tap targets, alt text on every image, AA contrast (note: `gray-muted` on white passes for body text, do not lighten it)
- No JS unless a feature genuinely needs it. Target: zero blocking scripts, LCP under 1.5s on a mid-range phone.

## Definition of done for any section
Matches the screenshot at all four widths · uses tokens only · no shadows · no constraint violations · keyboard-navigable · builds clean · Lighthouse accessibility 100.

## Working style
One section per branch and PR. Do not scaffold ahead. Do not refactor unrelated files. Ask before adding a dependency, changing the stack, or changing copy.
