import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect x="6.97" y="4.1" width="13.47" height="13.09" rx="1.74" transform="translate(-3.47 13.09) rotate(-45.93)" fill="#fff" stroke="#0c2866" stroke-miterlimit="10"/><circle cx="8.43" cy="10.85" r="1.38" fill="#fff" stroke="#010b18" stroke-miterlimit="10" stroke-width="0.8"/><circle cx="13.71" cy="10.64" r="1.38" fill="#fff" stroke="#010b18" stroke-miterlimit="10" stroke-width="0.8"/><circle cx="13.74" cy="5.37" r="1.38" fill="#fff" stroke="#0c2866" stroke-miterlimit="10" stroke-width="0.5"/><circle cx="13.75" cy="16" r="1.38" fill="#fff" stroke="#010b18" stroke-miterlimit="10" stroke-width="0.8"/><circle cx="19.06" cy="10.52" r="1.38" fill="#fff" stroke="#0c2866" stroke-miterlimit="10" stroke-width="0.5"/><rect x="2.57" y="8.12" width="13.47" height="13.09" rx="1.74" fill="#36c3ea" stroke="#0c2866" stroke-miterlimit="10"/><circle cx="5.48" cy="11.02" r="1.38" fill="#fff" stroke="#0c2866" stroke-miterlimit="10" stroke-width="0.5"/><circle cx="9.3" cy="14.67" r="1.38" fill="#fff" stroke="#0c2866" stroke-miterlimit="10" stroke-width="0.5"/><circle cx="13.11" cy="11.02" r="1.38" fill="#fff" stroke="#0c2866" stroke-miterlimit="10" stroke-width="0.5"/><circle cx="5.48" cy="18.43" r="1.38" fill="#fff" stroke="#0c2866" stroke-miterlimit="10" stroke-width="0.5"/><circle cx="13.11" cy="18.43" r="1.38" fill="#fff" stroke="#0c2866" stroke-miterlimit="10" stroke-width="0.5"/><rect width="24" height="24" fill="none"/>
    </Svg>
  );
};

export default Icon;
