import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const VPNIcon: FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 15 17"
    fill="none"
    {...props}
  >
    <path
      d="M7.27151 16.2009C9.43078 15.0086 11.2299 13.2641 12.4823 11.1483C13.7348 9.0325 14.395 6.62233 14.3946 4.16762V3.61708L7.27151 0.47113L0.148438 3.61708V4.16762C0.148023 6.62233 0.808256 9.0325 2.06071 11.1483C3.31316 13.2641 5.11225 15.0086 7.27151 16.2009Z"
      fill="#1A1A78"
    />
  </svg>
);

export default VPNIcon;
