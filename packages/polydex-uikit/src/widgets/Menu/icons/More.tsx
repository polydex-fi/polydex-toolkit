import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 4a8 8 0 108 8 8 8 0 00-8-8zm-4 9a1 1 0 111-1 1 1 0 01-1 1zm4 0a1 1 0 111-1 1 1 0 01-1 1zm4 0a1 1 0 111-1 1 1 0 01-1 1z"
        fill="#425f7a"
      />
    </Svg>
  );
};

export default Icon;
