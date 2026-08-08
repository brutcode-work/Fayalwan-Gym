import React from "react";

export default function GymIllustration() {
  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="100%"
      viewBox="0 0 240 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="awwwards-hero-svg"
    >
      <line
        x1="0"
        y1="50"
        x2="240"
        y2="50"
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <line
        x1="120"
        y1="0"
        x2="120"
        y2="100"
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />

      <circle
        cx="120"
        cy="50"
        r="32"
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="1"
      />
      <circle
        cx="120"
        cy="50"
        r="20"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        strokeDasharray="18 6"
      />
      <circle cx="120" cy="50" r="4" fill="var(--accent-color)" />

      <path
        d="M40 50 L50 50 M190 50 L200 50"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M120 20 L120 26 M120 74 L120 80"
        stroke="var(--accent-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <text
        x="120"
        y="94"
        textAnchor="middle"
        fill="rgba(255, 255, 255, 0.4)"
        fontSize="7"
        letterSpacing="3"
        fontFamily="monospace"
        fontWeight="600"
      >
        EVOLUTION // 01—03
      </text>
    </svg>
  );
}
