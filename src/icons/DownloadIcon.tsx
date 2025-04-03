import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const DownloadIcon: FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="download-01">
      <path
        id="Icon"
        d="M4.5 20.3827C4.90471 20.778 5.45361 21 6.02595 21H18.9741C19.5464 21 20.0953 20.778 20.5 20.3827M12.5012 3V14.9425M12.5012 14.9425L17.4338 10.3793M12.5012 14.9425L7.56859 10.3793"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default DownloadIcon;
