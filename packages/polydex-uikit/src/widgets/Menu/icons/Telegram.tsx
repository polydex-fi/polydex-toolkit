import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M10.28 14.23L10 18.14a.92.92 0 00.74-.38L12.53 16l3.68 2.83c.67.39 1.15.18 1.33-.65L20 6.27c.22-1-.36-1.45-1-1.2L4.74 10.78c-1 .39-1 1-.16 1.22l3.63 1.18 8.43-5.53c.39-.28.75-.13.46.15z"
        fill="#425f7a"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
