import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M18.12 8.05a3.34 3.34 0 001.44-1.82 6.33 6.33 0 01-2.09.8 3.29 3.29 0 00-5.59 3 9.34 9.34 0 01-6.77-3.44 3.3 3.3 0 001 4.39 3.39 3.39 0 01-1.49-.41 3.3 3.3 0 002.64 3.22 3.26 3.26 0 01-1.49.05 3.29 3.29 0 003.07 2.28 6.56 6.56 0 01-4.08 1.41 5.11 5.11 0 01-.76-.01 9.3 9.3 0 0014.37-7.86v-.43A6.63 6.63 0 0020 7.53a6.49 6.49 0 01-1.88.52z"
        fill="#425f7a"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
