"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GymFamily.css";

gsap.registerPlugin(ScrollTrigger);

interface Hour {
  time: string;
  name: string;
  line: string;
  /** Colour temperature of the room at this hour. Sits over the plate only. */
  light: string;
  image: string;
  alt: string;
}

/* Photography is placeholder — swap `image` for the shoot, keep the order. */
const HOURS: Hour[] = [
  {
    time: "05:12",
    name: "SHAMSUDHEEN",
    line: "He opens the shutter before the road outside has any traffic on it.",
    light: "rgba(22, 41, 78, 0.44)",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=85&w=1400&auto=format&fit=crop",
    alt: "A single figure setting up the training floor before sunrise",
  },
  {
    time: "07:40",
    name: "ANANYA",
    line: "She fixes the rep you were sure nobody was watching.",
    light: "rgba(126, 156, 184, 0.16)",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=85&w=1400&auto=format&fit=crop",
    alt: "A coach correcting form during an early morning session",
  },
  {
    time: "13:05",
    name: "VIKRAM",
    line: "He turns loose effort into a plan, so the work adds up to something.",
    light: "rgba(255, 248, 232, 0.07)",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=1400&auto=format&fit=crop",
    alt: "Midday training on the main floor",
  },
  {
    time: "19:20",
    name: "ROHAN + PRIYA",
    line: "They train beside you until showing up stops feeling like a decision.",
    light: "rgba(196, 92, 24, 0.24)",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=85&w=1400&auto=format&fit=crop",
    alt: "Two members training together in the evening",
  },
  {
    time: "21:48",
    name: "NO ONE",
    line: "The room goes quiet. At 05:12 it fills again.",
    light: "rgba(9, 15, 38, 0.58)",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=85&w=1400&auto=format&fit=crop",
    alt: "The empty training floor after closing",
  },
];

const HOLD = 1;
const FADE = 0.42;
const TOTAL = HOURS.length * (HOLD + FADE) - FADE;

export default function GymFamily() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(section);
        const times = q(".room__time");
        const names = q(".room__name");
        const lines = q(".room__line");
        const frames = q(".room__frame");
        const plates = q(".room__plate");

        // Hour 01 is already composed on screen when the pin engages.
        gsap.set(times.slice(1), { yPercent: 100 });
        gsap.set(names.slice(1), { yPercent: 100 });
        gsap.set(lines.slice(1), { autoAlpha: 0, y: 14 });
        gsap.set(frames.slice(1), { autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=440%",
            pin: true,
            scrub: 0.9,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // The day, drawn as one continuous hairline.
        tl.fromTo(
          q(".room__elapsed"),
          { scaleX: 0 },
          { scaleX: 1, duration: TOTAL, ease: "none" },
          0,
        );

        // Only the picture inside the window drifts. The window never moves.
        tl.fromTo(
          plates[0],
          { scale: 1.06 },
          { scale: 1, duration: HOLD + FADE, ease: "none" },
          0,
        );

        for (let i = 1; i < HOURS.length; i += 1) {
          const at = i * (HOLD + FADE) - FADE;

          tl.to(
            times[i - 1],
            { yPercent: -100, duration: FADE, ease: "power3.inOut" },
            at,
          )
            .to(
              names[i - 1],
              { yPercent: -100, duration: FADE, ease: "power3.inOut" },
              at + 0.05,
            )
            .to(
              lines[i - 1],
              { autoAlpha: 0, y: -14, duration: FADE * 0.6, ease: "power2.in" },
              at,
            )
            .to(
              frames[i - 1],
              { autoAlpha: 0, duration: FADE, ease: "power2.inOut" },
              at,
            )
            .to(
              times[i],
              { yPercent: 0, duration: FADE, ease: "power3.inOut" },
              at,
            )
            .to(
              names[i],
              { yPercent: 0, duration: FADE, ease: "power3.inOut" },
              at + 0.05,
            )
            .to(
              lines[i],
              {
                autoAlpha: 1,
                y: 0,
                duration: FADE * 0.8,
                ease: "power2.out",
              },
              at + FADE * 0.5,
            )
            .to(
              frames[i],
              { autoAlpha: 1, duration: FADE, ease: "power2.inOut" },
              at,
            )
            .fromTo(
              plates[i],
              { scale: 1.06 },
              { scale: 1, duration: HOLD + FADE, ease: "none" },
              at,
            );
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="room"
      id="family"
      ref={sectionRef}
      aria-label="One room, all day — the people of Fayalwan Gym"
    >
      <div className="room__stage">
        <header className="room__head">
          <p className="room__kicker">
            <span>05</span> ONE ROOM, ALL DAY
          </p>
          <p className="room__thesis">
            A gym is a room with equipment in it. Everything else you feel here
            is the people.
          </p>
        </header>

        <div className="room__body">
          {HOURS.map((hour) => (
            <article className="room__hour" key={hour.time}>
              <div className="room__col">
                <span className="room__mask">
                  <time className="room__time">{hour.time}</time>
                </span>
                <span className="room__mask">
                  <span className="room__name">{hour.name}</span>
                </span>
                <p className="room__line">{hour.line}</p>
              </div>

              <figure className="room__frame">
                <img
                  className="room__plate"
                  src={hour.image}
                  alt={hour.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <span
                  className="room__daylight"
                  style={{ backgroundColor: hour.light }}
                  aria-hidden="true"
                />
              </figure>
            </article>
          ))}
        </div>

        <footer className="room__day" aria-hidden="true">
          <span>05:00</span>
          <span className="room__track">
            <span className="room__elapsed" />
          </span>
          <span>22:00</span>
        </footer>
      </div>
    </section>
  );
}
