import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const ChevronDownIcon: FC<IconSvgProps> = ({
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
      d="M13.205 15.0005L17.795 10.4105C18.185 10.0205 18.185 9.39047 17.795 9.00047C17.405 8.61047 16.775 8.61047 16.385 9.00047L12.495 12.8805L8.61503 9.00047C8.22502 8.61047 7.59502 8.61047 7.20502 9.00047C6.81502 9.39047 6.81502 10.0205 7.20502 10.4105L11.795 15.0005C12.175 15.3905 12.815 15.3905 13.205 15.0005Z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronDownIcon;
