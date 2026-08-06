"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Introduction.css";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);

  // Smooth scroll handler helper
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const lenis =
        typeof window !== "undefined" ? (window as any).lenis : null;
      if (lenis) {
        lenis.scrollTo(targetElement, { duration: 1.5 });
      } else {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleButtonClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const lenis =
        typeof window !== "undefined" ? (window as any).lenis : null;
      if (lenis) {
        lenis.scrollTo(targetElement, { duration: 1.5 });
      } else {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useGSAP(
    () => {
      // 1. Bento Head Animation
      gsap.from(".bento-head h2, .bento-head a", {
        scrollTrigger: {
          trigger: ".bento-head",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // 2. Bento Cells Animation (Staggered reveal simulating in-view CSS transition)
      const cells = gsap.utils.toArray(".b-cell");

      cells.forEach((cell: any) => {
        gsap.to(cell, {
          scrollTrigger: {
            trigger: cell,
            start: "top 88%",
            onEnter: () => cell.classList.add("in-view"),
            once: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="investment-bento reveal-ready"
      id="introduction"
      ref={sectionRef}
    >
      <div className="bento-inner">
        {/* <div className="bento-head">
          <h2>
            Don't cut the good stuff. <span>Just add one hour for you.</span>
          </h2>
          <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>
            Start today
          </a>
        </div> */}
        <div className="bento-grid">
          {/* b-photo : tall image card, quote overlay */}
          <div className="b-cell b-photo">
            <p className="b-eyebrow">
              <span>Why we exist</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <div>
              <p className="b-photo__quote">
                “Your body carries you through every ambition. It deserves one
                hour in return.”
              </p>
              <span className="b-photo__by">Fayalwan Gym, TechnoPark</span>
            </div>
          </div>

          {/* b-people : centered label + glass button */}
          <div className="b-cell b-people">
            <span className="b-people__label">Built for everyday people</span>
            <p>
              Whether you're starting from zero, getting back after years, or
              chasing your next personal best— there's a place for you here.
            </p>
            <button
              className="b-people__btn"
              type="button"
              onClick={() => handleButtonClick("contact")}
            >
              Start your journey
            </button>
          </div>

          {/* b-quote : dark abstract headline card */}
          <div className="b-cell b-quote">
            <p className="b-eyebrow">
              <span>Our belief</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <h3>
              Keep the biriyani. Keep the weekends. <em>Train anyway.</em>
            </h3>
          </div>

          {/* b-price : gradient wave stat card */}
          <div className="b-cell b-price">
            <span className="b-price__top">
              <span>One hour changes</span>
              <span>everything</span>
            </span>
            <p className="b-price__amount">
              1 Hour<small>Every Day</small>
            </p>
            <span className="b-price__caption">
              Less stress. More strength. Better sleep. Higher confidence.
            </span>
          </div>

          {/* b-note : plain text card */}
          <div className="b-cell b-note">
            <h3>
              The TechnoPark <em>Routine</em>
            </h3>
            <p>
              Coffee. Meetings. Deadlines. Snacks. Weekend plans. <br /> Life
              gets busy. <br />
              Don't let your health be the thing you postpone.
            </p>
            <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>
              Move today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
