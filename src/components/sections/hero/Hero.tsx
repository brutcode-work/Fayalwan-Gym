"use client";

import { useRef } from "react";
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-banner-full",
        { opacity: 0, y: -15, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, delay: 0.1 },
      )
        .fromTo(
          ".hero-left-col",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          ".hero-title-main",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6",
        )
        .fromTo(
          ".hero-bottom-bar",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="hero-section" id="home">
      {/* 1. Full-Width Horizontal Visual Image Strip (Edge to Edge) */}
      <div className="hero-banner-full">
        <div className="banner-image-container">
          <img
            src="/hero-body.png"
            alt="Fayalwan Gym Performance"
            className="banner-img"
          />
          <div className="banner-gradient-overlay"></div>

          {/* Minimal floating badges on banner */}
          <div className="banner-tag tag-left">
            <span>FOUNDER</span>
          </div>
          <div className="banner-tag tag-right">
            <span>CREATIVE DIRECTOR</span>
          </div>
        </div>
      </div>

      {/* 2. Content Container with 5rem Left and Right Padding */}
      <div className="hero-content-container">
        {/* Middle Main Content Grid */}
        <div className="hero-content-grid">
          {/* Left Column: Subtitle & Monospace Partnership Tagline */}
          <div className="hero-left-col">
            <p className="hero-subtext">
              Every day you make small choices. Those choices become your
              lifestyle.
            </p>

            <div className="hero-tagline-mono">
              BY FAYALWAN GYM IN PARTNERSHIP
              <br />
              WITH DISCIPLINE ENGINE
            </div>
          </div>

          {/* Right Column: Clean Medium-Weight Headline */}
          <div className="hero-right-col">
            <h1 className="hero-title-main">
              Your Weekly Choices
              <br />
              Shape Your Future.
            </h1>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator */}
        <div className="hero-bottom-bar">
          <div className="bottom-empty"></div>

          <a href="#manifesto" className="scroll-indicator-link">
            <span>Scroll to read</span>
          </a>

          <div className="bottom-arrow">
            <ArrowDown size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}
