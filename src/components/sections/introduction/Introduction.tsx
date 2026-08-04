"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Introduction.css";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".investment-intro",
          start: "top 68%",
          once: true,
        },
      });

      timeline
        .from(".intro-kicker, .intro-title", {
          y: 46,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
        })
        .from(
          ".spend-line",
          {
            y: 62,
            opacity: 0,
            scale: 0.97,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".intro-statement, .intro-closing, .price-stamp",
          {
            y: 32,
            opacity: 0,
            duration: 0.8,
            stagger: 0.16,
            ease: "power3.out",
          },
          "-=0.28"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section className="investment-intro" id="introduction" ref={sectionRef}>
      <div className="investment-intro__inner">
        <header className="intro-header">
          <p className="intro-kicker"><span>01</span> THE ₹150 QUESTION</p>
          <h2 className="intro-title">
            Don&apos;t cut the<br />
            <em>good stuff.</em>
          </h2>
        </header>

        <div className="spend-lines" aria-label="The difference a daily 150 rupee investment can make">
          <div className="spend-line">
            <span className="spend-line__number">01</span>
            <p>Coffee, snacks, a quick add-on.</p>
            <span className="spend-line__note">a normal day</span>
          </div>
          <div className="spend-line">
            <span className="spend-line__number">02</span>
            <p>Add one hour for your body.</p>
            <span className="spend-line__note spend-line__note--accent">a better habit</span>
          </div>
        </div>

        <div className="intro-conclusion">
          <p className="intro-statement">
            Keep the coffee. Keep the weekends.<br />
            <strong>Add movement.</strong>
          </p>
          <div className="intro-closing">
            <span>FAYALWAN GYM · DAILY ACCESS</span>
            <strong>MOVE MORE.<br />LIVE BETTER.</strong>
          </div>
        </div>
      </div>
      <div className="price-stamp" aria-label="Only 150 rupees per day">
        <span>YOUR DAILY INVESTMENT</span>
        <strong>₹150<small>/DAY</small></strong>
      </div>
    </section>
  );
}
