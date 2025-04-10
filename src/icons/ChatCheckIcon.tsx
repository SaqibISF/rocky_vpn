import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const ChatCheckIcon: FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 33 30"
    fill="none"
    {...props}
  >
    <path
      d="M11.6667 13.6358L14.6411 16.5L21.3333 10.0556M31 27.7778L25.6442 25.0998C25.2382 24.8968 25.0352 24.7953 24.8224 24.7238C24.6335 24.6603 24.4391 24.6144 24.2417 24.5867C24.0194 24.5556 23.7924 24.5556 23.3385 24.5556H7.15556C5.35093 24.5556 4.44863 24.5556 3.75937 24.2043C3.15306 23.8955 2.66012 23.4025 2.35121 22.7962C2 22.107 2 21.2046 2 19.4V7.15556C2 5.35093 2 4.44863 2.35121 3.75937C2.66012 3.15306 3.15306 2.66012 3.75937 2.35121C4.44863 2 5.35095 2 7.15556 2H25.8444C27.649 2 28.5514 2 29.2407 2.35121C29.8469 2.66012 30.3399 3.15306 30.6488 3.75937C31 4.44863 31 5.35095 31 7.15556V27.7778Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChatCheckIcon;
