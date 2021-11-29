import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="8" fill="#129dff" stroke="#119dff" stroke-miterlimit="10" stroke-width="1.04"/><circle cx="12" cy="12" r="1.71" fill="#fff"/><circle cx="7.43" cy="12" r="1.71" fill="#fff"/><circle cx="16.57" cy="12" r="1.71" fill="#fff"/>
    </Svg>
  );
};

export default Icon;
