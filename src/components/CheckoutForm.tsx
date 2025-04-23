"use client";

import React, { FC, FormEvent, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { PAYMENT_PROCESSING_PAGE_PATH } from "@/lib/pathnames";
import { addToast, Button } from "@heroui/react";
import axios from "axios";
import { useTheme } from "next-themes";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "@/lib/constants";
import { StripeElementsOptionsMode } from "@stripe/stripe-js";

const PaymentForm: FC<{
  planId: number;
  amount: number;
  className?: string;
}> = ({ planId, amount, className }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (errorMessage) {
      addToast({
        color: "danger",
        description: `Payment failed, ${errorMessage}`,
      });
    }
  }, [errorMessage]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    <form onSubmit={handleSubmit} className={className}>
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
        className="w-full mt-4"
      >
        {isLoading ? "Processing..." : "Pay"}
      </Button>
    </form>
  );
};

const CheckoutForm: FC<{
  planId: number;
  amount: number;
  className?: string;
}> = ({ planId, amount, className }) => {
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
        colorBackground: isDarkMode ? "#18181b59" : "#ffffff59",
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
      <PaymentForm planId={planId} amount={amount} className={className} />
    </Elements>
  );
};

export default CheckoutForm;
