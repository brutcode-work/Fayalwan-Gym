"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GymFamily.css";

gsap.registerPlugin(ScrollTrigger);

const PEOPLE = [
  ["SHAMSUDHEEN", "Makes starting feel possible."],
  ["ANANYA", "Protects the work that lasts."],
  ["VIKRAM", "Gives effort a direction."],
  ["ROHAN + PRIYA", "Makes room for belonging."],
];

export default function GymFamily() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;
    const q = gsap.utils.selector(section);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=390%",
        pin: true,
        scrub: 0.85,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .fromTo(q(".family-question__line"), { yPercent: 115 }, { yPercent: 0, duration: 0.13, stagger: 0.06, ease: "power3.out" })
      .fromTo(q(".family-question__note"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.08 }, 0.18)
      .to(q(".family-question"), { autoAlpha: 0, yPercent: -10, duration: 0.11 }, 0.31)
      .fromTo(q(".family-word"), { autoAlpha: 0, yPercent: 16 }, { autoAlpha: 1, yPercent: 0, duration: 0.1, stagger: 0.05, ease: "power2.out" }, 0.36)
      .to(q(".family-word--notice"), { xPercent: 13, duration: 0.17, ease: "none" }, 0.45)
      .to(q(".family-word--return"), { xPercent: -10, duration: 0.17, ease: "none" }, 0.45)
      .fromTo(q(".family-definition"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.1, ease: "power2.out" }, 0.54)
      .to(q(".family-words"), { autoAlpha: 0, scale: 1.03, duration: 0.1 }, 0.67)
      .to(q(".family-definition"), { autoAlpha: 0, duration: 0.06 }, 0.67)
      .fromTo(q(".family-roster__intro"), { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: 0.08 }, 0.7)
      .fromTo(q(".family-person"), { autoAlpha: 0, xPercent: -8 }, { autoAlpha: 1, xPercent: 0, duration: 0.08, stagger: 0.055, ease: "power2.out" }, 0.72)
      .to(q(".family-roster"), { autoAlpha: 0, yPercent: -8, duration: 0.09 }, 0.88)
      .fromTo(q(".family-reveal"), { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" }, { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: 0.14, ease: "power2.inOut" }, 0.86)
      .fromTo(q(".family-reveal__caption"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.94);
  }, { scope: sectionRef });

  return (
    <section className="gym-family" id="family" ref={sectionRef} aria-label="The people who make Fayalwan feel like home">
      <div className="family-stage">
        <p className="family-index">05 / CULTURE IS A VERB</p>

        <div className="family-question" aria-hidden="true">
          <div className="family-question__line"><span>WHO MAKES</span></div>
          <div className="family-question__line family-question__line--indent"><span>A ROOM FEEL</span></div>
          <div className="family-question__line"><span>LIKE YOURS?</span></div>
          <p className="family-question__note">IT IS NEVER THE EQUIPMENT.</p>
        </div>

        <div className="family-words" aria-hidden="true">
          <p className="family-word family-word--notice">NOTICE.</p>
          <p className="family-word family-word--stay">STAY.</p>
          <p className="family-word family-word--return">RETURN.</p>
        </div>

        <p className="family-definition">The people here do not sell motivation.<br />They make returning feel natural.</p>

        <div className="family-roster">
          <p className="family-roster__intro">THE PEOPLE BEHIND THE FEELING</p>
          <div className="family-roster__list">
            {PEOPLE.map(([name, line], index) => (
              <div className="family-person" key={name}>
                <span className="family-person__number">0{index + 1}</span>
                <p className="family-person__name">{name}</p>
                <p className="family-person__line">{line}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="family-reveal">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=2200&auto=format&fit=crop" alt="People moving together on the Fayalwan Gym training floor" />
          <figcaption className="family-reveal__caption">A GYM IS EQUIPMENT. <strong>A CULTURE IS PEOPLE.</strong></figcaption>
        </figure>
      </div>
    </section>
  );
}
