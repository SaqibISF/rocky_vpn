"use client";

import React, { FC, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { PAYMENT_PROCESSING_PAGE_PATH } from "@/lib/pathnames";
import { addToast, Button, Card } from "@heroui/react";
import axios from "axios";
import { useTheme } from "next-themes";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "@/lib/constants";
import { StripeElementsOptionsMode } from "@stripe/stripe-js";
import { SubmitHandler, useForm } from "react-hook-form";
import { BillingAddress } from "@/types";
import Input from "./Input";
import { CityIcon, LocationDotIcon, StateIcon, UserIcon } from "@/icons";
import { cn, NAME_INVALID_ERROR_MESSAGE, NAME_REGEX } from "@/lib/utils";
import { useUserCookie } from "@/hooks/use-cookies";

const PaymentForm: FC<{
  planId: number;
  amount: number;
  billingAddress: BillingAddress | null;
  className?: string;
}> = ({ planId, amount, billingAddress, className }) => {
  const { user } = useUserCookie();
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingAddress & { country: string }>({
    defaultValues: {
      name: (billingAddress && billingAddress.name) || "",
      address: (billingAddress && billingAddress.address) || "",
      city: (billingAddress && billingAddress.city) || "",
      state: (billingAddress && billingAddress.state) || "",
      postal_code: (billingAddress && billingAddress.postal_code) || "",
    },
  });

  useEffect(() => {
    if (errorMessage) {
      addToast({
        color: "danger",
        description: `Payment failed, ${errorMessage}`,
      });
    }
  }, [errorMessage]);

  const submit: SubmitHandler<BillingAddress & { country: string }> = async (
    values
  ) => {
    if (!stripe || !elements) {
      return;
    }

    try {
      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        // Show error to your customer
        setErrorMessage(submitError.message);
        return;
      }

      setLoading(true);
      setErrorMessage(undefined);

      const res = await axios
        .post<{ clientSecret: string | null }>("/api/create-payment-intent", {
          amount,
        })
        .then((res) => res.data);

      if (!res.clientSecret) {
        setErrorMessage("Client secret is missing");
        return;
      }

      const { error } = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret: res.clientSecret,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: values.name,
              email: user.email,
              address: {
                line1: values.address,
                city: values.city,
                state: values.state,
                postal_code: values.postal_code,
                country: values.country,
              },
            },
          },
          return_url: `${window.location.origin}/${PAYMENT_PROCESSING_PAGE_PATH}?planId=${planId}`,
        },
      });

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={cn("p-6 bg-opacity-60", className)}>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <Input
          label="Name"
          placeholder="Enter your Name"
          type="text"
          size="md"
          endContent={
            <UserIcon className="w-5 text-default-500 !pointer-events-none" />
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
          label="Address"
          placeholder="Enter your address"
          type="text"
          size="md"
          endContent={
            <LocationDotIcon className="text-default-500 !pointer-events-none" />
          }
          errorMessage={errors.address?.message}
          {...register("address", {
            required: { value: true, message: "Enter your address" },
            minLength: {
              value: 10,
              message: "Address must be at least 10 chars",
            },
          })}
        />

        <Input
          label="City"
          placeholder="Enter your city"
          type="text"
          size="md"
          endContent={
            <CityIcon className="w-5 text-default-500 !pointer-events-none" />
          }
          errorMessage={errors.city?.message}
          {...register("city", {
            required: { value: true, message: "Enter your city" },
            minLength: {
              value: 2,
              message: "city must be at least 2 chars",
            },
          })}
        />

        <div className="flex items-start gap-4">
          <Input
            label="State"
            placeholder="State"
            type="text"
            size="md"
            endContent={
              <StateIcon className="w-5 text-default-500 !pointer-events-none" />
            }
            errorMessage={errors.state?.message}
            {...register("state", {
              required: { value: true, message: "Enter your state" },
              minLength: {
                value: 2,
                message: "state must be at least 2 chars",
              },
            })}
          />

          <Input
            label="Postal Code"
            placeholder="Postal Code"
            type="text"
            size="md"
            endContent={
              <LocationDotIcon className="text-default-500 !pointer-events-none" />
            }
            errorMessage={errors.postal_code?.message}
            {...register("postal_code", {
              required: {
                value: true,
                message: "Enter your postal code",
              },
            })}
          />
        </div>

        <PaymentElement />

        {errorMessage && (
          <div className="mt-4 text-danger-500">{errorMessage}</div>
        )}

        <Button
          type="submit"
          color="primary"
          variant="shadow"
          isLoading={isLoading}
          disabled={!stripe || !elements || isLoading}
          className="w-full"
        >
          {isLoading ? "Processing..." : "Pay"}
        </Button>
      </form>
    </Card>
  );
};

const CheckoutForm: FC<{
  planId: number;
  amount: number;
  billingAddress: BillingAddress | null;
  className?: string;
}> = ({ planId, amount, billingAddress, className }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  const options: StripeElementsOptionsMode = {
    mode: "payment",
    amount,
    currency: "usd",
    appearance: {
      theme: isDarkMode ? "night" : "stripe",
      variables: {
        colorPrimary: isDarkMode ? "#eceef0" : "#101418",
        colorBackground: isDarkMode ? "#18181b00" : "#ffffff00",
        // colorBackground: isDarkMode ? "#18181b59" : "#ffffff59",
        borderRadius: "14px",
        colorText: isDarkMode ? "#eceef0" : "#101418",
        colorSuccess: isDarkMode ? "#18b86e" : "#0d7347",
        colorDanger: "#f3206a",
        colorWarning: isDarkMode ? "#f28d1b" : "#a75f11",
      },
    },
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm
        planId={planId}
        amount={amount}
        billingAddress={billingAddress}
        className={className}
      />
    </Elements>
  );
};

export default CheckoutForm;
