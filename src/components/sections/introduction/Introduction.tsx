"use client";

import { useRef } from "react";
import "./Introduction.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>(".reveal-text");
      
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="intro-minimal-section" ref={containerRef} id="introduction">
      <div className="intro-minimal-container">
        <div className="intro-minimal-grid">
          
          <div className="intro-minimal-col left-col reveal-text">
            <span className="minimal-label">(01) THE REALITY</span>
          </div>
          
          <div className="intro-minimal-col right-col">
            <h2 className="minimal-heading reveal-text">
              Imagine someone working near <span className="minimal-accent">TechnoPark</span>. Monday to Friday they spend money on coffee, snacks, biryani, shawarma, soft drinks and weekend outings.
            </h2>
            
            <p className="minimal-paragraph reveal-text">
              That's a normal part of enjoying life. But they rarely realize how easily a tiny fraction of that budget could completely transform their health.
            </p>
          </div>

        </div>

        <div className="intro-minimal-spacer"></div>

        <div className="intro-minimal-grid">
          <div className="intro-minimal-col left-col reveal-text">
            <span className="minimal-label">(02) THE SHIFT</span>
          </div>
          
          <div className="intro-minimal-col right-col">
            <h2 className="minimal-heading large-heading reveal-text">
              The goal isn't to stop enjoying life.<br/>
              <span className="minimal-accent">The goal is balance.</span>
            </h2>
            
            <div className="minimal-feature-list">
              <div className="minimal-feature reveal-text">
                <span className="feature-num">01</span>
                <p>Reduce stress</p>
              </div>
              <div className="minimal-feature reveal-text">
                <span className="feature-num">02</span>
                <p>Improve energy</p>
              </div>
              <div className="minimal-feature reveal-text">
                <span className="feature-num">03</span>
                <p>Increase confidence</p>
              </div>
              <div className="minimal-feature reveal-text">
                <span className="feature-num">04</span>
                <p>Prevent lifestyle diseases</p>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-minimal-spacer"></div>

        <div className="intro-minimal-grid">
          <div className="intro-minimal-col left-col reveal-text">
            <span className="minimal-label">(03) THE INVITATION</span>
          </div>
          
          <div className="intro-minimal-col right-col reveal-text">
            <h2 className="minimal-heading reveal-text">
              Whether you choose Fahalwan Gym or any other fitness center, make physical activity part of your life.
            </h2>
            
            <h1 className="minimal-quote reveal-text">
              "Because your body is the only place you'll live forever."
            </h1>
          </div>
        </div>
        
      </div>
    </section>
  );
}

