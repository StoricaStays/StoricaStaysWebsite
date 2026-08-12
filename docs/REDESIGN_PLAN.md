# Storica Stays — Full Website Redesign Plan

> **Direction:** Modern Luxury Heritage
> **Tech approach:** Keep Bootstrap 5, full hand-rolled restyle (token-based design system)
> **Scope:** All 5 existing pages + new pages/sections + design system + technical cleanup

---

## Phase 0: Audit & Cleanup (foundation work)

Fix structural debt before restyling so the new design is not layered on top of stale markup.

- Move all `next/head` usage (in `src/app/page.tsx`, `src/app/jodhpur/page.tsx`, `src/app/udaipur/page.tsx`) to Next.js `metadata` export; manage lightgallery CSS as module imports or single global link
- Replace raw `<img>` with `next/image` where feasible; enable lazy loading and preload hero images
- De-duplicate copy-pasted markup into shared components (Hero, AboutSection, ContactSection)
- Strip unused legacy JS from `src/components/Scripts.tsx` after rebuild (OwlCarousel, WOW, counterup, easing, waypoints, jQuery) — keep GTM/GA and Bootstrap JS as needed
- Preserve all GTM event functions in `src/utils/gtm.ts` unchanged (no tracking regressions)

---

## Phase 1: Design System & Tokens

New token file (`src/styles/theme.css`) overriding Bootstrap 5, plus a redesigned `src/app/globals.css`.

- **Colors**
  - Deep ink/espresso dark: `--ink: #1a1410`
  - Brass/gold accent: `--brass: #c1a05e`
  - Ivory cream background: `--ivory: #faf6ef`
  - Muted stone text for secondary content
- **Typography**
  - Elegant serif display (Playfair Display / Cormorant Garamond) for H1–H4 + eyebrow labels
  - Clean sans (Montserrat / Inter) for body and UI
- **Tokens** — spacing scale, border radius, shadows, gradient overlays, focus states
- **Components** — restyled `.btn` (brass primary on dark, ghost outline), `.section-title` (overline eyebrow + serif heading), `.room-item`, `.testimonial-item`, navbar, footer, badges, cards

---

## Phase 2: Navigation & Layout (`src/components/ClientLayout.tsx`)

- Sticky transparent-over-hero header that becomes solid ivory on scroll
- Serif wordmark + brass underline nav accents; active states; consistent mobile drawer
- Reworked footer: brand block, contact for **both** cities, quick links, social, copyright
- Refined floating WhatsApp/Call buttons matching the new palette

---

## Phase 3: Shared Components (built once, reused everywhere)

- `HeroSlider` — cinematic, coordinated city page hero with minimal controls, serif headline + dual CTAs
- `SectionHeading` — eyebrow + title + optional lead
- `AboutSection` — property image collage + property gallery trigger
- `ContactSection` — booking/WhatsApp/call + map + image (parameterized per city)
- `RoomCard` — richer cards (gallery, bed/bath, amenities, book/call with GTM)
- `AmenitiesSection` *(new)*
- `RestaurantPromo` *(new)* — rooftop restaurant band
- `AttractionsStrip` *(new)* — city-specific nearby attractions

---

## Phase 4: Existing Page Redesigns

1. **Home** (`src/app/page.tsx`) — cinematic hero; intro/story; Jodhpur + Udaipur room previews; rooftop restaurant promo band; Instagram reels; reviews; contact — all via shared components
2. **About** (`src/app/about/page.tsx`) — page banner + brand story + stats (rooms/support/rating) + feature cards in new design
3. **Jodhpur** (`src/app/jodhpur/page.tsx`) — city hero, about, full room grid, nearby attractions (Mehrangarh etc.), reviews, contact
4. **Udaipur** (`src/app/udaipur/page.tsx`) — same structure (as Jodhpur), lake-focus copy + assets
5. **Book** (`src/app/book/page.tsx`) — keep asiatech iframe + loader; restyle trust-signal cards and "Need help" banner

---

## Phase 5: New Pages

- **`/restaurant`** — rooftop restaurant showcase: hero, gallery, dining highlights, hours/location, reservation CTA
- **`/gallery`** — masonry image gallery (property + rooms + Udaipur) driven by lightgallery
- **`/contact`** — both-city contact hub: addresses, map embeds (Jodhpur + Udaipur), email/WhatsApp/call CTAs with GTM

---

## Phase 6: Performance, SEO & QA

- `next build` + `npm run lint` pass clean; Lighthouse pass (LCP/CLS on hero, image sizing)
- Remove unused dependencies from `package.json` if jQuery/OwlCarousel no longer needed
- Responsive audit at 375 / 768 / 1024 / 1440px; reduced-motion support; a11y check for nav, gallery, modals
- Final regression check of GTM events (phone, whatsapp, gallery, reels, booking)

---

## Suggested Execution Order

Phase 0 → 1 → 2 → 3, then:

1. Home
2. About
3. Jodhpur / Udaipur
4. Book
5. New pages (Restaurant, Gallery, Contact)
6. Phase 6 (QA / performance)

---

## Key Files Reference

| Area | File |
| --- | --- |
| Global styles | `src/app/globals.css` |
| Design tokens | `src/styles/theme.css` *(new)* |
| Header / nav / footer | `src/components/ClientLayout.tsx` |
| Hero + shared sections | `src/components/*` *(new HeroSlider, SectionHeading, etc.)* |
| Rooms | `src/components/RoomCard.tsx`, `src/components/RoomsSection.tsx`, `src/data/rooms.ts` |
| Galleries | `src/components/PropertyGallery.tsx` |
| Instagram | `src/components/InstagramSection.tsx` |
| Reviews | `src/components/ReviewsSection.tsx` |
| Booking | `src/app/book/page.tsx`, `src/components/BookingIframe.tsx`, `src/components/BookingContact.tsx` |
| Scripts | `src/components/Scripts.tsx`, `src/components/AsyncCSS.tsx`, `src/components/PerformanceOptimizer.tsx` |
| Tracking | `src/utils/gtm.ts` |