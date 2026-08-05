"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ArrowUpRight, BookOpen, Eye, Layers } from "lucide-react";
import "./GymFamily.css";

gsap.registerPlugin(ScrollTrigger);

interface FamilyMember {
  id: string;
  name: string;
  role: string;
  category: "founders" | "coaches" | "community";
  specialty: string;
  quote: string;
  experience: string;
  image: string;
  aspectRatio?: "portrait" | "tall" | "square" | "wide";
}

const FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "01",
    name: "Shamsudheen V.",
    role: "Founder & Head Strength Coach",
    category: "founders",
    specialty: "Biomechanical Strength & Powerlifting",
    quote: "We built Fayalwan to give every athlete in Trivandrum a home for serious training.",
    experience: "12+ YRS EXP",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: "02",
    name: "Dr. Ananya Nair",
    role: "Mobility & Athletic Rehab Lead",
    category: "coaches",
    specialty: "Sports Physiotherapy & Kinetic Chain",
    quote: "Longevity and joint integrity are the foundation of lifetime strength.",
    experience: "8+ YRS EXP",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "tall"
  },
  {
    id: "03",
    name: "Vikram Raj",
    role: "Head Athletic Conditioning",
    category: "coaches",
    specialty: "Hypertrophy & Functional Explosiveness",
    quote: "Intensity without intention is wasted effort. Every set must serve a purpose.",
    experience: "9+ YRS EXP",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "square"
  },
  {
    id: "04",
    name: "Rohan & Priya K.",
    role: "Co-Founders & Community Directors",
    category: "founders",
    specialty: "Culture, Member Experience & Hyrox",
    quote: "Gym culture is defined by the energy of the people inside it every evening.",
    experience: "10+ YRS EXP",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "wide"
  },
  {
    id: "05",
    name: "Arjun Dev",
    role: "Calisthenics & Bodyweight Specialist",
    category: "coaches",
    specialty: "Relative Strength & Gymnastic Ring Control",
    quote: "Mastering your own bodyweight gives you confidence that transfers everywhere.",
    experience: "6+ YRS EXP",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "portrait"
  },
  {
    id: "06",
    name: "Siddharth M.",
    role: "Metabolic Conditioning & Hyrox Lead",
    category: "community",
    specialty: "VO2 Max & Endurance Thresholds",
    quote: "When your lungs burn, your mind grows stronger than the physical fatigue.",
    experience: "7+ YRS EXP",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "square"
  }
];

export default function GymFamily() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeConcept, setActiveConcept] = useState<"concept1" | "concept2" | "concept3">("concept1");
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);

  // Concept 2 Active Index State for Scroll/Fade Showcase
  const [concept2Idx, setConcept2Idx] = useState(0);

  // GSAP Entrance Animations
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.fromTo(
        ".family-editorial-chapter",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%"
          }
        }
      );
    },
    { scope: sectionRef, dependencies: [activeConcept] }
  );

  return (
    <section ref={sectionRef} className="gym-family-section" id="family">
      {/* Subtle Background Glow */}
      <div className="family-bg-glow" />

      {/* Header & Concept Mode Switcher */}
      <div className="family-section-top">
        <div className="family-header-meta">
          <span className="mono-chapter-tag">03 // THE ARCHITECTS</span>
          <span className="meta-divider">•</span>
          <span className="mono-title-tag">THE PEOPLE WHO BUILT THIS PLACE</span>
        </div>

        {/* Minimal Concept Switcher Bar */}
        <div className="concept-switcher-bar">
          <button
            className={`concept-btn ${activeConcept === "concept1" ? "active" : ""}`}
            onClick={() => setActiveConcept("concept1")}
          >
            <BookOpen size={13} />
            <span>CONCEPT 1: EDITORIAL CHAPTER</span>
          </button>
          <button
            className={`concept-btn ${activeConcept === "concept2" ? "active" : ""}`}
            onClick={() => setActiveConcept("concept2")}
          >
            <Eye size={13} />
            <span>CONCEPT 2: LUXURY PORTRAIT</span>
          </button>
          <button
            className={`concept-btn ${activeConcept === "concept3" ? "active" : ""}`}
            onClick={() => setActiveConcept("concept3")}
          >
            <Layers size={13} />
            <span>CONCEPT 3: MINIMAL WALL</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          CONCEPT 1: EDITORIAL CHAPTER (Vertical Pinned Magazine Spreads)
          Vibe: Vogue / Apple / Awwwards editorial spread. Zero UI clutter.
         ========================================================================= */}
      {activeConcept === "concept1" && (
        <div className="concept-container concept-1-editorial">
          {FAMILY_MEMBERS.map((member, index) => (
            <article key={member.id} className="family-editorial-chapter">
              {/* Left Spread: Cinematic Portrait Media */}
              <div className="editorial-media-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="editorial-portrait-img"
                />
                <div className="editorial-media-overlay" />
                <span className="editorial-index-badge">[{member.id}]</span>
                <div className="corner-bracket top-left" />
                <div className="corner-bracket bottom-right" />
              </div>

              {/* Right Spread: Clean Editorial Typography & Breathing Space */}
              <div className="editorial-content-wrapper">
                <div className="editorial-role-row">
                  <span className="editorial-role-tag">{member.role}</span>
                  <span className="editorial-exp-tag">{member.experience}</span>
                </div>

                <h3 className="editorial-name">{member.name}</h3>

                <p className="editorial-specialty">{member.specialty}</p>

                <blockquote className="editorial-quote">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>

                <div className="editorial-footer-note">
                  <span>CHAPTER 03 — {String(index + 1).padStart(2, "0")} / 06</span>
                  <span className="footer-line" />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* =========================================================================
          CONCEPT 2: LUXURY PORTRAIT GALLERY (Cinematic Full-Bleed Showcase)
          Vibe: Leica Exhibition / High Fashion / Full Canvas Takeover.
         ========================================================================= */}
      {activeConcept === "concept2" && (
        <div className="concept-container concept-2-portrait">
          <div className="portrait-hero-stage">
            {/* Background Full-Bleed Imagery with Crossfade */}
            {FAMILY_MEMBERS.map((member, idx) => (
              <div
                key={member.id}
                className={`portrait-bg-layer ${idx === concept2Idx ? "active" : ""}`}
              >
                <img src={member.image} alt={member.name} className="portrait-bg-img" />
                <div className="portrait-bg-gradient" />
              </div>
            ))}

            {/* Left Content Overlay */}
            <div className="portrait-content-overlay">
              <div className="portrait-headline-block">
                <span className="portrait-mono-tag">THE ARCHITECTS OF FAYALWAN</span>
                <h2 className="portrait-giant-title">
                  THE PEOPLE
                  <br />
                  WHO PUSH
                  <br />
                  YOUR LIMITS.
                </h2>
              </div>

              <div className="portrait-active-details">
                <span className="portrait-role-badge">
                  {FAMILY_MEMBERS[concept2Idx].role}
                </span>
                <h3 className="portrait-active-name">
                  {FAMILY_MEMBERS[concept2Idx].name}
                </h3>
                <blockquote className="portrait-active-quote">
                  &ldquo;{FAMILY_MEMBERS[concept2Idx].quote}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Right Invisible Scroll Tracker & Selector Rails */}
            <div className="portrait-rail-selector">
              {FAMILY_MEMBERS.map((member, idx) => (
                <button
                  key={member.id}
                  className={`rail-member-item ${idx === concept2Idx ? "active" : ""}`}
                  onClick={() => setConcept2Idx(idx)}
                >
                  <span className="rail-item-num">[{member.id}]</span>
                  <span className="rail-item-name">{member.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CONCEPT 3: MINIMAL INTERACTIVE WALL (Asymmetric Editorial Grid with Mask Reveals)
          Vibe: Swiss Design / Awwwards Wall with Grayscale-to-Color Mask Reveal.
         ========================================================================= */}
      {activeConcept === "concept3" && (
        <div className="concept-container concept-3-wall">
          <div className="wall-grid">
            {FAMILY_MEMBERS.map((member) => (
              <div
                key={member.id}
                className={`wall-card aspect-${member.aspectRatio || "portrait"}`}
                onClick={() => setSelectedMember(member)}
              >
                <div className="wall-media-wrap">
                  <img src={member.image} alt={member.name} className="wall-img" />
                  <div className="wall-vignette" />
                </div>

                <div className="wall-card-top">
                  <span className="wall-id">[{member.id}]</span>
                  <span className="wall-exp">{member.experience}</span>
                </div>

                <div className="wall-card-bottom">
                  <span className="wall-role">{member.role}</span>
                  <h3 className="wall-name">{member.name}</h3>
                  <div className="wall-hover-icon">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fullscreen Editorial Modal for Concept 3 */}
          {selectedMember && (
            <div className="wall-modal-overlay" onClick={() => setSelectedMember(null)}>
              <div className="wall-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="wall-modal-close" onClick={() => setSelectedMember(null)}>
                  <X size={20} />
                </button>

                <div className="wall-modal-media">
                  <img src={selectedMember.image} alt={selectedMember.name} />
                </div>

                <div className="wall-modal-content">
                  <span className="modal-role-badge">{selectedMember.role}</span>
                  <h2 className="modal-member-name">{selectedMember.name}</h2>
                  <p className="modal-specialty">{selectedMember.specialty}</p>
                  <blockquote className="modal-quote">
                    &ldquo;{selectedMember.quote}&rdquo;
                  </blockquote>
                  <span className="modal-exp-tag">{selectedMember.experience}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
