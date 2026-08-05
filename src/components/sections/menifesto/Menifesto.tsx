"use client";

import { useRef } from "react";
import "./Menifesto.css";
import "./Overlap.css";
import SvgPath from "./SvgPath";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Menifesto() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const target = pathRef.current;
      if (!target) return;

      const path =
        target.tagName === "path" ? target : target.querySelector("path");
      if (!path) return;

      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 85%",
          scrub: 1,
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(".manifesto-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const visuals = gsap.utils.toArray<HTMLElement>(".independent-visual");
      visuals.forEach((visual) => {
        gsap.fromTo(
          visual,
          { opacity: 0, scale: 0.85, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: visual,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const overlapTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".row-3",
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      overlapTl.fromTo(
        ".overlap-container",
        { yPercent: 100 },
        { yPercent: 0, ease: "none", duration: 1 }
      );

      overlapTl.fromTo(
        ".split-word",
        { opacity: 0, y: 40, rotateX: -35 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.08,
          ease: "power2.out",
          duration: 0.8,
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section className="menifesto" ref={containerRef} id="manifesto">
      <div className="row row-1">
        <div className="independent-visual visual-left">
          <img
            src="/svg-1.png"
            alt="Phase 01 Visual"
            className="raw-story-img"
          />
        </div>

        <div className="manifesto-card card-right">
          <span className="editorial-phase-num">01 // PHASE ONE</span>
          <h3 className="editorial-title">START THE GYM</h3>
          <p className="editorial-desc">
            Every fitness revolution begins with a single step. You decided to
            stop wishing, stepped onto the gym floor, and unlocked your hidden
            potential.
          </p>

          <div className="editorial-meta-row">
            <span className="editorial-meta-item">
              [ DAY 01 // FIRST WORKOUT ]
            </span>
            <span className="editorial-meta-tag">DISCIPLINE ENGINE</span>
          </div>
        </div>
      </div>

      <div className="row row-2">
        <div className="manifesto-card card-left">
          <span className="editorial-phase-num accent">02 // PHASE TWO</span>
          <h3 className="editorial-title">21-DAY STREAK</h3>
          <p className="editorial-desc">
            Science proves it takes 21 days to build a permanent habit. Push
            through muscle soreness, stay relentless, and forge an unbreakable
            routine.
          </p>

          <div className="editorial-meta-row">
            <span className="editorial-meta-item highlight">
              [ 21 DAYS // HABIT LOCKED ]
            </span>
            <span className="editorial-meta-tag active">STREAK ACTIVE</span>
          </div>
        </div>

        <div className="independent-visual visual-right">
          <img
            src="/svg-2.png"
            alt="Phase 02 Visual"
            className="raw-story-img"
          />
        </div>
      </div>

      <div className="row row-3">
        <div className="independent-visual visual-left">
          <img
            src="/svg-3.png"
            alt="Phase 03 Visual"
            className="raw-story-img"
          />
        </div>

        <div className="manifesto-card card-right price-card">
          <span className="editorial-phase-num gold">03 // PHASE THREE</span>
          <h3 className="editorial-title">
            FITNESS BECOMES<br />YOUR IDENTITY
          </h3>
          <p className="editorial-desc">
            You no longer force yourself to work out. Discipline has become a habit,
            confidence has replaced excuses, and showing up is simply who you are.
          </p>

          <div className="editorial-meta-row">
            <span className="editorial-meta-item highlight gold">
              CONSISTENCY WINS • EVERY SINGLE DAY
            </span>
          </div>
        </div>

        <div className="overlap-container">
          <div className="overlap-content">
            <div className="overlap-badge split-word">
              <span className="overlap-badge-dot"></span>
              THE REVOLUTIONARY FAYALWAN MODEL
            </div>

            <h2 className="overlap-heading">
              {["THAT'S", "HOW", "OUR", "CORE", "MODEL", "WORKS."].map(
                (word, index) => (
                  <span
                    key={index}
                    className={`split-word ${
                      word === "CORE" || word === "MODEL" ? "accent-word" : ""
                    }`}
                  >
                    {word}
                  </span>
                )
              )}
            </h2>

            <div className="overlap-price-hero">
              <span className="split-word price-label">JUST</span>
              <span className="split-word price-number">₹120</span>
              <span className="split-word price-suffix">/ DAY</span>
            </div>

            <p className="overlap-description split-word">
              No hidden annual contracts. No extortionate gym memberships. Just pure, daily access to premium equipment, expert trainers, and a relentless community for ₹120 per day.
            </p>

            <div className="overlap-cta-group split-word">
              <button className="overlap-btn-primary">
                CLAIM YOUR DAY 01 ACCESS
              </button>
              <div className="overlap-guarantee">
                ✓ Pay Only When You Train • Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="svg-path">
        <SvgPath ref={pathRef} />
      </div>
    </section>
  );
}
