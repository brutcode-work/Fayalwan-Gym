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

  // Awwwards-grade GSAP preloader & entrance timeline
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (section) section.classList.remove("is-loaded");

      // 1. Initial state setup
      gsap.set(".hero-banner-full", { opacity: 0 });
      gsap.set(".hero-text-mask > *", { yPercent: 115, opacity: 0 });
      gsap.set(".hero-bottom-bar", { opacity: 0, y: 15 });
      gsap.set(".navbar-container", { y: -80, opacity: 0 });

      gsap.set(".loader-card", {
        x: () => (Math.random() - 0.5) * window.innerWidth * 0.75,
        y: () => (Math.random() - 0.5) * window.innerHeight * 0.75,
        scale: () => Math.random() * 0.4 + 0.25,
        rotation: () => (Math.random() - 0.5) * 45,
        opacity: 0,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          // Strictly enable custom cursor ONLY when preloader & intro finishes
          if (section) section.classList.add("is-loaded");
        }
      });

      // 2. Fade in scattered loader cards
      tl.to(".loader-card", {
        opacity: 0.7,
        duration: 0.7,
        stagger: 0.05,
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
        duration: 2.2,
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
      }, "-=0.3");

      // 4. Kinetic alignment to the bottom of the viewport at 90%
      tl.to(".loader-card", {
        x: (index) => {
          const cardWidth = window.innerWidth <= 820 ? 170 : 240;
          return (index - 4) * cardWidth;
        },
        y: () => {
          const cardHeight = window.innerWidth <= 820 ? 170 : 240;
          return window.innerHeight / 2 - cardHeight / 2 - 40;
        },
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.06,
        ease: "power4.inOut"
      }, "-=0.1");

      // 5. Final load push (90% to 100%)
      tl.to(progress, {
        val: 100,
        duration: 0.5,
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
          return -150;
        },
        duration: 1.1,
        ease: "power4.inOut"
      });

      // 7. Ultra-smooth FLIP handoff: reveal Swiper and dissolve preloader backdrop
      tl.to(".loader-text-container", {
        opacity: 0,
        y: -25,
        duration: 0.35,
        ease: "power2.in"
      }, "-=0.8")
        .set(".hero-banner-full", { opacity: 1 }, "-=0.2")
        .to(".hero-preloader", {
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          onComplete: () => {
            const preloader = document.querySelector(".hero-preloader");
            if (preloader) (preloader as HTMLElement).style.display = "none";
          }
        }, "-=0.2")

        // 8. Masked Text Reveals (Awwwards-style smooth slide up out of overflow mask)
        .to(
          ".hero-text-mask > *",
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.12,
            ease: "power4.out"
          },
          "-=0.55"
        )

        // 9. Slide down navbar & fade in scroll indicator
        .to(
          ".navbar-container",
          { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
          "-=0.85"
        )
        .to(
          ".hero-bottom-bar",
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.6"
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
            <div className="hero-text-mask">
              <p className="hero-subtext">
                Every day you make small choices. Those choices become your
                lifestyle.
              </p>
            </div>

            <div className="hero-text-mask">
              <div className="hero-tagline-mono">
                BY FAYALWAN GYM IN PARTNERSHIP
                <br />
                WITH DISCIPLINE ENGINE
              </div>
            </div>
          </div>

          {/* Right Column: Clean Medium-Weight Headline */}
          <div className="hero-right-col">
            <div className="hero-text-mask">
              <h1 className="hero-title-main">
                Your Weekly Choices
                <br />
                Shape Your Future.
              </h1>
            </div>
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

      {/* Custom Swipe Cursor DOM Element (Strictly disabled until intro timeline finishes) */}
      <div ref={cursorRef} className="hero-swipe-cursor">
        <div className="hero-swipe-cursor__inner">
          <span>Swipe</span>
        </div>
      </div>
    </section>
  );
}
