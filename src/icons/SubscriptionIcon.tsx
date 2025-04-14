import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const SubscriptionIcon: FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <path
      d="M24.0117 24H0.0117188V3H5.01172V0H7.01172V3H17.0117V0H19.0117V3H24.0117V24ZM2.01172 22H22.0117V5H2.01172V8H22.0117V10H2.01172V22ZM19.0117 19H9.01172V17H19.0117V19ZM7.01172 19H5.01172V17H7.01172V19ZM19.0117 15H9.01172V13H19.0117V15ZM7.01172 15H5.01172V13H7.01172V15Z"
      fill="currentColor"
    />
  </svg>
);

export default SubscriptionIcon;
