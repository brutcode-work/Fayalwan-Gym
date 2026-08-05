"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import "./GymGallery.css";

interface GalleryMedia {
  id: string;
  title: string;
  artist: string;
  category: string;
  type: "video" | "image";
  url: string;
  timestamp: string;
  quote: string;
}

const GALLERY_ITEMS: GalleryMedia[] = [
  {
    id: "01",
    title: "ATHLETIC RECOVERY",
    artist: "FAYALWAN",
    category: "STRENGTH & CONDITIONING",
    type: "image",
    url: "https://i.pinimg.com/1200x/cb/c7/f0/cbc7f0eba46fc932315c2079d456bc0d.jpg",
    timestamp: "00:00:15",
    quote: "Train for more energy at work, better sleep at night, and the confidence to feel capable in your own body."
  },
  {
    id: "02",
    title: "HEAVY CINEMATICS",
    artist: "SHAMS",
    category: "POWER ZONE",
    type: "video",
    url: "https://v1.pinimg.com/videos/iht/hevcMp4V3/98/62/f7/9862f7d5f5a433ea258b09ec185b14e8_360w.mp4",
    timestamp: "00:00:24",
    quote: "Build physical endurance that carries into everyday life, turning every heavy load into effortless strength."
  },
  {
    id: "03",
    title: "RAW STRENGTH ARCHIVE",
    artist: "ARJUN",
    category: "FREE WEIGHTS",
    type: "image",
    url: "https://i.pinimg.com/736x/d7/19/ba/d719bab654730c30c30bfd9a900ced9c.jpg",
    timestamp: "00:00:36",
    quote: "Consistency isn’t about perfection. It’s showing up when it counts and mastering the fundamentals daily."
  },
  {
    id: "04",
    title: "ENDURANCE CHAMBER",
    artist: "SIDDHARTH",
    category: "HYROX ARENA",
    type: "image",
    url: "https://i.pinimg.com/736x/3a/aa/73/3aaa73cd080d19ee629a2cc8161bbb62.jpg",
    timestamp: "00:00:48",
    quote: "Push past self-doubt, break mental ceilings, and unlock a level of stamina you never knew you possessed."
  },
  {
    id: "05",
    title: "KINETIC CONDITIONING",
    artist: "DR. ANANYA",
    category: "PERFORMANCE LAB",
    type: "image",
    url: "https://i.pinimg.com/736x/2d/14/a2/2d14a2c9997fcf26f61afb70fb029069.jpg",
    timestamp: "00:01:05",
    quote: "Move with purpose, restore your body's natural agility, and stand taller in everything you do."
  }
];

const DEFAULT_IMAGE_DURATION_MS = 5000;

export default function GymGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const origVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const blurVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const activeItem = GALLERY_ITEMS[activeIndex];

  // Helper to advance to next slide
  const nextSlide = () => {
    setProgress(0);
    setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  // Select card manually
  const selectMedia = (index: number) => {
    setProgress(0);
    setActiveIndex(index);
  };

  // Handle Image timer progress
  useEffect(() => {
    setProgress(0);

    if (activeItem.type === "image") {
      const intervalMs = 40;
      const step = (intervalMs / DEFAULT_IMAGE_DURATION_MS) * 100;

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev + step >= 100) {
            clearInterval(timer);
            nextSlide();
            return 100;
          }
          return prev + step;
        });
      }, intervalMs);

      return () => clearInterval(timer);
    }
  }, [activeIndex, activeItem.type]);

  // Video timeupdate progress tracking & video frame sync
  const handleVideoTimeUpdate = () => {
    if (bgVideoRef.current && activeItem.type === "video") {
      const curr = bgVideoRef.current.currentTime;
      const dur = bgVideoRef.current.duration;
      if (dur > 0) {
        const pct = (curr / dur) * 100;
        setProgress(pct);
      }

      // Synchronize thumbnail original & blurred videos with main stage video
      const origVid = origVideoRefs.current[activeIndex];
      const blurVid = blurVideoRefs.current[activeIndex];
      if (origVid && Math.abs(origVid.currentTime - curr) > 0.15) {
        origVid.currentTime = curr;
      }
      if (blurVid && Math.abs(blurVid.currentTime - curr) > 0.15) {
        blurVid.currentTime = curr;
      }
    }
  };

  // Video end handler -> advance to next slide
  const handleVideoEnded = () => {
    nextSlide();
  };

  // Toggle video play/pause
  const togglePlay = () => {
    if (bgVideoRef.current) {
      if (isPlaying) {
        bgVideoRef.current.pause();
      } else {
        bgVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle video sound
  const toggleMute = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Ensure video plays when active index changes
  useEffect(() => {
    if (bgVideoRef.current && activeItem.type === "video") {
      bgVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeIndex, activeItem]);

  // GSAP ScrollTrigger Entrance Animation
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.fromTo(
        ".gallery-bottom-navigation",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const currentProgressPct = Math.min(progress, 100);
  const clipPathValue = `inset(0 ${100 - currentProgressPct}% 0 0)`;

  return (
    <section ref={sectionRef} className="gym-gallery-section" id="gallery">
      {/* 100vh Fullscreen Background Main Stage Media */}
      <div className="bg-stage-media-wrapper">
        {activeItem.type === "video" ? (
          <video
            ref={bgVideoRef}
            key={activeItem.url}
            src={activeItem.url}
            autoPlay
            loop={false}
            muted={isMuted}
            playsInline
            preload="auto"
            onTimeUpdate={handleVideoTimeUpdate}
            onEnded={handleVideoEnded}
            className="bg-stage-media"
          />
        ) : (
          <img
            src={activeItem.url}
            alt={activeItem.title}
            className="bg-stage-media"
          />
        )}
        <div className="bg-stage-vignette" />
      </div>

      {/* Top Floating Media Controls (Positioned safely under fixed Navbar) */}
      {activeItem.type === "video" && (
        <div className="gallery-top-controls">
          <button className="ctrl-btn" onClick={toggleMute}>
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span>SOUND: {isMuted ? "OFF" : "ON"}</span>
          </button>
          <button className="ctrl-btn" onClick={togglePlay}>
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
          </button>
        </div>
      )}

      {/* Bottom Gallery Navigation Block */}
      <div className="gallery-bottom-navigation">
        {/* Active Slide Text Block (Headline + <p> quote paragraph right above thumbnails) */}
        <div className="active-slide-text-block">
          <h3 className="active-slide-title">
            <span className="slide-num">{activeItem.id}</span>
            <span className="slide-title-txt">{activeItem.artist} — {activeItem.title}</span>
          </h3>
          <p className="active-slide-quote" key={activeItem.id}>
            {activeItem.quote}
          </p>
        </div>

        {/* Thumbnail Filmstrip Cards Row */}
        <div className="filmstrip-row">
          {GALLERY_ITEMS.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.id}
                className={`filmstrip-card ${isActive ? "active" : ""}`}
                onClick={() => selectMedia(index)}
              >
                {/* 1. Original Image / Video (Base Layer - Always fully visible) */}
                {item.type === "video" ? (
                  <video
                    ref={(el) => { origVideoRefs.current[index] = el; }}
                    src={item.url}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="original-media"
                  />
                ) : (
                  <img src={item.url} alt={item.title} className="original-media" />
                )}

                {/* 2. Blur Reveal Layer (Clipped via clip-path: inset(0 100-progress% 0 0)) */}
                {isActive && (
                  <div
                    className="blur-reveal-layer"
                    style={{ clipPath: clipPathValue }}
                  >
                    {item.type === "video" ? (
                      <video
                        ref={(el) => { blurVideoRefs.current[index] = el; }}
                        src={item.url}
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="blurred-media"
                      />
                    ) : (
                      <img src={item.url} alt="" className="blurred-media" />
                    )}
                  </div>
                )}

                {/* 3. Glass Tint Layer (Clipped via exact same clip-path) */}
                {isActive && (
                  <div
                    className="glass-tint-layer"
                    style={{ clipPath: clipPathValue }}
                  />
                )}

                {/* 4. Divider Line (Positioned at progress%) */}
                {isActive && (
                  <div
                    className="divider-line"
                    style={{ left: `${currentProgressPct}%` }}
                  />
                )}

                {/* 5. Crosshair */}
                <div className="crosshair-icon">+</div>

                {/* 6. Corner Brackets */}
                <div className="corner-bracket corner-tl" />
                <div className="corner-bracket corner-tr" />
                <div className="corner-bracket corner-bl" />
                <div className="corner-bracket corner-br" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
