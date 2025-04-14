import React, { FC } from "react";
import { IconSvgProps } from "@/types";

const SignOutIcon: FC<IconSvgProps> = ({
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
      d="M9.41187 12.9978L25.0117 12.9978M25.0117 12.9978L20.8118 16.5978M25.0117 12.9978L20.8118 9.39785"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6094 18.9977C16.5948 21.6078 16.4791 23.0212 15.5571 23.9433C14.5026 24.9977 12.8056 24.9977 9.41155 24.9977H8.21156C4.81751 24.9977 3.12037 24.9977 2.06606 23.9433C1.01163 22.8889 1.01163 21.1918 1.01163 17.7978L1.01163 8.19785C1.01163 4.8038 1.01163 3.10678 2.06606 2.05235C2.98813 1.13028 4.4016 1.01448 7.01181 0.99996M16.6094 6.99786C16.5948 4.38789 16.4791 2.97442 15.5571 2.05235C14.7875 1.2828 13.6757 1.07484 11.8118 1.01868"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default SignOutIcon;
