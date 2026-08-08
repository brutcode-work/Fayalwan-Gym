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
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const paths = gsap.utils.toArray<SVGPathElement>(".manifesto-path");
      paths.forEach((path) => {
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
          },
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
          },
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
        { yPercent: 0, ease: "none", duration: 1 },
      );

      overlapTl.fromTo(
        ".footer-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          duration: 0.8,
        },
        "-=0.4",
      );
    },
    { scope: containerRef },
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
            FITNESS BECOMES
            <br />
            YOUR IDENTITY
          </h3>
          <p className="editorial-desc">
            You no longer force yourself to work out. Discipline has become a
            habit, confidence has replaced excuses, and showing up is simply who
            you are.
          </p>

          <div className="editorial-meta-row">
            <span className="editorial-meta-item highlight gold">
              CONSISTENCY WINS • EVERY SINGLE DAY
            </span>
          </div>
        </div>

        <footer className="overlap-container">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand-col footer-reveal">
                <h3 className="footer-logo">FAYALWAN GYM</h3>
                <p className="footer-desc">
                  Fayalwan Gym is a premier fitness sanctuary designed to unleash
                  your inner champion. We specialize in elite strength training,
                  high-performance conditioning, and personalized coaching.
                </p>
              </div>

              <div className="footer-links-col footer-reveal">
                <h6 className="column-title">Quick link</h6>
                <ul className="footer-links-list">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Contact us</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-col footer-reveal">
                <h6 className="column-title">Explore</h6>
                <ul className="footer-links-list">
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#reviews">Google reviews</a>
                  </li>
                  <li>
                    <a href="#stories">Stories that inspires us</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-col footer-reveal">
                <h6 className="column-title">Social</h6>
                <ul className="footer-links-list">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-info-row footer-reveal">
              <span className="copyright-text">
                ©{new Date().getFullYear()} Fayalwan Gym All rights reserved.
              </span>
              <span className="credits-text">
                Designed by{" "}
                <a
                  href="https://brutcode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BrutCode
                </a>
              </span>
            </div>

            <div className="footer-copyright-mobile footer-reveal">
              <span>
                ©{new Date().getFullYear()} Fayalwan Gym All rights reserved.
              </span>
              <span>
                Designed by{" "}
                <a
                  href="https://brutcode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BrutCode
                </a>
              </span>
            </div>

            <div className="giant-text-container footer-reveal">
              <h1 className="giant-bg-text">FAYALWAN GYM</h1>
            </div>
          </div>
        </footer>
      </div>

      <div className="svg-path">
        <SvgPath />
      </div>
    </section>
  );
}
