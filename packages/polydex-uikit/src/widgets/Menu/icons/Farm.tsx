import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M18.3 5.7a1.41 1.41 0 01.22 1.71c5 7.38-3.73 16.13-11.11 11.11a1.41 1.41 0 01-1.93-1.93C.47 9.21 9.21.46 16.59 5.48a1.41 1.41 0 011.71.22zm-2.93 6.41l.19.08.08.19a2.87 2.87 0 01-3.31 3.79v1.55h-.8v-1.55a2.83 2.83 0 01-3.17-3.79l.08-.19.19-.08a2.8 2.8 0 012.9.53v-1.29a2.83 2.83 0 01.28-5l.19-.1.19.08a2.78 2.78 0 01.14 5v1.29a3.1 3.1 0 013.04-.51z"
        fill="#425f7a"
        fillRule="evenodd"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
