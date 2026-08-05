"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeaturedExperience.css";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    number: "01",
    label: "THE TRAINING FLOOR",
    copy: "Good training starts with room to focus. The floor is built for the work: clean equipment, smart flow, no distractions.",
    image: "https://i.pinimg.com/1200x/45/46/fc/4546fc5ffd64de80d59c84ab3632ecb4.jpg",
    subImage: "https://i.pinimg.com/1200x/29/92/b9/2992b9241d3cb85047584a4072a0fad9.jpg",
    caption: "EQUIPMENT THAT KEEPS UP.",
    navLinks: ["equipment", "platforms", "benches", "racks", "barbells"],
    titleSerif: "STRENGTH"
  },
  {
    number: "02",
    label: "COACHES WHO NOTICE",
    copy: "You do not need a crowd shouting at you. You need someone who sees your form, knows your goal, and helps you progress.",
    image: "https://i.pinimg.com/1200x/29/92/b9/2992b9241d3cb85047584a4072a0fad9.jpg",
    subImage: "https://i.pinimg.com/1200x/38/48/e8/3848e895c7cf23b599c2d3976c46324f.jpg",
    caption: "REAL GUIDANCE. EVERY SESSION.",
    navLinks: ["philosophy", "roster", "guidance", "hours"],
    titleSerif: "ATTENTION"
  },
  {
    number: "03",
    label: "CONSISTENCY, NOT PRESSURE",
    copy: "No extreme promises. Just a place that makes it easier to return tomorrow, then again the day after that.",
    image: "https://i.pinimg.com/1200x/38/48/e8/3848e895c7cf23b599c2d3976c46324f.jpg",
    subImage: "https://i.pinimg.com/736x/67/e2/5c/67e25c07a15665d0f9b4540282d1b21f.jpg",
    caption: "THE HABIT IS THE WIN.",
    navLinks: ["routine", "habit", "rhythm", "community"],
    titleSerif: "RHYTHM"
  },
  {
    number: "04",
    label: "BUILT FOR EVERYDAY LIFE",
    copy: "Train for more energy at work, better sleep at night, and the confidence to feel capable in your own body.",
    image: "https://i.pinimg.com/736x/67/e2/5c/67e25c07a15665d0f9b4540282d1b21f.jpg",
    subImage: "https://i.pinimg.com/1200x/45/46/fc/4546fc5ffd64de80d59c84ab3632ecb4.jpg",
    caption: "STRONGER OUTSIDE THE GYM, TOO.",
    navLinks: ["vitality", "sleep", "recovery", "longevity"],
    titleSerif: "VITALITY"
  },
];

export default function FeaturedExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-chapter");
      
      // 1. Entrance reveals for each card
      cards.forEach((card) => {
        const infoHeader = card.querySelector(".info-header");
        const infoTitle = card.querySelector(".info-title");
        const infoCopy = card.querySelector(".info-copy");
        const mockupBody = card.querySelector(".mockup-body");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });

        tl.fromTo(
          [infoHeader, infoTitle, infoCopy],
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
        );

        tl.fromTo(
          mockupBody,
          { opacity: 0, scale: 0.96, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
      });

      // 2. Responsive stacking scroll animations
      const mm = gsap.matchMedia();
      mm.add("(min-width: 961px)", () => {
        cards.forEach((card, index) => {
          if (index === cards.length - 1) return; // Last card stays default

          const nextCard = cards[index + 1];
          const overlay = card.querySelector(".card-stack-overlay");

          gsap.to(card, {
            scrollTrigger: {
              trigger: nextCard,
              start: "top 95%",
              end: "top 12%",
              scrub: true,
            },
            scale: 0.94,
            yPercent: -4,
            ease: "none",
          });

          if (overlay) {
            gsap.to(overlay, {
              scrollTrigger: {
                trigger: nextCard,
                start: "top 95%",
                end: "top 12%",
                scrub: true,
              },
              opacity: 0.5,
              ease: "none",
            });
          }
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section className="featured-experience" id="experience" ref={sectionRef}>
      <div className="experience-cards-container" ref={containerRef}>
        {EXPERIENCES.map((experience, index) => {
          const isOdd = index % 2 === 0;

          return (
            <article
              className="feature-chapter"
              key={experience.number}
              style={{ zIndex: (index + 1) * 10 }}
            >
              <div className="card-stack-overlay" />
              <div className="feature-card__split">
                {isOdd ? (
                  <>
                    {/* Left: Info */}
                    <div className="feature-card__info">
                      <div className="info-header">
                        <span className="info-kicker">FAHALWAN GYM CHAPTER</span>
                        <span className="info-number">{experience.number} // 2026</span>
                      </div>
                      <div className="info-content">
                        <h2 className="info-title">{experience.label}</h2>
                        <p className="info-copy">{experience.copy}</p>
                      </div>
                    </div>

                    {/* Right: Mockup */}
                    <div className="feature-card__mockup">
                      <div className="mockup-body">
                        <div className="mockup-image-frame">
                          <img
                            src={experience.image}
                            alt={experience.label}
                            loading="lazy"
                          />
                          <div className="mockup-caption-overlay">
                            {experience.caption}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left: Canvas Overlap Design */}
                    <div className="feature-card__mockup">
                      <div className="mockup-body">
                        <div className="mockup-canvas">
                          <div className="mockup-canvas-bg">
                            <img
                              src={experience.image}
                              alt={experience.label}
                              loading="lazy"
                            />
                          </div>
                          <span className="mockup-serif-overlay">
                            {experience.titleSerif}
                          </span>
                          <div className="mockup-sub-image">
                            <img
                              src={experience.subImage}
                              alt="Detail visual"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Info */}
                    <div className="feature-card__info">
                      <div className="info-header">
                        <span className="info-kicker">FAHALWAN GYM CHAPTER</span>
                        <span className="info-number">{experience.number} // 2026</span>
                      </div>
                      <div className="info-content">
                        <h2 className="info-title">{experience.label}</h2>
                        <p className="info-copy">{experience.copy}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
