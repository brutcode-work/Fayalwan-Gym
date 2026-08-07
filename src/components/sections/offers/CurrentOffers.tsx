"use client";

import "./CurrentOffers.css";
import SectionHeader from "@/components/layout/Headers/SectionHeader";
import { ArrowRight, Tag, Check } from "lucide-react";

export const FEATURED_OFFER = {
  id: "featured-offer",
  category: "SPECIAL PROMOTION",
  title: "Seasonal Athletic Recomp Pass",
  discountBadge: "FLAT 20% OFF + 1 MONTH FREE",
  description:
    "Exclusive seasonal promotion for high-performance memberships. Lock in zero admission fees and full InBody 770 clinical tracking.",
  validity: "Limited Season Window • First 50 Enrolments",
  features: [
    "Applicable on 3M & 12M plans",
    "Biweekly InBody 770 clinical scans",
    "Zero admission or registration fee",
    "1-on-1 Biomechanics coach assessment",
  ],
  ctaText: "CLAIM SPECIAL OFFER",
};

export default function CurrentOffers() {
  return (
    <section className="current-offers-section" id="offers">
      <div className="offers-container">
        {/* SectionHeader Component */}
        <SectionHeader
          label="SPECIAL PROMOTION"
          headTop="Current Offer."
          headBottom="Limited Season Access."
          description="Unlock special seasonal rates, zero registration fees, and complimentary InBody 770 clinical tracking engineered for Trivandrum's athletes."
          sectionName="offers"
        />

        {/* Single Featured Offer Showcase Card */}
        <div className="single-offer-card">
          <div className="single-offer-layout">
            {/* Left Column: Metadata & Headline */}
            <div className="single-offer-main">
              <div className="single-offer-meta-row">
                <div className="single-offer-badge">
                  <Tag size={14} />
                  <span>{FEATURED_OFFER.category}</span>
                </div>
                <span className="single-offer-index">01 / 01</span>
              </div>

              <h3 className="single-offer-title">{FEATURED_OFFER.title}</h3>
              <span className="single-offer-discount">{FEATURED_OFFER.discountBadge}</span>
              <p className="single-offer-desc">{FEATURED_OFFER.description}</p>
              <span className="single-offer-validity">{FEATURED_OFFER.validity}</span>
            </div>

            {/* Right Column: Inclusions & CTA */}
            <div className="single-offer-side">
              <span className="side-features-label">WHAT'S INCLUDED:</span>
              <div className="single-offer-features">
                {FEATURED_OFFER.features.map((feat, idx) => (
                  <div key={idx} className="single-feature-row">
                    <Check size={14} className="feature-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="single-offer-cta">
                <span>{FEATURED_OFFER.ctaText}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
