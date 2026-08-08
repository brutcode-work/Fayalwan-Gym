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
          d="M1100.64 100.011C862.639 130.023 596.139 242.011 408.139 391.011C220.139 540.011 1036.14 779.011 1048.64 967.011C1061.14 1155.01 602.639 1601.01 408.139 1562.01C213.639 1523.01 -5.36079 1174.01 156.139 1070.51C317.639 967.011 1249.64 1109.01 1243.14 1478.01C1236.64 1847.01 363.139 1820.51 363.139 2144.01C363.139 2467.51 1365.64 2829.51 1482.14 2558.01C1598.64 2286.51 1346.64 1950.01 1100.64 2073.01C854.639 2196.01 583.029 2794.97 492.639 3056.51"
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
          d="M251.866 100.011C205.931 130.023 154.497 242.011 118.213 391.011C81.929 540.011 239.417 779.011 241.830 967.011C244.242 1155.010 155.751 1601.010 118.213 1562.010C80.674 1523.010 38.407 1174.010 69.577 1070.510C100.746 967.011 280.623 1109.010 279.368 1478.010C278.114 1847.010 109.528 1820.510 109.528 2144.010C109.528 2467.510 303.011 2829.510 325.495 2558.010C347.980 2286.510 299.344 1950.010 251.866 2073.010C204.387 2196.010 151.967 2794.970 134.521 3056.510"
          stroke="url(#mobile-path-grad)"
          strokeWidth="48"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}
