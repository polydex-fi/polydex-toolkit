import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="7.67" fill="#129dff" stroke="#010b18" stroke-miterlimit="10"/><path d="M12,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,4.67A7.33,7.33,0,1,0,19.33,12,7.34,7.34,0,0,0,12,4.67Z" fill="#010b18"/><circle cx="12" cy="12" r="1.64" fill="#fff"/><path d="M12,13.92A1.92,1.92,0,1,1,13.92,12,1.92,1.92,0,0,1,12,13.92Zm0-3.29A1.37,1.37,0,1,0,13.37,12,1.37,1.37,0,0,0,12,10.63Z" fill="#010b18"/><circle cx="7.62" cy="12" r="1.64" fill="#fff"/><path d="M7.62,13.92A1.92,1.92,0,1,1,9.54,12,1.92,1.92,0,0,1,7.62,13.92Zm0-3.29A1.37,1.37,0,1,0,9,12,1.37,1.37,0,0,0,7.62,10.63Z" fill="#010b18"/><circle cx="16.38" cy="12" r="1.64" fill="#fff"/><path d="M16.38,13.92A1.92,1.92,0,1,1,18.3,12,1.92,1.92,0,0,1,16.38,13.92Zm0-3.29A1.37,1.37,0,1,0,17.75,12,1.37,1.37,0,0,0,16.38,10.63Z" fill="#010b18"/>
    </Svg>
  );
};

export default Icon;
