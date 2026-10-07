"use client";

import { useRef } from "react";
import HeaderLabel from "@/components/ui/HeaderLabel";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Parallax scroll motion on the columns
      if (col1Ref.current) {
        gsap.to(col1Ref.current, {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (col2Ref.current) {
        gsap.to(col2Ref.current, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (col3Ref.current) {
        gsap.to(col3Ref.current, {
          y: -140,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="gallery-section-header">
        <HeaderLabel label="Our Family" fontType="sans" />
        <h2>Our Family</h2>
      </div>

      <div className="gallery-media-container">
        <div className="col col-1" ref={col1Ref}>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/736x/6c/e8/ac/6ce8ac43ac31770f3cee00a9dedd0ae9.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/eb/ad/a3/ebada3bda088d6396479007ed8bb90d2.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/04/71/7f/04717fc3f6d15dc1a8ace1c6bf5dd67f.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
        </div>

        <div className="col col-2" ref={col2Ref}>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/736x/6c/e8/ac/6ce8ac43ac31770f3cee00a9dedd0ae9.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/eb/ad/a3/ebada3bda088d6396479007ed8bb90d2.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/04/71/7f/04717fc3f6d15dc1a8ace1c6bf5dd67f.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
        </div>

        <div className="col col-3" ref={col3Ref}>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/736x/6c/e8/ac/6ce8ac43ac31770f3cee00a9dedd0ae9.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/eb/ad/a3/ebada3bda088d6396479007ed8bb90d2.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/04/71/7f/04717fc3f6d15dc1a8ace1c6bf5dd67f.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
