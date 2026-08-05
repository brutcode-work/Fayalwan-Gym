"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, A11y } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import "swiper/css";
import "./Hero.css";

const IMAGES = [
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop"
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // GSAP animations for hero elements and squares
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-banner-full",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.1 }
      )
        .fromTo(
          ".hero-square-media",
          { opacity: 0, scale: 0.94, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".hero-left-col",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-title-main",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          ".hero-bottom-bar",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  // Bind custom cursor tracking
  useGSAP(
    () => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="hero-section" id="home">
      {/* 1. Full-Width Horizontal Visual Strip (Edge to Edge) with Swiper */}
      <div className="hero-banner-full">
        <div className="hero-swiper-wrapper">
          <Swiper
            className="hero-swiper"
            modules={[Autoplay, Keyboard, A11y]}
            slidesPerView="auto"
            spaceBetween={0}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true }}
          >
            {IMAGES.map((url, index) => (
              <SwiperSlide key={index} className="hero-swiper-slide">
                <div className="hero-square-media">
                  <img
                    src={url}
                    alt="Gym training visual"
                    draggable="false"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

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

      {/* Custom Swipe Cursor DOM Element */}
      <div ref={cursorRef} className="hero-swipe-cursor">
        <div className="hero-swipe-cursor__inner">
          <span>Swipe</span>
        </div>
      </div>
    </section>
  );
}
