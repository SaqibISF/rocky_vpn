"use client";

import React, { FC } from "react";
import { Section } from "@/components/sections";
import { EnvelopeIcon } from "@/icons";
import { FORGOT_PASSWORD_PAGE_PATH, SIGNUP_PAGE_PATH } from "@/lib/pathnames";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
} from "@heroui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";

const LoginPage: FC = () => {
  type LoginData = { email: string; password: string };

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    clearErrors,
  } = useForm<LoginData>();

  const login: SubmitHandler<LoginData> = async (data) => {
    clearErrors();
    console.log(data);
  };

  return (
    <Section isHeroSection>
      <form onSubmit={handleSubmit(login)} className="max-w-md w-full">
        <Card className="p-6">
          <CardHeader className="flex-col gap-2">
            <h2 className="text-3xl font-semibold">Welcome Back!</h2>
            <p className="text-default-500 text-sm font-normal">
              Sign in with your email
            </p>
          </CardHeader>
          <CardBody className="gap-6">
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

            <div className="flex justify-between">
              <Checkbox
                color="primary"
                classNames={{ label: "text-sm sm:text-medium" }}
              >
                Remember me
              </Checkbox>
              <Link
                href={FORGOT_PASSWORD_PAGE_PATH}
                className="text-primary dark:text-primary-600 text-sm sm:text-medium font-medium"
              >
                Forgot password
              </Link>
            </div>
          </CardBody>
          <CardFooter className="flex-col gap-4">
            <Button type="submit" fullWidth size="lg" color="primary">
              Login
            </Button>
            <span className="text-sm font-normal">
              Don&apos;t have an account?{" "}
              <Link
                href={SIGNUP_PAGE_PATH}
                className="text-primary dark:text-primary-600 font-medium"
              >
                Create an account
              </Link>
            </span>
          </CardFooter>
        </Card>
      </form>
    </Section>
  );
};

export default LoginPage;
