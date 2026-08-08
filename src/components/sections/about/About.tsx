"use client";

import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-top">
          <div className="about-top-left">
            <h2 className="about-heading">
              What is our role in modern athletic training?
            </h2>
          </div>
          <div className="about-top-right">
            <p className="about-desc">
              Elite athletic conditioning is an essential foundation of physical
              mastery. Our tailored programs across strength, mobility, and
              performance recovery deliver results five times faster than
              unguided workouts.
            </p>
            <button className="about-btn">Learn More</button>
          </div>
        </div>

        <div className="about-cards-grid">
          <div className="about-img-card">
            <img
              src="https://i.pinimg.com/vwebp/736x/2c/24/5c/2c245c881c9c585d853c20f101527a5d.webp"
              alt="Strength & Conditioning"
            />
            <div className="about-card-tag">Strength & Conditioning</div>
          </div>

          <div className="about-img-card">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="/gym-inspiration.mp4"
            ></video>
            <div className="about-card-tag">Performance Recovery</div>
          </div>

          <div className="about-feature-card">
            <h3 className="about-feature-title">
              How dedicated coaching drives peak human performance in 2026?
            </h3>
            <a href="#contact" className="about-feature-link">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
