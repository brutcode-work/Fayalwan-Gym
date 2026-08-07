"use client";

import { useState, useRef, useEffect } from "react";
import "./TransformationStories.css";
import {
  Play,
  X,
  Sliders,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  profession: string;
  coach: string;
  program: string;
  durationLabel: string;
  weightChange: string;
  bodyFatChange: string;
  letter: string;
  beforeImg: string;
  afterImg: string;
  avatar: string;
  storyQuote: string;
  fullStory: string;
  hasVideo: boolean;
  videoUrl?: string;
  videoTitle?: string;
}

export const STORIES: TransformationStory[] = [
  {
    id: "devika-nair",
    name: "Devika Nair",
    age: 28,
    profession: "Software Architect",
    coach: "Alex Varghese",
    program: "Athletic Body Recomposition",
    durationLabel: "6 Months",
    weightChange: "-14.2 KG",
    bodyFatChange: "31% → 18% BF",
    letter: "E",
    beforeImg:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    avatar: "/assets/avatar_1.png",
    storyQuote:
      "I went from chronic lower back pain to deadlifting 120kg. Fayalwan didn't just change my body; it re-engineered my posture and confidence.",
    fullStory:
      "Working 10 hours at a desk left Devika with severe postural issues. Under Alex's biomechanics programming, she rebuilt her spinal stability, shed 14.2kg of fat, and built functional strength.",
    hasVideo: true,
    videoUrl: "/gym-inspiration.mp4",
    videoTitle: "Devika's 6-Month Transformation Documentary",
  },
  {
    id: "karan-malhotra",
    name: "Karan Malhotra",
    age: 32,
    profession: "Tech Entrepreneur",
    coach: "Priya Menon",
    program: "Hypertrophy & Fat Loss",
    durationLabel: "4 Months",
    weightChange: "-18.5 KG",
    bodyFatChange: "26% → 12.5% BF",
    letter: "S",
    beforeImg: "/assets/transformation_1.png",
    afterImg: "/assets/transformation_2.png",
    avatar: "/assets/avatar_2.png",
    storyQuote:
      "Consistency was always hard until I joined Fayalwan. The biweekly InBody 770 scans and progressive overload programming made my progress mathematically undeniable.",
    fullStory:
      "Karan struggled with weight fluctuations for 5 years. Priya structured a precision macro plan paired with high-intensity strength blocks, achieving a sharp V-taper in 16 weeks.",
    hasVideo: true,
    videoUrl: "/videoplayback.mp4",
    videoTitle: "Karan's 16-Week V-Taper Evolution",
  },
  {
    id: "rohan-sharma",
    name: "Rohan Sharma",
    age: 25,
    profession: "State Athlete",
    coach: "Rahul Nair",
    program: "Powerlifting & Core Power",
    durationLabel: "8 Months",
    weightChange: "-11.0 KG",
    bodyFatChange: "22% → 11% BF",
    letter: "E",
    beforeImg:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    avatar: "/assets/avatar_3.png",
    storyQuote:
      "The coaches here never compromise on execution. In 8 months, my bench press increased by 35kg while cutting 11kg of body fat. Pure engineering.",
    fullStory:
      "Rohan needed explosiveness for badminton without adding bulk. Rahul designed a periodized strength routine focused on fast-twitch motor recruitment.",
    hasVideo: true,
    videoUrl: "/hero-vd.mp4",
    videoTitle: "Rohan's Athletic Explosiveness Story",
  },
  {
    id: "anjali-menon",
    name: "Anjali Menon",
    age: 30,
    profession: "Product Designer",
    coach: "Dr. Ananya Sharma",
    program: "Postural Realignment",
    durationLabel: "5 Months",
    weightChange: "-12.8 KG",
    bodyFatChange: "29% → 17% BF",
    letter: "T",
    beforeImg:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    afterImg:
      "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1200&auto=format&fit=crop",
    avatar: "/assets/avatar_4.png",
    storyQuote:
      "₹120/day for world-class equipment and personal form checks is unmatched in Kerala. I achieved the best athletic shape of my life.",
    fullStory:
      "Anjali wanted a lean, sculpted physique with sustainable energy levels. Dr. Ananya aligned her training with metabolic conditioning and mobility work.",
    hasVideo: true,
    videoUrl: "/gym-inspiration.mp4",
    videoTitle: "Anjali's Lean Sculpting & Mobility Journey",
  },
];

export default function TransformationStories() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    title: string;
    name: string;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  // GSAP Pinned Horizontal Scroll (Palazzo Monti Style)
  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getScrollAmount = () => track.scrollWidth - window.innerWidth;

          gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${getScrollAmount()}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });
        },
      );
    },
    { scope: sectionRef },
  );

  // Drag logic for Before/After Wipe Slider in Panel 1
  const handleMove = (clientX: number) => {
    if (!wipeRef.current) return;
    const rect = wipeRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleGlobalMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  const featuredBeforeImg = STORIES[0].beforeImg;
  const featuredAfterImg = STORIES[0].afterImg;

  return (
    <section
      className="pm-transformation-section"
      ref={sectionRef}
      id="transformations"
    >
      <div className="pm-horizontal-track" ref={trackRef}>
        {/* PANEL 01: PALAZZO MONTI EDITORIAL INTRO + GIANT LETTER "F" + FULL-HEIGHT BEFORE/AFTER SLIDER */}
        <div className="pm-panel pm-panel-intro">
          {/* Column 1: Editorial Text Intro (Palazzo Monti Style) */}
          <div className="pm-col pm-col-text-intro">
            <span className="pm-intro-label">07 // PROVEN EVOLUTION</span>
            <h2 className="pm-intro-headline">
              Fayalwan Gym is Kazhakoottam's high-performance strength
              sanctuary—where physical limits are re-engineered into lasting
              power.
            </h2>
            <p className="pm-intro-paragraph">
              Every transformation story featured here is mathematically
              verified by InBody 770 clinical body composition analysis and
              1-on-1 certified biomechanics coaching.
            </p>
            <p className="pm-intro-paragraph">
              Scroll horizontally to explore real member evolutions, verifiable
              metrics, and authentic documentary video stories.
            </p>
          </div>

          {/* Column 2: Giant Architectural Letter "F" (Palazzo Monti Style) */}
          <div className="pm-col pm-col-giant-letter" aria-hidden="true">
            <span className="pm-giant-char">R</span>
          </div>

          {/* Column 3: Full-Height Interactive Before/After Engine */}
          <div className="pm-col pm-col-visual-full">
            <div
              className="pm-before-after-engine"
              ref={wipeRef}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
            >
              {/* After Image Layer */}
              <div className="pm-wipe-layer pm-wipe-after">
                <img src={featuredAfterImg} alt="Member After Transformation" />
                <span className="pm-wipe-tag pm-tag-after">AFTER</span>
              </div>

              {/* Before Image Layer (Clipped) */}
              <div
                className="pm-wipe-layer pm-wipe-before"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={featuredBeforeImg}
                  alt="Member Before Transformation"
                />
                <span className="pm-wipe-tag pm-tag-before">BEFORE</span>
              </div>

              {/* Vertical Drag Handle */}
              <div className="pm-wipe-bar" style={{ left: `${sliderPos}%` }}>
                <div className="pm-wipe-knob">
                  <Sliders size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PANELS 02 - 05: PALAZZO MONTI MEMBER STORY COLUMNS */}
        {STORIES.map((story, index) => (
          <div key={story.id} className="pm-panel pm-panel-story">
            {/* Column 1: Giant Letter (Palazzo Monti Architectural Divider) */}
            <div className="pm-col pm-col-giant-letter" aria-hidden="true">
              <span className="pm-giant-char">{story.letter}</span>
            </div>

            {/* Column 2: Full-Height 100vh Image Panel */}
            <div className="pm-col pm-col-media-full">
              <div className="pm-media-frame">
                <img
                  src={story.afterImg}
                  alt={`${story.name} Transformation`}
                  className="pm-full-img"
                />
                {story.hasVideo && story.videoUrl && (
                  <button
                    className="pm-media-video-trigger"
                    onClick={() =>
                      setActiveVideo({
                        url: story.videoUrl!,
                        title: story.videoTitle || story.name,
                        name: story.name,
                      })
                    }
                  >
                    <Play size={14} fill="currentColor" />
                    <span>WATCH STORY</span>
                  </button>
                )}
              </div>
            </div>

            {/* Column 3: Editorial Typography Story Block */}
            <div className="pm-col pm-col-story-text">
              <div className="pm-story-counter-row">
                <span className="pm-counter-num">0{index + 1} / 04</span>
                <div className="pm-verified-pill">
                  <ShieldCheck size={14} />
                  <span>INBODY VERIFIED</span>
                </div>
              </div>

              <h3 className="pm-story-quote">"{story.storyQuote}"</h3>

              <div className="pm-story-meta-line">
                <span className="pm-meta-name">{story.name}</span>
                <span className="pm-meta-dot">•</span>
                <span>
                  {story.age} yrs, {story.profession}
                </span>
                <span className="pm-meta-dot">•</span>
                <span>
                  Coached by <strong>{story.coach}</strong>
                </span>
              </div>

              <p className="pm-story-body">{story.fullStory}</p>

              {/* Minimal Inline Stats Ledger */}
              <div className="pm-stats-row">
                <div className="pm-stat-box">
                  <span className="pm-stat-num">{story.durationLabel}</span>
                  <span className="pm-stat-lbl">DURATION</span>
                </div>
                <div className="pm-stat-box">
                  <span className="pm-stat-num pm-accent-val">
                    {story.weightChange}
                  </span>
                  <span className="pm-stat-lbl">NET FAT DROP</span>
                </div>
                <div className="pm-stat-box">
                  <span className="pm-stat-num">{story.bodyFatChange}</span>
                  <span className="pm-stat-lbl">INBODY SHIFT</span>
                </div>
              </div>

              {story.hasVideo && story.videoUrl && (
                <button
                  className="pm-video-doc-btn"
                  onClick={() =>
                    setActiveVideo({
                      url: story.videoUrl!,
                      title: story.videoTitle || story.name,
                      name: story.name,
                    })
                  }
                >
                  <Play size={14} fill="black" />
                  <span>PLAY DOCUMENTARY</span>
                </button>
              )}
            </div>
          </div>
        ))}

        {/* PANEL 06: PALAZZO MONTI CTA COLUMN */}

        <div className="pm-panel pm-panel-cta">
          <div className="pm-col pm-col-giant-letter" aria-hidden="true">
            <h1 className="pm-giant-char">E</h1>
          </div>

          <div className="pm-col pm-col-cta-card">
            <span className="pm-cta-tag">SCIENTIFIC METRIC ACCURACY</span>
            <h2 className="pm-cta-headline">YOUR BODY. RE-ENGINEERED.</h2>
            <p className="pm-cta-text">
              Every transformation at Fayalwan is backed by InBody 770 clinical
              body composition analysis and 1-on-1 certified coaching. No
              guesswork, no fad diets.
            </p>

            <div className="pm-cta-list">
              <div className="pm-cta-item">
                <Check size={16} className="pm-check-icon" />
                <span>Biweekly InBody Scans</span>
              </div>
              <div className="pm-cta-item">
                <Check size={16} className="pm-check-icon" />
                <span>Custom Biomechanics Plan</span>
              </div>
              <div className="pm-cta-item">
                <Check size={16} className="pm-check-icon" />
                <span>₹120 / Day Accessible Access</span>
              </div>
            </div>

            <a href="#contact" className="pm-cta-link-btn">
              <span>START YOUR TRANSFORMATION</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="pm-modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="pm-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="pm-modal-top">
              <div className="pm-modal-title">
                <Sparkles size={15} className="pm-sparkle-orange" />
                <span>{activeVideo.title}</span>
              </div>
              <button
                className="pm-modal-close-btn"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="pm-modal-video-container">
              <video
                src={activeVideo.url}
                controls
                autoPlay
                className="pm-modal-video-player"
              />
            </div>

            <div className="pm-modal-bottom">
              <span>{activeVideo.name} • Verifiable Member Story</span>
              <button
                className="pm-modal-done-btn"
                onClick={() => setActiveVideo(null)}
              >
                <Check size={14} />
                <span>DONE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
