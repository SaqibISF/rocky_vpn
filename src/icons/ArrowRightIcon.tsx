import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const ArrowRightIcon: FC<IconSvgProps> = ({
  width = "25",
  height = "24",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <path
      d="M13.8333 5L20.5 12M20.5 12L13.8333 19M20.5 12L4.5 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
