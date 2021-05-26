import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 100 26" {...props}>
      <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 100 26" {...props}>
        <defs>
          <style>{".cls-2{fill:#00267e}.cls-6{fill:#63e2f8}"}</style>
          <linearGradient
            id="linear-gradient"
            x1={5.12}
            y1={10}
            x2={15.51}
            y2={10}
            gradientTransform="matrix(1 0 0 -1 0 26)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#005dcf" />
            <stop offset={0.99} stopColor="#004acf" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1={23.96}
            y1={14.96}
            x2={18.79}
            y2={1.56}
            gradientTransform="matrix(1 0 0 -1 0 26)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#00a6e5" />
            <stop offset={1} stopColor="#006ed8" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1={5.12}
            y1={21.12}
            x2={25.91}
            y2={21.12}
            gradientTransform="matrix(1 0 0 -1 0 26)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#5ae1f7" />
            <stop offset={1} stopColor="#8df1fc" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-4"
            x1={12.48}
            y1={11.56}
            x2={11.87}
            y2={7.7}
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-5"
            x1={16.77}
            y1={13.28}
            x2={16.16}
            y2={7.39}
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-6"
            x1={18.63}
            y1={15.1}
            x2={19.03}
            y2={6.27}
            xlinkHref="#linear-gradient-2"
          />
        </defs>
        <path
          fill="#003486"
          d="M15.51 13L15.51 3.05 24.34 9 22.87 17.25 15.51 13z"
        />
        <path
          className="cls-2"
          d="M15.51 13L15.51 2.51 8.15 8.75 8.15 17.25 15.51 13z"
        />
        <path
          fill="#00e0ff"
          d="M22.87 20.75L24.34 18.1 15.51 13 6.87 17.99 8.15 20.75 15.51 22.47 22.87 20.75z"
        />
        <path
          d="M5.12 7l3 1.75v8.5l7.36 4.25V25l-8.36-4.85a4 4 0 01-2-3.46z"
          fill="url(#linear-gradient)"
        />
        <path
          d="M15.51 21.5l7.36-4.25v-8.5l3-1.75v9.69a4 4 0 01-2 3.46L15.51 25z"
          fill="url(#linear-gradient-2)"
        />
        <path
          className="cls-6"
          d="M15.51 12.48L13.33 11.22 11.15 12.48 13.33 13.74 15.51 12.48z"
        />
        <path
          d="M22.87 8.75l3-1.75-10.36-6L5.12 7l3 1.75L14 5.36a3 3 0 013 0z"
          fill="url(#linear-gradient-3)"
        />
        <path
          fill="url(#linear-gradient-4)"
          d="M11.15 12.48L11.15 18.19 13.33 19.45 13.33 13.74 11.15 12.48z"
        />
        <path
          className="cls-2"
          d="M13.33 13.74L15.51 12.48 15.51 18.19 13.33 19.45 13.33 13.74z"
        />
        <path
          className="cls-6"
          d="M19.88 9.19L17.69 7.93 15.51 9.19 17.69 10.45 19.88 9.19z"
        />
        <path
          fill="url(#linear-gradient-5)"
          d="M15.51 9.19L15.51 18.19 17.69 19.45 17.69 10.45 15.51 9.19z"
        />
        <path
          fill="url(#linear-gradient-6)"
          d="M17.69 10.45L19.88 9.19 19.88 18.19 17.69 19.45 17.69 10.45z"
        />
        <path
          d="M30.74 6.76h5c3 0 4.08 1.22 4.08 3.48V12c0 2.24-1.2 3.46-4.19 3.46h-2.46v4.17h-2.43zm4.89 2.14h-2.46v4.41h2.46c1.37 0 1.78-.5 1.78-1.56v-1.32c0-1.06-.41-1.53-1.78-1.53zM45.44 19.83c-3.22 0-4.09-1.78-4.09-3.71v-2.38c0-1.94.87-3.72 4.09-3.72s4.1 1.78 4.1 3.72v2.38c0 1.93-.87 3.71-4.1 3.71zm0-7.79c-1.25 0-1.74.56-1.74 1.62v2.53c0 1.07.49 1.63 1.74 1.63s1.74-.56 1.74-1.63v-2.53c0-1.06-.48-1.66-1.74-1.66zM51.82 19.63V6.37L54.18 6v13.63zM61.76 19.63l-1.26 3.81h-2.24l1.18-3.81h-.83l-3-9.41H58l2.15 7.15 2.17-7.15h2.41zM71 6.76c3.17 0 4.28 1.6 4.28 3.46v6c0 1.84-1.11 3.46-4.28 3.46h-4.78V6.76zm-2.35 10.73h2.11c1.65 0 2.09-.66 2.09-1.9V10.8c0-1.24-.44-1.9-2.09-1.9h-2.11zM81.57 17.89a9.9 9.9 0 002.88-.44l.36 1.78a10.24 10.24 0 01-3.46.6c-3 0-4-1.38-4-3.64V13.7c0-2 .89-3.68 3.91-3.68S85 11.78 85 13.81v2h-5.27v.48c0 1.16.4 1.6 1.84 1.6zm-1.84-4h3v-.46c0-.89-.28-1.51-1.44-1.51s-1.56.62-1.56 1.51zM86.07 19.63l3-4.73-3-4.68h2.36l1.88 2.86 1.85-2.86h2.36l-3 4.68 3.05 4.73h-2.34l-1.87-2.92-1.9 2.92z"
          fill={textColor}
        />
      </svg>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
