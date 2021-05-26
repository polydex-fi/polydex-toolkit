import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg id="Layer_1" data-name="Layer 1" viewBox="0 0 357 357" {...props}>
      <defs>
        <style>{".cls-3{fill:#00267e}.cls-7{fill:#63e2f8}"}</style>
        <linearGradient
          id="linear-gradient"
          x1={59.49}
          y1={-3591.85}
          x2={178.5}
          y2={-3591.85}
          gradientTransform="matrix(1 0 0 -1 0 -3379)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#005dcf" />
          <stop offset={0.99} stopColor="#004acf" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1={275.28}
          y1={-3535.07}
          x2={215.99}
          y2={-3688.55}
          gradientTransform="matrix(1 0 0 -1 0 -3379)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#00a6e5" />
          <stop offset={1} stopColor="#006ed8" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1={59.49}
          y1={-3464.46}
          x2={297.51}
          y2={-3464.46}
          gradientTransform="matrix(1 0 0 -1 0 -3379)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#5ae1f7" />
          <stop offset={1} stopColor="#8df1fc" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1={143.79}
          y1={-3573.99}
          x2={136.82}
          y2={-3618.17}
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1={192.88}
          y1={-3554.33}
          x2={185.91}
          y2={-3621.76}
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-6"
          x1={214.16}
          y1={-3533.42}
          x2={218.81}
          y2={-3634.57}
          xlinkHref="#linear-gradient-2"
        />
      </defs>
      <circle cx={178.5} cy={178.5} r={178.5} fill="#bfd3d8" />
      <path
        fill="#003486"
        d="M178.5 178.5L178.5 64.53 279.63 132.74 262.79 227.16 178.5 178.5z"
      />
      <path
        className="cls-3"
        d="M178.5 178.5L178.5 58.33 94.21 129.84 94.21 227.16 178.5 178.5z"
      />
      <path
        fill="#00e0ff"
        d="M262.79 267.25L279.63 236.89 178.5 178.5 79.53 235.64 94.21 267.25 178.5 286.99 262.79 267.25z"
      />
      <path
        d="M59.49 109.79l34.72 20v97.32l84.29 48.67v40.09l-96.1-55.44a45.81 45.81 0 01-22.91-39.67z"
        fill="url(#linear-gradient)"
      />
      <path
        d="M178.5 275.83l84.29-48.67v-97.32l34.72-20v111a45.81 45.81 0 01-22.91 39.67l-96.1 55.48z"
        fill="url(#linear-gradient-2)"
      />
      <path
        className="cls-7"
        d="M178.5 172.57L153.52 158.15 128.54 172.57 153.52 186.99 178.5 172.57z"
      />
      <path
        d="M262.79 129.84l34.72-20-119-68.71-119 68.71 34.72 20L161.47 91a34 34 0 0134.06 0z"
        fill="url(#linear-gradient-3)"
      />
      <path
        fill="url(#linear-gradient-4)"
        d="M128.54 172.57L128.54 237.96 153.52 252.38 153.52 186.99 128.54 172.57z"
      />
      <path
        className="cls-3"
        d="M153.52 186.99L178.5 172.57 178.5 237.96 153.52 252.38 153.52 186.99z"
      />
      <path
        className="cls-7"
        d="M228.46 134.9L203.48 120.48 178.5 134.9 203.48 149.32 228.46 134.9z"
      />
      <path
        fill="url(#linear-gradient-5)"
        d="M178.5 134.9L178.5 237.96 203.48 252.38 203.48 149.32 178.5 134.9z"
      />
      <path
        fill="url(#linear-gradient-6)"
        d="M203.48 149.32L228.46 134.9 228.46 237.96 203.48 252.38 203.48 149.32z"
      />
    </Svg>
  );
};

export default Icon;
