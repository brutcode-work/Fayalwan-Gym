"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Award, Target } from "lucide-react";
import "./CoachesSection.css";
import SectionHeader from "@/components/layout/Headers/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export interface Coach {
  id: string;
  number: string;
  name: string;
  role: string;
  tenure: string;
  certifications: string[];
  specialties: string[];
  quote: string;
  image: string;
}

export const COACHES: Coach[] = [
  {
    id: "alex-varghese",
    number: "01",
    name: "Alex Varghese",
    role: "Founder & Head Strength Coach",
    tenure: "12+ Yrs",
    certifications: [
      "NSCA - CSCS",
      "ISSA Master Trainer",
      "Precision Nutrition L2",
      "FMS Level 2",
    ],
    specialties: [
      "Biomechanics & Hypertrophy",
      "Powerlifting Peak Prep",
      "Postural Realignment",
      "Athlete Conditioning",
    ],
    quote:
      "Form dictates function. Lift with scientific intent, not just raw momentum.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "priya-menon",
    number: "02",
    name: "Priya Menon",
    role: "Senior Athletic & Performance Coach",
    tenure: "8+ Yrs",
    certifications: [
      "ACE Certified Master Trainer",
      "EXOS Performance Specialist",
      "CrossFit Level 2",
    ],
    specialties: [
      "Athletic Conditioning",
      "Fat Loss & Metabolism",
      "Functional Agility",
      "Mobility Protocols",
    ],
    quote:
      "Strength isn't built in a single sprint; it's forged through daily unyielding discipline.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "rahul-nair",
    number: "03",
    name: "Rahul Nair",
    role: "Body Recomposition Specialist",
    tenure: "10+ Yrs",
    certifications: [
      "REPs Level 3 Certified",
      "K11 Master Trainer",
      "PN1 Nutrition Specialist",
    ],
    specialties: [
      "Hypertrophy Programming",
      "Body Recomposition",
      "Nutritional Periodization",
      "Contest & Shred Peak",
    ],
    quote:
      "We measure real progress in centimeters, confidence, and lifelong physical endurance.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "ananya-sharma",
    number: "04",
    name: "Dr. Ananya Sharma",
    role: "Sports Physiotherapist & Recovery Lead",
    tenure: "7+ Yrs",
    certifications: [
      "B.P.T Sports Physiotherapy",
      "Dry Needling Certified",
      "SFMA Specialist",
    ],
    specialties: [
      "Injury Rehabilitation",
      "Joint Mechanics & Mobility",
      "Movement Optimization",
      "Return-to-Play Training",
    ],
    quote:
      "Rebuild your joint mechanics before pushing peak load. Pain-free power always comes first.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function CoachesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const wrapper = wrapperRef.current;
      if (!section || !wrapper) return;

      const cards = gsap.utils.toArray<HTMLElement>(".coach-card");
      if (cards.length === 0) return;

      // Reduced motion: no pin, no slide — CSS drops the cards into a plain
      // readable column.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        section.dataset.static = "true";
        return;
      }

      // Card 1 (index 0) is the base: it belongs to the section and is
      // deliberately never set or moved. Later cards only get a z-index so they
      // layer over it in order — no initial transform is set outside the
      // timeline, so the scrub owns their position entirely.
      cards.forEach((card, i) => gsap.set(card, { zIndex: i }));

      const timeline = gsap.timeline({
        defaults: { ease: "none", duration: 1, force3D: true },
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: `+=${(cards.length - 1) * 100}%`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // Promote the moving cards to their own GPU layer only while the
          // stack is actually on screen, then release it — scrolling elsewhere
          // on the page then pays nothing for this section.
          onToggle: (self) =>
            wrapper.classList.toggle("is-live", self.isActive),
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        // Each card starts fully below the frame and translates up to cover the
        // one before it — translation only, no opacity, no scale. 115% clears
        // the card's bottom inset at any viewport, so a waiting card stays
        // entirely under the wrapper's clip until its segment lifts it to 0.
        timeline.fromTo(card, { yPercent: 115 }, { yPercent: 0 }, i - 1);
      });

      gsap.from(".coaches-section-header", {
        scrollTrigger: { trigger: section, start: "top 78%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="coaches-section" id="coaches" ref={sectionRef}>
      {/* Part one — the chapter title */}
      <div className="coaches-header-part">
        <SectionHeader
          label="06 // EXPERT COACHING"
          headTop="People Buy Coaches."
          headBottom="Not Gyms."
          description="Machines don't correct your posture. Dumbbells don't fix your nutrition. Four people do — and you work with all of them."
          sectionName="coaches"
        />
      </div>

      {/* Part two — pinned; the cards stack over one another */}
      <div className="coach-wrapper" ref={wrapperRef}>
        {COACHES.map((coach, index) => (
          <article
            key={coach.id}
            className="coach-card"
            data-tone={index % 2 === 0 ? "dark" : "accent"}
            data-flip={index % 2 === 1 ? "true" : undefined}
          >
            {/* The layer fills the pinned frame and carries the GSAP translate;
                the inner is the visible card, sized to its own content and
                centred below the navbar. */}
            <div className="coach-card-inner">
              <div className="coach-card-media">
                <img
                  src={coach.image}
                  alt={coach.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="coach-card-body">
                <span className="coach-card-eyebrow">
                  <span className="eyebrow-num">{coach.number}</span>
                  {coach.role}
                </span>

                <h3 className="coach-card-name">{coach.name}</h3>

                <p className="coach-card-quote">“{coach.quote}”</p>

                <ul className="coach-card-stats">
                  <li>
                    <span className="stat-icon">
                      <Clock size={16} strokeWidth={2} />
                    </span>
                    <span className="stat-text">
                      <strong>{coach.tenure}</strong>
                      <em>Experience</em>
                    </span>
                  </li>
                  <li>
                    <span className="stat-icon">
                      <Award size={16} strokeWidth={2} />
                    </span>
                    <span className="stat-text">
                      <strong>{coach.certifications.length}</strong>
                      <em>Certifications</em>
                    </span>
                  </li>
                  <li>
                    <span className="stat-icon">
                      <Target size={16} strokeWidth={2} />
                    </span>
                    <span className="stat-text">
                      <strong>{coach.specialties.length}</strong>
                      <em>Specialisms</em>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
