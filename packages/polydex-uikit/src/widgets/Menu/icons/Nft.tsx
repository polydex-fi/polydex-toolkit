import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <defs>
        <style>{".cls-1{fill:#425f7a}"}</style>
      </defs>
      <path
        className="cls-1"
        d="M19.91 9.62l-2.5-3.42A.54.54 0 0017 6H7a.54.54 0 00-.41.2l-2.5 3.42-.09.26a2 2 0 003.5 1.31 2 2 0 003 0 2 2 0 003 0 2 2 0 003 0A2 2 0 0020 9.88zM18 12.82a3 3 0 01-1.5-.39 3.13 3.13 0 01-3 0 3.13 3.13 0 01-3 0 3.13 3.13 0 01-3 0 3.07 3.07 0 01-2.5.2V18a1 1 0 001 1h8v-5h3v5h1a1 1 0 001-1v-5.35a3 3 0 01-1 .17zM11 16H8v-2h3z"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
