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
  3. `<Stats />`
  4. `<Introduction />`
  5. `<FeaturedExperience />`
  6. `<GymEquipement />`
  7. `<GymServices />`
  8. `<CoachesSection />`
  9. `<TransformationStories />`
  10. `<PricingSection />`
  11. `<Menifesto />`

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

### A. Navbar Solid Black Background
- **Files**: `src/components/layout/Navbar/Navbar.css`
- **Changes**: Set `.navbar-container` and `.mobile-menu-overlay` background to solid black (`background: #000000 !important; background-color: #000000 !important;`).

### K. 06 // Coaches — Minimal & Awwwards Editorial Section
- **Files**: `src/components/sections/coaches/CoachesSection.tsx` & `CoachesSection.css` (mounted directly after `<GymServices />` in `src/app/page.tsx`).
- **Headline / Concept**: "People buy coaches. Not gyms." — minimalist editorial layout featuring high-contrast typography, monospace section numbering (`06 // EXPERT COACHING`), and a glassmorphic manifesto banner ribbon.
- **Coach Profiles**: Detailed profiles for 4 specialists (Alex Varghese, Priya Menon, Rahul Nair, Dr. Ananya Sharma), featuring:
  - Experience (e.g. `12+ Years High-Performance Coaching`)
  - Certifications (glassmorphic pills, e.g. `NSCA - CSCS`, `ISSA Master Trainer`, `Precision Nutrition L2`)
  - Specialties (bullet list with vector SVG arrows, e.g. `Biomechanics & Hypertrophy`, `Powerlifting Peak Prep`)
  - Pull quotes & portrait imagery with hover zoom & scale transitions.
- **GSAP Animations**: Header rise reveal, manifesto banner slide, and staggered card entrance animations with reduced-motion support.

### L. 07 // Transformation Stories — Single Section 3-Story Gallery Architecture
- **Files**: `src/components/sections/transformationStories/TransformationStories.tsx` & `TransformationStories.css`.
- **Architecture**:
  - **Single Compact Section**: Built as ONE clean landing section (`.mg-single-transformation-section`), removing multi-panel horizontal scroll pinning.
  - **SectionHeader Outside Map**: `<SectionHeader sectionName="transformation" label="07 // PROVEN EVOLUTION" headTop="TRANSFORMATION STORIES." headBottom="REAL MEMBERS. UNDENIABLE RESULTS." description="..." />` mounted ONCE at the top.
  - **3-Story Gallery Grid**: Side-by-side 3-column grid displaying the 3 featured member stories (`Devika Nair`, `Karan Malhotra`, `Rohan Sharma`):
    - High-impact portrait imagery (`aspect-ratio: 4 / 4.5`).
    - Interactive hover video badge (`WATCH STORY`) triggering the 4K video documentary lightbox modal.
    - Clean metadata footer below each image (Member Name, Net Fat Drop, Duration, Program, and Focus Story Snippet).
- **Strict Borderless Rule**: `border: none !important` across all cards, containers, images, and buttons.

### M. 08 // Pricing Section — Minimal Awwwards Editorial Architecture
- **Files**: `src/components/sections/pricing/PricingSection.tsx` & `PricingSection.css`.
- **Refactored Minimal Pricing Card Architecture**:
  - **Header Configuration**: Removed custom `font-size` CSS override (`clamp(2rem, 3.2vw, 3.4rem)`) so the heading inherits the exact standard site-wide `SectionHeader` font size (`clamp(3rem, 5vw, 5rem)`). Label set to `"ACCESSIBLE PRICING"`, top line set to 3 words (`headTop="Transparent Athletic Tiering."`), bottom line set to 2 words (`headBottom="World-Class Access."`).
  - **Background Colors & Pure Accent Hover**: Section background mapped to `var(--bg-secondary)` (`#0a0a09`), and all 4 cards mapped uniformly to `var(--bg-color)` (`black`).
  - **Pure Accent Hover State**: On hover (`.pricing-card:hover`), cards transition to pure accent background (`var(--svg-path)` / `#e85d04` with no opacity/dark mixing and no scale/lift transform), and text/checkmarks/CTA automatically invert to high-contrast `#000000` text for maximum editorial impact.
  - **Exact Refined Content**:
    - **CARD 01**: `01  DAILY ACCESS` | `₹120 / day` | `Drop in. Train hard. No commitment.` | 3 features (`Full gym access`, `Olympic & strength equipment`, `Locker & shower`) | `GET DAY PASS  →`.
    - **CARD 02**: `02  MONTHLY ATHLETE` | `₹1,999 / month` | `Consistent progress. Built for regular training.` | 3 features (`Unlimited gym floor access`, `Biweekly InBody 770 scan`, `Locker & recovery zone`) | `START MONTHLY  →`.
    - **CARD 03**: `03  QUARTERLY RECOMP` | `₹4,999 / 3 months` | `A structured path toward measurable change.` | 3 features (`3 months unlimited access`, `3 InBody 770 scans`, `Custom workout blueprint`) | `JOIN PROGRAM  →`.
    - **CARD 04**: `04  ANNUAL SANCTUARY` | `₹14,999 / year` | `Maximum value for long-term commitment.` | 3 features (`12 months unlimited access`, `Monthly InBody 770 scans`, `Dedicated coach reviews`) | `CLAIM ANNUAL PASS  →`.
  - **Visual Alignment**: 4-column desktop layout with equal height cards (`display: flex; flex-direction: column; justify-content: space-between;`), anchored bottom CTA with `border-top` divider.
- **Strict Borderless Rule**: `border: none !important` across all cards, containers, and buttons.

---

## 7. Guidelines for AI Agents Working on this Repo

1. **Client Components**: Any component utilizing GSAP, Lenis, Swiper, or React state (`useState`, `useRef`, `useEffect`) MUST have `"use client";` at the top of the file.
2. **No Ad-Hoc Utilities**: Prefer global CSS variables and co-located CSS files over inline style objects.
3. **TypeScript Strictness**: Keep interfaces clean; avoid `any` types wherever possible.
4. **GSAP Scope**: Always use `scope: sectionRef` in `useGSAP()` to avoid target selector leaks across components.
5. **Memory Updating**: **ALWAYS update this `agentmemory.md` file after making architectural or design changes.** CSS variables and co-located CSS files over inline style objects.
3. **TypeScript Strictness**: Keep interfaces clean; avoid `any` types wherever possible.
4. **GSAP Scope**: Always use `scope: sectionRef` in `useGSAP()` to avoid target selector leaks across components.
5. **Memory Updating**: **ALWAYS update this `agentmemory.md` file after making architectural or design changes.**
