"use client";

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="gym-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <h3 className="footer-logo">FAYALWAN GYM</h3>
            <p className="footer-desc">
              Fayalwan Gym is a premier fitness sanctuary designed to unleash your inner champion. 
              We specialize in elite strength training, high-performance conditioning, and personalized coaching.
            </p>
          </div>

          <div className="footer-links-col">
            <h6 className="column-title">Quick link</h6>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h6 className="column-title">Explore</h6>
            <ul className="footer-links-list">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#reviews">Google reviews</a></li>
              <li><a href="#stories">Stories that inspires us</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h6 className="column-title">Social</h6>
            <ul className="footer-links-list">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-info-row">
          <span className="copyright-text">
            ©{new Date().getFullYear()} Fayalwan Gym All rights reserved.
          </span>
          <span className="credits-text">
            Designed by <a href="https://brutcode.com/" target="_blank" rel="noopener noreferrer">BrutCode</a>
          </span>
        </div>

        <div className="footer-copyright-mobile">
          <span>©{new Date().getFullYear()} Fayalwan Gym All rights reserved.</span>
          <span>Designed by <a href="https://brutcode.com/" target="_blank" rel="noopener noreferrer">BrutCode</a></span>
        </div>

        <div className="giant-text-container">
          <h1 className="giant-bg-text">FAYALWAN GYM</h1>
        </div>
      </div>
    </footer>
  );
}
