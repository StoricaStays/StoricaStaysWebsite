# Storica Stays — Complete Website Redesign Plan

## 1. Context

The current site is a Next.js 15 / React 19 app skinned with a stock Bootstrap 5
template (`public/css/style.css`, primary color `#408fa2`). It works, but it
reads as an unmodified template: generic carousel hero, boxed `service-item`
cards, default Bootstrap spacing/typography, Font Awesome icon grid, no real
visual identity tying back to the brand.

Storica Stays is a heritage boutique hostel with properties in **Jodhpur**
(the "Blue City") and **Udaipur** (the "City of Lakes"), each with a rooftop
restaurant. That's a strong, under-used story: heritage architecture, blue-city
imagery, rooftop fort/lake views. The redesign should look like a boutique
hospitality brand, not a hostel-template demo.

**Decisions locked in for this plan:**
- **Tech foundation:** migrate from Bootstrap 5 to **Tailwind CSS**, with a
  small set of hand-built React components (no second component-kit
  dependency). This is a rebuild of the presentation layer, not a reskin.
- **Visual direction:** **Boutique heritage-modern** — warm, photo-led,
  editorial layouts; heritage motifs (arches, jaali lattice, sandstone/
  terracotta neutrals) used sparingly as texture; **blue stays the primary
  brand color**, used deliberately (CTAs, key accents, the "Blue City" story)
  rather than washed across every surface.

---

## 2. Goals

1. Look and feel like a boutique heritage stay, not a free HTML template.
2. Keep blue as the primary brand color — but make it feel intentional
   (tied to Jodhpur's Blue City identity) rather than a default Bootstrap hue.
3. Photography does the selling — layouts should get out of the image's way.
4. Fast, accessible, mobile-first (majority of traffic to a hostel/boutique
   stay site is mobile, often on slower connections in-country).
5. Keep booking and contact (call / WhatsApp / email) one tap away on every
   screen size.
6. Preserve everything that already works: GTM event tracking
   (`src/utils/gtm.ts`), the room data model (`src/data/rooms.ts`), the
   LightGallery-powered property/room galleries, and the booking iframe flow.

**Non-goals:** changing hosting/deployment, changing the booking engine
provider, adding new business features (multi-language, payments, etc.) —
this is a visual/frontend redesign of the existing structure.

---

## 3. Design System

### 3.1 Color

Keep blue primary, but replace the flat teal-blue (`#408fa2`) with a richer,
more confident blue and pair it with warm neutrals instead of white/gray, so
the palette reads "heritage boutique" instead of "corporate SaaS."

| Token | Value (approx.) | Use |
|---|---|---|
| `primary-600` | `#1F5F8B` (deep indigo-blue, "Jodhpur Blue") | Buttons, links, active nav, key accents |
| `primary-500` | `#2E7DA6` | Hover states, secondary accents |
| `primary-100` | `#DCEAF2` | Tinted backgrounds, badges |
| `sand-50…900` | `#FBF8F3` → `#3A2E22` | Warm neutral scale replacing Bootstrap grays — backgrounds, body text on light sections |
| `terracotta-500` | `#C1622D` | Sparingly for warmth: small accents, hover underlines, review stars alternative — never competes with primary blue |
| `ink-900` | `#1B1B1E` | Headline text |
| success/error | keep standard green/red | Form and booking states |

Blue remains dominant for interactive/brand elements (nav, CTAs, links,
active states, footer band); sand/terracotta neutrals carry the large
surfaces so the site doesn't feel "all blue."

### 3.2 Typography

Replace default Geist body copy with a two-font pairing that supports the
heritage-editorial feel:
- **Display/headings:** a serif with character (e.g. "Fraunces", "Canela"-like
  alternative, or "Playfair Display") — used for H1/H2 and section eyebrows.
- **Body/UI:** a clean grotesque (keep Geist Sans, or "Inter") for paragraphs,
  nav, buttons — legibility at small sizes on mobile.
- Type scale driven by Tailwind's `theme.fontSize`, fluid via `clamp()` for
  hero headings so they scale smoothly instead of jumping at breakpoints.

### 3.3 Spacing, radius, shadow

- Generous whitespace between sections (current Bootstrap `py-5` is fine as a
  baseline rhythm — keep it, but make it a design token: `section-y`).
- Soft, low-contrast shadows only (no default Bootstrap card shadows).
- Corner radius: slightly larger (`rounded-xl`/`2xl`) on images and cards to
  feel soft/boutique rather than sharp/corporate.

### 3.4 Motifs

- A subtle jaali (lattice) pattern as an SVG background accent on section
  dividers/CTAs — low-opacity, never on top of text.
- Arch-shaped image crops (`clip-path` or mask) for 1-2 hero/feature images
  per page, echoing Rajasthani architecture without being kitschy.
- Consistent thin rule/underline treatment under section eyebrows instead of
  the current `text-primary text-uppercase` label pattern.

### 3.5 Component library (new, Tailwind-based)

Replace ad-hoc Bootstrap classes with a small internal component set:
- `Button` (primary/outline/ghost variants, size props)
- `SectionHeading` (eyebrow + title, replaces repeated `section-title` markup)
- `Card` (room card, feature card, review card share one base)
- `Container` (max-width + padding wrapper, replaces `container-xxl`/`container`)
- `Nav` / `MobileNav`
- `Footer`
- `StickyContactBar` (mobile-only bottom bar: Call / WhatsApp / Book)

---

## 4. Technical Approach

### 4.1 Tailwind migration

1. Add Tailwind CSS + `@tailwindcss/typography` (for review/about copy blocks)
   to the Next.js app; configure `tailwind.config.ts` with the design tokens
   from §3.
2. Remove `public/css/bootstrap.min.css` and `public/css/style.css` once
   pages are migrated; drop the Bootstrap Bundle JS script (carousel/collapse
   are being replaced by React-driven equivalents anyway, see §4.2).
3. Migrate file-by-file (see §6 rollout), not in one big-bang PR — the app
   already has multiple route pages that must stay live throughout.
4. Keep `src/data/rooms.ts` and `src/utils/gtm.ts` untouched — they're
   data/logic, not styling, and other components depend on their shapes.

### 4.2 Component rebuilds required

| Current | Redesign action |
|---|---|
| `ClientLayout.tsx` (header/footer, Bootstrap navbar) | Rebuild nav as a React component with Tailwind + Headless UI (or hand-rolled) mobile menu; drop `data-bs-toggle` collapse dependency |
| Home hero carousel (Bootstrap `carousel`, inline in `page.tsx`) | Replace with a lightweight React carousel (e.g. Embla or a small custom hook) — full-bleed hero, arch-cropped caption panel, primary CTA in blue |
| `RoomsSection.tsx` / `RoomCard.tsx` | Restyle as the new `Card` component; keep LightGallery integration as-is (it's independent of Bootstrap) |
| `ReviewsSection.tsx` | Redesign as a horizontally-scrollable/quote-card layout instead of Bootstrap grid |
| `InstagramSection.tsx` | Keep functionality, restyle grid with Tailwind |
| `PropertyGallery.tsx` | Keep LightGallery logic; restyle trigger thumbnails |
| `BookingIframe.tsx` / `BookingContact.tsx` / `book/page.tsx` | Restyle wrapper/page chrome only — booking iframe internals are third-party and out of scope |
| `about/page.tsx`, `jodhpur/page.tsx`, `udaipur/page.tsx` | Full content-layout redesign per §5 |

### 4.3 Things to explicitly preserve

- All GTM tracking calls (`trackPhoneClick`, `trackWhatsAppClick`,
  `trackEmailClick`, `trackSocialClick`, `trackCallNowClick`,
  `trackGalleryOpen`) must remain wired to the same events — redesign should
  not silently drop analytics.
- `PerformanceOptimizer.tsx` / `AsyncCSS.tsx` behavior — re-evaluate whether
  still needed once Bootstrap's CSS/JS payload is gone (likely much of this
  becomes unnecessary, which is a net simplification).
- SEO metadata in `layout.tsx` and any per-page metadata.

---

## 5. Page-by-Page Redesign

### 5.1 Home (`/`)
- **Hero:** full-bleed image/short video-loop carousel, arch-shaped caption
  card bottom-left, one primary CTA ("Book Your Stay" — solid blue) + one
  secondary ("Explore Rooms" — outline).
- **About/intro band:** shorter than current 4-paragraph block; pull quote +
  the current photo-grid but with mixed aspect ratios instead of a rigid 2×2.
- **City switcher:** a clear visual split — "Jodhpur" vs "Udaipur" as two
  large linked panels with hero imagery, before diving into room listings,
  so first-time visitors immediately understand there are two properties.
- **Rooms (Jodhpur + Udaipur):** keep existing `RoomsSection`/`RoomCard`
  data-driven approach, restyled as boutique room cards (image, price-from if
  available, bed/bath icons, "View Room" CTA).
- **Instagram + Reviews:** keep, restyle to match new card/typography system.
- **Contact band:** replace the current 3-column plain-text block with a
  compact contact card (map + WhatsApp/call/email as tappable buttons, not
  just icon+text).

### 5.2 About (`/about`)
- Brand story told as a heritage narrative (founding story, restoration of
  the property, connection to Jodhpur/Udaipur) rather than generic "Welcome
  to" copy.
- Stats band (room types / support / rating) restyled as a compact stat row,
  not bordered boxes.
- Features grid restyled as icon + short-copy cards using the new `Card`
  component, trimmed to the most differentiating 4-6 (heritage property,
  rooftop restaurant, prime location, free wifi, 24/7 reception, safety).

### 5.3 Jodhpur / Udaipur (`/jodhpur`, `/udaipur`)
- Each becomes a proper property landing page: hero specific to that city,
  short "why this location" copy, room listing, city-specific gallery,
  city-specific map embed, city-specific contact CTA.
- Visually differentiate the two (e.g. subtle accent imagery/texture per
  city) while keeping the same component system — reinforces "two
  properties, one brand."

### 5.4 Book (`/book`)
- Keep the booking iframe as the functional core; restyle the surrounding
  page chrome (headline, trust signals — free cancellation/best price if
  applicable, contact-us-to-book fallback) to match the new system.

### 5.5 Global chrome
- **Header:** logo/wordmark left, primary nav center/right, phone+WhatsApp
  as icon buttons always visible (not hidden below `lg` like today), sticky
  on scroll with a condensed state.
- **Mobile:** sticky bottom contact bar (Call / WhatsApp / Book Now) — high
  conversion value for a hostel audience booking from mobile.
- **Footer:** simplified — brand blurb, contact, per-city quick links,
  social — dropped decorative `bg-primary` box treatment for something
  flatter and more editorial.

---

## 6. Rollout Plan (phased, so the site stays shippable throughout)

1. **Foundations** — install Tailwind, define tokens (colors, type, spacing)
   in `tailwind.config.ts`, add web fonts, build the base component set
   (`Button`, `SectionHeading`, `Card`, `Container`).
2. **Global chrome** — rebuild `ClientLayout.tsx` (header, footer, mobile
   nav, sticky contact bar). This affects every page at once, so land and
   verify it first.
3. **Home page** — highest-traffic page; hero, about band, city switcher,
   rooms, reviews, Instagram, contact.
4. **Room components** — `RoomsSection`/`RoomCard` restyle (shared by Home,
   Jodhpur, Udaipur).
5. **About page.**
6. **Jodhpur + Udaipur pages.**
7. **Book page chrome.**
8. **Cleanup** — remove Bootstrap CSS/JS, Font Awesome (replace with a
   lighter icon set e.g. `lucide-react`), re-audit `PerformanceOptimizer`/
   `AsyncCSS`, re-run Lighthouse.
9. **QA pass** — cross-device visual QA, verify every GTM event still fires,
   verify LightGallery still works on room/property galleries, verify
   booking iframe still loads.

Each phase should be its own PR/branch off `new-version-2` so the redesign
can be reviewed and reverted incrementally rather than as one massive diff.

---

## 7. Non-visual requirements carried through the redesign

- **Performance:** dropping Bootstrap + Font Awesome should net-reduce CSS/JS
  payload; target Lighthouse Performance ≥ 90 on mobile for Home.
- **Accessibility:** proper heading hierarchy, alt text on all images
  (already mostly present — audit during migration), focus states on all
  interactive elements (buttons currently rely on Bootstrap defaults, will
  need explicit Tailwind focus-visible styles), color contrast check on the
  new blue against sand backgrounds.
- **SEO:** preserve/improve metadata per page (currently only `layout.tsx`
  has metadata — add per-page `generateMetadata` for About/Jodhpur/Udaipur/
  Book while redesigning them).
- **Analytics parity:** every current GTM tracking call has a 1:1 equivalent
  in the redesigned components (tracked explicitly in the QA phase, §6.9).

---

## 8. Open questions to resolve before/during build

- Do we have (or need to commission) new photography for arch-crop hero
  treatments, or should the redesign work entirely with existing assets in
  `public/img/`?
- Is there a real logo/wordmark, or does "Storica Stays" stay as styled text
  in the header/footer?
- Any brand guideline beyond "keep blue primary" (e.g. an existing logo file
  with an exact hex) that should override the proposed `#1F5F8B`?
- Content updates: does About-page copy need a rewrite (real founding story)
  or should redesign proceed with existing copy reflowed into the new layout?
