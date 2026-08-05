"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./GymServices.css";

export const programs = [
  {
    id: 1,
    title: "Weight Loss",
    description:
      "Scientifically planned workouts and nutrition guidance to help you burn fat, improve endurance, and build healthy habits that last.",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Muscle Building",
    description:
      "Structured strength training focused on progressive overload, balanced nutrition, and consistent growth for every fitness level.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Powerlifting",
    description:
      "Master the squat, bench press, and deadlift with expert coaching designed to improve technique, strength, and competition performance.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Cross Training",
    description:
      "High-energy functional workouts that combine strength, agility, mobility, and endurance to improve overall athletic performance.",
    img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals, fitness level, and lifestyle with continuous progress tracking and expert support.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "Women's Fitness",
    description:
      "Supportive fitness programs designed to build strength, confidence, flexibility, and long-term wellness in a comfortable environment.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 7,
    title: "Cardio Conditioning",
    description:
      "Improve cardiovascular health, stamina, and calorie burn through engaging interval training and endurance-focused workouts.",
    img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=600",
  },
];

const GymServices = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseEnter = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const bg = e.currentTarget.querySelector(".gym-service-bg");
    const img = e.currentTarget.querySelector(".gym-services-img");
    if (bg) {
      gsap.to(bg, { scaleY: 1, duration: 0.35, ease: "power2.out" });
    }
    if (img) {
      gsap.to(img, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" });
    }
  });

  const handleMouseLeave = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const bg = e.currentTarget.querySelector(".gym-service-bg");
    const img = e.currentTarget.querySelector(".gym-services-img");
    if (bg) {
      gsap.to(bg, { scaleY: 0, duration: 0.35, ease: "power2.out" });
    }
    if (img) {
      gsap.to(img, { opacity: 0, scale: 0.85, duration: 0.35, ease: "power2.out" });
    }
  });

  return (
    <section className="gym-services-main" ref={containerRef}>
      <div className="gym-services-header">
        <h2>Signature Programs</h2>
        <p>
          One hour. Day after day. That’s all it takes. <br />
          You bring the consistency. We bring the rest.
        </p>
      </div>
      <div className="gym-services-grid">
        {programs.map((program) => (
          <div
            key={program.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="gym-services-wrapper"
          >
            <div className="gym-services-content">
              <h4>{program.title}</h4>
              <div className="gym-service-para">
                <p>{program.description}</p>
              </div>
            </div>
            <div className="gym-services-img">
              <img src={program.img} alt={program.title} />
            </div>
            <div className="gym-service-bg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GymServices;
