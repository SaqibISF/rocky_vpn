"use client";

import React, { FC } from "react";
import { Section } from "@/components/sections";
import { EnvelopeIcon, UserIcon } from "@/icons";
import { LOGIN_PAGE_PATH } from "@/lib/pathnames";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@heroui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";

const SignUpPage: FC = () => {
  type SignUpData = { name: string; email: string; password: string };

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    clearErrors,
  } = useForm<SignUpData>();

  const signup: SubmitHandler<SignUpData> = async (data) => {
    clearErrors();
    console.log(data);
  };

  return (
    <Section
      isHeroSection
      heading="Start Your Free VPN Trial"
      description="We’re giving you 7 days to experience all the features of our high speed VPN network. No payment details are needed to start your trial."
    >
      <form onSubmit={handleSubmit(signup)} className="max-w-md w-full">
        <Card className="p-6">
          <CardHeader className="flex-col gap-2">
            <h2 className="text-3xl font-semibold">Sign Up Now!</h2>
            <p className="text-default-500 text-sm font-normal">
              Create an account to continue
            </p>
          </CardHeader>
          <CardBody className="gap-6">
            <Input
              label="Name"
              placeholder="Enter your Name"
              type="text"
              endContent={
                <UserIcon className="w-5 text-default-500 pointer-events-none" />
              }
              errorMessage={errors.name?.message}
              {...register("name", {
                required: "Select your username",
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
                required: "Enter email address",
                minLength: {
                  value: 2,
                  message: "Enter email address",
                },
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
                  message:
                    "Please enter valid email address\n e.g. username@domain.com",
                },
              })}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
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
          </CardBody>
          <CardFooter className="flex-col gap-4">
            <Button type="submit" fullWidth size="lg" color="primary">
              Sign Up
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
