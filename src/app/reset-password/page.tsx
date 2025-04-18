"use client";

import React, { FC, useState } from "react";
import { Section } from "@/components/sections";
import { EyeIcon, EyeSlashIcon } from "@/icons";
import { LOGIN_PAGE_PATH } from "@/lib/pathnames";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@heroui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

const ResetPasswordPage: FC = () => {
  type Data = { password: string; confirmPassword: string };

  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const togglePasswordHide = () => {
    setIsPasswordHide((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    clearErrors,
  } = useForm<Data>();

  const login: SubmitHandler<Data> = async (data) => {
    clearErrors();
    console.log(data);
  };

  return (
    <Section isHeroSection>
      <form onSubmit={handleSubmit(login)} className="max-w-md w-full relative">
        <div
          className="w-full h-full rounded-xl absolute blur-[5.375rem] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
          }}
        ></div>
        <Card className="p-6">
          <CardHeader className="flex-col gap-2">
            <h2 className="text-3xl font-semibold">Reset Password!</h2>
            <p className="text-default-500 text-sm font-normal">
              Reset your password
            </p>
          </CardHeader>
          <CardBody className="gap-6">
            <Input
              label="Password"
              labelPlacement="outside"
              placeholder="Enter your password"
              type={isPasswordHide ? "password" : "text"}
              endContent={
                isPasswordHide ? (
                  <EyeSlashIcon
                    onClick={togglePasswordHide}
                    className="w-5 text-default-500 cursor-default"
                  />
                ) : (
                  <EyeIcon
                    onClick={togglePasswordHide}
                    className="w-5 text-default-500 cursor-default"
                  />
                )
              }
              size="lg"
              classNames={{
                inputWrapper: "bg-transparent border",
              }}
              errorMessage={errors.password?.message}
              {...register("password", {
                required: "Enter your password",
                // minLength: {
                //   value: 8,
                //   message:
                //     "Password must be at least 8 characters long",
                // },
              })}
            />

            <Input
              label="Confirm Password"
              labelPlacement="outside"
              placeholder="Confirm your password"
              type={isPasswordHide ? "password" : "text"}
              endContent={
                isPasswordHide ? (
                  <EyeSlashIcon
                    onClick={togglePasswordHide}
                    className="w-5 text-default-500 cursor-default"
                  />
                ) : (
                  <EyeIcon
                    onClick={togglePasswordHide}
                    className="w-5 text-default-500 cursor-default"
                  />
                )
              }
              size="lg"
              classNames={{
                inputWrapper: "bg-transparent border",
              }}
              errorMessage={errors.password?.message}
              {...register("confirmPassword", {
                required: "Confirm your password",
                // minLength: {
                //   value: 8,
                //   message:
                //     "Password must be at least 8 characters long",
                // },
              })}
            />
          </CardBody>
          <CardFooter className="flex-col gap-4">
            <Button type="submit" fullWidth size="lg" color="primary">
              Submit
            </Button>
            <Link
              href={LOGIN_PAGE_PATH}
              className="text-primary dark:text-primary-600 text-sm font-medium"
            >
              Back to Login?
            </Link>
          </CardFooter>
        </Card>
      </form>
    </Section>
  );
};

export default ResetPasswordPage;
