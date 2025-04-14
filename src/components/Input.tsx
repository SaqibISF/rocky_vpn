"use client";

import React, { FC, useState } from "react";
import { Input as HeroInput, InputProps } from "@heroui/react";
import { EyeIcon, EyeSlashIcon } from "@/icons";

const Input: FC<InputProps> = ({
  labelPlacement = "outside",
  type,
  endContent,
  size = "lg",
  ...props
}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const togglePasswordHide = () => {
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <HeroInput
      labelPlacement={labelPlacement}
      type={type === "password" ? (isPasswordShow ? "text" : "password") : type}
      size={size}
      classNames={{
        inputWrapper: "bg-transparent border",
      }}
      endContent={
        type === "password" ? (
          isPasswordShow ? (
            <EyeIcon
              onClick={togglePasswordHide}
              className="w-5 text-default-500 cursor-default"
            />
          ) : (
            <EyeSlashIcon
              onClick={togglePasswordHide}
              className="w-5 text-default-500 cursor-default"
            />
          )
        ) : (
          endContent
        )
      }
    //   errorMessage="sdf"
      {...props}
    />
  );
};

export default Input;
