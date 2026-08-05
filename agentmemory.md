# Agent Memory - Fayalwan Gym

## 1. Executive Summary & Project Mission
**Fayalwan Gym** is a high-performance fitness sanctuary located in Kazhakoottam, Trivandrum, Kerala.
- **Brand Slogan**: *"Turn Physical Limits Into Strength That Endures"*
- **Core Value Proposition**: Elite strength training, athletic conditioning, and personalized coaching accessible at ₹120/day.
- **Repository Location**: `c:\Users\sathl\OneDrive\Desktop\CLIENT-WORK\Fayalwan-Gym`
- **Active Git Branch**: `viv`
- **Memory Protocol**: **MUST update this `agentmemory.md` file after each set of architectural, component, or design changes.**

---

## 2. Tech Stack & Key Dependencies

| Layer | Technology / Library | Version | Description |
|---|---|---|---|
| **Framework** | Next.js (App Router) | `16.2.12` | Server-rendered & client-hydrated modern web app |
| **UI Library** | React | `19.2.4` | Modern React 19 concurrent features |
| **Language** | TypeScript | `^5.0.0` | Strict static typing across all components |
| **Styling** | Vanilla CSS / CSS Modules | Custom | Global CSS tokens + per-component CSS scoping |
| **Smooth Scrolling** | Lenis | `1.3.25` | Inertia-based butter-smooth scroll behavior |
| **Animations** | GSAP & `@gsap/react` | `3.15.0` / `2.1.2` | Timeline animations, ScrollTrigger transitions |
| **Carousels** | Swiper | `14.0.7` | Touch-enabled responsive sliders |
| **Icons** | Lucide React | `1.28.0` | Clean SVG icon set |

---

## 3. Project Architecture & Directory Layout

```
Fayalwan-Gym/
├── public/                    # Static assets (images, icons, SVG badges)
├── src/
│   ├── app/                   # Next.js App Router root
│   │   ├── globals.css        # Global CSS variables, reset, font imports
│   │   ├── layout.tsx         # Root layout wrapping SmoothScrollProvider
│   │   └── page.tsx           # Main homepage composition
│   ├── components/
│   │   ├── layout/            # Application structural components
│   │   │   ├── Navbar/        # Navigation header & mobile overlay (Border-bottom removed)
│   │   │   └── Footer/        # Footer section
│   │   ├── providers/         # Global React context providers
│   │   │   └── SmoothScrollProvider.tsx # Lenis + GSAP ScrollTrigger sync
│   │   ├── sections/          # Homepage landing sections
│   │   │   ├── hero/                  # Full-bleed hero banner, preloader & gallery
│   │   │   ├── introduction/          # Bento Grid section & core philosophy
│   │   │   ├── featuredExperience/    # Interactive features & GSAP animations
│   │   │   ├── signaturePrograms/     # Program showcases with Swiper & custom cursor
│   │   │   ├── gymFamily/             # Founders & Coaches asymmetric editorial gallery
│   │   │   ├── gymGallery/            # 100vh Cinema Theater with Bottom Headline & <p> Quote Paragraph
│   │   │   ├── menifesto/             # Gym manifesto & core values
│   │   │   ├── story/                 # Brand origin story
│   │   │   ├── transformationStories/ # Client transformation showcases
│   │   │   ├── storiesThatInspires/   # Inspiration feature cards
│   │   │   ├── customerReview/        # Testimonials & reviews
│   │   │   ├── faq/                   # FAQ accordion
│   │   │   ├── contact/               # Contact & location details
│   │   │   └── about/                 # About section
│   │   └── ui/                # Reusable micro UI components
├── agentmemory.md             # Persistent agent memory & change log
├── package.json               # Node dependencies & npm scripts
├── next.config.ts             # Next.js framework configuration
└── tsconfig.json              # TypeScript configuration
```

---

## 4. Key Architectural Patterns & Conventions

### A. Smooth Scroll & Motion Synchronization
- **Lenis + GSAP ScrollTrigger Integration**: Managed inside `src/components/providers/SmoothScrollProvider.tsx`.
- **GSAP Ticker**: Lenis scroll updates are wired to `gsap.ticker` to maintain frame-locked synchronization without jitter.
- **GSAP in React 19**: Always use `useGSAP` from `@gsap/react` scoped to a `sectionRef` container for proper cleanup during renders.

### B. Component Composition in Homepage (`page.tsx`)
- Active core sections mounted in order:
  1. `<Navbar />`
  2. `<Hero />`
  3. `<Introduction />`
  4. `<FeaturedExperience />`
  5. `<SignaturePrograms />`
  6. `<GymFamily />`
  7. `<GymGallery />`
  8. `<Menifesto />`

### C. Styling Rules & Aesthetics
- **Theme**: Dark mode, sleek editorial high-contrast aesthetic.
- **Spacing**: Standardized container padding (e.g. `5rem` horizontal padding).
- **Typography**: Minimal, neutral weights (`font-weight: 400`/`500`), monospace taglines paired with high-impact editorial headers.
- **Styling file pattern**: Each section folder contains its own TSX component and co-located CSS file (e.g., `GymGallery.tsx` + `GymGallery.css`).

---

## 5. Development & Build Commands

- **Development Server**: `npm run dev`
- **Production Build**: `npm run build`
- **Start Production Server**: `npm run start`
- **Linting**: `npm run lint`

---

## 6. Recent Session Changelog & Component Updates

### A. Introduction Section (Bento Grid V2)
- **Files**: `src/components/sections/introduction/Introduction.tsx` & `Introduction.css`
- **Changes**: Rebuilt section as a 12-column responsive Bento Grid layout with custom scoped design tokens and GSAP ScrollTrigger reveals.

### B. Signature Programs Custom Swipe Cursor
- **Files**: `src/components/sections/signaturePrograms/SignaturePrograms.tsx` & `SignaturePrograms.css`
- **Changes**: Added a custom floating "SWIPE" cursor powered by `gsap.quickTo` tracking coordinates with CSS-driven state triggers.

### C. Hero Section Preloader & Infinite Swiper Gallery
- **Files**: `src/components/sections/hero/Hero.tsx` & `Hero.css`
- **Changes**: Cinematic GSAP preloader (scatter -> bottom align -> slide top), Awwwards `.hero-text-mask` reveals, strict `.is-loaded` cursor gating, and Pinterest video/image Swiper loop.

### D. Navbar Glassmorphism & Border Removal
- **Files**: `src/components/layout/Navbar/Navbar.css`
- **Changes**: Dark black glassmorphic styling (`rgba(5, 5, 5, 0.75)` + `backdrop-filter: blur(16px)`), neutral typography weights (`400`/`500`), glass pill CTA button, and removed `border-bottom` (`border-bottom: none`).

### H. Fonts — never use `@import url()` in CSS on this project
- **Files**: `src/app/layout.tsx`, `src/app/globals.css`, `introduction/Introduction.css`
- **The trap**: **Turbopack silently strips external `@import url("https://fonts.googleapis.com/...")`
  from CSS files.** No error, no warning — the rule simply never reaches the browser, so every
  `font-family` falls back to system sans-serif while DevTools still shows the declared family.
  Both `globals.css` and `Introduction.css` had one, so Outfit *and* Bricolage Grotesque were
  never loading site-wide.
- **The fix**: fonts are loaded with `next/font/google` in `app/layout.tsx`, which self-hosts them
  and exposes `--font-bricolage` / `--font-outfit`. The `.variable` classes go on `<html>`, and
  `globals.css` maps `--font-heading` / `--font-body` onto them.
- **Diagnosing this again**: `[...document.fonts].map(f => f.family)` in the console. If the
  expected families are absent, the @font-face never loaded — do **not** trust the computed
  `font-family` string, which shows the declaration regardless. Confirm rendering by measuring the
  same string in the target font vs a fallback; different widths prove the real face is in use.

### G. Stats — thin ledger band between Hero and Introduction
- **Files**: `src/components/sections/stats/Stats.tsx` & `Stats.css` (mounted in `page.tsx`
  between `<Hero />` and `<Introduction />`).
- **Design**: a small factual band (~246px tall at 1440), six entries on the page gutter, numbers
  in Outfit 300 with `tabular-nums` and `-0.045em`, labels in the system's `monospace .68rem/700/.12em`,
  1px vertical hairlines between entries. Accent `#e85d04` is restricted to the suffix glyph
  (`+`, `★`). Deliberately **no top rule** — the hero's bottom bar already carries one ~40px above
  and doubling them reads as an accident.
- **Motion**: one `ScrollTrigger` (`start: "top 88%"`, `once: true`) inside `gsap.matchMedia`.
  Hairlines draw down (`scaleY`), then values and labels rise out of masks with a 0.06 stagger —
  the same masked-reveal vocabulary as `.hero-text-mask`, not a count-up ticker.
- **Constraint**: values and labels are `white-space: nowrap` inside overflow-hidden masks, so any
  entry too wide for its column is **silently sheared** (a `₹120/DAY` value cost 5px this way).
  Keep values short and suffixes to a single glyph. Same mask rule as GymFamily: spacing lives on
  `.ledger__mask + .ledger__mask`, never on the value or label.
- **Grid**: 6 columns → 3 at ≤1080 → 2 at ≤620, with the leading hairline of each row hidden via
  `nth-child` overrides. Re-check those overrides if the number of stats changes from six.

### E. GymFamily — rebuilt as "One Room, All Day"
- **Files**: `src/components/sections/gymFamily/GymFamily.tsx` & `GymFamily.css`
- **Why**: The previous versions (asymmetric gallery, then a kinetic-typography pin at `19rem`
  image-filled text) broke the site's design system. Nothing else on the page goes above ~5.5rem,
  and no other section invents its own palette or ignores `--editorial-rail`.
- **Concept**: One fixed window onto the training floor, observed at five hours of a single day
  (`05:12 → 21:48`). The frame never moves; only the hour, the person, the light and the picture
  inside it change. The final beat is the empty room.
- **System compliance**: `#050505` canvas, `--page-gutter` / `--editorial-rail` grid (same as
  `FeaturedExperience` / `SignaturePrograms`), Outfit only, `monospace .7rem/700/.12em` micro-labels,
  `#e85d04` accent restricted to the kicker number and the day hairline, images desaturated
  (`saturate(.68) contrast(1.06)`) and contained rather than full-bleed.
- **Motion**: single pinned `ScrollTrigger` (`+=440%`, `scrub: 0.9`) built inside `gsap.matchMedia`
  under `(prefers-reduced-motion: no-preference)`. Only `opacity` / `transform` animate — masked
  slide on the time and name, crossfade on the frame, 1.06 → 1 Ken Burns on the plate, and a
  `scaleX` hairline that reads as a clock from 05:00 to 22:00.
- **Layout invariant**: all five hours are stacked in one grid cell (`grid-area: 1 / 1`), so the
  frame, time, name and line must resolve to identical coordinates for every hour. This required
  `min-height: 2.8em` on `.room__line` (bottom-aligned column — a one-line hour otherwise dragged
  the numeral 25–114px off baseline) and `justify-content: flex-start` in the stacked ≤820px
  layout (bottom-alignment there shifted the frame 22px). **Verify both if the copy changes.**
- **Mask invariant**: spacing between the time and the name lives on `.room__mask + .room__mask`,
  never on `.room__time` / `.room__name`. A mask box taller than its content means `yPercent: ±100`
  shifts the element by its own height only and leaves it visible in the leftover margin — which
  rendered all five names stacked on top of each other. Assert `maskHeight === contentHeight`.
- **Reduced motion**: no pin, no timeline; the chapter unrolls as five static editorial spreads.
- **Photography**: Unsplash placeholders in the `HOURS` array — swap `image` for the real shoot,
  keep the order and the `light` colour-temperature values.

### F. 100vh GymGallery Pill Tag Removal & Bottom Heading + <p> Quote Paragraph
- **Files**: `src/components/sections/gymGallery/GymGallery.tsx` & `GymGallery.css`
- **Changes**:
  - **Removed Pill Tag**: Completely removed `.active-item-meta-center` (the rounded glass pill tag).
  - **Bottom Active Slide Text Block**: Rendered `.active-slide-text-block` directly above the 5 thumbnail cards, featuring the category headline (`.active-slide-title`) and the quote paragraph (`.active-slide-quote`) right underneath.
  - **Uncluttered 100vh Stage**: Left the center of the 100vh stage completely open for full-bleed media viewing, keeping all typography cleanly anchored above the thumbnail navigation filmstrip.

---

## 7. Guidelines for AI Agents Working on this Repo

1. **Client Components**: Any component utilizing GSAP, Lenis, Swiper, or React state (`useState`, `useRef`, `useEffect`) MUST have `"use client";` at the top of the file.
2. **No Ad-Hoc Utilities**: Prefer global CSS variables and co-located CSS files over inline style objects.
3. **TypeScript Strictness**: Keep interfaces clean; avoid `any` types wherever possible.
4. **GSAP Scope**: Always use `scope: sectionRef` in `useGSAP()` to avoid target selector leaks across components.
5. **Memory Updating**: **ALWAYS update this `agentmemory.md` file after making architectural or design changes.**
