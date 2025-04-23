"use client";

import React, { FC } from "react";
import { usePlansState } from "@/hooks/usePlans";
import { Section } from "@/components/sections";
import CheckoutForm from "@/components/CheckoutForm";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { notFound, useSearchParams } from "next/navigation";

const CheckOutPage: FC = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");

  const { plans } = usePlansState();

  if (!planId || plans.length === 0) {
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
      <div className="w-full flex flex-col lg:flex-row gap-8">
        <CheckoutForm
          planId={plan!.id}
          amount={+plan!.price * 100}
          className="w-full lg:w-2/3"
        />

        <Card className="p-6 w-full lg:w-1/3 bg-opacity-35">
          <CardHeader className="flex flex-col items-start gap-3">
            <h3 className="text-lg font-bold">Order Summary</h3>
            <Divider />
          </CardHeader>
          <CardBody className="gap-4">
            <h3 className="text-lg font-bold">{plan?.name}</h3>
            <div className="flex items-center justify-between text-md font-medium">
              <p>
                {plan?.duration} {plan?.duration_unit} of VPN
              </p>
              <p className="text-default-500">${plan?.price}</p>
            </div>

            <Divider />

          </CardBody>
          <CardFooter className="flex-col gap-4">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-lg font-bold">Total</h3>
              <span className="text-lg font-bold">${plan?.price}</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Section>
  );
};

export default CheckOutPage;
