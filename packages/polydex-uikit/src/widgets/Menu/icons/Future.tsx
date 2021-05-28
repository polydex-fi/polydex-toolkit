import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}><path
      d="M16.5 10H16V8a4 4 0 00-8 0v2h-.5A1.5 1.5 0 006 11.5v7A1.5 1.5 0 007.5 20h9a1.5 1.5 0 001.5-1.5v-7a1.5 1.5 0 00-1.5-1.5zM9.33 8a2.67 2.67 0 015.34 0v2H9.33zm3.34 7.15v1.52a.67.67 0 01-1.34 0v-1.52a1.34 1.34 0 01-.66-1.15 1.33 1.33 0 012.66 0 1.34 1.34 0 01-.66 1.15z"
      fill="#425f7a"
    />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
