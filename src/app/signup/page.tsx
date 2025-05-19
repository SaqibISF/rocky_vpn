"use client";

import React, { FC, useState } from "react";
import { Section } from "@/components/sections";
import { EnvelopeIcon, UserIcon } from "@/icons";
import { LOGIN_PAGE_PATH } from "@/lib/pathnames";
import {
  addToast,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@heroui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import {
  cn,
  EMAIL_INVALID_ERROR_MESSAGE,
  EMAIL_REGEX,
  NAME_INVALID_ERROR_MESSAGE,
  NAME_REGEX,
  PASSWORD_INVALID_ERROR_MESSAGE,
  PASSWORD_REGEX,
} from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { SIGNUP_ROUTE } from "@/lib/constants";

const SignUpPage: FC = () => {
  type SignUpData = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
  };

  const [isLoading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    // setValue,
    getValues,
    clearErrors,
    reset,
    setFocus,
  } = useForm<SignUpData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const signup: SubmitHandler<SignUpData> = async (data) => {
    try {
      clearErrors();
      setSuccessMessage("");
      setLoading(true);
      const res = await axios
        .post<{ status: boolean; message: string }>(SIGNUP_ROUTE, data, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => res.data);
      if (res.status) {
        addToast({ color: "success", description: res.message });
        setSuccessMessage(res.message);
        reset();
      } else {
        addToast({ color: "danger", description: res.message });
        setError("root", { type: "manual", message: res.message });
        setFocus("password");
        // setValue("password", "");
        // setValue("confirm_password", "");
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
      setFocus("password");
      // setValue("password", "");
      // setValue("confirm_password", "");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      isHeroSection
      heading="Start Your Free VPN Trial"
      description="We’re giving you 7 days to experience all the features of our high speed VPN network. No payment details are needed to start your trial."
      isRightCornerGradient
    >
      <form
        onSubmit={handleSubmit(signup)}
        className="max-w-md w-full relative"
      >
        <div
          className="w-full h-full rounded-xl absolute blur-[5.375rem] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
          }}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        ></div>
        <Card
          className="p-6"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <CardHeader className="flex-col gap-2">
            <h2 className="text-3xl font-semibold">Sign Up Now!</h2>
            <p className="text-default-500 text-sm font-normal">
              Create an account to continue
            </p>

            {successMessage && (
              <div className="w-full text-success-600 bg-success-50 border-2 border-solid border-success-100 p-3 rounded-xl">
                {successMessage}
              </div>
            )}

            {errors.root && (
              <div className="w-full text-danger-600 bg-danger-50 border-2 border-solid border-danger-100 p-3 rounded-xl">
                {errors.root.message}
              </div>
            )}
          </CardHeader>
          <CardBody className={cn("gap-6", successMessage ? "hidden" : "")}>
            <Input
              label="Name"
              placeholder="Enter your Name"
              type="text"
              endContent={
                <UserIcon className="w-5 text-default-500 pointer-events-none" />
              }
              errorMessage={errors.name?.message}
              {...register("name", {
                required: { value: true, message: "Enter your name" },
                pattern: {
                  value: NAME_REGEX,
                  message: NAME_INVALID_ERROR_MESSAGE,
                },
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 chars",
                },
              })}
            />

            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              endContent={
                <EnvelopeIcon className="w-5 text-default-500 pointer-events-none" />
              }
              errorMessage={errors.email?.message}
              {...register("email", {
                required: { value: true, message: "Enter email address" },
                pattern: {
                  value: EMAIL_REGEX,
                  message: EMAIL_INVALID_ERROR_MESSAGE,
                },
              })}
            />

            <Input
              label="Create Password"
              placeholder="Type new password"
              type="password"
              errorMessage={errors.password?.message}
              {...register("password", {
                required: { value: true, message: "Type new password" },
                pattern: {
                  value: PASSWORD_REGEX,
                  message: PASSWORD_INVALID_ERROR_MESSAGE,
                },
              })}
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              errorMessage={errors.confirm_password?.message}
              {...register("confirm_password", {
                required: {
                  value: true,
                  message: "Please confirm the password",
                },
                validate: (value) => {
                  const password = getValues("password");
                  if (value !== password) return "Password do not match";
                  return true;
                },
              })}
            />
          </CardBody>
          <CardFooter className="flex-col gap-4">
            <Button
              isLoading={isLoading}
              type="submit"
              fullWidth
              size="lg"
              color="primary"
              className={successMessage ? "hidden" : ""}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>
            <span className="text-sm font-normal">
              Already have an account?{" "}
              <Link
                href={LOGIN_PAGE_PATH}
                className="text-primary dark:text-primary-600 font-medium"
              >
                Login
              </Link>
            </span>
          </CardFooter>
        </Card>
      </form>
    </Section>
  );
};

export default SignUpPage;
