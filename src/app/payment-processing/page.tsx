"use client";

import React, { FC, Suspense, useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { useUserCookie } from "@/hooks/use-cookies";
import { ADD_PURCHASE_PLAN_ROUTE } from "@/lib/constants";
import axios, { AxiosError } from "axios";
import { addToast, Alert, Button, Spinner } from "@heroui/react";
import { Section } from "@/components/sections";
import { HOME_PAGE_PATH } from "@/lib/pathnames";
import { ErrorIcon, VerifiedIcon } from "@/icons";
import { PurchasedPlan } from "@/types";
import { useDispatch } from "react-redux";
import { setActivePlan } from "@/store/plans.slice";

const PaymentProcessingPage: FC = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const { user } = useUserCookie();
  const [isPaymentSuccessful, setPaymentStatus] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    const verifyPayment = async (planId: number, paymentIntent: string) => {
      try {
        const res = await axios
          .post<{
            paymentStatus: boolean;
          }>("/api/verify-payment", { paymentIntent })
          .then((res) => res.data);

        if (res.paymentStatus) {
          setPaymentStatus(true);

          const res = await axios
            .post<{
              status: boolean;
              message: string;
              purchase: PurchasedPlan;
            }>(
              ADD_PURCHASE_PLAN_ROUTE,
              {
                plan_id: planId,
                payment_intent: paymentIntent,
              },
              {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${user.access_token}`,
                },
              }
            )
            .then((res) => res.data);

          if (res.status) {
            setSuccessMessage(res.message);
            dispatch(setActivePlan(res.purchase));
          }
        } else {
          setPaymentStatus(false);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "An error occurred";
        addToast({
          color: "danger",
          title: errorMessage,
        });
      } finally {
        setLoading(false);
      }
    };

    const paymentIntent = searchParams.get("payment_intent");
    const planId = searchParams.get("planId");
    if (!paymentIntent) {
      notFound();
    } else {
      verifyPayment(+planId!, paymentIntent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section isHeroSection isCenterGradient className="space-y-4">
      {isLoading && (
        <Spinner
          size="lg"
          color="current"
          variant="spinner"
          label="Processing Payment..."
          className="space-y-8"
          classNames={{ wrapper: "size-32", label: "text-xl font-bold" }}
        />
      )}

      {!isLoading && !isPaymentSuccessful && (
        <>
          <ErrorIcon className="size-48 text-danger-500" />
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Payment Failed
          </h1>

          <Alert
            className="max-w-3xl flex-grow-0"
            color="danger"
            title="Unfortunately, we were unable to process your payment. Please try again or contact support if the issue persists."
          />
        </>
      )}

      {!isLoading && isPaymentSuccessful && (
        <>
          <VerifiedIcon className="size-48 text-success-500" />
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Payment Successful
          </h1>
          <Alert
            className="max-w-3xl flex-grow-0"
            color="success"
            // title="Your payment has been successfully processed. Thank you for your purchase!"
            title={successMessage}
          />
          <Button href={HOME_PAGE_PATH} color="primary" variant="shadow">
            Back to Home
          </Button>
        </>
      )}
    </Section>
  );
};

const Page: FC = () => (
  <Suspense>
    <PaymentProcessingPage />
  </Suspense>
);

export default Page;
