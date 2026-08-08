import React from "react";

export default function SvgPath() {
  return (
    <>
      {/* Desktop Path */}
      <svg
        className="svg-path-desktop"
        width="1612"
        height="3157"
        viewBox="0 0 1612 3157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="desktop-path-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="1" />
            <stop offset="92%" stopColor="var(--accent-color)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          className="manifesto-path"
          d="M1100.640 0.000C862.639 30.012 596.139 142.000 408.139 291.000C220.139 440.000 1036.140 679.000 1048.640 867.000C1061.140 1054.999 602.639 1500.999 408.139 1461.999C213.639 1422.999 -5.361 1073.999 156.139 970.499C317.639 867.000 1249.640 1008.999 1243.140 1377.999C1236.640 1746.999 363.139 1720.499 363.139 2043.999C363.139 2367.499 1365.640 2729.499 1482.140 2457.999C1598.640 2186.499 1346.640 1849.999 1100.640 1972.999C854.639 2095.999 583.029 2694.959 492.639 2956.499"
          stroke="url(#desktop-path-grad)"
          strokeWidth="200"
          strokeLinecap="round"
        />
      </svg>

      {/* Mobile Path */}
      <svg
        className="svg-path-mobile"
        width="390"
        height="3157"
        viewBox="0 0 390 3157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mobile-path-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="1" />
            <stop offset="92%" stopColor="var(--accent-color)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          className="manifesto-path"
          d="M251.866 0.000C205.931 30.012 154.497 142.000 118.213 291.000C81.929 440.000 239.417 679.000 241.830 867.000C244.242 1054.999 155.751 1500.999 118.213 1461.999C80.674 1422.999 38.407 1073.999 69.577 970.499C100.746 867.000 280.623 1008.999 279.368 1377.999C278.114 1746.999 109.528 1720.499 109.528 2043.999C109.528 2367.499 303.011 2729.499 325.495 2457.999C347.980 2186.499 299.344 1849.999 251.866 1972.999C204.387 2095.999 151.967 2694.959 134.521 2956.499"
          stroke="url(#mobile-path-grad)"
          strokeWidth="48"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}
