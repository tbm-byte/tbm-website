# Design notes — measured values

Source: `exported/TBM Homepage.dc` + `exported/support.js` (the Claude Design
export, which renders as literal inline `style="..."` attributes — exact
pixel/hex values, not estimates), cross-checked against the screenshots in
`screens/`. Where the two disagree, or where a value isn't covered by either,
it's called out under "Open questions" in the report back to Ben rather than
guessed here.

The `exported/` and `screens/` directories live at the repo root, not under
`design/` as `CLAUDE.md` describes — noted once here, flagged again in the report.

## Breakpoint used by the reference build

The exported artifact's own runtime JS switches "mobile ⇄ desktop" layout at
**`window.innerWidth < 900px`** (nav links, H1/H2 size, section padding all
key off this). Tailwind's default `md` breakpoint is `768px`. `CLAUDE.md`'s
verify list (375 / 768 / 1280 / 1600) implies standard Tailwind breakpoints.
**This scaffold uses Tailwind's stock breakpoint scale** (`sm:640 md:768
lg:1024 xl:1280 2xl:1536`) rather than the artifact's custom 900px cutoff —
flagged as an open question.

## Color

All match the `CLAUDE.md` token table exactly (`#2563EB`, `#1E3A8A`,
`#0F1115`, `#F2F4F7`, `#687280`, `#E5E7EB`, `#FFFFFF`), **except** inside the
one dark (Guarantee) section, which uses four extra hex values not in the
token table:

| Use | Hex | Where |
|---|---|---|
| Eyebrow / numeral accent on charcoal | `#7CA3F7` | Guarantee eyebrow, list numerals `01`–`04` |
| Secondary text on charcoal | `#9AA2AE` | Guarantee intro line |
| Body text on charcoal | `#E8EAEE` | Guarantee list item text |
| List-item divider on charcoal | `#23262D` | Guarantee `border-top` between items |

Plain `#2563EB` blue and `#687280` gray-muted fail contrast on `#0F1115`, so
the export lightens them for the dark section. Not in the scaffolded
`tailwind.config.mjs` yet — flagged as an open question rather than added
unilaterally.

Also used, not in the token table: text-selection highlight `#DBE5FD`
(applied globally via `::selection` in `global.css`), and mailto-link
underline `#C7D7FB` (Founder section). Same flag.

## Type

Font: Inter, self-hosted (matches `CLAUDE.md`; the export pulls Inter from
Google Fonts CDN — **do not carry that over**, `@fontsource/inter` is already
wired into the scaffold).

| Element | Desktop | Mobile (<900px in export) | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| H1 | 60px | 36px | 700 | 1.05 | −0.02em |
| H2 | 40px | 28px | 700 | 1.15 | −0.02em |
| H3 (card/section title, e.g. Problem cards, Requirements column heads) | 20px | 20px | 600 | 1.3 | −0.01em |
| Method row title (`01`–`04` numbered layers) | 28px | 28px | 700 | — | −0.02em |
| Method numeral (`01`–`04`) | 40px | 40px | 700 | — | −0.02em |
| Body (flowing paragraph — subhead, intro lines, founder bio, guarantee items) | 17px | 17px | 400 | 1.6–1.7 | — |
| Body (inside bordered cards/boxes — Problem cards, Method so/which boxes, Install phase cards) | 16px | 16px | 400 | 1.5–1.6 | — |
| FAQ question | 18px | 18px | 600 | 1.4 | — |
| FAQ answer | 17px | 17px | 400 | 1.7 | — |
| Eyebrow label | 12px | 12px | 500 | — | 0.1em, uppercase |
| Small print (hero footnote, image caption, "write directly" line) | 14px | 14px | 400 | 1.6 | — |
| Nav links / button label (nav) | 15px | — (hidden) | 500 / 600 | — | — |
| Button label (hero / CTA) | 16px | 16px | 600 | — | — |

Note the brief's generic spec ("H3 / card title: ~20px, Semi Bold") doesn't
cover the larger 28px treatment used for the Method section's four row
titles — that's intentional (they're paired with the big blue `01`–`04`
numeral) not a deviation to fix.

Eyebrow labels are authored in the export as **sentence case** ("For U.S.
immigration law firms") and rendered uppercase via `text-transform`, not
typed in caps. Keep that pattern — better for screen readers.

## Spacing / layout

- Content max-width: **1120px**. Text-block max-width: **720px**. Both match `CLAUDE.md`.
- Side gutter: **24px**, constant at every width (the export never widens it — max-width + centering does the work at large viewports).
- Section vertical padding: **72px mobile / 120px desktop**, constant across every section **except** Hero.
- **Hero is a documented exception**: `128px` top / `120px` bottom on desktop, `72px`/`72px` on mobile (extra top padding to clear the sticky nav / add breathing room above the centered stack).
- Footer does **not** use the standard section rhythm: **48px** padding all sides, no top/bottom distinction.
- Nav height: **72px**, fixed, `sticky top:0`. Border-bottom is `transparent` at rest and only becomes `#E5E7EB` after `window.scrollY > 8` — a scroll-driven state, not a static border. (Will need a small script or a CSS scroll-driven technique when Nav gets built — noted as an implementation decision, not resolved here.)
- Grid gaps: Problem cards `24px`; Method row grid `56px` (columns) / `96px` (row-to-row); Method so/which stacked boxes `12px`; Install timeline cards `16px` bottom margin; Requirements two-column `24px`; Founder two-column `64px`.

## Radii / borders

- Buttons: **8px** (`rounded-btn` in the scaffold's Tailwind config).
- Cards / boxes: **12px** (`rounded-card`).
- Small inline chips (Method diagram boxes, Compliance Lock checklist rows): also 12px/8px depending on size — no smaller radius token appears anywhere in the export.
- Border: uniformly **1px `#E5E7EB`**, except inside the dark Guarantee section (`#23262D`, see Color above).
- **No drop shadows anywhere** — confirmed, none appear in the export.

## Components, as measured

- **Primary button**: height 52px (hero/CTA) or 44px (nav), padding `0 24px` / `0 18px`, `#2563EB` fill → `#1E3A8A` on hover, white 600-weight text, 8px radius, trailing `→`.
- **Secondary "text link"** (hero's "See how the system works ↓"): not a bordered button — plain text, 16px/500, charcoal → blue on hover, trailing `↓` in blue. `CLAUDE.md`'s "Secondary button" (white fill + border) doesn't appear anywhere in the exported build; the only secondary affordance used is this borderless text link. Both patterns are worth keeping in the `Button` primitive (already scaffolded with a `secondary` bordered variant) — flagged as an open question on which to use where.
- **Founder image slot**: 4:5 aspect ratio, 1px border, 12px radius, diagonal-stripe placeholder fill, centered monospace caption reading the exact TODO text from the brief. Good placeholder pattern to reuse verbatim when Founder gets built.
- **FAQ accordion**: the export implements this with React-style `state.open` + `onClick` — i.e. **a JS accordion**. `CLAUDE.md` explicitly requires `<details>/<summary>` with **no JS accordion**. When Faq.astro gets built, follow `CLAUDE.md`, not the export's mechanism — the visual (1px bottom borders, blue `+`/`−`, 18px question, 17px answer) translates directly to `<details>` with a CSS-driven glyph swap on `[open]`.
- **Method diagrams**: built as literal bordered `<div>` boxes and connector lines, not SVG vector art. Brief asks for "abstract, minimal line-and-box diagrams... flat vector." The div/line approach reads as minimal line-and-box already; treat the export's HTML/CSS technique as a valid way to satisfy the brief rather than something to redo in SVG, unless SVG is preferred for other reasons (e.g. crisper connector lines at odd widths).

## Copy

The export's `renderVals()` (in the `<script type="text/x-dc">` block) already
contains **fully written, real copy** for nearly everything: FAQ questions +
answers, guarantee terms, ad-spend minimums, install phase copy, founder
bio paragraphs, problem-card copy, method so-that/which-means text. None of
it is lorem ipsum, and it satisfies the hard content constraints (no stats,
no testimonials, etc.). This should mean very few `{{TODO: copy}}` markers
are needed when sections get built — the founder photo is the one clearly
marked real placeholder (image only, not text).

## Mobile grid, corrected

The brief's page-structure text says the Problem section is "a 2×2 grid of
bordered cards." The export's actual responsive rule is **1 column below
620px, 2 columns 620–999px, 4 columns at ≥1000px** — i.e. desktop is a single
row of four, not 2×2, and 2×2 only ever appears in a mid-width tablet band.
The screenshots confirm four-across on desktop. Follow the screenshots/export
(1 / 2 / 4 columns) over the brief's literal "2×2" wording — flagged in the
report as a brief/screenshot mismatch, not something to silently pick.
