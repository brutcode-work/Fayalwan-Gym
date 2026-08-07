"use client";

import { useState, useRef } from "react";
import "./TransformationStories.css";
import SectionHeader from "@/components/layout/Headers/SectionHeader";
import { Play, X, Sparkles, Check } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  hashtags: string[];
  beforeImg: string;
  processImg: string;
  afterImg: string;
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
    hashtags: [
      "#athleticrecomp",
      "#inbody770",
      "#biomechanics",
      "#14kgfatloss",
    ],
    beforeImg: "/transformations/devika-before.png",
    processImg: "/assets/avatar_1.png",
    afterImg: "/transformations/devika-after.png",
    storyQuote:
      "I went from chronic lower back pain to deadlifting 120kg. Fayalwan didn't just change my body; it re-engineered my posture and confidence.",
    fullStory:
      "Working side-by-side with certified biomechanics coach Alex Varghese in order to re-engineer body composition through clinical InBody 770 tracking.",
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
    hashtags: ["#hypertrophy", "#vtaper", "#fatloss", "#18kgdrop"],
    beforeImg: "/assets/transformation_1.png",
    processImg: "/assets/avatar_2.png",
    afterImg: "/assets/transformation_2.png",
    storyQuote:
      "Consistency was always hard until I joined Fayalwan. The biweekly InBody 770 scans and progressive overload programming made my progress mathematically undeniable.",
    fullStory:
      "Working side-by-side with head coach Priya Menon to structure a precision macro plan paired with high-intensity strength blocks.",
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
    hashtags: ["#powerlifting", "#corepower", "#speedstrength", "#athlete"],
    beforeImg:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    processImg: "/assets/avatar_3.png",
    afterImg:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    storyQuote:
      "The coaches here never compromise on execution. In 8 months, my bench press increased by 35kg while cutting 11kg of body fat. Pure engineering.",
    fullStory:
      "Working side-by-side with strength specialist Rahul Nair to build fast-twitch motor recruitment.",
    hasVideo: true,
    videoUrl: "/hero-vd.mp4",
    videoTitle: "Rohan's Athletic Explosiveness Story",
  },
];

export default function TransformationStories() {
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    title: string;
    name: string;
  } | null>(null);

  const containerRef = useRef<HTMLElement>(null);

  // Exactly 3 member stories displayed in 1 single section grid
  const featuredStories = STORIES.slice(0, 3);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseEnter = contextSafe(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const afterImg = e.currentTarget.querySelector(".after-image");
      if (afterImg) {
        gsap.to(afterImg, {
          x: "0%",
          duration: 0.65,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    },
  );

  const handleMouseLeave = contextSafe(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const afterImg = e.currentTarget.querySelector(".after-image");
      if (afterImg) {
        gsap.to(afterImg, {
          x: "-100%",
          duration: 0.5,
          ease: "power3.inOut",
          overwrite: "auto",
        });
      }
    },
  );

  return (
    <section
      className="mg-single-transformation-section"
      id="transformations"
      ref={containerRef}
    >
      <div className="mg-single-container">
        {/* SectionHeader OUTSIDE the map */}
        <SectionHeader
          label="07 // PROVEN EVOLUTION"
          headTop="Transformation Stories."
          headBottom="Real Members. Undeniable Results."
          description="True physical re-engineering isn't just about weight—it's raw discipline, structural strength, and peak human performance."
          sectionName="transformation"
        />

        {/* 3 Story Cards Grid (Single Section) */}
        <div className="mg-single-grid">
          {featuredStories.map((story) => (
            <div
              key={story.id}
              className="mg-single-card"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() =>
                story.hasVideo &&
                story.videoUrl &&
                setActiveVideo({
                  url: story.videoUrl,
                  title: story.videoTitle || story.name,
                  name: story.name,
                })
              }
            >
              {/* Image Frame */}
              <div className="mg-single-image-wrap">
                <div className="before-image single-image-wrap">
                  <img
                    src={story.afterImg}
                    alt={`${story.name} Transformation`}
                  />
                </div>
                <div className="after-image single-image-wrap">
                  <img
                    src={story.beforeImg}
                    alt={`${story.name} Transformation`}
                  />
                </div>
                {story.hasVideo && (
                  <div className="mg-single-video-badge">
                    <Play size={12} fill="currentColor" />
                    <span>WATCH STORY</span>
                  </div>
                )}
              </div>

              {/* Card Meta Content Below Image */}
              <div className="mg-single-card-meta">
                <div className="mg-single-meta-top">
                  <span className="mg-single-name">{story.name}</span>
                  <span className="mg-single-metrics">
                    {story.weightChange} • {story.durationLabel}
                  </span>
                </div>
                <p className="mg-single-program">{story.program}</p>
                <p className="mg-single-story-snippet">{story.fullStory}</p>
              </div>
            </div>
          ))}
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
