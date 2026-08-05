"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Stats.css";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  /** Rendered in the accent. A single glyph — a word here unbalances the row. */
  suffix?: string;
  label: string;
}

/* Both value and label are `white-space: nowrap` inside an overflow-hidden mask,
   so anything too wide for its column is silently sheared. Keep values short. */
const STATS: Stat[] = [
  { value: "10K", suffix: "+", label: "MEMBERS TRAINED" },
  { value: "500", suffix: "+", label: "TRANSFORMATIONS" },
  { value: "15", suffix: "+", label: "EXPERT TRAINERS" },
  { value: "24/7", label: "GYM ACCESS" },
  { value: "₹120", label: "DAY PASS RATE" },
  { value: "5", suffix: "★", label: "CLIENT RATING" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(section);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
          defaults: { ease: "power4.out" },
        });

        tl.fromTo(
          q(".ledger__rule"),
          { scaleY: 0 },
          { scaleY: 1, duration: 0.7, stagger: 0.06, ease: "power2.out" },
          0,
        )
          .fromTo(
            q(".ledger__value"),
            { yPercent: 110 },
            { yPercent: 0, duration: 1, stagger: 0.06 },
            0.05,
          )
          .fromTo(
            q(".ledger__label"),
            { yPercent: 110 },
            { yPercent: 0, duration: 0.9, stagger: 0.06 },
            0.14,
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section className="ledger" ref={sectionRef} aria-label="Fayalwan Gym in numbers">
      <dl className="ledger__row">
        {STATS.map((stat) => (
          <div className="ledger__stat" key={stat.label}>
            <span className="ledger__rule" aria-hidden="true" />
            <dt className="ledger__mask">
              <span className="ledger__value">
                {stat.value}
                {stat.suffix ? <em>{stat.suffix}</em> : null}
              </span>
            </dt>
            <dd className="ledger__mask">
              <span className="ledger__label">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
