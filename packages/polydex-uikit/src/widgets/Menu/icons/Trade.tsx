import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M18.2 15.25a.73.73 0 001.2-.2 8.06 8.06 0 000-6.15.73.73 0 00-1.19-.2l-2.74 2.65a.8.8 0 000 1.14zm-.81 2.67a.75.75 0 000-1.08L13 12.49a.81.81 0 010-1.14l4.31-4.2a.75.75 0 000-1.09A8 8 0 006.71 6a.74.74 0 000 1.09L11 11.35a.81.81 0 010 1.14l-4.39 4.34a.74.74 0 000 1.08 8 8 0 0010.78 0zM5.8 15.25a.73.73 0 01-1.2-.2 8.05 8.05 0 01.05-6.22.73.73 0 011.2-.19l2.71 2.71a.8.8 0 010 1.14z"
        fill="#425f7a"
        fillRule="evenodd"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
