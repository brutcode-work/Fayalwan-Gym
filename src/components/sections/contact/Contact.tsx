"use client";

import React, { useEffect, useState } from "react";
import "./Contact.css";
import { MapPin, Phone, Compass, Clock } from "lucide-react";

interface Timing {
  day: string;
  hours: string;
  closed?: boolean;
}

const TIMINGS: Timing[] = [
  { day: "Monday", hours: "6:00 am – 9:30 pm" },
  { day: "Tuesday", hours: "6:00 am – 9:30 pm" },
  { day: "Wednesday", hours: "6:00 am – 9:30 pm" },
  { day: "Thursday", hours: "6:00 am – 9:30 pm" },
  { day: "Friday", hours: "6:00 am – 9:30 pm" },
  { day: "Saturday", hours: "6:00 am – 9:30 pm" },
  { day: "Sunday", hours: "Closed", closed: true },
];

export default function Contact() {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    setCurrentDay(new Date().toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-banner">
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-content">
          <h2 className="contact-main-title">Contact Us</h2>
          <p className="contact-subtitle">
            Fayalwan Gym is ready to provide the right training environment and expert coaching tailored to your needs.
          </p>
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-info-panel">
            <h3 className="panel-title">Get in touch</h3>
            <p className="panel-intro">
              Have questions about memberships, facilities, or training programs? Stop by or reach out to us directly.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="icon-wrapper">
                  <MapPin className="info-icon" />
                </div>
                <div className="info-text">
                  <h4>Our Location</h4>
                  <p>First Floor, SeaPearl Building, above South Indian Bank, Mukkolakkal, P. O, Kulathoor, Thiruvananthapuram, Kerala 695582</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <Compass className="info-icon" />
                </div>
                <div className="info-text">
                  <h4>Get There</h4>
                  <p>~22 mins travel time from Thiruvananthapuram City Center</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <Phone className="info-icon" />
                </div>
                <div className="info-text">
                  <h4>Call Us</h4>
                  <p><a href="tel:09538116677">095381 16677</a></p>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Follow our social media</h4>
              <div className="social-icon-row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle-link">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle-link">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle-link">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-circle-link">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-timing-panel">
            <div className="panel-title-row">
              <Clock className="timing-title-icon" />
              <h3 className="panel-title">Gym Timing</h3>
            </div>
            <p className="panel-intro">
              Plan your workouts around our opening hours. Our trainers are available during all active sessions.
            </p>

            <div className="timings-list">
              {TIMINGS.map((t) => {
                const isToday = t.day === currentDay;
                return (
                  <div key={t.day} className={`timing-row ${isToday ? "today-active" : ""} ${t.closed ? "day-closed" : ""}`}>
                    <span className="day-name">{t.day}</span>
                    <div className="timing-divider"></div>
                    <span className="day-hours">
                      {t.hours}
                      {isToday && <span className="today-badge">Today</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contact-map-container">
          <iframe
            title="Fayalwan Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.566654094745!2d76.87487840484393!3d8.547734692671936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf543bea8063%3A0x3593225a54d1b64!2sFayalwan%20Gym!5e0!3m2!1sen!2sin!4v1785393627299!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="google-map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
