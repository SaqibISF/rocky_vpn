"use client";

import React, { FC, Suspense, useState } from "react";
import { Section } from "@/components/sections";
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
import { notFound, useRouter, useSearchParams } from "next/navigation";
import Input from "@/components/Input";
import { PASSWORD_INVALID_ERROR_MESSAGE, PASSWORD_REGEX } from "@/lib/utils";
import { RESET_PASSWORD_ROUTE } from "@/lib/constants";
import axios, { AxiosError } from "axios";

const ResetPasswordPage: FC = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  if (!email || !token) {
    notFound();
  }

  type Data = { password: string; confirm_password: string };

  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);

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
  } = useForm<Data>({
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  const login: SubmitHandler<Data> = async (data) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios
        .post<{ status: boolean; message: string }>(
          RESET_PASSWORD_ROUTE,
          {
            token,
            email,
            password: data.password,
            password_confirmation: data.confirm_password,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((res) => res.data);

      if (res.status) {
        addToast({
          color: "success",
          description: res.message,
        });
        reset();
        router.push(LOGIN_PAGE_PATH);
      } else {
        addToast({
          color: "danger",
          description: res.message,
        });
        setError("root", { type: "manual", message: res.message });
        reset();
        // setValue("password", "");
        // setValue("confirm_password", "");
        setFocus("password");
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      setError("root", { type: "manual", message: errorMessage });
      reset();
      // setValue("password", "");
      // setValue("confirm_password", "");
      setFocus("password");
      addToast({
        color: "danger",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
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
            <h2 className="text-3xl font-semibold">Reset Password!</h2>
            <p className="text-default-500 text-sm font-normal">
              Reset your password
            </p>

            {errors.root && (
              <div className="w-full text-danger-600 bg-danger-50 border-2 border-solid border-danger-100 p-3 rounded-xl">
                {errors.root.message}
              </div>
            )}
          </CardHeader>
          <CardBody className="gap-6">
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
            >
              {isLoading ? "Loading..." : "Reset Password"}
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

const Page: FC = () => (
  <Suspense>
    <ResetPasswordPage />
  </Suspense>
);

export default Page;
