"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeaturedExperience.css";

gsap.registerPlugin(ScrollTrigger);

/* Spaces are emitted as real text nodes, not wrapped in a span, and the character
   spans stay `display: inline`. An inline-block cannot collapse its whitespace
   against adjacent text, so wrapping words in one stacked the space inside the
   span on top of the JSX `{" "}` beside it and inflated the line by ~5%. */
function HighlightText({ text }: { text: string }) {
  return (
    <span className="accent-highlight">
      {Array.from(text).map((char, index) =>
        char === " " ? (
          " "
        ) : (
          <span key={index} className="accent-char">
            {char}
          </span>
        ),
      )}
    </span>
  );
}

const EXPERIENCES = [
  {
    number: "01",
    label: "CERTIFIED TRAINERS",
    copy: (
      <>
        Train under seasoned{" "}
        <HighlightText text="fitness professionals" />{" "}
        <HighlightText text="certified in biomechanics" />, strength
        conditioning, and{" "}
        <HighlightText text="injury prevention" /> to maximize
        your results safely.
      </>
    ),
    image:
      "https://i.pinimg.com/1200x/29/92/b9/2992b9241d3cb85047584a4072a0fad9.jpg",
    caption: "EXPERT KNOWLEDGE. REAL RESULTS.",
  },
  {
    number: "02",
    label: "PERSONALIZED COACHING",
    copy: (
      <>
        Custom workout routines tailored to your body type,{" "}
        <HighlightText text="fitness level" />, and{" "}
        <HighlightText text="personal goals" />—ensuring{" "}
        <HighlightText text="direct progress" /> every single
        week.
      </>
    ),
    image:
      "https://i.pinimg.com/1200x/45/46/fc/4546fc5ffd64de80d59c84ab3632ecb4.jpg",
    caption: "TAILORED STRATEGY. ZERO GUESSWORK.",
  },
  {
    number: "03",
    label: "NUTRITIONIST & GENERAL PHYSICIAN",
    copy: (
      <>
        <HighlightText text="Holistic wellness" /> support
        featuring expert{" "}
        <HighlightText text="nutritional meal planning" /> and
        medical <HighlightText text="health checks" /> to optimize
        your body from the inside out.
      </>
    ),
    image:
      "https://i.pinimg.com/1200x/38/48/e8/3848e895c7cf23b599c2d3976c46324f.jpg",
    caption: "COMPLETE HEALTH & RECOVERY.",
  },
  {
    number: "04",
    label: "FLEXIBLE TIMINGS",
    copy: (
      <>
        Open <HighlightText text="early morning" /> to{" "}
        <HighlightText text="late night" />, fit your workouts
        seamlessly around your busy lifestyle with{" "}
        <HighlightText text="zero scheduling friction" />.
      </>
    ),
    image:
      "https://i.pinimg.com/736x/67/e2/5c/67e25c07a15665d0f9b4540282d1b21f.jpg",
    caption: "TRAIN ON YOUR SCHEDULE.",
  },
];

export default function FeaturedExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.from(".services-section-header", {
        scrollTrigger: {
          trigger: ".services-section-header",
          start: "top 85%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Chapter items animation
      gsap.utils.toArray<HTMLElement>(".feature-chapter").forEach((chapter) => {
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: chapter, start: "top 75%", once: true },
        });

        timeline
          .from(chapter.querySelectorAll(".service-tag, .feature-copy"), {
            y: 24,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          })
          .to(
            chapter.querySelectorAll(".accent-char"),
            {
              color: "#E85D04",
              duration: 0.05,
              stagger: 0.025,
              ease: "power1.inOut",
            },
            "-=0.4"
          )
          .from(
            chapter.querySelector(".feature-image-wrap"),
            {
              y: 30,
              opacity: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            "-=0.4"
          );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="featured-experience" id="experience" ref={sectionRef}>
      <div className="services-container">
        {/* Header with title on left and paragraph on right */}
        <header className="services-section-header">
          <div className="services-header-title-wrap">
            <span className="services-badge">WHAT WE OFFER</span>
            <h2 className="services-main-title">Our Core Services</h2>
          </div>
          <p className="services-main-desc">
            Designed for purpose, guidance, and daily performance. We eliminate the noise so you can focus on building strength that lasts.
          </p>
        </header>

        {/* Services List */}
        <div className="services-list">
          {EXPERIENCES.map((experience) => (
            <article className="feature-chapter" key={experience.number}>
              <div className="feature-chapter__grid">
                {/* Left Column: Tag/Label + Description aligned vertically */}
                <div className="feature-left">
                  <div className="service-tag">
                    <span className="service-tag__number">{experience.number}</span>
                    <span className="service-tag__label">{experience.label}</span>
                  </div>
                  <p className="feature-copy">{experience.copy}</p>
                </div>

                {/* Right Column: Image */}
                <figure className="feature-image-wrap">
                  <img
                    src={experience.image}
                    alt={experience.label}
                    loading="lazy"
                  />
                  <figcaption>{experience.caption}</figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

