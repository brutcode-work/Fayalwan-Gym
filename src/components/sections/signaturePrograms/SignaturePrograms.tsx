"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "./SignaturePrograms.css";

interface Program {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  focus: string;
}

const PROGRAMS: Program[] = [
  { id: "strength", number: "01", title: "Strength", description: "Build real power with progressive training that meets you at your current level.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop", focus: "POWER · POSTURE · PROGRESSION" },
  { id: "fat-loss", number: "02", title: "Fat Loss", description: "Build a routine that burns energy, preserves strength, and fits into real life.", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop", focus: "ENERGY · CONSISTENCY · RESULTS" },
  { id: "cross-training", number: "03", title: "Cross Training", description: "Move with more capacity through a balanced mix of strength, conditioning, and mobility.", image: "https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=1200&auto=format&fit=crop", focus: "ENDURANCE · AGILITY · GRIT" },
  { id: "functional-fitness", number: "04", title: "Functional Fitness", description: "Train the movements that make your everyday body feel more capable and resilient.", image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop", focus: "MOBILITY · BALANCE · CONTROL" },
  { id: "bodybuilding", number: "05", title: "Bodybuilding", description: "A focused path for adding muscle, refining technique, and seeing the work take shape.", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop", focus: "MUSCLE · FORM · DETAIL" },
  { id: "personal-training", number: "06", title: "Personal Training", description: "One-to-one coaching built around your movement, schedule, and personal goals.", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop", focus: "COACHING · ACCOUNTABILITY · YOU" },
];

export default function SignaturePrograms() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  const goTo = (index: number) => swiper?.slideTo(index);

  return (
    <section className="signature-programs" id="programs" ref={sectionRef}>
      <header className="signature-programs__header">
        <p className="signature-programs__kicker"><span>02</span> TAILORED TRAINING</p>
        <p className="signature-programs__intro">Choose the way you want to move. We build the plan around where you are, not a one-size-fits-all template.</p>
      </header>

      <Swiper
        className="programs-swiper"
        modules={[Navigation, Keyboard, A11y]}
        slidesPerView={1}
        speed={700}
        keyboard={{ enabled: true }}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
      >
        {PROGRAMS.map((program) => (
          <SwiperSlide key={program.id}>
            <article className="program-slide">
              <div className="program-slide__content">
                <p className="program-slide__number">{program.number} / 06</p>
                <h2>{program.title}</h2>
                <p className="program-slide__description">{program.description}</p>
                <p className="program-slide__focus">{program.focus}</p>
              </div>
              <figure className="program-slide__media">
                <img src={program.image} alt={`${program.title} training`} loading="lazy" />
              </figure>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="programs-controls" aria-label="Training programmes navigation">
        <div className="programs-pagination" aria-label={`Programme ${activeIndex + 1} of ${PROGRAMS.length}`}>
          {PROGRAMS.map((program, index) => (
            <button className={index === activeIndex ? "is-active" : ""} key={program.id} onClick={() => goTo(index)} aria-label={`Show ${program.title}`}>
              <span>{program.number}</span>
            </button>
          ))}
        </div>
        <div className="programs-arrows">
          <button onClick={() => swiper?.slidePrev()} aria-label="Previous programme"><ArrowLeft size={18} /></button>
          <button onClick={() => swiper?.slideNext()} aria-label="Next programme"><ArrowRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
