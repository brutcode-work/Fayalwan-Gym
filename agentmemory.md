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

### E. GymFamily Editorial Gallery Section
- **Files**: `src/components/sections/gymFamily/GymFamily.tsx` & `GymFamily.css`
- **Changes**: Founders & Coaches gallery with asymmetric aspect ratios (`3:4`, `4:5`, `1:1`, `16:8`), category tabs, and GSAP ScrollTrigger entrance animations.

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
