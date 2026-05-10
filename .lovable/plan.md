# Foodex Group — Luxury Hospitality Website Plan

A premium, cinematic multi-page site for a UAE restaurant brand. Deep red (#8B0000), charcoal black, gold accents, white type. Framer Motion animations, glassmorphism, parallax, large food imagery.

## Route Architecture (TanStack Start)

Each major section becomes its own SSR/SEO-friendly route, with the home page acting as a cinematic landing that previews them.

```
src/routes/
  __root.tsx        → sticky luxury navbar + footer + WhatsApp float
  index.tsx         → Home (Hero, About teaser, Services teaser, Signature Menu preview, Experience, Testimonials, CTA)
  about.tsx         → Full Foodex story, values, GCC vision, animated cards
  services.tsx      → Catering, Restaurants, Grocery, General Trading, Real Estate
  menu.tsx          → Full signature menu grid with lightbox + filters
  experience.tsx    → Storytelling, cinematic full-bleed visuals
  branches.tsx      → Branch locator, featured Sharjah branch, Google Maps embed
  gallery.tsx       → Food + ambience gallery with lightbox
  contact.tsx       → Contact form, reservation modal, map, all touchpoints
```

Each route gets unique `head()` metadata (title, description, og:title, og:description, og:image where relevant).

## Design System (`src/styles.css`)

Tokens in oklch:
- `--background` near-black charcoal
- `--foreground` warm white
- `--primary` deep luxury red (≈ #8B0000)
- `--primary-glow` brighter crimson for gradients/glow
- `--accent` gold (≈ #C9A24C)
- `--card` slightly elevated charcoal with translucency for glass
- Gradients: `--gradient-luxury` (red→black), `--gradient-gold` (gold sheen)
- Shadows: `--shadow-glow-red`, `--shadow-elegant`
- Glass: backdrop-blur + low-opacity white border tokens

Typography pair:
- Headings: Cormorant Garamond (or Playfair Display) — editorial serif
- Body: Inter or Manrope — refined sans
- Loaded via Google Fonts in root `head()`

Custom Tailwind utilities for: shimmer, parallax, fade-up, scale-in, marquee.

## Sections & Components

Reusable in `src/components/`:
- `Navbar` — sticky, glass on scroll, gold underline active link, hamburger sheet on mobile
- `Footer` — dark, gold dividers, social icons, contact
- `WhatsAppFab` — floating animated button
- `ReservationModal` — shadcn Dialog with form
- `Hero` — full-viewport, video/image bg, overlay gradient, headline reveal, floating stat cards
- `StatCounter` — animated count-up on view
- `SectionHeading` — gold eyebrow + serif title + divider
- `ServiceCard` — hover red glow, icon, CTA
- `DishCard` — image, rating stars, hover scale + gold border
- `TestimonialMarquee` — auto-scrolling row(s), pause on hover
- `BranchCard` + `MapEmbed`
- `InstagramGrid` — 8-tile responsive grid with hover overlay
- `CtaBanner` — dramatic image, dual buttons
- `RevealOnScroll` wrapper using Framer Motion `whileInView`
- `Lightbox` for gallery/menu

## Animations

- Framer Motion for entrance reveals, stagger, parallax (`useScroll` + `useTransform`)
- Hero: slow zoom on bg, headline letter stagger, stat cards float in
- Section reveals on scroll
- Hover: scale + red glow + gold border on cards
- Marquee testimonials via CSS animation
- Page transitions via AnimatePresence on Outlet

## Imagery

Generate with `imagegen` (fast tier) into `src/assets/`:
- hero-cinematic.jpg (charcoal grill ambience, warm lighting)
- about-restaurant.jpg
- experience-bg.jpg (cinematic dining)
- cta-bg.jpg
- 9 dish images (charcoal chicken, shawarma, porotta, fish thawa, grill-x, lollipops, dosa, mint lime, beef naadan)
- 8 instagram tile images
- service icons (use lucide-react instead — no need to generate)

## Content (per brief)

All copy, stats (20+ years, 25+ branches, 15K+ customers), services, 9 menu items with descriptions/ratings, 4 testimonials, featured Sharjah branch with phone/address/hours, social handle, contact info — wired exactly as specified.

## Technical Details

- Install: `framer-motion`, `embla-carousel-react` (already may exist), Google Fonts via `<link>` in root head
- Smooth scroll: `html { scroll-behavior: smooth }`
- Sticky navbar with `useScroll` to toggle glass background
- SEO: per-route head(), JSON-LD Restaurant schema on home and branches
- Responsive: mobile-first, hamburger sheet nav, fluid type with `clamp()`
- Lazy-load heavy images, `loading="lazy"`
- Accessible: alt text, focus rings in gold, aria-labels on icon buttons

## Build Order

1. Design tokens + fonts in `styles.css`
2. Generate hero + key images in parallel
3. Root layout: Navbar, Footer, WhatsApp FAB, ReservationModal context
4. Home page with all preview sections
5. Sub-routes (about, services, menu, experience, branches, gallery, contact)
6. Polish: animations, hover states, mobile QA

Confirm to proceed and I'll start building.