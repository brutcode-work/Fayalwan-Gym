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
│   │   │   ├── Navbar/        # Navigation header & mobile overlay
│   │   │   └── Footer/        # Footer section
│   │   ├── providers/         # Global React context providers
│   │   │   └── SmoothScrollProvider.tsx # Lenis + GSAP ScrollTrigger sync
│   │   ├── sections/          # Homepage landing sections
│   │   │   ├── hero/                  # Full-bleed hero banner, preloader & gallery
│   │   │   ├── introduction/          # Bento Grid section & core philosophy
│   │   │   ├── featuredExperience/    # Interactive features & GSAP animations
│   │   │   ├── signaturePrograms/     # Program showcases with Swiper & custom cursor
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
- **GSAP in React 19**: Always use `useGSAP` from `@gsap/react` scoped to a `sectionRef` container for proper cleanup during renders:
  ```tsx
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    // GSAP timelines & triggers
  }, { scope: sectionRef });
  ```

### B. Component Composition in Homepage (`page.tsx`)
- Active core sections mounted in order:
  1. `<Navbar />`
  2. `<Hero />`
  3. `<Introduction />`
  4. `<FeaturedExperience />`
  5. `<SignaturePrograms />`
  6. `<Menifesto />`
- Modular design: Additional sections (`Story`, `TransformationStories`, `CustomerReview`, `Faq`, `Contact`, `Footer`) are ready in `src/components/sections/` and can be enabled/un-commented as required.

### C. Styling Rules & Aesthetics
- **Theme**: Dark mode, sleek editorial high-contrast aesthetic.
- **Spacing**: Standardized container padding (e.g. `5rem` horizontal padding).
- **Typography**: Minimal, neutral weights (`font-weight: 400`/`500`), monospace taglines paired with high-impact editorial headers.
- **Styling file pattern**: Each section folder contains its own TSX component and co-located CSS file (e.g., `Hero.tsx` + `Hero.css`).

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
- **Changes**:
  - Rebuilt section as a 12-column responsive Bento Grid layout.
  - Custom scoped design tokens (`--ink`, `--paper`, `--ember`, `Bricolage Grotesque`, `JetBrains Mono`).
  - Integrated GSAP ScrollTrigger `.in-view` reveals for cards (`b-photo`, `b-people`, `b-quote`, `b-price`, `b-note`).
  - Styled Card 5 heading ("The TechnoPark *routine*") with off-white text and brand orange `em` accent.
  - Linked CTA buttons to smooth scroll targets (`#contact`).

### B. Signature Programs Custom Swipe Cursor
- **Files**: `src/components/sections/signaturePrograms/SignaturePrograms.tsx` & `SignaturePrograms.css`
- **Changes**:
  - Added a custom floating "SWIPE" cursor powered by `gsap.quickTo` tracking coordinates.
  - Used native CSS `:hover` and `:active` selectors on `.swiper-wrapper-container` to show/hide/scale the cursor (zero React render overhead during drag).
  - Added `draggable="false"` and `user-select: none` to prevent native browser image drag artifacts.

### C. Hero Section Preloader & Infinite Swiper Gallery
- **Files**: `src/components/sections/hero/Hero.tsx` & `Hero.css`
- **Changes**:
  - **Cinematic Preloader Timeline**: 9 media cards scatter randomly across the screen on load with random scale/rotation while a progress counter increments `0%` -> `90%`.
  - **Kinetic Alignment**: At `90%`, cards align horizontally at the bottom of the screen. At `100%`, they slide up to the target hero banner position.
  - **Awwwards Masked Reveals**: Text lines use `.hero-text-mask` (`overflow: hidden`) for smooth line slide-ups (`yPercent: 115` to `0`), and navbar slides down from top.
  - **Strict Cursor Lifecycle Gating**: Custom cursor is gated via `.hero-section.is-loaded` added inside GSAP's `onComplete` callback.
  - **Swiper Gallery**: Renders 9 mixed image/video Pinterest assets (`.mp4` auto-playing muted videos) in a 1:1 aspect ratio edge-to-edge Swiper (`loop={true}`, `slidesPerView="auto"`).
  - **Height Locking**: Preserved exact desktop container height (`240px`) and mobile height (`170px`).

### D. Navbar Glassmorphism & Minimal Typography
- **Files**: `src/components/layout/Navbar/Navbar.css`
- **Changes**:
  - Converted navbar to a dark black glass design (`background: rgba(5, 5, 5, 0.75)`, `backdrop-filter: blur(16px) saturate(180%)`, translucent bottom border `rgba(255, 255, 255, 0.08)`).
  - Refined typography from bold (`700`/`600`) to clean, minimal neutral weights (`font-weight: 400`/`500`) and muted off-white link tones (`rgba(255, 255, 255, 0.65)`).
  - Contact Us button updated to a minimal glass pill button (`border-radius: 999px`).

---

## 7. Guidelines for AI Agents Working on this Repo

1. **Client Components**: Any component utilizing GSAP, Lenis, Swiper, or React state (`useState`, `useRef`, `useEffect`) MUST have `"use client";` at the top of the file.
2. **No Ad-Hoc Utilities**: Prefer global CSS variables and co-located CSS files over inline style objects.
3. **TypeScript Strictness**: Keep interfaces clean; avoid `any` types wherever possible.
4. **GSAP Scope**: Always use `scope: sectionRef` in `useGSAP()` to avoid target selector leaks across components.
5. **Memory Updating**: **ALWAYS update this `agentmemory.md` file after making architectural or design changes.**
