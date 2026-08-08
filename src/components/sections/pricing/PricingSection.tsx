"use client";

import { useState } from "react";
import "./PricingSection.css";
import SectionHeader from "@/components/layout/Headers/SectionHeader";
import { Check, ArrowRight } from "lucide-react";

export interface PricingPlan {
  id: string;
  index: string;
  name: string;
  tagline: string;
  priceINR: number;
  period: string;
  features: string[];
  ctaText: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "day-pass",
    index: "01",
    name: "DAILY ACCESS",
    tagline: "Drop in. Train hard. No commitment.",
    priceINR: 120,
    period: "/ day",
    features: [
      "Full gym access",
      "Olympic & strength equipment",
      "Locker & shower",
    ],
    ctaText: "GET DAY PASS",
  },
  {
    id: "monthly",
    index: "02",
    name: "MONTHLY ATHLETE",
    tagline: "Consistent progress. Built for regular training.",
    priceINR: 1999,
    period: "/ month",
    features: [
      "Unlimited gym floor access",
      "Biweekly InBody 770 scan",
      "Locker & recovery zone",
    ],
    ctaText: "START MONTHLY",
  },
  {
    id: "quarterly",
    index: "03",
    name: "QUARTERLY RECOMP",
    tagline: "A structured path toward measurable change.",
    priceINR: 4999,
    period: "/ 3 months",
    features: [
      "3 months unlimited access",
      "3 InBody 770 scans",
      "Custom workout blueprint",
    ],
    ctaText: "JOIN PROGRAM",
  },
  {
    id: "annual",
    index: "04",
    name: "ANNUAL SANCTUARY",
    tagline: "Maximum value for long-term commitment.",
    priceINR: 14999,
    period: "/ year",
    features: [
      "12 months unlimited access",
      "Monthly InBody 770 scans",
      "Dedicated coach reviews",
    ],
    ctaText: "CLAIM ANNUAL PASS",
  },
];

export const PERSONAL_TRAINING_PLANS: PricingPlan[] = [
  {
    id: "pt-monthly",
    index: "01",
    name: "PERSONAL PT",
    tagline: "One-on-one coaching focused entirely on your goals.",
    priceINR: 6500,
    period: "/ month",
    features: [
      "Dedicated personal trainer",
      "Customized workout plan",
      "Progress & performance tracking",
    ],
    ctaText: "START PERSONAL PT",
  },
  {
    id: "pt-group",
    index: "02",
    name: "GROUP PT",
    tagline: "Train together. Stay accountable. Push your limits.",
    priceINR: 2500,
    period: "/ month",
    features: [
      "Small group training",
      "Trainer-led workouts",
      "Progress tracking",
    ],
    ctaText: "JOIN GROUP PT",
  },
  {
    id: "pt-sections",
    index: "03",
    name: "SECTIONS PT",
    tagline: "Focused training built around specific fitness goals.",
    priceINR: 3500,
    period: "/ month",
    features: [
      "Goal-specific training",
      "Structured workout sessions",
      "Trainer guidance & corrections",
    ],
    ctaText: "JOIN SECTIONS PT",
  },
];

export default function PricingSection() {
  const [isPersonal, setIsPersonal] = useState(false);
  const activePlans = isPersonal ? PERSONAL_TRAINING_PLANS : PRICING_PLANS;

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* SectionHeader Component */}
        <SectionHeader
          label="ACCESSIBLE PRICING"
          headTop="Transparent Athletic Tiering."
          headBottom="World-Class Access."
          description="No hidden admission fees, no locked-in contracts. Premium strength training engineered for real progress in Kazhakoottam."
          sectionName="pricing"
        />

        {/* Pricing Toggle Switch */}
        <div className="pricing-toggle-container">
          <span className={`toggle-label ${!isPersonal ? "active" : ""}`}>
            Regular Pricing
          </span>
          <button
            className={`pricing-toggle-switch ${isPersonal ? "active" : ""}`}
            onClick={() => setIsPersonal(!isPersonal)}
            aria-label="Toggle pricing type"
          >
            <span className="toggle-slider"></span>
          </button>
          <span className={`toggle-label ${isPersonal ? "active" : ""}`}>
            Personal Training
          </span>
        </div>

        {/* Minimal Editorial Pricing Cards Grid */}
        <div className={`pricing-grid ${isPersonal ? "grid-3-cols" : ""}`}>
          {activePlans.map((plan) => (
            <div key={plan.id} className="pricing-card">
              {/* Top Meta Content */}
              <div className="card-top-content">
                {/* 1. Small Editorial Index & Label */}
                <div className="plan-label-row">
                  <span className="plan-index">{plan.index}</span>
                  <span className="plan-label-name">{plan.name}</span>
                </div>

                {/* 2. Large Dominant Price */}
                <div className="plan-price-row">
                  <span className="price-amount">
                    ₹{plan.priceINR.toLocaleString("en-IN")}
                  </span>
                  <span className="price-period">{plan.period}</span>
                </div>

                {/* 3. Short Supporting Sentence */}
                <p className="plan-description">{plan.tagline}</p>

                {/* 4. Minimal Feature List (Exactly 3 Rows) */}
                <div className="plan-features-list">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="plan-feature-row">
                      <Check size={13} className="feature-check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Bottom Anchored CTA with Divider */}
              <a href="#contact" className="plan-cta-btn">
                <span>{plan.ctaText}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
