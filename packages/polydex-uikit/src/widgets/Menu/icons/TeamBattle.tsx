import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M19.5 6h-2.21v-.81A1.16 1.16 0 0016.13 4H7.82a1.16 1.16 0 00-1.16 1.19V6H4.5a.5.5 0 00-.5.5c0 4.1 2.17 6.8 4.4 7.45a9.53 9.53 0 002.24 1.63v1.72h-.16a1.82 1.82 0 00-1.83 1.82v.34a.49.49 0 00.5.49h5.65a.5.5 0 00.5-.49v-.34a1.82 1.82 0 00-1.83-1.82h-.17v-1.69A9.26 9.26 0 0015.54 14C17.8 13.38 20 10.68 20 6.52a.5.5 0 00-.5-.52zM5 7h1.66v3a5.26 5.26 0 00.43 2A7.32 7.32 0 015 7zm8.83 5.17L12 10.83l-1.88 1.36.69-2.19-1.88-1.38h2.32l.75-2.2.71 2.2H15L13.13 10zm3-.06a5.11 5.11 0 00.46-2.11V7H19a7.29 7.29 0 01-2.16 5.13z"
        fill="#425f7a"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </Svg>
  );
};

export default Icon;
