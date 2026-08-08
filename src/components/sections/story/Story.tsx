"use client";

import { useRef } from "react";
import "./Story.css";
import { ArrowDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".story-header-wrapper",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-header-wrapper",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".story-narrative-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".story-narrative-card",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".story-split-grid",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-split-grid",
            start: "top 80%",
          },
        },
      );

      const stats = gsap.utils.toArray<HTMLElement>(".story-stat-number");
      stats.forEach((stat) => {
        const targetAttr = stat.getAttribute("data-target");
        if (!targetAttr) return;
        const targetVal = parseInt(targetAttr, 10);
        const countObj = { val: 0 };
        gsap.to(countObj, {
          val: targetVal,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
          onUpdate: () => {
            stat.textContent = Math.floor(countObj.val).toString();
          },
        });
      });

      gsap.fromTo(
        ".story-checklist-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-checklist-card",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".story-arrow-line-vertical",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".story-vertical-arrow-box",
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".story-savings-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-savings-card",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".story-quote-card",
        { opacity: 0, scale: 0.96, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-quote-card",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".story-closing",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-closing",
            start: "top 85%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section className="story-section" ref={sectionRef} id="story">
      <div className="story-container">
        <div className="story-header-wrapper">
          <div className="story-tag">LIFESTYLE DYNAMICS</div>
          <h2 className="story-heading">
            Your Weekly Choices Shape Your Future
          </h2>
          <p className="story-subtitle">
            Every day you make small choices. Those choices become your
            lifestyle.
          </p>
        </div>

        <div className="story-narrative-card">
          <p className="story-narrative-text">
            Imagine someone working near <strong>TechnoPark</strong>. Monday to
            Friday they spend money on coffee, snacks, biriyani, shawarma, soft
            drinks and weekend outings. That's a normal part of enjoying life.
            But they rarely realize how easily a tiny fraction of that budget
            could completely transform their health. The goal isn't to stop
            enjoying life. <strong>The goal is balance.</strong> Just one hour
            of movement every day can reduce stress, improve energy, increase
            confidence and help prevent lifestyle diseases. Whether you choose
            Fayalwan Gym or any other fitness center, make physical activity
            part of your life. Because your body is the only place you'll live
            forever.
          </p>
        </div>

        <div className="story-split-grid">
          <div className="story-card">
            <h3 className="story-card-title">Nearby Lifestyle</h3>
            <p className="story-card-meta">
              Based on businesses within approximately 2 km of Fayalwan Gym.
            </p>

            <div className="story-stats-grid">
              <div className="story-stat-box">
                <span className="story-box-emoji">🍔</span>
                <div className="story-stat-info">
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span className="story-stat-number" data-target="35">
                      0
                    </span>
                    <span className="story-stat-plus">+</span>
                  </div>
                  <span className="story-stat-title">Restaurants Nearby</span>
                  <span className="story-stat-desc">
                    Popular Choices Around You
                  </span>
                </div>
              </div>

              <div className="story-stat-box">
                <span className="story-box-emoji">☕</span>
                <div className="story-stat-info">
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span className="story-stat-number" data-target="20">
                      0
                    </span>
                    <span className="story-stat-plus">+</span>
                  </div>
                  <span className="story-stat-title">Cafes Nearby</span>
                  <span className="story-stat-desc">
                    Your Daily Coffee Stop
                  </span>
                </div>
              </div>

              <div className="story-stat-box">
                <span className="story-box-emoji">🏨</span>
                <div className="story-stat-info">
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span className="story-stat-number" data-target="12">
                      0
                    </span>
                    <span className="story-stat-plus">+</span>
                  </div>
                  <span className="story-stat-title">Hotels</span>
                  <span className="story-stat-desc">Business & Travelers</span>
                </div>
              </div>

              <div className="story-stat-box">
                <span className="story-box-emoji">🩺</span>
                <div className="story-stat-info">
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span className="story-stat-number" data-target="8">
                      0
                    </span>
                    <span className="story-stat-plus">+</span>
                  </div>
                  <span className="story-stat-title">Physiotherapy</span>
                  <span className="story-stat-desc">
                    Recovery & Rehabilitation
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="story-card">
            <h3 className="story-card-title">Average Daily Spending</h3>
            <p className="story-card-meta">
              Within 2 km of Fayalwan Gym. Typical spending on coffee, snacks,
              meals, soft drinks and weekend social outings.
            </p>

            <div className="story-spending-columns">
              <div className="story-spend-card">
                <h4 className="story-spend-card-header">Weekdays</h4>
                <ul className="story-spend-list">
                  <li>
                    <span>Coffee</span>
                    <span>₹80</span>
                  </li>
                  <li>
                    <span>Lunch Outside</span>
                    <span>₹180</span>
                  </li>
                  <li>
                    <span>Evening Snacks</span>
                    <span>₹120</span>
                  </li>
                  <li>
                    <span>Dinner/Tea</span>
                    <span>₹270</span>
                  </li>
                </ul>
                <div className="story-spend-total weekday">
                  <span>Average</span>
                  <span>₹650/day</span>
                </div>
              </div>

              <div className="story-spend-card">
                <h4 className="story-spend-card-header highlight">Weekend</h4>
                <ul className="story-spend-list">
                  <li>
                    <span>Breakfast</span>
                    <span>₹200</span>
                  </li>
                  <li>
                    <span>Lunch</span>
                    <span>₹350</span>
                  </li>
                  <li>
                    <span>Coffee</span>
                    <span>₹180</span>
                  </li>
                  <li>
                    <span>Dinner</span>
                    <span>₹470</span>
                  </li>
                </ul>
                <div className="story-spend-total weekend">
                  <span>Average</span>
                  <span>₹1,200/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="story-card story-checklist-card">
          <h3 className="story-card-title">Proportional Harmony</h3>
          <p className="story-card-meta">
            True wellness is about combining the joy of daily social outings
            with the benefits of active physical movement.
          </p>
          <div className="story-checklist-grid">
            <div className="story-checklist-side eating-out">
              <h4 className="story-check-header">
                🍔 Indulgences (Moderation)
              </h4>
              <ul className="story-check-list">
                <li>
                  <span className="story-check-bullet">🍕</span> Enjoying meals
                  with friends
                </li>
                <li>
                  <span className="story-check-bullet">☕</span> Daily cafe and
                  social stops
                </li>
                <li>
                  <span className="story-check-bullet">🍟</span> Quick comfort
                  foods
                </li>
                <li>
                  <span className="story-check-bullet">💸</span> Treating
                  yourself in moderation
                </li>
              </ul>
            </div>

            <div className="story-checklist-side gym-membership">
              <h4 className="story-check-header highlight">
                🏋️ Movement (Daily Investment)
              </h4>
              <ul className="story-check-list">
                <li>
                  <span className="story-check-bullet text-success">🛌</span>{" "}
                  Better sleep and deep recovery
                </li>
                <li>
                  <span className="story-check-bullet text-success">🦾</span>{" "}
                  Stronger, highly functional body
                </li>
                <li>
                  <span className="story-check-bullet text-success">🧘</span>{" "}
                  Reduced daily stress and anxiety
                </li>
                <li>
                  <span className="story-check-bullet text-success">🧠</span>{" "}
                  Unbreakable confidence and energy
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="story-vertical-arrow-box">
          <div className="story-vertical-item eating">
            <span className="story-item-emoji">🍔</span>
            <div className="story-item-details">
              <span className="story-item-name">Daily Leisure Spend</span>
              <span className="story-item-price">₹650/day</span>
            </div>
          </div>

          <div className="story-flow-arrow-container">
            <span className="story-flow-arrow-text">Finding Harmony</span>
            <div className="story-arrow-line-vertical"></div>
            <ArrowDown className="story-arrow-head-vertical" />
          </div>

          <div className="story-vertical-item gym">
            <span className="story-item-emoji">🏋️</span>
            <div className="story-item-details">
              <span className="story-item-name text-success">
                Daily Body Investment
              </span>
              <span className="story-item-price text-success">
                Only ₹120/day
              </span>
            </div>
          </div>
        </div>

        <div className="story-card story-savings-card">
          <h3 className="story-card-title">Proportional Allocation</h3>
          <p className="story-card-meta">
            A comparison demonstrating how a tiny fraction of your monthly food
            and leisure budget secures full fitness access.
          </p>
          <div className="story-savings-grid">
            <div className="story-savings-table-wrapper">
              <table className="story-savings-table">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>🍔 Daily Leisure</th>
                    <th>🏋️ Health Pass</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Per Day</td>
                    <td>₹650</td>
                    <td>₹120</td>
                  </tr>
                  <tr>
                    <td>Per Week</td>
                    <td>₹4,550</td>
                    <td>₹840</td>
                  </tr>
                  <tr>
                    <td>Per Month</td>
                    <td className="story-text-orange">₹19,500</td>
                    <td className="story-text-success">₹3,600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="story-potential-savings-box">
              <span className="story-ps-tag">HEALTH-TO-LEISURE RATIO</span>
              <span className="story-ps-value">
                18%<span className="story-ps-per"> of budget</span>
              </span>
              <p className="story-ps-desc">
                Your body investment is just 18% of what is typically allocated
                for casual dining. Balancing both yields true lifestyle
                vitality.
              </p>
            </div>
          </div>
        </div>

        <div className="story-quote-card">
          <div className="story-quote-decor">“</div>
          <p className="story-quote-text">
            "Good health isn't an expense. It's the foundation that makes every
            other part of life better."
          </p>
          <span className="story-quote-footer">
            — Your body will remember every investment
          </span>
        </div>

        <div className="story-closing">
          <h3 className="story-closing-title">Your Future Starts Today</h3>
          <p className="story-closing-text">
            Whether you choose Fayalwan Gym, another gym, or simply start
            walking every morning— the important thing is to start today.
          </p>
          <div className="story-closing-focus">
            Your body is the only place you'll ever live.
          </div>
          <div className="story-closing-tagline">Move More. Live Better.</div>
        </div>
      </div>
    </section>
  );
}
