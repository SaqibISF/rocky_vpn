import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const YoutubeIcon: FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 29 21"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5832 14.5644V6.42586C14.4719 7.78537 16.7092 9.09869 19.3553 10.5146C17.1728 11.7252 14.4719 13.0834 11.5832 14.5644ZM27.682 2.37817C27.1837 1.72156 26.3344 1.21043 25.4302 1.04122C22.7726 0.536458 6.19293 0.535022 3.53677 1.04122C2.81171 1.17717 2.16606 1.50577 1.61143 2.01632C-0.725526 4.18576 0.00676596 15.8198 0.570063 17.7043C0.806935 18.52 1.11315 19.1083 1.49879 19.4944C1.99565 20.005 2.67593 20.3565 3.45732 20.5142C5.64551 20.9669 16.9187 21.22 25.384 20.5821C26.1639 20.4462 26.8543 20.0833 27.3988 19.5511C29.5596 17.3903 29.4123 5.10299 27.682 2.37817Z"
      fill="currentColor"
    />
  </svg>
);

export default YoutubeIcon;
