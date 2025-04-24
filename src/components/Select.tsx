import { Select as HeroSelect, SelectProps } from "@heroui/react";
import React, { FC } from "react";

const Select: FC<SelectProps> = ({
  labelPlacement = "outside",
  size = "lg",
  errorMessage,
  children,
  ...props
}) => (
  <HeroSelect
    labelPlacement={labelPlacement}
    size={size}
    isInvalid={errorMessage ? true : false}
    errorMessage={errorMessage}
    classNames={{
      trigger: "bg-transparent border",
      errorMessage: "mt-2 whitespace-pre-line",
    }}
    {...props}
  >
    {children}
  </HeroSelect>
);

export default Select;
