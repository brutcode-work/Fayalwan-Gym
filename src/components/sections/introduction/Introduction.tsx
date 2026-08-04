"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Introduction.css";

gsap.registerPlugin(ScrollTrigger);

const SplitChars = ({ children }: { children: React.ReactNode }) => {
  if (typeof children !== "string") return <>{children}</>;
  
  return (
    <span aria-label={children} style={{ display: "inline-flex", flexWrap: "wrap" }}>
      {children.split(/(\s+)/).map((word, wordIdx) => {
        if (word.trim() === "") {
          return <span key={wordIdx} style={{ whiteSpace: "pre" }}>{word}</span>;
        }
        return (
          <span key={wordIdx} className="word" style={{ display: "inline-flex", whiteSpace: "nowrap" }}>
            {word.split("").map((char, charIdx) => (
              <span
                key={charIdx}
                className="char-mask"
                style={{ 
                  overflow: "hidden", 
                  display: "inline-block", 
                  verticalAlign: "bottom",
                  paddingBottom: "0.15em",
                  marginBottom: "-0.15em"
                }}
              >
                <span 
                  className="char" 
                  style={{ 
                    display: "inline-block", 
                    willChange: "transform"
                  }}
                >
                  {char}
                </span>
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
};

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Intro Header
      gsap.from(".intro-header .char", {
        scrollTrigger: {
          trigger: ".intro-header",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        yPercent: 120,
        duration: 0.9,
        stagger: 0.015,
        ease: "power4.out",
      });

      // 2. Spend Lines (Cards)
      gsap.from(".spend-line", {
        scrollTrigger: {
          trigger: ".spend-lines",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // 3. Spend Lines Text (Chars inside Cards)
      gsap.from(".spend-line .char", {
        scrollTrigger: {
          trigger: ".spend-lines",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        yPercent: 120,
        duration: 0.6,
        stagger: 0.01,
        ease: "power3.out",
        delay: 0.15, // Let the cards lift first slightly
      });

      // 4. Conclusion Text
      gsap.from(".intro-statement .char", {
        scrollTrigger: {
          trigger: ".intro-conclusion",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        yPercent: 120,
        duration: 0.8,
        stagger: 0.015,
        ease: "power3.out",
      });

      // 5. Conclusion Closing and Price Stamp
      gsap.from(".intro-closing, .price-stamp", {
        scrollTrigger: {
          trigger: ".intro-conclusion",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.16,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="investment-intro" id="introduction" ref={sectionRef}>
      <div className="investment-intro__inner">
        <header className="intro-header">
          <p className="intro-kicker">
            <span>01</span> <SplitChars>THE ₹150 QUESTION</SplitChars>
          </p>
          <h2 className="intro-title">
            <SplitChars>Don't cut the</SplitChars><br />
            <em><SplitChars>good stuff.</SplitChars></em>
          </h2>
        </header>

        <div className="spend-lines" aria-label="The difference a daily 150 rupee investment can make">
          <div className="spend-line">
            <span className="spend-line__number">01</span>
            <p><SplitChars>Coffee, snacks, a quick add-on.</SplitChars></p>
            <span className="spend-line__note"><SplitChars>a normal day</SplitChars></span>
          </div>
          <div className="spend-line">
            <span className="spend-line__number">02</span>
            <p><SplitChars>Add one hour for your body.</SplitChars></p>
            <span className="spend-line__note spend-line__note--accent"><SplitChars>a better habit</SplitChars></span>
          </div>
        </div>

        <div className="intro-conclusion">
          <p className="intro-statement">
            <SplitChars>Keep the coffee. Keep the weekends.</SplitChars><br />
            <strong><SplitChars>Add movement.</SplitChars></strong>
          </p>
          <div className="intro-closing">
            <span><SplitChars>FAYALWAN GYM · DAILY ACCESS</SplitChars></span>
            <strong><SplitChars>MOVE MORE. LIVE BETTER.</SplitChars></strong>
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
