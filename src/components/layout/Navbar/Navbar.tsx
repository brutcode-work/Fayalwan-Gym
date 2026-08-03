"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "manifesto", label: "MANIFESTO" },
  { id: "story", label: "STORY" },
  { id: "reviews", label: "REVIEWS" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(true);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const prevScrollY = useRef(0);

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(".mobile-menu-overlay", {
          height: "auto",
          opacity: 1,
          padding: "1.5rem 1rem",
          duration: 0.4,
          ease: "power3.inOut",
        })
        .from(
          ".mobile-nav-link",
          {
            opacity: 0,
            y: -15,
            duration: 0.25,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.15"
        );
    },
    { scope: navContainerRef }
  );

  useGSAP(() => {
    if (timelineRef.current) {
      if (open) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (open) {
        setVisible(true);
      } else {
        const diff = currentScrollY - prevScrollY.current;
        if (currentScrollY > 100 && diff > 10) {
          setVisible(false);
        } else if (diff < -10 || currentScrollY <= 100) {
          setVisible(true);
        }
      }
      prevScrollY.current = currentScrollY;

      const sectionIds = ["home", "manifesto", "story", "reviews", "faq", "contact"];
      let currentActive = "home";
      const triggerOffset = window.innerHeight * 0.4;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerOffset && rect.bottom >= triggerOffset) {
            currentActive = id;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const handleNavClick = (e: MouseEvent<HTMLElement>, sectionId: string) => {
    e.preventDefault();
    setOpen(false);

    if (sectionId === "home") {
      const lenis = typeof window !== "undefined" ? (window as any).lenis : null;
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 1.5,
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const lenis = typeof window !== "undefined" ? (window as any).lenis : null;
      if (lenis) {
        lenis.scrollTo(targetElement, {
          duration: 1.5,
        });
      } else {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className={`navbar-container ${visible ? "" : "hidden"}`} ref={navContainerRef}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={(e) => handleNavClick(e, "home")}>
          <div className="logo-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="logo-svg">
              <path d="M6 15.5a4.5 4.5 0 0 1 0-9h2.2a6 6 0 1 1 7.6 7.6" />
              <path d="M8 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" opacity="0.4" />
            </svg>
          </div>
          <span className="logo-text">FAYALWAN GYM</span>
        </div>

        <div className="navbar-pill">
          <div className="navbar-links">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`nav-link-item ${activeSection === section.id ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, section.id)}
              >
                {section.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className={`navbar-cta-btn ${activeSection === "contact" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            JOIN US
          </a>
        </div>

        <div className="mobile-toggle-btn" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </div>
      </div>

      <div className="mobile-menu-overlay">
        <div className="mobile-menu-links">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`mobile-nav-link ${activeSection === section.id ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, section.id)}
            >
              {section.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`mobile-cta-btn mobile-nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            JOIN US
          </a>
        </div>
      </div>
    </nav>
  );
}
