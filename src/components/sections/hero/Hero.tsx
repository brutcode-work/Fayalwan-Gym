"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, A11y } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import "swiper/css";
import "./Hero.css";

const MEDIA_URLS = [
  "https://i.pinimg.com/736x/a6/98/4c/a6984c612d4cf1113d5ebfeb6cba80fc.jpg",
  "https://i.pinimg.com/736x/f6/3f/f2/f63ff2cf0acfae03c354b7f39084a7a9.jpg",
  "https://v1.pinimg.com/videos/iht/hevcMp4V2/c0/c1/03/c0c10333962598c1bcb2fb44c43a1d01_t1.mp4",
  "https://i.pinimg.com/736x/f4/68/83/f468838d85b76ba8a383af24c97cff9e.jpg",
  "https://v1.pinimg.com/videos/iht/expMp4/cc/e3/65/cce36507c7eebcb5f775079cecec030b_720w.mp4",
  "https://i.pinimg.com/1200x/dc/d0/26/dcd026441fc3f09b8d5eef7b90705621.jpg",
  "https://v1.pinimg.com/videos/iht/expMp4/69/7d/0c/697d0cb6f5333fd44d7a594342e46e66_720w.mp4",
  "https://i.pinimg.com/1200x/1c/6e/4c/1c6e4cc36fcd99713417271d95bac62e.jpg",
  "https://i.pinimg.com/736x/ee/ad/b7/eeadb757106f016f5f25bb8f5689c280.jpg"
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Cinematic GSAP loading timeline
  useGSAP(
    () => {
      // 1. Set initial states
      gsap.set(".hero-left-col, .hero-right-col, .hero-bottom-bar, .navbar-container", {
        opacity: 0
      });
      gsap.set(".hero-banner-full", {
        opacity: 0
      });
      gsap.set(".loader-card", {
        x: () => (Math.random() - 0.5) * window.innerWidth * 0.75,
        y: () => (Math.random() - 0.5) * window.innerHeight * 0.75,
        scale: () => Math.random() * 0.4 + 0.25, // random scale between 0.25 and 0.65
        rotation: () => (Math.random() - 0.5) * 45, // random rotation
        opacity: 0,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 2. Fade in scattered cards
      tl.to(".loader-card", {
        opacity: 0.65,
        duration: 0.8,
        stagger: 0.06,
        ease: "power2.out"
      });

      // 3. Counter Animation (0% to 90%)
      const progress = { val: 0 };
      const labels = [
        "MOBILIZING ACTIVE SPACE...",
        "ALIGNING RESILIENT ENERGY...",
        "CURATING ELITE STRENGTH...",
        "SHAPING YOUR FUTURE..."
      ];

      tl.to(progress, {
        val: 90,
        duration: 2.5,
        ease: "power1.inOut",
        onUpdate: () => {
          const numEl = document.querySelector(".loader-number");
          if (numEl) numEl.textContent = `${Math.floor(progress.val)}%`;

          const labelEl = document.querySelector(".loader-label");
          if (labelEl) {
            const labelIndex = Math.min(
              Math.floor((progress.val / 90) * labels.length),
              labels.length - 1
            );
            labelEl.textContent = labels[labelIndex];
          }
        }
      }, "-=0.4");

      // 4. Kinetic alignment to the bottom of the viewport at 90% progress
      tl.to(".loader-card", {
        x: (index) => {
          const cardWidth = window.innerWidth <= 820 ? 170 : 240;
          return (index - 4) * cardWidth; // Centered alignment for 9 items
        },
        y: () => {
          const cardHeight = window.innerWidth <= 820 ? 170 : 240;
          // Align near the bottom of the screen (Local Y relative to viewport center)
          return window.innerHeight / 2 - cardHeight / 2 - 40;
        },
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.3,
        stagger: 0.08,
        ease: "power4.inOut"
      }, "-=0.2");

      // 5. Final load push (90% to 100%)
      tl.to(progress, {
        val: 100,
        duration: 0.6,
        ease: "power2.out",
        onUpdate: () => {
          const numEl = document.querySelector(".loader-number");
          if (numEl) numEl.textContent = `${Math.floor(progress.val)}%`;
          const labelEl = document.querySelector(".loader-label");
          if (labelEl) labelEl.textContent = "READY TO START";
        }
      }, "-=0.2");

      // 6. Slide row from bottom of screen to top banner location
      tl.to(".loader-card", {
        y: () => {
          const targetEl = document.querySelector(".hero-swiper-wrapper");
          if (targetEl) {
            const rect = targetEl.getBoundingClientRect();
            const targetCenterY = rect.top + rect.height / 2;
            const viewportCenterY = window.innerHeight / 2;
            return targetCenterY - viewportCenterY;
          }
          return -150; // Fallback
        },
        duration: 1.1,
        ease: "power4.inOut"
      });

      // 7. Instant Swap: Hide loader overlay/cards and show actual Swiper immediately
      tl.to(".loader-text-container", {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in"
      }, "-=0.9")
        .set(".hero-banner-full", { opacity: 1 })
        .set(".loader-card", { opacity: 0 })
        .set(".hero-preloader", { display: "none" })

        // 8. Stagger reveal hero content text
        .fromTo(
          ".hero-left-col, .hero-right-col",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.2"
        )

        // 9. Slide down navbar and show scroll indicator
        .fromTo(
          ".navbar-container",
          { y: -80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-bottom-bar",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    },
    { scope: sectionRef }
  );

  // Bind custom cursor coordinate tracking
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
      {/* Cinematic Preloader Screen */}
      <div className="hero-preloader">
        <div className="loader-text-container">
          <span className="loader-number">0%</span>
          <span className="loader-label">DISCIPLINE ENGINE</span>
        </div>
        <div className="loader-cards-container">
          {MEDIA_URLS.map((url, index) => {
            const isVideo = url.endsWith(".mp4") || url.includes(".mp4");
            return (
              <div key={`loader-card-${index}`} className="loader-card">
                {isVideo ? (
                  <video
                    src={url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <img src={url} alt="" />
                )}
              </div>
            );
          })}
        </div>
      </div>

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
            {MEDIA_URLS.map((url, index) => {
              const isVideo = url.endsWith(".mp4") || url.includes(".mp4");
              return (
                <SwiperSlide key={index} className="hero-swiper-slide">
                  <div className="hero-square-media">
                    {isVideo ? (
                      <video
                        src={url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        draggable="false"
                      />
                    ) : (
                      <img
                        src={url}
                        alt={`Gym training visual ${index + 1}`}
                        draggable="false"
                        loading="lazy"
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="banner-gradient-overlay"></div>
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
