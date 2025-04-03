import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const WindowsIcon: FC<IconSvgProps> = ({
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
      d="M22.5 2L11.7 3.6V11.6L22.5 11.5V2ZM10.7 12.5L2.5 12.4V19.2L10.6 20.3L10.7 12.5ZM2.5 4.8V11.6H10.6V3.7L2.5 4.8ZM11.6 12.5V20.4L22.5 22V12.6L11.6 12.5Z"
      fill="currentColor"
    />
  </svg>
);

export default WindowsIcon;
