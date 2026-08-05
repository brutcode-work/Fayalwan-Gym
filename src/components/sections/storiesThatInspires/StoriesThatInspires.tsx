"use client";

import { useState, useRef, MouseEvent } from "react";
import "./StoriesThatInspires.css";
import { Play, Pause, Volume2, VolumeX, Trophy, Flame, Sparkles, Dumbbell, ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";

interface StoryItem {
  id: string;
  name: string;
  focus: string;
  title: string;
  tag: string;
  icon: LucideIcon;
}

const STORIES: StoryItem[] = [
  {
    id: "1bumPyvzCyo",
    name: "Arnold Schwarzenegger",
    focus: "Vision & Discipline",
    title: "The Six Rules of Success",
    tag: "Visionary",
    icon: Trophy,
  },
  {
    id: "ngvOyccUzzY",
    name: "David Goggins",
    focus: "Mental Toughness",
    title: "Mastering the Mind",
    tag: "Hardcore",
    icon: Flame,
  },
  {
    id: "WY0wONSarXA",
    name: "Kobe Bryant",
    focus: "Mamba Mentality",
    title: "The Mamba Mentality",
    tag: "Elite",
    icon: Sparkles,
  },
  {
    id: "sPo-M7Qp-Mc",
    name: "Serena Williams",
    focus: "Resilience & Power",
    title: "Defining Greatness",
    tag: "Champion",
    icon: Trophy,
  },
  {
    id: "KnGlCYOZR2c",
    name: "Ronnie Coleman",
    focus: "Raw Dedication",
    title: "Yeah Buddy: Price of Greatness",
    tag: "Legend",
    icon: Dumbbell,
  },
];

const TX_OFFSET = [0, 400, 660];
const SCALE = [1.0, 0.8, 0.62];
const OPACITY = [1.0, 0.88, 0.65];
const BRIGHT = [1.0, 0.82, 0.62];
const Z_INDEX = [5, 3, 1];

const getCardStyle = (position: number) => {
  const abs = Math.abs(position);
  if (abs > 2)
    return {
      opacity: 0,
      pointerEvents: "none" as const,
      zIndex: 0,
      transform: "translateX(-50%) translateY(-50%)",
    };
  const sign = position === 0 ? 0 : position > 0 ? 1 : -1;
  return {
    transform: `translateX(-50%) translateX(${sign * TX_OFFSET[abs]}px) translateY(-50%) scale(${SCALE[abs]})`,
    opacity: OPACITY[abs],
    filter: `brightness(${BRIGHT[abs]})`,
    zIndex: Z_INDEX[abs],
    cursor: abs === 0 ? "default" : "pointer",
  };
};

const ytCommand = (iframe: HTMLIFrameElement | null, cmd: string) => {
  if (!iframe) return;
  iframe.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func: cmd, args: [] }),
    "*"
  );
};

export default function StoriesThatInspires() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoPaused, setVideoPaused] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const n = STORIES.length;

  const resetPlayer = () => {
    setIsPlaying(false);
    setVideoPaused(false);
    setVideoMuted(false);
  };

  const handleSelectStory = (index: number) => {
    if (index === activeIndex) return;
    resetPlayer();
    setActiveIndex(index);
  };

  const handlePrevVideo = () => {
    resetPlayer();
    setActiveIndex((prev) => (prev === 0 ? n - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    resetPlayer();
    setActiveIndex((prev) => (prev === n - 1 ? 0 : prev + 1));
  };

  const handlePlayPause = (e: MouseEvent) => {
    e.stopPropagation();
    if (videoPaused) {
      ytCommand(iframeRef.current, "playVideo");
      setVideoPaused(false);
    } else {
      ytCommand(iframeRef.current, "pauseVideo");
      setVideoPaused(true);
    }
  };

  const handleMuteToggle = (e: MouseEvent) => {
    e.stopPropagation();
    if (videoMuted) {
      ytCommand(iframeRef.current, "unMute");
      setVideoMuted(false);
    } else {
      ytCommand(iframeRef.current, "mute");
      setVideoMuted(true);
    }
  };

  const cards = STORIES.map((story, idx) => {
    let pos = (idx - activeIndex + n) % n;
    if (pos > Math.floor(n / 2)) pos -= n;
    return { ...story, storyIndex: idx, position: pos };
  });

  return (
    <section className="stories-that-inspire" id="stories">
      <div className="sti-bg-glow" />

      <div className="sti-header">
        <span className="sti-section-tag">Iconic Mindsets</span>
        <h2 className="sti-heading">
          <span className="white">Stories that inspires us</span>
        </h2>
        <p className="sti-subtext">
          Learn from those who redefined human limit, willpower, and dedication.
        </p>
      </div>

      <div className="sti-carousel-wrapper">
        <div className="sti-carousel-track">
          {cards.map((story) => {
            const isCenter = story.position === 0;
            const StoryIcon = story.icon;

            return (
              <div
                key={story.storyIndex}
                className="sti-carousel-card"
                style={getCardStyle(story.position)}
                onClick={() => !isCenter && handleSelectStory(story.storyIndex)}
              >
                <img
                  src={
                    isCenter
                      ? `https://img.youtube.com/vi/${story.id}/maxresdefault.jpg`
                      : `https://img.youtube.com/vi/${story.id}/mqdefault.jpg`
                  }
                  alt={story.name}
                  className="sti-carousel-thumb"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes("maxresdefault") || target.src.includes("mqdefault")) {
                      target.src = `https://img.youtube.com/vi/${story.id}/hqdefault.jpg`;
                    }
                  }}
                />

                {isCenter ? (
                  <>
                    {isPlaying ? (
                      <div className="sti-player-wrapper">
                        <iframe
                          ref={iframeRef}
                          title={story.title}
                          src={`https://www.youtube.com/embed/${story.id}?autoplay=1&rel=0&modestbranding=1&controls=0&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          className="sti-iframe-overlay"
                        />
                        <div className="sti-custom-controls">
                          <button
                            className="sti-ctrl-btn"
                            onClick={handlePlayPause}
                            aria-label={videoPaused ? "Play" : "Pause"}
                          >
                            {videoPaused ? (
                              <Play className="sti-ctrl-icon" />
                            ) : (
                              <Pause className="sti-ctrl-icon" />
                            )}
                          </button>
                          <button
                            className="sti-ctrl-btn"
                            onClick={handleMuteToggle}
                            aria-label={videoMuted ? "Unmute" : "Mute"}
                          >
                            {videoMuted ? (
                              <VolumeX className="sti-ctrl-icon" />
                            ) : (
                              <Volume2 className="sti-ctrl-icon" />
                            )}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="sti-carousel-gradient" />
                        <button
                          className="sti-play-btn"
                          aria-label="Play video"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPlaying(true);
                          }}
                        >
                          <Play className="sti-play-icon" />
                        </button>
                        <div className="sti-carousel-info">
                          <div className="sti-main-badge">
                            <StoryIcon className="sti-main-badge-icon" />
                            <span>{story.tag}</span>
                          </div>
                          <h3 className="sti-carousel-title">{story.name}</h3>
                          <p className="sti-carousel-subtitle">{story.focus}</p>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="sti-carousel-side-overlay" />
                    <div className="sti-side-badge">
                      <Play className="sti-side-play-small" />
                      <span>{story.name.split(" ")[0]}</span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="sti-nav-buttons">
        <button className="sti-nav-btn prev" onClick={handlePrevVideo} aria-label="Previous video">
          <ChevronLeft className="sti-nav-icon" />
        </button>
        <button className="sti-nav-btn next" onClick={handleNextVideo} aria-label="Next video">
          <ChevronRight className="sti-nav-icon" />
        </button>
      </div>
    </section>
  );
}
