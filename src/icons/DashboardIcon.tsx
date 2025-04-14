import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const DashboardIcon: FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 27 26"
    fill="none"
    {...props}
  >
    <path
      d="M14.5117 13C14.5117 12.1715 15.1833 11.5 16.0117 11.5H23.5117C24.3402 11.5 25.0117 12.1715 25.0117 13V23.5C25.0117 24.3284 24.3402 25 23.5117 25H16.0117C15.1833 25 14.5117 24.3284 14.5117 23.5V13Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1.01172 2.5C1.01172 1.67158 1.6833 1 2.51172 1H8.51172C9.34014 1 10.0117 1.67158 10.0117 2.5V13C10.0117 13.8284 9.34014 14.5 8.51172 14.5H2.51172C1.6833 14.5 1.01172 13.8284 1.01172 13V2.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1.01172 20.5C1.01172 19.6715 1.6833 19 2.51172 19H8.51172C9.34014 19 10.0117 19.6715 10.0117 20.5V23.5C10.0117 24.3284 9.34014 25 8.51172 25H2.51172C1.6833 25 1.01172 24.3284 1.01172 23.5V20.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14.5117 2.5C14.5117 1.67158 15.1833 1 16.0117 1H23.5117C24.3402 1 25.0117 1.67158 25.0117 2.5V5.5C25.0117 6.32842 24.3402 7 23.5117 7H16.0117C15.1833 7 14.5117 6.32842 14.5117 5.5V2.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default DashboardIcon;
