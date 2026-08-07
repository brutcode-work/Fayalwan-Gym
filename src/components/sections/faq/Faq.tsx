"use client";

import { useState } from "react";
import "./Faq.css";
import { ArrowRight } from "lucide-react";

interface FaqData {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqData[] = [
  {
    id: 1,
    question: "I'm a complete beginner. Can I still join Fayalwan Gym?",
    answer:
      "Absolutely! We welcome members of all fitness levels. Our certified trainers will guide you through a comprehensive onboarding process, conduct a movement analysis, and customize workouts to match your current physical baseline and personal goals.",
  },
  {
    id: 2,
    question: "Do I need to bring anything for my first session?",
    answer:
      "Just bring comfortable athletic apparel, a personal water bottle, and a willingness to learn. We provide clean towels, keyless secure locker facilities, premium shower amenities, and all the specialized training gear you will need.",
  },
  {
    id: 3,
    question: "Are personal training sessions included in the plans?",
    answer:
      "Our standard day passes and base monthly plans include full facility and group class access. Dedicated one-on-one coaching packages can be added separately, ensuring you receive individualized attention tailored to your exact athletic needs.",
  },
  {
    id: 4,
    question: "What kind of group classes do you offer?",
    answer:
      "We offer a diverse weekly schedule including Strength & Power lifting, High Intensity Interval Training (HIIT), athletic speed & conditioning, and dedicated recovery yoga and mobility classes led by elite coaches.",
  },
];

interface FaqItemProps {
  item: FaqData;
  isActive: boolean;
  onToggle: () => void;
}

const FaqItem = ({ item, isActive, onToggle }: FaqItemProps) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="faq-question-row" onClick={onToggle}>
        <h3 className="faq-question">{item.question}</h3>
        <button
          className="faq-toggle-btn"
          aria-expanded={isActive}
          aria-label={isActive ? "Close FAQ answer" : "Open FAQ answer"}
        >
          <ArrowRight className="faq-btn-icon" />
        </button>
      </div>

      <div className="faq-answer-panel">
        <div className="faq-answer-content">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Faq() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <span className="faq-title-orange">Frequently</span>
        <span className="faq-title-white">Asked Questions</span>
      </div>

      <div className="faq-container">
        {FAQ_DATA.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
