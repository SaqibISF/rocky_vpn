"use client";

import React, { FC, useState } from "react";
import { Section } from "@/components/sections";
import { EnvelopeIcon } from "@/icons";
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
import axios, { AxiosError } from "axios";
import { FORGOT_PASSWORD_ROUTE } from "@/lib/constants";
import { EMAIL_INVALID_ERROR_MESSAGE, EMAIL_REGEX } from "@/lib/utils";
import Input from "@/components/Input";

const ForgotPasswordPage: FC = () => {
  type Data = { email: string };

  const [isLoading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<Data>({
    defaultValues: {
      email: "",
    },
  });

  const submit: SubmitHandler<Data> = async (data) => {
    try {
      clearErrors();
      setSuccessMessage("");
      setLoading(true);
      const res = await axios
        .post<{ status: boolean; message: string }>(
          FORGOT_PASSWORD_ROUTE,
          { email: data.email },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((res) => res.data);

      if (res.status) {
        addToast({ color: "success", description: res.message });
        setSuccessMessage(res.message);
      } else {
        addToast({ color: "danger", description: res.message });
        setError("root", { type: "manual", message: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      setError("root", { type: "manual", message: errorMessage });
      addToast({ color: "danger", description: errorMessage });
    } finally {
      setLoading(false);
    }
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
          data-aos="fade-up"
          data-aos-duration="1500"
        ></div>
        <Card className="p-6" data-aos="fade-down" data-aos-duration="1500">
          <CardHeader className="flex-col gap-2">
            <h2 className="text-3xl font-semibold">Forgot Password?</h2>
            <p className="text-default-500 text-sm font-normal">
              Please enter your email we will send you password reset link to
              your email.
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
          <CardBody className="gap-6">
            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              disabled={successMessage ? true : false}
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
          </CardBody>
          <CardFooter className="flex-col gap-4">
            <Button
              isLoading={isLoading}
              type="submit"
              fullWidth
              size="lg"
              color="primary"
              disabled={successMessage ? true : false}
            >
              {isLoading ? "Loading..." : "Send Reset Link"}
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
