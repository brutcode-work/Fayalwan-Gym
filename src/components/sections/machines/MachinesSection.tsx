"use client";

import { useState, useRef } from "react";
import "./MachinesSection.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface GymMachine {
  id: number;
  name: string;
  description: string;
  coverImg: string;
  thumbImg: string;
}

const gymMachines: GymMachine[] = [
  {
    id: 1,
    name: "Treadmill",
    description:
      "Perfect for cardio workouts, fat loss, and endurance training. Adjustable speed and incline help simulate real running conditions.",
    coverImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1578762560072-053146e6a895?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Elliptical Trainer",
    description:
      "Low-impact cardio machine that targets both upper and lower body while reducing stress on joints.",
    coverImg: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Chest Press Machine",
    description:
      "Builds chest, shoulders, and triceps with controlled motion, ideal for beginners and strength training.",
    coverImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Lat Pulldown Machine",
    description:
      "Targets the back and lats, helping improve upper body strength, back definition, and posture.",
    coverImg: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Leg Press Machine",
    description:
      "Strengthens quads, hamstrings, and glutes with heavy load capacity and safe guided movement.",
    coverImg: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Smith Machine",
    description:
      "Provides guided barbell movement for safe squats, presses, and various compound barbell exercises.",
    coverImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Cable Crossover",
    description:
      "Highly versatile machine for full-body workouts with adjustable pulleys for isolation and functional exercises.",
    coverImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Seated Row Machine",
    description:
      "Targets mid-back muscles and improves posture with controlled, horizontal pulling motion.",
    coverImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Leg Extension Machine",
    description: "Isolates quadriceps and helps build strong, defined thighs and knee stability.",
    coverImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1574680131975-40de145b6f83?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Leg Curl Machine",
    description: "Focuses on hamstrings, improving leg muscular balance and protecting the knees from injury.",
    coverImg: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Shoulder Press Machine",
    description:
      "Builds strong shoulders, traps, and upper body stability with guided overhead pressing motion.",
    coverImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Ab Crunch Machine",
    description:
      "Targets core muscles and helps in building strong abs with controlled resistance and biomechanics.",
    coverImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    thumbImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop",
  },
];

const MachinesSection = () => {
  const [currentMachineIndex, setCurrentMachineIndex] = useState(0);
  const container = useRef<HTMLDivElement>(null);

  // Function to handle the two-phase transition
  const handleMachineChange = (idx: number) => {
    if (idx === currentMachineIndex) return;

    // Phase 1: Animate OUT
    const tl = gsap.timeline();

    tl.to(".machine-heading, .machine-desc", {
      y: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in",
    });

    tl.to(
      ".machine-cover-img",
      {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: () => {
          setCurrentMachineIndex(idx);
        },
      },
      "-=0.3"
    );
  };

  useGSAP(
    () => {
      // Phase 2: Animate IN
      const tl = gsap.timeline();

      gsap.set(".machine-cover-img", { clipPath: "inset(100% 0% 0% 0%)" });
      
      tl.to(".machine-cover-img", {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.fromTo(
        ".machine-cover-img img",
        { scale: 1.2 },
        { scale: 1, duration: 1.2, ease: "power3.out" }
      );

      // Animate text characters (replicating SplitText's beautiful word/char animation)
      tl.fromTo(
        ".machine-heading .char",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      );

      // Animate description words
      tl.fromTo(
        ".machine-desc .word",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.015, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );
    },
    { dependencies: [currentMachineIndex], scope: container }
  );

  const currentMachine = gymMachines[currentMachineIndex];

  return (
    <section ref={container} id="machines" className="machines-section">
      <div className="bg-huge-text">
        {currentMachine.name}
      </div>

      <div className="machine-cover-img">
        <img
          key={currentMachineIndex}
          src={currentMachine.coverImg}
          alt={currentMachine.name}
        />
      </div>
      
      <div key={currentMachineIndex} className="machine-texts">
        <div className="machine-heading-wrapper">
          <h3 className="machine-heading">
            {currentMachine.name.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="word" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="char" style={{ display: "inline-block" }}>
                    {char}
                  </span>
                ))}
                {wIdx < currentMachine.name.split(" ").length - 1 && "\u00A0"}
              </span>
            ))}
          </h3>
        </div>
        <div className="machine-desc-wrapper">
          <p className="machine-desc">
            {currentMachine.description.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="word" style={{ display: "inline-block" }}>
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="machine-selector-container">
        {gymMachines.map((machine, idx) => (
          <div
            onClick={() => handleMachineChange(idx)}
            key={machine.id}
            className={`tall-machine-img ${idx === currentMachineIndex ? "active-img" : ""}`}
          >
            <img src={machine.thumbImg} alt={machine.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MachinesSection;
