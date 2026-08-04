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
    image:
      "https://i.pinimg.com/1200x/45/46/fc/4546fc5ffd64de80d59c84ab3632ecb4.jpg",
    caption: "EQUIPMENT THAT KEEPS UP.",
  },
  {
    number: "02",
    label: "COACHES WHO NOTICE",
    copy: "You do not need a crowd shouting at you. You need someone who sees your form, knows your goal, and helps you progress.",
    image:
      "https://i.pinimg.com/1200x/29/92/b9/2992b9241d3cb85047584a4072a0fad9.jpg",
    caption: "REAL GUIDANCE. EVERY SESSION.",
  },
  {
    number: "03",
    label: "CONSISTENCY, NOT PRESSURE",
    copy: "No extreme promises. Just a place that makes it easier to return tomorrow, then again the day after that.",
    image:
      "https://i.pinimg.com/1200x/38/48/e8/3848e895c7cf23b599c2d3976c46324f.jpg",
    caption: "THE HABIT IS THE WIN.",
  },
  {
    number: "04",
    label: "BUILT FOR EVERYDAY LIFE",
    copy: "Train for more energy at work, better sleep at night, and the confidence to feel capable in your own body.",
    image:
      "https://i.pinimg.com/736x/67/e2/5c/67e25c07a15665d0f9b4540282d1b21f.jpg",
    caption: "STRONGER OUTSIDE THE GYM, TOO.",
  },
];

export default function FeaturedExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".feature-chapter").forEach((chapter) => {
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: chapter, start: "top 70%", once: true },
        });

        timeline
          .from(chapter.querySelectorAll(".feature-kicker, .feature-copy"), {
            y: 28,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          })
          .from(
            chapter.querySelector(".feature-image-wrap"),
            {
              y: 34,
              opacity: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            "-=0.28",
          );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="featured-experience" id="experience" ref={sectionRef}>
      {EXPERIENCES.map((experience) => (
        <article className="feature-chapter" key={experience.number}>
          <div className="feature-chapter__grid">
            <h2 className="feature-kicker">{experience.label}</h2>
            <div className="feature-main">
              <p className="feature-copy">{experience.copy}</p>
              <figure className="feature-image-wrap">
                <img
                  src={experience.image}
                  alt={experience.label}
                  loading="lazy"
                />
                <figcaption>{experience.caption}</figcaption>
              </figure>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
