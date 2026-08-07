"use client";

import "./CurrentOffers.css";
import SectionHeader from "@/components/layout/Headers/SectionHeader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

export default function CurrentOffers() {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);

  useGSAP(() => {
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    timeLine.to(bannerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  return (
    <section ref={sectionRef} className="current-offers-section" id="offers">
      <div className="offers-container">
        {/* SectionHeader Component */}
        <SectionHeader
          label="SPECIAL PROMOTION"
          headTop="Current Offer."
          headBottom="Limited Season Access."
          description="Unlock special seasonal rates, zero registration fees, and complimentary InBody 770 clinical tracking engineered for Trivandrum's athletes."
          sectionName="offers"
        />
        <div ref={bannerRef} className="promotional-banner">
          <img src="/promotion/promotion-banner.png" alt="" />
        </div>
        {/* Wide Editorial Offer Container */}
        <div className="editorial-offer-card">
          {/* Top Meta Row */}
          <div className="offer-editorial-top">
            <span className="offer-label-badge">SPECIAL PROMOTION</span>
            <span className="offer-label-index">01 / 01</span>
          </div>

          <div className="offer-editorial-divider" />

          {/* Main 2-Column Editorial Grid */}
          <div className="offer-editorial-grid">
            {/* Left Column: Title, Discount & Description */}
            <div className="offer-col-left">
              <h3 className="offer-editorial-title">
                Seasonal Athletic <br /> Recomp Pass
              </h3>

              <span className="offer-editorial-discount">
                FLAT 20% OFF + 1 MONTH FREE
              </span>

              <p className="offer-editorial-desc">
                A limited-time offer for athletes ready to commit to serious
                training.
              </p>
            </div>

            {/* Right Column: What's Included */}
            <div className="offer-col-right">
              <span className="inclusions-title">WHAT'S INCLUDED</span>
              <div className="inclusions-list">
                <div className="inclusion-item">
                  <Check size={14} className="inclusion-check" />
                  <span>Applicable on 3M & 12M plans</span>
                </div>
                <div className="inclusion-item">
                  <Check size={14} className="inclusion-check" />
                  <span>Biweekly InBody 770 scans</span>
                </div>
                <div className="inclusion-item">
                  <Check size={14} className="inclusion-check" />
                  <span>Zero admission or registration fee</span>
                </div>
                <div className="inclusion-item">
                  <Check size={14} className="inclusion-check" />
                  <span>1-on-1 biomechanics assessment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="offer-editorial-divider" />

          {/* Bottom Meta & CTA Row */}
          <div className="offer-editorial-bottom">
            <div className="offer-bottom-validity">
              <span>LIMITED SEASON WINDOW</span>
              <span>FIRST 50 ENROLMENTS</span>
            </div>

            <a href="#contact" className="offer-editorial-cta">
              <span>CLAIM OFFER</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
