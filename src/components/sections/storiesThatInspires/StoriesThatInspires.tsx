"use client";

import { useState, useRef, MouseEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Trophy,
  Flame,
  Sparkles,
  Dumbbell,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import "./StoriesThatInspires.css";

gsap.registerPlugin(ScrollTrigger);

interface StoryChapter {
  id: string;
  tag: string;
  categoryTag: string;
  headline: string;
  author: string;
  title: string;
  quote: string;
  videoId: string;
  proofPoint: string;
  icon: any;
}

const CHAPTERS: StoryChapter[] = [
  {
    id: "01",
    tag: "OUR CONVICTION",
    categoryTag: "FOUNDING THESIS",
    headline: "WE STARTED BY GOING THE HARDWAY",
    author: "FAYALWAN SANCTUARY",
    title: "The Kazhakoottam Strength Manifesto",
    quote:
      "When we opened a raw strength facility in Kazhakoottam, critics said people only wanted soft cardio. We built a home for serious lifters, and proved that true strength endures.",
    videoId: "1bumPyvzCyo",
    proofPoint: "1200+ ACTIVE ATHLETES // 100% COACHED EFFORT",
    icon: ShieldCheck
  },
  {
    id: "02",
    tag: "MENTAL TOUGHNESS",
    categoryTag: "OUR CONVICTION",
    headline: "TOUGH TIMES STRENGTHEN OUR RESOLVE",
    author: "DAVID GOGGINS",
    title: "Mastering the Mind & Breaking Ceilings",
    quote:
      "When your brain tells you that you are completely exhausted, you are actually only at 40% of your capacity. Dig deeper and rewrite your limits.",
    videoId: "ngvOyccUzzY",
    proofPoint: "40% GOVERNING RULE // ZERO EXCUSES",
    icon: Flame
  },
  {
    id: "03",
    tag: "MAMBA MENTALITY",
    categoryTag: "OUR INSIGHT",
    headline: "DETAILS SEPARATE GOOD FROM LEGENDARY",
    author: "KOBE BRYANT",
    title: "The Obsessive Mamba Mindset",
    quote:
      "Greatness isn’t a switch you turn on during competition. It’s an obsessive daily devotion to the fundamentals when no one is watching.",
    videoId: "WY0wONSarXA",
    proofPoint: "5:00 AM DAILY DRILLS // MASTER THE BASICS",
    icon: Sparkles
  },
  {
    id: "04",
    tag: "RESILIENCE & POWER",
    categoryTag: "OUR PEOPLE",
    headline: "STAND FIRM IN WHAT YOU BELIEVE",
    author: "SERENA WILLIAMS",
    title: "Defining Unshakeable Willpower",
    quote:
      "I never let someone else define my potential. True champions are forged in the moments when failure feels guaranteed but you refuse to quit.",
    videoId: "sPo-M7Qp-Mc",
    proofPoint: "23 GRAND SLAMS // RELENTLESS PERSEVERANCE",
    icon: Trophy
  },
  {
    id: "05",
    tag: "RAW DEDICATION",
    categoryTag: "OUR PROOF POINTS",
    headline: "EVERYBODY WANTS TO BE A CHAMPION",
    author: "RONNIE COLEMAN",
    title: "The Price of Unmatched Greatness",
    quote:
      "Everybody wants to build an extraordinary physique, but nobody wants to lift the heavy weight required. You have to earn every single pound.",
    videoId: "KnGlCYOZR2c",
    proofPoint: "8X MR. OLYMPIA // HEAVY WEIGHT DEDICATION",
    icon: Dumbbell
  }
];

const ytCommand = (iframe: HTMLIFrameElement | null, cmd: string) => {
  if (!iframe) return;
  iframe.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func: cmd, args: [] }),
    "*"
  );
};

export default function StoriesThatInspires() {
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isPausedVideo, setIsPausedVideo] = useState(false);
  const [isMutedVideo, setIsMutedVideo] = useState(false);

  const activeChapter = CHAPTERS[activeIdx];

  const handleSelectChapter = (idx: number) => {
    if (idx === activeIdx) return;
    setIsPlayingVideo(false);
    setIsPausedVideo(false);
    setIsMutedVideo(false);
    setActiveIdx(idx);
  };

  const handlePlayPause = (e: MouseEvent) => {
    e.stopPropagation();
    if (isPausedVideo) {
      ytCommand(iframeRef.current, "playVideo");
      setIsPausedVideo(false);
    } else {
      ytCommand(iframeRef.current, "pauseVideo");
      setIsPausedVideo(true);
    }
  };

  const handleMuteToggle = (e: MouseEvent) => {
    e.stopPropagation();
    if (isMutedVideo) {
      ytCommand(iframeRef.current, "unMute");
      setIsMutedVideo(false);
    } else {
      ytCommand(iframeRef.current, "mute");
      setIsMutedVideo(true);
    }
  };

  // GSAP ScrollTrigger Entrance
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.fromTo(
        ".drive-stories-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        }
      );

      gsap.fromTo(
        ".drive-stories-grid",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".drive-stories-grid",
            start: "top 85%"
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className="drive-stories-section" ref={sectionRef} id="stories">
      {/* Subtle Noise Vignette Background */}
      <div className="drive-stories-bg-glow" />

      <div className="drive-stories-container">
        {/* Top Header Tagline (Drive Capital Minimal Style) */}
        <div className="drive-stories-header">
          <div className="header-mono-tag">
            <span className="tag-accent">04 // DRIVE CAPITAL INSPIRED</span>
            <span className="tag-sep">•</span>
            <span>STORIES THAT INSPIRE US</span>
          </div>

          <h2 className="drive-stories-main-title">
            WE HAVE NO INTEREST IN KEEPING OUR CONVICTION A SECRET.
          </h2>
          <p className="drive-stories-subtitle">
            Insights, mindsets, and stories of relentless discipline from world-class leaders and athletes.
          </p>
        </div>

        {/* Main Drive Capital Style Split Layout */}
        <div className="drive-stories-grid">
          {/* Left Column: Chapter Accordion / Rail Selector */}
          <div className="drive-chapters-rail">
            {CHAPTERS.map((chapter, idx) => {
              const isActive = idx === activeIdx;
              const Icon = chapter.icon;

              return (
                <button
                  key={chapter.id}
                  className={`rail-chapter-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleSelectChapter(idx)}
                >
                  <div className="rail-btn-top">
                    <span className="chapter-num">[{chapter.id}]</span>
                    <span className="chapter-category">{chapter.categoryTag}</span>
                  </div>

                  <div className="rail-btn-title-row">
                    <h4 className="rail-headline">{chapter.headline}</h4>
                    <ChevronRight className="rail-arrow" size={16} />
                  </div>

                  <div className="rail-author-tag">
                    <Icon size={12} className="author-icon" />
                    <span>{chapter.author}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Stage: Dynamic Featured Story Stage */}
          <div className="drive-story-stage">
            {/* Dynamic Headline & Tag */}
            <div className="stage-top-bar">
              <span className="stage-category-badge">{activeChapter.tag}</span>
              <span className="stage-proof-badge">{activeChapter.proofPoint}</span>
            </div>

            {/* Kinetic Title */}
            <h3 className="stage-headline">{activeChapter.headline}</h3>

            {/* Video / Thumbnail Media Stage Card */}
            <div className="stage-media-card">
              {isPlayingVideo ? (
                <div className="stage-video-wrapper">
                  <iframe
                    ref={iframeRef}
                    title={activeChapter.title}
                    src={`https://www.youtube.com/embed/${activeChapter.videoId}?autoplay=1&rel=0&modestbranding=1&controls=0&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="stage-iframe"
                  />

                  <div className="stage-video-controls">
                    <button
                      className="stage-ctrl-btn"
                      onClick={handlePlayPause}
                      aria-label={isPausedVideo ? "Play" : "Pause"}
                    >
                      {isPausedVideo ? <Play size={14} /> : <Pause size={14} />}
                    </button>
                    <button
                      className="stage-ctrl-btn"
                      onClick={handleMuteToggle}
                      aria-label={isMutedVideo ? "Unmute" : "Mute"}
                    >
                      {isMutedVideo ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="stage-thumb-wrapper"
                  onClick={() => setIsPlayingVideo(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${activeChapter.videoId}/maxresdefault.jpg`}
                    alt={activeChapter.title}
                    className="stage-thumb-img"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${activeChapter.videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="stage-thumb-overlay" />

                  <button className="stage-play-button" aria-label="Play video">
                    <Play size={24} className="play-icon" />
                  </button>

                  <div className="stage-thumb-info">
                    <span className="thumb-author">{activeChapter.author}</span>
                    <span className="thumb-title">{activeChapter.title}</span>
                  </div>

                  {/* Corner Viewfinder Markers */}
                  <div className="corner-marker marker-tl" />
                  <div className="corner-marker marker-tr" />
                  <div className="corner-marker marker-bl" />
                  <div className="corner-marker marker-br" />
                </div>
              )}
            </div>

            {/* Quote Card Block (Drive Capital Blockquote Style) */}
            <div className="stage-quote-block">
              <div className="quote-mark">&ldquo;</div>
              <blockquote className="quote-body">{activeChapter.quote}</blockquote>
              <div className="quote-footer">
                <span className="quote-author">— {activeChapter.author}</span>
                <span className="quote-title">{activeChapter.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
