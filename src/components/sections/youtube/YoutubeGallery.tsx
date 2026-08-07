"use client";

import "./YoutubeGallery.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface YtCardProps {
  id: string;
  title: string;
  views: string;
  likes: string;
  thumbnail: string;
}

const row1: YtCardProps[] = [
  {
    id: "1",
    title: "Complete Web Development Roadmap 2025",
    views: "138.6k Views",
    likes: "6.6k Likes",
    thumbnail: "/youtube/yt-1.png",
  },
  {
    id: "2",
    title: "Master JavaScript in 30 Days - Full Course",
    views: "1.7M Views",
    likes: "36.5k Likes",
    thumbnail: "/youtube/yt-2.png",
  },
  {
    id: "3",
    title: "React.js Complete Tutorial for Beginners",
    views: "1.8M Views",
    likes: "35.4k Likes",
    thumbnail: "/youtube/yt-3.png",
  },
  {
    id: "4",
    title: "Build Mass & Hypertrophy Fast: Science-Based Workout",
    views: "890k Views",
    likes: "24.1k Likes",
    thumbnail: "/youtube/yt-4.png",
  },
  {
    id: "5",
    title: "InBody 770 Clinical Body Fat Analysis & Tracking",
    views: "450k Views",
    likes: "18.3k Likes",
    thumbnail: "/youtube/yt-1.png",
  },
];

const row2: YtCardProps[] = [
  {
    id: "6",
    title: "Fat Loss Science Exposed: What 99% Get Wrong",
    views: "2.1M Views",
    likes: "54.2k Likes",
    thumbnail: "/youtube/yt-3.png",
  },
  {
    id: "7",
    title: "Shoulder & Chest Mass Building Session",
    views: "620k Views",
    likes: "19.8k Likes",
    thumbnail: "/youtube/yt-4.png",
  },
  {
    id: "8",
    title: "10-Minute Daily Mobility Routine for Athletes",
    views: "310k Views",
    likes: "12.5k Likes",
    thumbnail: "/youtube/yt-1.png",
  },
  {
    id: "9",
    title: "Heavy Deadlift Mechanics & Spine Safety Guide",
    views: "1.2M Views",
    likes: "41.0k Likes",
    thumbnail: "/youtube/yt-2.png",
  },
  {
    id: "10",
    title: "Zero Admission Special: Athletic Recomp Pass",
    views: "510k Views",
    likes: "15.9k Likes",
    thumbnail: "/youtube/yt-3.png",
  },
];

const row3: YtCardProps[] = [
  {
    id: "11",
    title: "1-on-1 Biomechanics Assessment & Posture Fix",
    views: "780k Views",
    likes: "29.4k Likes",
    thumbnail: "/youtube/yt-2.png",
  },
  {
    id: "12",
    title: "Ultimate Leg Day Workout Routine for Strength",
    views: "1.4M Views",
    likes: "48.7k Likes",
    thumbnail: "/youtube/yt-4.png",
  },
  {
    id: "13",
    title: "Nutrition Blueprint: Hitting Macros Simplified",
    views: "950k Views",
    likes: "31.2k Likes",
    thumbnail: "/youtube/yt-3.png",
  },
  {
    id: "14",
    title: "Full Gym Tour: Clinical Equipment & Heavy Steel",
    views: "2.5M Views",
    likes: "88.0k Likes",
    thumbnail: "/youtube/yt-1.png",
  },
  {
    id: "15",
    title: "Day in the Life of a Fayalwan Athlete",
    views: "1.1M Views",
    likes: "37.6k Likes",
    thumbnail: "/youtube/yt-2.png",
  },
];

const YoutubeCard = ({ item }: { item: YtCardProps }) => (
  <div className="yt-card">
    <div className="yt-card-img-wrapper">
      <img src={item.thumbnail} alt={item.title} className="yt-card-img" />
      <div className="yt-play-overlay">
        <div className="yt-play-btn">
          <Play size={20} fill="#ffffff" color="#ffffff" />
        </div>
      </div>
    </div>
    <div className="yt-card-info">
      <h3 className="yt-card-title">{item.title}</h3>
      <p className="yt-card-stats">
        {item.views} • {item.likes}
      </p>
    </div>
  </div>
);

const YoutubeGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cleanups: Array<() => void> = [];

      // ------------------------------------------------------------------
      // MARQUEE ANIMATIONS — only run when they can actually be seen.
      // Skip entirely for users who prefer reduced motion.
      // ------------------------------------------------------------------
      const allowMotion = !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (allowMotion) {
        // 1. GSAP Infinite Marquee Animations (paused by default)
        const marqueeLeft = gsap.to(".yt-track-left", {
          xPercent: -50,
          repeat: -1,
          duration: 36,
          ease: "none",
          paused: true,
        });

        const marqueeRight = gsap.fromTo(
          ".yt-track-right",
          { xPercent: -50 },
          {
            xPercent: 0,
            repeat: -1,
            duration: 36,
            ease: "none",
            paused: true,
          }
        );

        const marqueeLeftFast = gsap.to(".yt-track-left-fast", {
          xPercent: -50,
          repeat: -1,
          duration: 42,
          ease: "none",
          paused: true,
        });

        const marquees = [marqueeLeft, marqueeRight, marqueeLeftFast];

        // Track DOM nodes so we can promote them to their own GPU layer
        // ONLY while they are actively animating (avoids permanent layers).
        const trackEls = gsap.utils.toArray<HTMLElement>([
          ".yt-track-left",
          ".yt-track-right",
          ".yt-track-left-fast",
        ]);

        // Single source of truth for whether each row should be animating.
        let inView = false;
        const rowHover = [false, false, false];
        const isVisible = () => document.visibilityState === "visible";
        const layersActive = { current: false };

        const setLayers = (on: boolean) => {
          if (layersActive.current === on) return;
          layersActive.current = on;
          trackEls.forEach((el) => {
            el.style.willChange = on ? "transform" : "auto";
          });
        };

        const syncRow = (idx: number) => {
          const m = marquees[idx];
          if (!m) return;
          if (inView && isVisible() && !rowHover[idx]) m.play();
          else m.pause();
        };

        const syncAll = () => {
          const active = inView && isVisible();
          setLayers(active); // promote/demote layers with viewport + tab state
          marquees.forEach((_, i) => syncRow(i));
        };

        // 2. Play marquees only while the section is in the viewport.
        //    Uses an IntersectionObserver rather than a second ScrollTrigger:
        //    the section is pinned (wrapped in a pin-spacer) by the timeline
        //    below, which corrupts start/end position math for a sibling
        //    ScrollTrigger. IntersectionObserver reads real rendered geometry,
        //    is immune to the pin-spacer, and reports the correct state
        //    immediately on mount.
        if (sectionRef.current) {
          const io = new IntersectionObserver(
            (entries) => {
              inView = entries[0].isIntersecting;
              syncAll();
            },
            { threshold: 0 }
          );
          io.observe(sectionRef.current);
          cleanups.push(() => io.disconnect());
        }

        // 2b. Stop everything when the browser tab is backgrounded — no point
        // spending RAF/GPU on an animation the user cannot see.
        const onVisibilityChange = () => syncAll();
        document.addEventListener("visibilitychange", onVisibilityChange);
        cleanups.push(() =>
          document.removeEventListener("visibilitychange", onVisibilityChange)
        );

        // 2c. Pause the hovered row for readability, resume on leave.
        const rows = sectionRef.current?.querySelectorAll(".yt-row");
        rows?.forEach((row, idx) => {
          const onEnter = () => {
            rowHover[idx] = true;
            syncRow(idx);
          };
          const onLeave = () => {
            rowHover[idx] = false;
            syncRow(idx);
          };
          row.addEventListener("mouseenter", onEnter);
          row.addEventListener("mouseleave", onLeave);
          cleanups.push(() => {
            row.removeEventListener("mouseenter", onEnter);
            row.removeEventListener("mouseleave", onLeave);
          });
        });
      }

      // 3. Dynamic vertical overlap target calculation
      const getTargetY = () => {
        if (!sectionRef.current || !wrapperRef.current) return -window.innerHeight;
        const sectionH = sectionRef.current.offsetHeight;
        const wrapperH = wrapperRef.current.offsetHeight;

        if (wrapperH <= sectionH) {
          // Center wrapper vertically inside section with equal top/bottom space
          return -((sectionH + wrapperH) / 2);
        } else {
          // Move wrapper by its full height so its bottom aligns with section bottom
          return -wrapperH;
        }
      };

      // 4. Pinned Overlap ScrollTrigger Timeline
      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      timeLine
        .to(
          wrapperRef.current,
          {
            y: getTargetY,
            ease: "power1.inOut",
          },
          0
        )
        .to(
          headerRef.current,
          {
            opacity: 0.12,
            scale: 0.92,
            ease: "power1.inOut",
          },
          0
        );

      // Cleanup manually-added listeners on unmount / HMR re-run.
      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="youtube-gallery">
      <div ref={headerRef} className="yt-gallery-header">
        <h1>
          See What's People Loving On <span>YouTube.</span>
        </h1>
      </div>

      <div ref={wrapperRef} className="yt-gallery-wrapper">
        {/* Row 1 - Moving Left */}
        <div className="yt-row">
          <div className="yt-track yt-track-left">
            {row1.concat(row1).map((item, idx) => (
              <YoutubeCard key={`r1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="yt-row">
          <div className="yt-track yt-track-right">
            {row2.concat(row2).map((item, idx) => (
              <YoutubeCard key={`r2-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 3 - Moving Left */}
        <div className="yt-row">
          <div className="yt-track yt-track-left-fast">
            {row3.concat(row3).map((item, idx) => (
              <YoutubeCard key={`r3-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeGallery;
