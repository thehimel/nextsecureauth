import React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({ size = 36, width, height, ...props }) => (
  <svg fill="none" height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
    <path
      d="M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999"
      fill="currentColor"
    />
    <text
      dominantBaseline="middle"
      fill="white"
      fontFamily="Arial"
      fontSize="8"
      fontWeight="bold"
      style={{ mixBlendMode: "difference" }}
      textAnchor="middle"
      x="50%"
      y="55%"
    >
      A
    </text>
  </svg>
);
