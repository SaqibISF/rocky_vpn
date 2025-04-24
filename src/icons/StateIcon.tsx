import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const StateIcon: FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 48 48"
    {...props}
  >
    <g fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 42h40"
      ></path>
      <rect
        width={8}
        height={16}
        x={8}
        y={26}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      ></rect>
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 34h1"
      ></path>
      <rect
        width={24}
        height={38}
        x={16}
        y={4}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      ></rect>
      <path
        fill="currentColor"
        d="M22 10h4v4h-4zm8 0h4v4h-4zm-8 7h4v4h-4zm8 0h4v4h-4zm0 7h4v4h-4zm0 7h4v4h-4z"
      ></path>
    </g>
  </svg>
);

export default StateIcon;
