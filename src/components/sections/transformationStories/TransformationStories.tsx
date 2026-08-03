"use client";

import { useState, useRef } from "react";
import "./TransformationStories.css";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STORIES = [
  {
    id: 1,
    name: "Deepa khan",
    date: "May 29, 2024",
    text: "When I joined, I was nervous. But the trainers never made me feel behind or out of place. They understood my goals and gave me the space to grow.",
    rating: 4,
    avatar: "/assets/avatar_1.png",
    image: "/assets/transformation_1.png",
  },
  {
    id: 2,
    name: "Karan Malhotra",
    date: "June 15, 2024",
    text: "Consistency is key, but having coaches who know exactly when to push you and when to focus on recovery is a game-changer. I achieved my peak physique in just 6 months.",
    rating: 5,
    avatar: "/assets/avatar_2.png",
    image: "/assets/transformation_2.png",
  },
];

export default function TransformationStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const activeStory = STORIES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1));
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".ts-user-profile, .ts-quote-icon, .ts-quote-text",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".ts-member-img",
        { opacity: 0.4, scale: 1.15 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    },
    { dependencies: [activeIndex], scope: containerRef }
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const isFilled = i < rating;
      return (
        <div
          key={i}
          className={`ts-star-box ${isFilled ? "filled" : "empty"}`}
          aria-label={isFilled ? "Filled Star" : "Empty Star"}
        >
          <Star className="ts-star-icon" />
        </div>
      );
    });
  };

  return (
    <section className="transformation-stories" ref={containerRef} id="testimonials">
      <div className="ts-header">
        <span className="ts-tag">Testimonials</span>
        <h2 className="ts-heading">
          <span className="highlight">Because staying fit </span>
          <br />
          <span className="white">should feel good</span>
        </h2>
        <p className="ts-subtext">Just a place where you can grow - your way.</p>
      </div>

      <div className="ts-container">
        <div className="ts-card">
          <div className="ts-card-left">
            <div>
              <div className="ts-user-profile">
                <div className="ts-avatar-wrapper">
                  <img
                    src={activeStory.avatar}
                    alt={activeStory.name}
                    className="ts-avatar"
                  />
                </div>
                <div className="ts-user-details">
                  <h4 className="ts-user-name">{activeStory.name}</h4>
                  <span className="ts-date">{activeStory.date}</span>
                </div>
              </div>

              <div className="ts-quote-icon">
                <span className="ts-quote-mark" />
                <span className="ts-quote-mark" />
              </div>

              <div className="ts-quote-content">
                <p className="ts-quote-text">"{activeStory.text}"</p>
              </div>
            </div>

            <div className="ts-card-footer">
              <div className="ts-rating">
                {renderStars(activeStory.rating)}
              </div>

              <div className="ts-controls">
                <button
                  className="ts-nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft className="ts-btn-icon" />
                </button>
                <button
                  className="ts-nav-btn"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                >
                  <ArrowRight className="ts-btn-icon" />
                </button>
              </div>
            </div>
          </div>

          <div className="ts-card-right">
            <div className="ts-image-container">
              <img
                src={activeStory.image}
                alt={`${activeStory.name}'s Transformation`}
                className="ts-member-img"
              />
              <div className="ts-image-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
