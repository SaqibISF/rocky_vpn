"use client";

import React, { FC } from "react";
import { usePlans } from "@/hooks/usePlans";
import { Section } from "@/components/sections";
import CheckoutForm from "@/components/CheckoutForm";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "@heroui/react";
import { notFound, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useBillingAddress } from "@/hooks/use-billing-address";

const CheckOutPage: FC = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");

  const { isPlansLoading, plans } = usePlans();
  const { isBillingAddressLoading, billingAddress } = useBillingAddress();

  if (!planId) {
    notFound();
  }
  const plan = plans.find((plan) => plan.id === +planId);

  return (
    <Section
      isHeroSection
      isRightCornerGradient
      isCenterGradient
      isLeftCornerGradient
      heading="Check out"
      title={`${plan?.name} $${plan?.price}`}
    >
      <div className="w-full flex flex-col lg:flex-row items-start gap-8">
        {(isPlansLoading || isBillingAddressLoading) &&
          Array.from({ length: 2 }).map((_, index) => (
            <Card
              key={index}
              className={cn(
                "p-6 w-full bg-opacity-60 animate-pulse",
                index === 0 ? "lg:w-1/3" : "lg:w-2/3"
              )}
            >
              <CardHeader className="flex flex-col items-start gap-3">
                <Skeleton className="h-6 w-1/3 rounded"></Skeleton>
                <Divider />
              </CardHeader>
              <CardBody className="gap-4">
                <Skeleton className="h-6 w-1/2 rounded"></Skeleton>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-1/3 rounded"></Skeleton>
                  <Skeleton className="h-4 w-1/4 rounded"></Skeleton>
                </div>
                <Divider />
              </CardBody>
              <CardFooter className="flex-col gap-4">
                <div className="w-full flex items-center justify-between">
                  <Skeleton className="h-6 w-1/4 rounded"></Skeleton>
                  <Skeleton className="h-6 w-1/4 rounded"></Skeleton>
                </div>
              </CardFooter>
            </Card>
          ))}

        {!isPlansLoading && !isBillingAddressLoading && plan && (
          <>
            <Card className="p-6 w-full lg:w-1/3 bg-opacity-35">
              <CardHeader className="flex flex-col items-start gap-3">
                <h3 className="text-lg font-bold">Order Summary</h3>
                <Divider />
              </CardHeader>
              <CardBody className="gap-4">
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <div className="flex items-center justify-between text-md font-medium">
                  <p>
                    {plan.duration} {plan.duration_unit} of VPN
                  </p>
                  <p className="text-default-500">${plan.price}</p>
                </div>

                <Divider />
              </CardBody>
              <CardFooter className="flex-col gap-4">
                <div className="w-full flex items-center justify-between">
                  <h3 className="text-lg font-bold">Total</h3>
                  <span className="text-lg font-bold">${plan.price}</span>
                </div>
              </CardFooter>
            </Card>

            <CheckoutForm
              planId={plan!.id}
              amount={+plan!.price * 100}
              billingAddress={billingAddress}
              className="w-full lg:w-2/3"
            />
          </>
        )}
      </div>
    </Section>
  );
};

export default CheckOutPage;
