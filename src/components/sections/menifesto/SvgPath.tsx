import React, { forwardRef, SVGProps } from "react";

const SvgPath = forwardRef<SVGPathElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg
      {...props}
      width="100%"
      height="100%"
      viewBox="0 0 1612 3157"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={ref}
        d="M1100.64 100.011C862.639 130.023 596.139 242.011 408.139 391.011C220.139 540.011 1036.14 779.011 1048.64 967.011C1061.14 1155.01 602.639 1601.01 408.139 1562.01C213.639 1523.01 -5.36079 1174.01 156.139 1070.51C317.639 967.011 1249.64 1109.01 1243.14 1478.01C1236.64 1847.01 363.139 1820.51 363.139 2144.01C363.139 2467.51 1365.64 2829.51 1482.14 2558.01C1598.64 2286.51 1346.64 1950.01 1100.64 2073.01C854.639 2196.01 583.029 2794.97 492.639 3056.51"
        stroke="var(--accent-color)"
        strokeWidth="180"
        strokeLinecap="round"
      />
    </svg>
  );
});

SvgPath.displayName = "SvgPath";

export default SvgPath;
