# Storica Stays — Complete Website Redesign Plan

**Project Codename:** *Indigo Heritage* — A Modern Reimagining of Rajasthan's Blue Cities

> **The brief:** Keep blue as the primary color. Build a "modern heritage" experience — one that feels like a beautifully restored 300-year-old haveli renovated by a contemporary designer. Architecture that honors *jharokhas*, *jaali* lattices, and block-print craft, but rendered in clean, confident, 2026 web design.

---

## 1. The Concept

Today the site reads as a generic Bootstrap hotel template. The redesign transforms it into a **digital heritage boutique** — the same care that went into restoring the Jodhpur and Udaipur havelis should go into the website.

### Design Pillars

| Pillar | Meaning in this design |
|--------|------------------------|
| **The Arch** | Every image is framed by the silhouette of a *jharokha* (Mughal/Rajput arch) — the single most recognizable heritage motif, used consistently across the site. |
| **Blue as Identity** | Blue isn't just a button color anymore. Jodhpur is *the Blue City*; Udaipur is *the City of Lakes*. A deep, confident **heritage indigo** becomes the brand color, used in gradients, duotone photography, and dark sections. |
| **Jaali Light** | *Jaali* lattice screens filter light through heritage palaces. We use jaali patterns as subtle SVG textures — perforated by light — in section backgrounds and footers. |
| **Craft & Contrast** | Warm **sand/cream** neutrals (sun-baked plaster) contrast with **ink navy** (night over the fort) and an occasional **saffron** spark (sunset, marigolds, chai). |
| **Editorial Storytelling** | Instead of "About Us," a story. Instead of a room grid, a *folio* of suites with layered imagery. Content reads like a travel magazine, not a template. |

---

## 2. Color System

Primary color stays **blue** — a refined shift from the current teal `#408fa2` to a richer **heritage indigo** that still nods to the existing brand.

### Palette

| Token | Hex | Role | Usage |
|-------|-----|------|-------|
| `--indigo-900` | `#12264D` | Ink navy | Dark sections, footer, text-on-light hero overlays |
| `--indigo-800` | `#1A3A6E` | Deep heritage blue | Gradient partner, hover states |
| `--indigo-600` (PRIMARY) | `#2E5B9E` | **Primary blue** | Buttons, links, active states, icons, section eyebrows |
| `--indigo-400` | `#6E9BD1` | Sky bridge | Secondary text accents, line art, hover glows |
| `--indigo-100` | `#E8F0F9` | Pale blue wash | Alternating section backgrounds, card tints |
| `--sand-100` | `#FAF6EE` | Warm cream | Page background base |
| `--sand-300` | `#EFE6D4` | Sun-baked plaster | Card borders, dividers, tinted panels |
| `--terracotta` | `#C96F4A` | Rajasthani earth | Small accents (chips, highlights, hover on light) |
| `--saffron` | `#D9A441` | Marigold gold | Star ratings, review badges, celebratory accents |
| `--ink` | `#1C2333` | Text | Headings & body on light backgrounds |

### Palette rules
- **60 / 30 / 10:** 60% sand + white, 30% indigo families, 10% terracotta/saffron.
- Blue is *never* used alone on white for large areas — it lives in **gradients** (`indigo-800 → indigo-600`), **duotone image washes**, and **dark navy sections**.
- Dark sections (`indigo-900`) use `indigo-400` line art + sand text for a moonlit-fort mood.

---

## 3. Typography

Two families, a confident contrast:

| Role | Font | Why |
|------|------|-----|
| Display / Headings | **Fraunces** (variable, soft optical axis) | A modern serif with Victorian + Indian-print warmth. Gives "heritage" without looking antique. Use the *SOFT* axis for a warm, crafted feel. |
| Body / UI | **Manrope** | Clean, geometric, modern. Balances the serif and keeps the site feeling 2026. |
| Eyebrow / labels | Fraunces (small caps, letter-spaced) | Section eyebrows like "The Story", "The Folio", "Stay With Us" |

### Type scale (desktop)
- Eyebrow: `13px / uppercase / letter-spacing .18em`
- H1 hero: `clamp(3rem, 7vw, 5.5rem)`, Fraunces, weight 400–520
- H2 section: `clamp(2rem, 4vw, 3.25rem)`
- H3 card: `1.375rem`
- Body: `1.0625rem / 1.7`

### Micro-details
- Numbers & stats in Fraunces italic — e.g. *"4.8 ★ guest love"*.
- Long headlines get an emphasized phrase in italic Fraunces with the saffron underline swash.

---

## 4. Design Motifs (The Reusable Design Language)

### 4.1 The Jharokha Arch Frame
The signature element. Image frames are cut in the arch shape:

```
[ arch ]   →  border-radius: 100% 100% 0 0  (vertical arch)
[ keyhole ]→  border-radius: 50% 50% 8px 8px (arched portal for cards)
```

- **Hero images** and **room cards** use a tall arch frame with a 2px `indigo-100`/gold hairline.
- On hover, a **saffron inner ring** traces the arch (SVG `stroke-dashoffset` animation).
- CSS only — no image clipping loss; use `object-fit: cover` inside the arch.

### 4.2 Jaali Lattice
An SVG tile (8-point star lattice) used three ways:
1. **Texture** — 8% opacity jaali wash behind section content.
2. **Footer backdrop** — jaali pattern in `indigo-100` at 6% over `indigo-900`.
3. **Divider motif** — a small jaali rosette + two hairlines as section separator (replaces the old `section-title::before/after` lines).

### 4.3 Duotone Photography
Heritage **indigo duotone** on gallery/hero imagery (`multiply` indigo-900 + `screen` indigo-400 mix). This unifies mixed photography into one coherent brand look — the #1 trick to make a template feel like a brand.

### 4.4 Hand-drawn Accents
- **Eyebrow underlines:** a small hand-drawn swash/sweep (SVG) under "The Story".
- **Coordinates/labels:** tiny Fraunces italic captions like *"26.298° N, 73.020° E — Blue City, Jodhpur"*.
- **Chai/marigold flourish** used sparingly as a "seal" on CTAs.

### 4.5 Motion Language
| Motion | Where | Feel |
|--------|-------|------|
| Slow Ken Burns / parallax | Hero & experience sections | Cinematic, unhurried (2.5s ease) |
| Reveal-up on scroll | All sections (IntersectionObserver) | `translateY(24px) → 0`, `opacity 0→1` |
| Arch ring trace | On image hover | `stroke-dashoffset` fill, 700ms |
| Marquee ticker | Under hero | Infinite slow scroll (40s loop) |
| Sticky nav frosted-glass | On scroll | `backdrop-filter: blur(16px)` + 80% sand |
| Magnetic buttons | Primary CTAs | Subtle 1.03 scale on hover |

Respect `prefers-reduced-motion`.

---

## 5. Site Structure & Page-by-Page Redesign

### 5.0 Global Shell (applies everywhere)

**Announcement ticker** (top, `indigo-900`): marquee loop —
> "Rooftop dining under the stars ✦ Heritage stays in Jodhpur & Udaipur ✦ Free breakfast for direct bookings ✦ "

**Navbar** (replaces `ClientLayout` header):
- Transparent over hero → frosted sand on scroll, with a **hairline gold bottom border**.
- Left: wordmark "STORICA" in Fraunces + small "STAYS" in tracked caps below.
- Center: Home, Story (About), Jodhpur, Udaipur, The Folio (Rooms), Contact.
- Right: a **"Book a Stay"** pill button (indigo gradient, arch-tipped corners) — persistent on all breakpoints.
- Mobile: full-screen drawer with big Fraunces links + jaali overlay.

**Footer** (replaces current): `indigo-900` with jaali texture:
- Row 1: wordmark + short story, quick links, contact, "Newsletter" (email input + button, gated by GTM).
- Row 2: two-city mini-cards (Jodhpur / Udaipur) with coordinates.
- Row 3: copyright + socials (Instagram, WhatsApp). Keep GTM tracking hooks.

**Floating actions:** keep WhatsApp + call bubbles, restyle as round indigo buttons with a subtle pulse.

---

### 5.1 Homepage (the flagship)

1. **Hero** — Full-bleed duotone image (CKC04015). Overlay: arch-framed inset text panel. Kickline: "JODHPUR ✦ UDAIPUR". H1: *"Sleep inside the Blue City's story."* Sub: one line on heritage rooftop stays. CTAs: "Book a Stay" (saffron) + "Explore the Folio" (ghost). Bottom-left: live location chip; bottom-right: scroll cue.
2. **Ticker** — amenities marquee strip on `indigo-100`.
3. **The Story** — Editorial split. Left: narrative (2 short paragraphs) + stat trio in Fraunces italic (*3 heritage havelis, 4.8★ rating, 300+ guest stories*). Right: arch-framed photo collage (staggered arches like jharokha rows) + "Property Images" opens the light-gallery.
4. **The Folio (Rooms)** — Replace grid cards with **arch-portrait cards**: image in arch frame, type label, 2-line description, amenity chips (bed/bath/wifi in line-art icons), hover reveals "View Room / Call to Book". Jodhpur set + "View all Jodhpur rooms". Then the Udaipur set with lake-view tag + "View all Udaipur rooms".
5. **The Two Cities** — Dark (`indigo-900`) full-bleed split: Jodhpur (fort & blue lanes) vs Udaipur (lakes & white marble). Arch image + 3 bullet highlights + link each.
6. **The Rooftop** — Parallax band with rooftop.avif, headline *"Dinner with a fort in your plate-glass view."*, blurbs: sunrise chai, evening thali, sundowners.
7. **Reels from the road** — InstagramSection redesigned: arch frames, play button as saffron circle, stats overlay kept, follow CTA.
8. **Guest stories** — ReviewsSection: masonry of quote cards with platform badges, plus the 4.8/5 summary banner (indigo gradient) and "Write a Review".
9. **Find us** — Split: map (kept) + contact info cards (Booking / WhatsApp / Call) + arch image of facade.
10. **The Seal** — Closing band: wordmark + *"Atithi Devo Bhava — the guest is god."* + Book CTA.

### 5.2 About ("The Story")
- Editorial hero: short, no template carousel. Arch image + story of restoring a 19th-century haveli.
- Timeline of the property (1902 built → restored → reimagined) as a vertical jaali-ruled line.
- **Why choose us** feature cards redesigned: line-art icon in arch tile, hover fills with indigo gradient (keeps existing copy).
- Stats band (indigo gradient): room types, 24/7, rating, cities.

### 5.3 Jodhpur & Udaipur city pages
- City hero: distinct duotone tint — Jodhpur **indigo** (blue city), Udaipur **lake-teal** (`#2E6E7E`-family) to visually separate the two properties.
- "Why this city" editorial block (fort / lakes, nearby sights, best time to visit).
- The Folio (full room list for that city).
- Reels + Reviews + Find us (kept, restyled).

### 5.4 Book page
- Keep the iframe + `booking.css`, but frame it inside an **arch-topped card** with the brand chrome (nav, footer, floating buttons).
- Replace the "Need Help?" panel with an arch banner: phone + WhatsApp (keeps tracking).

---

## 6. Photography & Art Direction
- **Unify via duotone**, not reshoots — every existing image stays usable.
- Arches prefer **portrait/vertical** crops (`4:5`); hero uses `16:9`/`3:2`.
- Captions always in Fraunces italic + location coordinates — editorial feel.
- Keep alt text; improve image `alt` copy for accessibility.

---

## 7. Technical Implementation Roadmap

**Stack note:** site is Next.js 15 (App Router, Turbopack) + Bootstrap 5 CSS classes today. Plan keeps Bootstrap's utility classes (fast path) but **overrides the theme layer** in `public/css/style.css` and adds a new `globals.css` design-token layer.

### Phase 1 — Design tokens & theme (no layout change)
- `src/app/globals.css`: add CSS custom properties (palette, fonts, radii, shadows), reset `body` to sand.
- Load **Fraunces + Manrope** via `AsyncCSS.tsx` (keep existing Heebo/Montserrat only as fallback chain).
- Update `public/css/style.css`: recolor `--primary`, `--light`, `--dark`; restyle `.btn`, `.section-title` (new divider motif), `.navbar`, `.footer`.
- Verify on all pages; keep functionality identical.

### Phase 2 — Global shell
- Rewrite `src/components/ClientLayout.tsx`: announcement ticker, sticky frosted navbar, arch-tipped Book CTA, full-screen mobile menu, redesigned footer with jaali SVG, restyled floating buttons. **Keep every GTM `track*` call**.
- Add `scroll-behavior: smooth`, active-nav highlighting, `prefers-reduced-motion` guard.

### Phase 3 — Shared motifs
- `src/components/ArchFrame.tsx` — arch image frame component (configurable radius/tint/caption/ring-hover).
- `src/components/JaaliPattern.tsx` — SVG tile + divider rosette.
- `src/components/Reveal.tsx` — IntersectionObserver reveal wrapper (replaces WOW dependence for new sections; keep WOW for legacy where needed).
- `src/components/Duotone.tsx` — wraps images in duotone filter layer.

### Phase 4 — Homepage rebuild (`src/app/page.tsx`)
- Hero, ticker, Story, Folio (Jodhpur + Udaipur), Two Cities, Rooftop parallax, Reels, Guest stories, Find us, Seal.
- Keep `RoomsSection`/`RoomCard` data wiring; restyle internals + RoomCard visuals (arch frame, hover ring).
- Reuse `PropertyGallery`, `InstagramSection`, `ReviewsSection` logic — refactor their markup into the new motif system.

### Phase 5 — Sub-pages
- About, Jodhpur, Udaipur: adopt shell + motifs; add city-specific duotone tints.
- Book page: brand-chrome wrapper + arch booking card.
- Refresh metadata (title/description per page) + Open Graph.

### Phase 6 — Polish, QA, ship
- Accessibility: contrast (indigo-600 on sand passes AA), focus rings, aria labels, reduced-motion.
- Lighthouse: keep lazy-loading (`PerformanceOptimizer`), preload hero, `next/image` where practical.
- Remove dead template cruft (unused `/lib` js if confirmed unused; commented-out spinner/iframe blocks).
- Test: `npm run lint`, `npm run build`.

---

## 8. Files to Create / Modify

**Create**
| File | Purpose |
|------|---------|
| `src/components/ArchFrame.tsx` | Arch image frame + hover ring |
| `src/components/JaaliPattern.tsx` | Jaali texture & divider rosette |
| `src/components/Reveal.tsx` | Scroll-reveal wrapper |
| `src/components/Duotone.tsx` | Indigo duotone image layer |
| `src/components/Marquee.tsx` | Announcement/amenity ticker |
| `src/components/Navbar.tsx` | New sticky nav (extracted from ClientLayout) |
| `src/components/SiteFooter.tsx` | New footer |
| `docs/REDESIGN_PLAN.md` | This plan |

**Modify**
| File | Change |
|------|--------|
| `src/app/globals.css` | Design tokens, palette, typography, base |
| `public/css/style.css` | Theme override, buttons, section titles, footer |
| `src/app/layout.tsx` | Fonts metadata, structured data |
| `src/components/ClientLayout.tsx` | Compose Navbar/Footer/ticker |
| `src/components/AsyncCSS.tsx` | Fraunces + Manrope; drop unused libs |
| `src/app/page.tsx` | Homepage rebuild |
| `src/app/about/page.tsx` | Story page rebuild |
| `src/app/jodhpur/page.tsx` | City page + indigo tint |
| `src/app/udaipur/page.tsx` | City page + lake-teal tint |
| `src/components/RoomCard.tsx` | Arch-frame visuals, hover ring |
| `src/components/RoomsSection.tsx` | New section header treatment |
| `src/components/ReviewsSection.tsx` | Editorial quote cards |
| `src/components/InstagramSection.tsx` | Arch-framed reels |
| `src/app/book/page.tsx` + `booking.css` | Brand-chrome wrapper |

**Keep (do not touch logic):** `PropertyGallery`, `BookingIframe`, `Scripts`, `gtm.ts`, `rooms.ts` data, all tracking hooks.

---

## 9. Success Metrics
- **Design:** hero LCP image above fold ≤ 2.5s (duotone is CSS, no extra bytes); CLS < 0.1.
- **Brand:** 100% of imagery passes through the arch frame or duotone system — zero template leftovers.
- **Engagement:** direct "Book a Stay" CTA always visible; bounce reduction target from scroll-animation quality.
- **Tracking:** all existing GTM events continue to fire (verify `track*` calls in rebuilt components).

---

## 10. Guardrails
- Blue stays the primary color — the palette pivots from teal to **heritage indigo**, never away from blue.
- No new heavy dependencies — all motifs are CSS/SVG/IntersectionObserver; avoid adding a motion library if `Reveal` suffices.
- Bootstrap utility classes remain; we override the theme layer rather than fighting the grid.
- All GTM tracking, SEO metadata, and the booking iframe are preserved.
