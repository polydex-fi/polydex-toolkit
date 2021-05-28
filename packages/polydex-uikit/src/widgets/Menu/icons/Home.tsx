import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg data-name="Layer 1" viewBox="0 0 24 24" {...props}>
      <path
        d="M14 20h4a1.05 1.05 0 001-.95V13h2l-8.39-8.75a.94.94 0 00-1.28 0L3 13h2v6.05A1.05 1.05 0 006 20h4v-5h4z"
        fill="#425f7a"
        fillRule="evenodd"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
