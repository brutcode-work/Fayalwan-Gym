"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Volume2,
  VolumeX,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./GymGallery.css";
import SectionHeader from "@/components/layout/Headers/SectionHeader";

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
    title: "TREADMILL",
    artist: "FAYALWAN",
    category: "CARDIO ZONE",
    type: "image",
    url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:00:15",
    quote:
      "Perfect for cardio workouts, fat loss, and endurance training. Adjustable speed and incline help simulate real running conditions.",
  },
  {
    id: "02",
    title: "ELLIPTICAL TRAINER",
    artist: "FAYALWAN",
    category: "CARDIO ZONE",
    type: "image",
    url: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:00:24",
    quote:
      "Low-impact cardio machine that targets both upper and lower body while reducing stress on joints.",
  },
  {
    id: "03",
    title: "CHEST PRESS",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:00:36",
    quote:
      "Builds chest, shoulders, and triceps with controlled motion, ideal for beginners and strength training.",
  },
  {
    id: "04",
    title: "LAT PULLDOWN",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:00:48",
    quote:
      "Targets the back and lats, helping improve upper body strength, back definition, and posture.",
  },
  {
    id: "05",
    title: "LEG PRESS",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:01:05",
    quote:
      "Strengthens quads, hamstrings, and glutes with heavy load capacity and safe guided movement.",
  },
  {
    id: "06",
    title: "SMITH MACHINE",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:01:15",
    quote:
      "Provides guided barbell movement for safe squats, presses, and various compound barbell exercises.",
  },
  {
    id: "07",
    title: "CABLE CROSSOVER",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:01:25",
    quote:
      "Highly versatile machine for full-body workouts with adjustable pulleys for isolation and functional exercises.",
  },
  {
    id: "08",
    title: "SEATED ROW",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:01:35",
    quote:
      "Targets mid-back muscles and improves posture with controlled, horizontal pulling motion.",
  },
  {
    id: "09",
    title: "LEG EXTENSION",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:01:45",
    quote:
      "Isolates quadriceps and helps build strong, defined thighs and knee stability.",
  },
  {
    id: "10",
    title: "LEG CURL",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:01:55",
    quote:
      "Focuses on hamstrings, improving leg muscular balance and protecting the knees from injury.",
  },
  {
    id: "11",
    title: "SHOULDER PRESS",
    artist: "FAYALWAN",
    category: "STRENGTH AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:02:05",
    quote:
      "Builds strong shoulders, traps, and upper body stability with guided overhead pressing motion.",
  },
  {
    id: "12",
    title: "AB CRUNCH",
    artist: "FAYALWAN",
    category: "CORE AREA",
    type: "image",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    timestamp: "00:02:15",
    quote:
      "Targets core muscles and helps in building strong abs with controlled resistance and biomechanics.",
  },
];

const DEFAULT_IMAGE_DURATION_MS = 5000;

export default function GymEquipement() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const origVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const blurVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const viewportRef = useRef<HTMLDivElement>(null);

  const elapsedRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const activeItem = GALLERY_ITEMS[activeIndex];

  // Helper to advance to next slide
  const nextSlide = () => {
    elapsedRef.current = 0;
    setProgress(0);
    setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  // Select card manually
  const selectMedia = (index: number) => {
    elapsedRef.current = 0;
    setProgress(0);
    setActiveIndex(index);
  };

  const scrollLeft = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  // Track section visibility — everything below stays idle while off-screen
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-center active item inside the filmstrip ONLY.
  // scrollIntoView() is deliberately avoided here: it scrolls every scrollable
  // ancestor (including the page), which yanked the user back to this section
  // whenever the timer advanced while they were reading another section.
  useEffect(() => {
    if (!isInView) return;

    const viewport = viewportRef.current;
    const activeEl = viewport?.querySelector<HTMLElement>(
      ".filmstrip-card.active",
    );
    if (!viewport || !activeEl) return;

    const cardRect = activeEl.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const delta =
      cardRect.left +
      cardRect.width / 2 -
      (viewportRect.left + viewportRect.width / 2);

    viewport.scrollTo({
      left: viewport.scrollLeft + delta,
      behavior: "smooth",
    });
  }, [activeIndex, isInView]);

  // Handle Image timer progress — paused entirely while off-screen,
  // and resumed from where it left off when the section comes back.
  useEffect(() => {
    if (!isInView || activeItem.type !== "image") return;

    const intervalMs = 40;

    const timer = setInterval(() => {
      elapsedRef.current += intervalMs;
      const pct = (elapsedRef.current / DEFAULT_IMAGE_DURATION_MS) * 100;

      if (pct >= 100) {
        setProgress(100);
        nextSlide();
      } else {
        setProgress(pct);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [activeIndex, activeItem.type, isInView]);

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

  // Ensure video plays when active index changes (only while on-screen)
  useEffect(() => {
    if (isInView && bgVideoRef.current && activeItem.type === "video") {
      bgVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeIndex, activeItem, isInView]);

  // Suspend / resume every video element with the section's visibility
  useEffect(() => {
    const thumbs = [
      ...Object.values(origVideoRefs.current),
      ...Object.values(blurVideoRefs.current),
    ];

    if (!isInView) {
      bgVideoRef.current?.pause();
      thumbs.forEach((vid) => vid?.pause());
      return;
    }

    thumbs.forEach((vid) => vid?.play().catch(() => {}));
    if (isPlaying && activeItem.type === "video") {
      bgVideoRef.current?.play().catch(() => {});
    }
  }, [isInView, isPlaying, activeItem.type]);

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
        },
      );
    },
    { scope: sectionRef },
  );

  const currentProgressPct = Math.min(progress, 100);
  const clipPathValue = `inset(0 ${100 - currentProgressPct}% 0 0)`;

  return (
    <>
      <div className="equipment-header-wrapper">
        <SectionHeader
          label="PREMIUM EQUIPMENT"
          headTop="Strength Starts,"
          headBottom="With Better Tools."
          description="Professional gym equipment and free weights that help you build strength, improve fitness, and train with complete confidence."
          sectionName="equipment"
        />
      </div>
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
              <span className="slide-title-txt">
                {activeItem.artist} — {activeItem.title}
              </span>
            </h3>
            <p className="active-slide-quote" key={activeItem.id}>
              {activeItem.quote}
            </p>
          </div>

          {/* Navigation Wrapper with Buttons and Viewport */}
          <div className="filmstrip-container-wrapper">
            <button
              className="nav-arrow-btn left-arrow"
              onClick={scrollLeft}
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="filmstrip-viewport" ref={viewportRef}>
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
                          ref={(el) => {
                            origVideoRefs.current[index] = el;
                          }}
                          src={item.url}
                          muted
                          loop
                          autoPlay
                          playsInline
                          className="original-media"
                        />
                      ) : (
                        <img
                          src={item.url}
                          alt={item.title}
                          className="original-media"
                        />
                      )}

                      {/* 2. Blur Reveal Layer (Clipped via clip-path: inset(0 100-progress% 0 0)) */}
                      {isActive && (
                        <div
                          className="blur-reveal-layer"
                          style={{ clipPath: clipPathValue }}
                        >
                          {item.type === "video" ? (
                            <video
                              ref={(el) => {
                                blurVideoRefs.current[index] = el;
                              }}
                              src={item.url}
                              muted
                              loop
                              autoPlay
                              playsInline
                              className="blurred-media"
                            />
                          ) : (
                            <img
                              src={item.url}
                              alt=""
                              className="blurred-media"
                            />
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

            <button
              className="nav-arrow-btn right-arrow"
              onClick={scrollRight}
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
