"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import "./GymServices.css";

gsap.registerPlugin(CustomEase);

/* Entrances glide (expo-out: almost all the distance covered up front, then a long
   settle). Exits are decisive at both ends (quart-in-out) so leaving never reads as
   the entrance played backwards. */
CustomEase.create("servicesOut", "M0,0 C0.16,1 0.3,1 1,1");
CustomEase.create("servicesInOut", "M0,0 C0.76,0 0.24,1 1,1");

/* inset(top right bottom left). Both collapsed states have zero height, so swapping
   between them is invisible — that is what lets the wipe always travel downward
   instead of rewinding, while staying interruptible mid-hover. */
const REVEALED = "inset(0% 0% 0% 0%)";
const COLLAPSED_TOP = "inset(0% 0% 100% 0%)";
const COLLAPSED_BOTTOM = "inset(100% 0% 0% 0%)";

/* Mirrors the 900px breakpoint in the stylesheet, where the image becomes a static
   block with `clip-path: none`. Guarding on the same query — rather than on
   `(hover: hover)`, which is unreliable across hybrid and emulated devices — keeps
   the handlers from writing an inline clip-path that would override it. */
const isDesktopLayout = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 901px)").matches;

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const programs = [
  {
    id: 1,
    title: "Weight Loss",
    description:
      "Scientifically planned workouts and nutrition guidance to help you burn fat, improve endurance, and build healthy habits that last.",
    img: "https://i.pinimg.com/736x/9d/fa/b4/9dfab441e66da87077866b049e8da21e.jpg",
  },
  {
    id: 2,
    title: "Muscle Building",
    description:
      "Structured strength training focused on progressive overload, balanced nutrition, and consistent growth for every fitness level.",
    img: "https://i.pinimg.com/736x/e3/96/50/e396502f665651e7efdaf36aa3438ff5.jpg",
  },
  {
    id: 3,
    title: "Powerlifting",
    description:
      "Master the squat, bench press, and deadlift with expert coaching designed to improve technique, strength, and competition performance.",
    img: "https://i.pinimg.com/1200x/fd/e0/da/fde0da3a0d77a2c374b0a1c72d55996f.jpg",
  },
  {
    id: 4,
    title: "Cross Training",
    description:
      "High-energy functional workouts that combine strength, agility, mobility, and endurance to improve overall athletic performance.",
    img: "https://i.pinimg.com/1200x/5a/36/ae/5a36ae1aeaca226cc916cc06b042f0c9.jpg",
  },
  {
    id: 5,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals, fitness level, and lifestyle with continuous progress tracking and expert support.",
    img: "https://i.pinimg.com/1200x/ef/51/a4/ef51a4681d575c7232d78ce053b1dc3a.jpg",
  },
  {
    id: 6,
    title: "Women's Fitness",
    description:
      "Supportive fitness programs designed to build strength, confidence, flexibility, and long-term wellness in a comfortable environment.",
    img: "https://i.pinimg.com/736x/a1/f1/03/a1f103c67326772feff5cbd699fd5099.jpg",
  },
  {
    id: 7,
    title: "Cardio Conditioning",
    description:
      "Improve cardiovascular health, stamina, and calorie burn through engaging interval training and endurance-focused workouts.",
    img: "https://i.pinimg.com/1200x/1f/f2/4e/1ff24ec171f3b38543371ea0796444f8.jpg",
  },
];

const GymServices = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseEnter = contextSafe(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktopLayout()) return;
      const bg = e.currentTarget.querySelector(".gym-service-bg");
      const img = e.currentTarget.querySelector(".gym-services-img");
      const t = reducedMotion() ? 0 : 1;

      // The bar leads, the image follows a beat later — they should not move in lockstep.
      if (bg) {
        gsap.to(bg, {
          scaleY: 1,
          duration: 0.55 * t,
          ease: "servicesOut",
          overwrite: "auto",
        });
      }
      if (img) {
        gsap.to(img, {
          clipPath: REVEALED,
          duration: 0.72 * t,
          delay: 0.06 * t,
          ease: "servicesOut",
          overwrite: "auto",
        });
      }
    },
  );

  const handleMouseLeave = contextSafe(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktopLayout()) return;
      const bg = e.currentTarget.querySelector(".gym-service-bg");
      const img = e.currentTarget.querySelector(".gym-services-img");
      const t = reducedMotion() ? 0 : 1;

      if (bg) {
        gsap.to(bg, {
          scaleY: 0,
          duration: 0.45 * t,
          ease: "servicesInOut",
          overwrite: "auto",
        });
      }
      if (img) {
        // Keeps travelling down and off, then resets to the top edge invisibly.
        gsap.to(img, {
          clipPath: COLLAPSED_BOTTOM,
          duration: 0.38 * t,
          ease: "servicesInOut",
          overwrite: "auto",
          onComplete: () => gsap.set(img, { clipPath: COLLAPSED_TOP }),
        });
      }
    },
  );

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
