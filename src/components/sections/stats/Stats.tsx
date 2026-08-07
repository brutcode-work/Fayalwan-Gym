"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Stats.css";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { target: 10, suffix: "K+", label: "MEMBERS TRAINED" },
  { target: 500, suffix: "+", label: "TRANSFORMATIONS" },
  { target: 15, suffix: "+", label: "EXPERT TRAINERS" },
  { target: 24, suffix: "/7", label: "GYM ACCESS" },
  { target: 120, prefix: "₹", label: "DAY PASS RATE" },
  { target: 5, suffix: "★", label: "CLIENT RATING" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const statElements = section.querySelectorAll<HTMLElement>(".ledger__stat");
      const counterObjects = STATS.map(() => ({ val: 0 }));

      const updateCounterDisplay = (index: number, value: number) => {
        const el = statElements[index]?.querySelector(".ledger__number");
        if (el) {
          el.textContent = Math.floor(value).toString();
        }
      };

      const resetCounters = () => {
        counterObjects.forEach((obj, idx) => {
          obj.val = 0;
          updateCounterDisplay(idx, 0);
        });
      };

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(section);

        function animateCounters() {
          gsap.fromTo(
            q(".ledger__stat"),
            { opacity: 0, y: 25, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.07,
              ease: "power3.out",
              overwrite: "auto",
            }
          );

          STATS.forEach((stat, idx) => {
            counterObjects[idx].val = 0;
            updateCounterDisplay(idx, 0);

            gsap.to(counterObjects[idx], {
              val: stat.target,
              duration: 1.8,
              ease: "power2.out",
              delay: idx * 0.06,
              overwrite: "auto",
              onUpdate: () => {
                updateCounterDisplay(idx, counterObjects[idx].val);
              },
            });
          });
        }

        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          onEnter: () => animateCounters(),
          onEnterBack: () => animateCounters(),
          onLeaveBack: () => resetCounters(),
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section className="ledger" ref={sectionRef} aria-label="Fayalwan Gym in numbers">
      <div className="ledger__container">
        <dl className="ledger__row">
          {STATS.map((stat, idx) => (
            <div className="ledger__stat" key={stat.label}>
              {idx > 0 && <span className="ledger__rule" aria-hidden="true" />}
              <dt className="ledger__mask">
                <span className="ledger__value">
                  {stat.prefix ? <span className="ledger__prefix">{stat.prefix}</span> : null}
                  {/* Render the real figure, not 0: the counter only runs inside the
                      no-preference matchMedia, so reduced-motion users (and the SSR
                      markup before hydration) must already see the final value. */}
                  <span className="ledger__number">{stat.target}</span>
                  {stat.suffix ? <em className="ledger__suffix">{stat.suffix}</em> : null}
                </span>
              </dt>
              <dd className="ledger__mask">
                <span className="ledger__label">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

