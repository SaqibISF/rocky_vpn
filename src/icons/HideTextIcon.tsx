import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const HideTextIcon: FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 29 32"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29 31.6126H23.5625L19.6417 26.4533C18.0613 27.2878 16.3051 27.737 14.5 27.737C11.0546 27.737 7.78719 26.1008 5.5815 23.2708L0 16.1099L5.5815 8.94893C5.70918 8.78512 5.8404 8.62533 5.97502 8.4696L0 0.607178H5.4375L29 31.6126ZM9.70148 13.3732C9.29368 14.1888 9.0625 15.1205 9.0625 16.1099C9.0625 19.3206 11.497 21.9234 14.5 21.9234C15.0289 21.9234 15.5401 21.8426 16.0235 21.6923L9.70148 13.3732Z"
      fill="currentColor"
    />
    <path
      d="M29 16.11L25.7878 20.231L13.8357 4.50322C14.0562 4.48971 14.2777 4.48291 14.5 4.48291C17.9454 4.48291 21.2127 6.11911 23.4185 8.94898L29 16.11Z"
      fill="currentColor"
    />
  </svg>
);

export default HideTextIcon;
