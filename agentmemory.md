# Agent Memory - Fayalwan Gym

## 1. Executive Summary & Project Mission
**Fayalwan Gym** is a high-performance fitness sanctuary located in Kazhakoottam, Trivandrum, Kerala.
- **Brand Slogan**: *"Turn Physical Limits Into Strength That Endures"*
- **Core Value Proposition**: Elite strength training, athletic conditioning, and personalized coaching accessible at ₹120/day.
- **Repository Location**: `c:\Users\sathl\OneDrive\Desktop\CLIENT-WORK\Fayalwan-Gym`
- **Active Git Branch**: `viv`

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
│   │   │   ├── Navbar/        # Navigation header
│   │   │   └── Footer/        # Footer section
│   │   ├── providers/         # Global React context providers
│   │   │   └── SmoothScrollProvider.tsx # Lenis + GSAP ScrollTrigger sync
│   │   ├── sections/          # Homepage landing sections
│   │   │   ├── hero/                  # Full-bleed hero banner & headliners
│   │   │   ├── introduction/          # Brand intro & core philosophy
│   │   │   ├── featuredExperience/    # Interactive features & GSAP animations
│   │   │   ├── signaturePrograms/     # Program showcases with Swiper
│   │   │   ├── menifesto/             # Gym manifesto & core values
│   │   │   ├── story/                 # Brand origin story
│   │   │   ├── transformationStories/ # Client transformation showcases
│   │   │   ├── storiesThatInspires/   # Inspiration feature cards
│   │   │   ├── customerReview/        # Testimonials & reviews
│   │   │   ├── faq/                   # FAQ accordion
│   │   │   ├── contact/               # Contact & location details
│   │   │   └── about/                 # About section
│   │   └── ui/                # Reusable micro UI components (buttons, badges)
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
- **Typography**: Monospace taglines paired with high-impact serif/sans headers.
- **Styling file pattern**: Each section folder contains its own TSX component and co-located CSS file (e.g., `Hero.tsx` + `Hero.css`).

---

## 5. Development & Build Commands

- **Development Server**: `npm run dev`
- **Production Build**: `npm run build`
- **Start Production Server**: `npm run start`
- **Linting**: `npm run lint`

---

## 6. Recent Work & Commit Milestones (Branch `viv`)

1. **`9994701`**: Global styles & layout components for Introduction, FeaturedExperience, and SignaturePrograms.
2. **`963a790`**: SignaturePrograms implementation with Swiper integration.
3. **`61600ef`**: FeaturedExperience section with GSAP-powered scroll animations.
4. **`c759f58`**: Introduction section responsive layout with GSAP scroll animations.

---

## 7. Guidelines for AI Agents Working on this Repo

1. **Client Components**: Any component utilizing GSAP, Lenis, Swiper, or React state (`useState`, `useRef`, `useEffect`) MUST have `"use client";` at the top of the file.
2. **No Ad-Hoc Utilities**: Prefer global CSS variables and co-located CSS files over inline style objects.
3. **TypeScript Strictness**: Keep interfaces clean; avoid `any` types wherever possible.
4. **GSAP Scope**: Always use `scope: sectionRef` in `useGSAP()` to avoid target selector leaks across components.
