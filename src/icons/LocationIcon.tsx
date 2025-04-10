import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const LocationIcon: FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 33 41"
    fill="none"
    {...props}
  >
    <path
      d="M16.5 39.2857C23.75 31.8286 31 25.1511 31 16.9143C31 8.67735 24.5081 2 16.5 2C8.49188 2 2 8.67735 2 16.9143C2 25.1511 9.25 31.8286 16.5 39.2857Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 20.6431C18.7881 20.6431 20.6429 18.7884 20.6429 16.5003C20.6429 14.2122 18.7881 12.3574 16.5 12.3574C14.2119 12.3574 12.3572 14.2122 12.3572 16.5003C12.3572 18.7884 14.2119 20.6431 16.5 20.6431Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LocationIcon;
