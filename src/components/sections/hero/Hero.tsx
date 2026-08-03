"use client";

import { useRef, useState } from "react";
import "./Hero.css";
import "./PartTwo.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FixedCard } from "../../ui/FixedCard";
import About from "../about/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const cardsData = [
  {
    img: "https://i.pinimg.com/vwebp/1200x/29/92/b9/2992b9241d3cb85047584a4072a0fad9.webp",
    title: "STRENGTH & POWER",
    subtitle: "Heavy Lifting & Hypertrophy",
  },
  {
    img: "https://i.pinimg.com/1200x/d7/60/36/d7603621729099c012857ae65724374c.jpg",
    title: "ATHLETIC CONDITIONING",
    subtitle: "HIIT & Endurance Training",
  },
  {
    img: "https://i.pinimg.com/1200x/08/ec/17/08ec17bd127e3434ba07f1babdf72b04.jpg",
    title: "RECOVERY & MOBILITY",
    subtitle: "Flexibility & Posture Science",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const partTwoRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log(err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useGSAP(
    () => {
      let titleSplit: SplitText | null = null;
      let pSplit: SplitText | null = null;

      try {
        titleSplit = new SplitText(".part-two-text h2", {
          type: "lines,words",
          linesClass: "split-line-mask",
        });

        pSplit = new SplitText(".part-two-text p", {
          type: "lines,words",
          linesClass: "split-line-mask",
        });
      } catch (err) {
        console.warn("SplitText initialization error:", err);
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=450%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        partTwoRef.current,
        { yPercent: 100 },
        { yPercent: 0, ease: "none", duration: 1 }
      )
        .fromTo(
          heroImgRef.current,
          { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
            duration: 1,
          },
          "<"
        )
        .to(".hero-part-1", { opacity: 0, duration: 0.1 }, "<+0.9")

        .to(
          heroImgRef.current,
          { filter: "brightness(0.35)", duration: 0.5 },
          ">+0.1"
        );

      if (titleSplit && titleSplit.words) {
        tl.fromTo(
          titleSplit.words,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out",
          },
          ">+0.1"
        );
      } else {
        tl.fromTo(
          ".part-two-text h2",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          ">+0.1"
        );
      }

      if (pSplit && pSplit.words) {
        tl.fromTo(
          pSplit.words,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.03,
            ease: "power3.out",
          },
          "-=0.5"
        );
      } else {
        tl.fromTo(
          ".part-two-text p",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.5"
        );
      }

      tl.to(
        ".card-0",
        {
          opacity: 1,
          scale: 1,
          x: "-125%",
          y: "25px",
          rotate: -4,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      )
        .to(
          ".card-1",
          {
            opacity: 1,
            scale: 1,
            x: "0%",
            y: "25px",
            rotate: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          ".card-2",
          {
            opacity: 1,
            scale: 1,
            x: "125%",
            y: "25px",
            rotate: 4,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )

        .to({}, { duration: 0.8 })

        .to(partTwoRef.current, {
          yPercent: -100,
          ease: "none",
          duration: 1.2,
        });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="hero" id="home">
      <div className="hero-about-underlay">
        <About />
      </div>

      <div className="hero-part-1">
        <div className="bg-video">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            disablePictureInPicture
            playsInline
            src="/videoplayback.mp4"
          ></video>
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-video-controls">
          <button
            className="video-toggle-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? (
              <svg
                className="control-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="18" y1="4" x2="18" y2="20"></line>
                <line x1="6" y1="4" x2="6" y2="20"></line>
              </svg>
            ) : (
              <svg
                className="control-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>
        </div>

        <div className="hero-marquee-band">
          <div className="marquee-track">
            <span>
              WORK BEATS TALENT • NO PAIN NO GAIN • PUSH YOUR LIMITS • DISCIPLINE
              OVER MOTIVATION • &nbsp;
            </span>
            <span>
              WORK BEATS TALENT • NO PAIN NO GAIN • PUSH YOUR LIMITS • DISCIPLINE
              OVER MOTIVATION • &nbsp;
            </span>
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-top">
            <h1 className="hero-headline">
              We turn physical limits into strength that endures.
            </h1>
          </div>

          <div className="hero-bottom">
            <div className="hero-bottom-right">
              <div className="hero-card">
                <img
                  src="https://i.pinimg.com/1200x/bd/e8/5d/bde85d3e73e0321c1d40d5768459797d.jpg"
                  alt="Elite Gym Training Showcase"
                />
              </div>
              <div className="hero-card-meta">
                <span>Elite Program</span>
                <span>2026</span>
                <span>Explore Now →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={partTwoRef} className="hero-part-2">
        <div ref={heroImgRef} className="hero-img">
          <img src="/hero-img.png" alt="Hero showcase" />
        </div>

        <div className="part-two-container">
          <div className="part-two-text">
            <h2>OUR CORE DISCIPLINES</h2>
            <p>Master every dimension of performance & physical endurance</p>
          </div>

          <div className="part-two-cards-wrapper">
            {cardsData.map((card, idx) => (
              <FixedCard
                key={idx}
                img={card.img}
                idx={idx}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
