import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 83.185 78.462"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill="none"
        d="M26.418 34.343l7.312-12.665H20.422l-9.19 15.918 9.19 15.918H33.73L26.418 40.85a6.509 6.509 0 010-6.507z"
      />
      <path
        fill="none"
        d="M41.592 26.51L35.192 37.596 41.592 48.683 47.993 37.596z"
      />
      <path
        fill="none"
        d="M56.766 40.85l-7.312 12.665h13.309l9.19-15.918-9.19-15.918H49.454l7.312 12.665a6.502 6.502 0 010 6.506z"
      />
      <path
        fill="#FFF"
        stroke="#0C2866"
        strokeWidth={1.6043}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M80.727 34.343L69.968 15.707a6.509 6.509 0 00-5.636-3.254H42.813a6.52 6.52 0 00-5.636 3.253l-3.447 5.971-7.312 12.665a6.509 6.509 0 000 6.507l7.312 12.665h5.072l2.79-4.832-6.401-11.086 6.401-11.086 2.79-4.832h18.381l9.19 15.918-9.19 15.918H49.454l-3.447 5.971a6.504 6.504 0 01-4.415 3.136c.398.076.807.117 1.221.117h21.519a6.508 6.508 0 005.636-3.254L80.727 40.85a6.509 6.509 0 000-6.507z"
      />
      <path
        fill="#36C3EA"
        stroke="#0C2866"
        strokeWidth={1.6043}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M56.766 34.343l-7.312-12.665h-5.072l-2.79 4.832 6.401 11.086-6.401 11.086-2.79 4.832h-18.38l-9.19-15.918 9.19-15.918H33.73l3.447-5.971a6.504 6.504 0 014.415-3.136 6.512 6.512 0 00-1.221-.117H18.853a6.508 6.508 0 00-5.636 3.254L2.458 34.343a6.509 6.509 0 000 6.507l10.759 18.636a6.509 6.509 0 005.636 3.254h21.519a6.52 6.52 0 005.636-3.253l3.447-5.971 7.312-12.665a6.508 6.508 0 00-.001-6.508z"
      />
    </Svg>
  );
};

export default Icon;
