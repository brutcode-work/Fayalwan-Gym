"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import "./GymFamily.css";

interface FamilyMember {
  id: string;
  name: string;
  role: string;
  category: "founders" | "coaches" | "community";
  specialty: string;
  quote: string;
  experience: string;
  image: string;
  aspectRatio: "portrait" | "tall" | "square" | "wide";
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
  const [activeTab, setActiveTab] = useState<"all" | "founders" | "coaches" | "community">("all");

  const filteredMembers = FAMILY_MEMBERS.filter(
    (m) => activeTab === "all" || m.category === activeTab
  );

  // GSAP ScrollTrigger stagger entrance
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.fromTo(
        ".gym-family-header > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".family-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".family-grid",
            start: "top 85%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="gym-family-section" id="family">
      <div className="gym-family-container">
        {/* Section Header */}
        <div className="gym-family-header">
          <div className="header-left">
            <span className="family-mono-tag">03 // THE ARCHITECTS OF FAYALWAN</span>
            <h2 className="family-title">
              The Family Who
              <br />
              Built The Sanctuary.
            </h2>
          </div>

          <div className="header-right">
            <p className="family-description">
              Fayalwan was forged by dedicated strength coaches, competitive powerlifters,
              and athletic trainers in Kazhakoottam. We are not corporate managers—we are on
              the gym floor daily, coaching your movement and pushing your limits.
            </p>

            {/* Category Filter Tabs */}
            <div className="family-tabs">
              <button
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")}
              >
                ALL FAMILY
              </button>
              <button
                className={`tab-btn ${activeTab === "founders" ? "active" : ""}`}
                onClick={() => setActiveTab("founders")}
              >
                FOUNDERS
              </button>
              <button
                className={`tab-btn ${activeTab === "coaches" ? "active" : ""}`}
                onClick={() => setActiveTab("coaches")}
              >
                COACHES
              </button>
              <button
                className={`tab-btn ${activeTab === "community" ? "active" : ""}`}
                onClick={() => setActiveTab("community")}
              >
                LEADERSHIP
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetric Awwwards Minimalist Gallery Grid */}
        <div className="family-grid">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className={`family-card aspect-${member.aspectRatio}`}
            >
              <div className="card-media-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  draggable="false"
                />
                <div className="card-gradient-overlay" />
              </div>

              <div className="card-badge-top">
                <span className="member-id">[{member.id}]</span>
                <span className="member-exp">{member.experience}</span>
              </div>

              <div className="card-content-bottom">
                <div className="member-info">
                  <span className="member-role">{member.role}</span>
                  <h3 className="member-name">{member.name}</h3>
                </div>

                <div className="member-hover-details">
                  <p className="member-specialty">{member.specialty}</p>
                  <blockquote className="member-quote">&ldquo;{member.quote}&rdquo;</blockquote>
                </div>

                <div className="card-corner-icon">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
