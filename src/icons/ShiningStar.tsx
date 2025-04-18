import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const ShiningStar: FC<IconSvgProps> = ({
  width = 470,
  height = 109,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 470 109"
    fill="none"
    {...props}
  >
    <path
      d="M2.98096 104.727C3.00863 104.672 2.98851 104.651 3.04782 104.634C5.03424 104.051 132.649 66.6748 216.341 53.0815C295.187 40.2753 417.692 35.1547 433.346 34.5409C434.313 34.5029 435.127 35.1942 435.283 36.1499V36.1499C435.47 37.3033 434.674 38.3544 433.506 38.3809C416.089 38.7753 295.809 41.909 216.75 54.7497C134.303 68.1408 11.5857 102.681 3.20767 105.051C3.02132 105.104 2.89426 104.9 2.98096 104.727V104.727Z"
      fill="url(#paint0_linear_473_59)"
    />
    <g filter="url(#filter0_f_473_59)">
      <ellipse
        cx="417.586"
        cy="37.707"
        rx="19.75"
        ry="5.25"
        transform="rotate(-0.882222 417.586 37.707)"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_473_59"
        x="365.838"
        y="0.448235"
        width="103.496"
        height="74.5176"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="16"
          result="effect1_foregroundBlur_473_59"
        />
      </filter>
      <linearGradient
        id="paint0_linear_473_59"
        x1="435.923"
        y1="36.1945"
        x2="72.9933"
        y2="85.0898"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.526042" stopColor="white" stopOpacity="0.15" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default ShiningStar;
