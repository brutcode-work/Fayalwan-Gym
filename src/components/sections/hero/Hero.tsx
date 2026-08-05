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
