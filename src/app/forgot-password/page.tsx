"use client";

import React, { FC } from "react";
import { Section } from "@/components/sections";
import { EnvelopeIcon } from "@/icons";
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

const ForgotPasswordPage: FC = () => {
  type Data = { email: string };

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    clearErrors,
  } = useForm<Data>();

  const submit: SubmitHandler<Data> = async (data) => {
    clearErrors();
    console.log(data);
  };

  return (
    <Section isHeroSection>
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-md w-full text-center relative"
      >
        <div
          className="w-full h-full rounded-xl absolute blur-[5.375rem] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
          }}
        ></div>
        <Card className="p-6">
          <CardHeader className="flex-col gap-2">
            <h2 className="text-3xl font-semibold">Forgot Password?</h2>
            <p className="text-default-500 text-sm font-normal">
              Please enter your email we will send you password reset link to
              your email.
            </p>
          </CardHeader>
          <CardBody className="gap-6">
            <Input
              label="Email"
              labelPlacement="outside"
              placeholder="you@example.com"
              type="email"
              endContent={
                <EnvelopeIcon className="w-5 text-default-500 pointer-events-none" />
              }
              size="lg"
              classNames={{
                inputWrapper: "bg-transparent border",
              }}
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

export default ForgotPasswordPage;
