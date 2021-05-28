import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M17.66 6.34a8 8 0 100 11.32 8 8 0 000-11.32zM13 15.83A1.1 1.1 0 0112 17a1.1 1.1 0 01-1-1.17v-4.66A1.1 1.1 0 0112 10a1.1 1.1 0 011 1.17zM12 9a1 1 0 01-1-1 1 1 0 011-1 1 1 0 110 2z"
        fill="#425f7a"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
