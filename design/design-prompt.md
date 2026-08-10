# Claude Design Prompt — TBM Homepage

## The brief

Design a **single-page website** (one long scrolling homepage, no other pages) for **TBM** — a client-acquisition partner for U.S. immigration law firms, run solo by founder Ben Mount.

**The page's job is to establish trust, not to convert.** A visitor is a partner at an established immigration firm who is skeptical of marketing agencies and has probably been burned by one. The page should make them think *"this person actually understands my business and isn't hiding anything."* Booking a call is a secondary outcome that follows from that.

Design for **credibility through clarity and transparency**, not through hype, scale, or urgency.

---

## Hard constraints — do not violate

TBM is new. There are no clients, no case studies, no testimonials, no video, no logos, no metrics. The design must not contain any placeholder that implies otherwise.

**Do not include:**
- Stat counters, "X firms helped", "X consultations booked", star ratings, review counts
- Testimonial cards or quote blocks
- Client logo walls or "trusted by" strips
- Fake dashboards, screenshots, or result graphs
- Any specific appointment/consultation count claim (no "30 appointments every 30 days" — the target is derived per client from their budget and market, so the page cannot promise a number)
- Countdown timers, "limited spots", "only 3 seats left", exit popups, chat widgets
- Stock photography of handshakes, gavels, flags, diverse-team-in-glass-office, or any stock person
- Dark mode, neon, glow effects, gradient meshes, animated blobs
- Emoji anywhere

**Instead of borrowed credibility, build trust from:** published requirements, plainly stated guarantee terms, specificity about method, one real photo of the founder, and honest framing of stage ("taking on a small number of founding firms").

---

## Visual system

Follow the TBM brand guide exactly.

**Color** — 90% white/near-white, 8% black/gray, 2% blue. Blue is an accent only: primary buttons, one word in a headline, small labels, icon strokes. Never a blue hero background, never a blue section.

| Token | Hex | Use |
|---|---|---|
| Primary Blue | `#2563EB` | Primary buttons, accent word, eyebrow labels, links |
| Deep Blue | `#1E3A8A` | Rare — hover states, one dark accent if needed |
| Charcoal | `#0F1115` | All body and heading text; the one dark section |
| Light Gray | `#F2F4F7` | Alternating section backgrounds, card fills |
| Muted Gray | `#687280` | Secondary text, captions, labels |
| White | `#FFFFFF` | Dominant background |
| Border | `#E5E7EB` | 1px card and divider borders |

**Type** — Inter throughout. Bold for headlines, Semi Bold for subheads, Medium for labels, Regular for body.
- H1: ~56–64px desktop / 34–38px mobile, Bold, tight tracking (−2%), line-height 1.05
- H2: ~40px / 28px, Bold
- H3 / card title: ~20px, Semi Bold
- Body: 17px, Regular, line-height 1.6, max ~68 characters per line
- Eyebrow label: 12px, Medium, uppercase, letter-spacing 0.1em, Primary Blue

**Layout** — content max-width 1120px; text-only blocks max-width 720px. 8px spacing grid. Section vertical padding ~120px desktop / 72px mobile. Whitespace first: every section should feel underfilled rather than packed.

**Components**
- Primary button: Primary Blue fill, white Semi Bold text, 8px radius, arrow glyph
- Secondary button: white fill, 1px `#E5E7EB` border, charcoal text
- Cards: white or Light Gray fill, 1px `#E5E7EB` border, 12px radius, **no drop shadows**
- Icons: line style, 1.5px stroke, charcoal or blue, 24px — pipeline, filter, shield, envelope, calendar, target, chart
- Motion: fade-and-rise on scroll, 300ms, 12px travel. Nothing else. No parallax, no counting numbers.

**Reference feel:** the restraint and typographic confidence of `justscale.co`, and the section rhythm and "so that you can → which leads to" logic blocks of `demandcapture.com` — but on white, quieter, with no proof assets. Ignore the dark/neon aesthetic of `merydian.ai` and `viralcoach` entirely; they are the wrong register for a law firm buyer.

---

## Page structure (in order)

### 1. Nav
Sticky, white, 1px bottom border on scroll, 72px tall. Wordmark **TBM** left (Bold, charcoal). Center or right links: The Method · Guarantee · Requirements · FAQ. One primary button right: **Book a Strategy Call**.

### 2. Hero
Centered, tall, mostly whitespace. No image, no video frame, no stat bar.

- Eyebrow: `FOR U.S. IMMIGRATION LAW FIRMS`
- H1: **Qualified consultations. Screened before they reach your calendar.**
  (set "Screened" in Primary Blue)
- Subhead (max 620px, Muted Gray): A four-layer acquisition system built for immigration cases — case-category routing, bilingual screening, compliance review, and nurture built for decision cycles that run six to twelve months.
- Primary button: Book a Strategy Call · Secondary text link: See how the system works ↓
- One small line beneath, Muted Gray 14px: *One firm per case category, per metro. Currently onboarding a small number of founding firms.*

### 3. The problem — "This is what's actually happening"
Eyebrow + H2 + one line of intro, then a 2×2 grid of bordered cards. Each card: small line icon, Semi Bold title, 2–3 sentences of Muted Gray body. Written specifically for immigration, not generic marketing pain.

1. **Your calendar fills with people you can't help** — consultations from the wrong case categories, wrong jurisdictions, no filing history.
2. **The lead is Spanish-speaking, the intake isn't** — the inquiry arrives, the follow-up doesn't match, and it dies in the gap.
3. **Every ad and page is a compliance exposure** — platform policy, FTC substantiation, and state bar advertising rules all apply, and most agencies have never read them.
4. **A six-month decision cycle beats a two-week follow-up** — most immigration decisions aren't made this month, and the firm that stays present when they are gets the case.

### 4. The Screened Pipeline Method
Eyebrow `THE SYSTEM` + H2 **Four layers, installed as one system.**

Four alternating full-width rows (text left / diagram right, then reversed). Each row:
- Large numbered marker `01`–`04` in Primary Blue
- H3 title
- One paragraph of plain explanation
- A bordered Light Gray box labeled `SO THAT YOU CAN` (charcoal text)
- A bordered box labeled `WHICH MEANS` with a Primary Blue label

The layers: **01 Case-Category Routing** (five immigration categories, routed separately — not one generic funnel) · **02 Bilingual Filter Funnel** (EN/ES from ad to screening form to confirmation) · **03 Compliance Lock** (platform, FTC, and state bar review before anything goes live) · **04 Long-Cycle Nurture Stack** (email/SMS/WhatsApp sequences built for 6–12 month cycles).

For the right-hand visuals: abstract, minimal line-and-box diagrams in charcoal, blue, and gray on white — a routing tree, a funnel with a filter stage, a checklist shield, a timeline. **Flat vector, no device mockups, no screenshots, no 3D, no shadows.**

### 5. The install — 30 days, four phases
Eyebrow + H2. A single vertical timeline, left rail with small circular blue markers, four cards to the right: **Diagnosis (Days 1–5)** · **Build (Days 6–14)** · **Calibration (Days 15–30)** · **Compounding (Cycle 2 onward)**. Each: title, day range in blue, 2–3 sentences. Close with one centered line: *One system. Live in 30 days.*

### 6. The guarantee — the one dark section
The only charcoal (`#0F1115`) section on the page, white text, blue accents. Restrained and legal-document-plain, not a hype panel.

H2: **How the guarantee works.** Then a short numbered list, one line each, honest and specific:
1. Your cycle target is calculated from your ad budget and your market's cost per qualified consultation, and agreed in writing before launch.
2. Cycle one carries no target — it's calibration.
3. Miss a target and that cycle's fee is waived in full, and the shortfall is delivered the following cycle.
4. Two consecutive missed cycles and you can walk, with nothing owed.

No badge graphics, no seals, no shield illustrations.

### 7. Requirements — who this is for
Eyebrow `REQUIREMENTS` + H2 **This only works under certain conditions.** Two bordered columns side by side, equal weight, no color-coding beyond a small blue check and a small gray ×.

**This fits if:** established U.S. immigration firm · handling cases in one or more of the four supported categories · able to fund a per-cycle testing ad budget (published minimums by category) · someone responds to a new consultation within five minutes · willing to be the only firm in your case category and metro.

**This doesn't fit if:** you want leads sold by the batch · you want someone to post on social · you can't staff five-minute follow-up · you're looking for the cheapest option.

State the ad-spend minimums plainly here, and one line on *why* they exist: it's a testing budget, not a volume budget.

### 8. From the founder
Two columns. Left: **one real photograph of Ben** — natural light, shallow depth of field, plain modern interior, no suit-and-crossed-arms pose. (Leave a clearly-marked image slot; do not substitute a stock person.) Right: 4–5 short first-person paragraphs, no headline hype:

Who he is and that TBM is him, directly — clients don't get an account manager. His background: taught himself to code as a teenager, years in SaaS sales and high-ticket closing, then operations and systems work. Why immigration specifically. Why TBM is new and taking few firms on purpose. Signed **— Ben Mount, Founder**.

Beneath the text: his real email as a plain link. Direct contact is a trust signal; use it.

### 9. FAQ
Simple accordion list — 1px bottom borders only, no cards, no shadows. Charcoal question, Muted Gray answer, small + / − in blue. Include:

- **What does this cost?** → *Answer here as: a monthly retainer plus a fee for each booked consultation. Exact figures depend on case category and market, and are covered on the strategy call. Ad spend is paid by the firm directly to the platform.* Keep it to two or three sentences — no price table, no tiers, no "starting at".
- You're new. Why would I work with you?
- How do you handle state bar advertising rules?
- What counts as a "qualified" consultation?
- What do you need from my team?
- Do you sell the same leads to other firms?
- What happens after the first 30 days?
- Which case categories do you support?

Answer the "you're new" question honestly and directly. It's the most important block on the page.

### 10. Closing CTA
Light Gray band, centered, calm. H2: **Let's find out whether this fits your firm.** One line: a 30-minute call — your current intake, your case mix, your numbers, and a straight answer either way. Primary button: **Book a Strategy Call**. No urgency copy, no scarcity, no second competing CTA.

### 11. Footer
Minimal, charcoal background or white with a top border. Wordmark, email, four anchor links, © 2026 TBM Ventures LLC, Privacy · Terms. Nothing else.

---

## Mobile

Design mobile properly, not as an afterthought — attorneys will open this on a phone. Single column, 24px side padding, H1 at 34–38px, 2×2 grids collapse to stacked cards, the four-layer rows stack text-above-diagram, timeline becomes a left-rail vertical list, nav collapses to wordmark + button (menu icon optional). Tap targets 44px minimum.

---

## The test to design against

A partner at a 12-person immigration firm lands on this page, scrolls once, and closes it. Do they come away believing TBM is a real, competent, honest operation run by someone who knows immigration — with nothing on the page they'd feel embarrassed to have believed? That is the only success criterion. Every element that doesn't serve it should be cut.
