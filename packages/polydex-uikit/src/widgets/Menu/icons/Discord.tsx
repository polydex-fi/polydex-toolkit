import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <title>icon</title><path d="M19,20l-1.72-1.52-1-.9-1-.95L16,18H7a2.15,2.15,0,0,1-2-2V5.65A1.64,1.64,0,0,1,6.64,4H17.36A1.64,1.64,0,0,1,19,5.65Zm-3.7-7.31a2.51,2.51,0,0,1-1.42.94l.52.64a2.87,2.87,0,0,0,2.39-1.2,10.79,10.79,0,0,0-1.12-4.6,3.9,3.9,0,0,0-2.19-.32h0l-.11-.38a5.25,5.25,0,0,1,2,1A6.35,6.35,0,0,0,13,8a6.43,6.43,0,0,0-1.58,0s-.11.12-.11.12h0a7.88,7.88,0,0,0-1.78.39L9,8.76H9a5.53,5.53,0,0,1,2.06-1L11,8.15h0a3.9,3.9,0,0,0-2.19.32,10.65,10.65,0,0,0-1.12,4.6A2.82,2.82,0,0,0,10,14.27s.3-.36.53-.66a2.43,2.43,0,0,1-1.37-.93l.22.14,0,0,0,0,0,0a5,5,0,0,0,.57.27,6.6,6.6,0,0,0,1.15.34,6.22,6.22,0,0,0,1,.1,5.4,5.4,0,0,0,2.11-.43A4.28,4.28,0,0,0,15.3,12.69Zm-1.68-.39a.87.87,0,0,1-.86-.49.89.89,0,0,1,.14-1,.86.86,0,0,1,1-.22.87.87,0,0,1,.55.82.83.83,0,0,1-.79.87Zm-2.86,0a.88.88,0,0,1,0-1.75.76.76,0,0,1,.55.24.89.89,0,0,1,.25.64.84.84,0,0,1-.8.87Z" fill="#425f7a"/><rect width="24" height="24" fill="none"/>
    </Svg>
  );
};

export default Icon;
