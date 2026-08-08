"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "coaches", label: "Coaches" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(true);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);

  useGSAP(
    () => {
      if (open) {
        gsap
          .timeline()
          .to(".mobile-menu-overlay", {
            autoAlpha: 1,
            duration: 0.4,
            ease: "power3.inOut",
          })
          .fromTo(
            ".mobile-nav-link",
            { opacity: 0, y: 35, rotate: 2 },
            {
              opacity: 1,
              y: 0,
              rotate: 0,
              duration: 0.45,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.25",
          )
          .fromTo(
            ".mobile-menu-footer",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.2",
          );
      } else {
        gsap
          .timeline()
          .to(".mobile-nav-link", {
            opacity: 0,
            y: -15,
            duration: 0.25,
            stagger: 0.03,
            ease: "power2.in",
          })
          .to(
            ".mobile-menu-footer",
            {
              opacity: 0,
              y: 10,
              duration: 0.2,
              ease: "power2.in",
            },
            "-=0.2",
          )
          .to(
            ".mobile-menu-overlay",
            {
              autoAlpha: 0,
              duration: 0.35,
              ease: "power3.inOut",
            },
            "-=0.1",
          );
      }
    },
    { dependencies: [open], scope: navContainerRef },
  );

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

      const sectionIds = [
        "home",
        "experience",
        "services",
        "coaches",
        "pricing",
        "faq",
        "contact",
      ];
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
      const lenis =
        typeof window !== "undefined" ? (window as any).lenis : null;
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
      const lenis =
        typeof window !== "undefined" ? (window as any).lenis : null;
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
    <nav
      className={`navbar-container ${visible ? "" : "hidden"}`}
      ref={navContainerRef}
    >
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={(e) => handleNavClick(e, "home")}>
          <span className="logo-text">Fahalwan Gym</span>
        </div>

        <div className="navbar-right">
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
            className="navbar-cta-btn"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact Us
          </a>
        </div>

        <button
          className={`mobile-hamburger-btn ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>
      </div>

      <div className="mobile-menu-overlay">
        <div className="mobile-menu-inner">
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
              className="mobile-cta-btn mobile-nav-link"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact Us
            </a>
          </div>

          <div className="mobile-menu-footer">
            <div className="mobile-footer-info">
              <span className="mobile-footer-label">Location</span>
              <p className="mobile-footer-value">Kazhakoottam, Trivandrum</p>
            </div>
            <div className="mobile-footer-info">
              <span className="mobile-footer-label">Access</span>
              <p className="mobile-footer-value">₹120 / Day Access</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
