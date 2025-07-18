"use client";
import React, { FC } from "react";
import Section from "./Section";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@heroui/react";
import {
  CheckedIcon,
  PriceCardBackground1,
  PriceCardBackground2,
  PriceCardBackground3,
} from "@/icons";
import { usePlans } from "@/hooks/usePlans";
import Link from "next/link";
import { CHECKOUT_PAGE_PATH, LOGIN_PAGE_PATH } from "@/lib/pathnames";
import { useUserCookie } from "@/hooks/use-cookies";

const PricingSection: FC<{
  isHeroSection?: boolean;
  isLeftCornerGradient?: boolean;
  isRightCornerGradient?: boolean;
  isCenterGradient?: boolean;
}> = ({
  isHeroSection,
  isLeftCornerGradient,
  isRightCornerGradient,
  isCenterGradient,
}) => {
  const { isPlansLoading, plans } = usePlans();
  const { user } = useUserCookie();
  return (
    <Section
      isHeroSection={isHeroSection}
      title="Pricing"
      heading="Choose Your VPN Plan"
      description="Flexible and affordable VPN plans designed to meet your needs. Pay securely with PayPal, Cryptocurrencies or in-app via Google Play and Apple App stores."
      isLeftCornerGradient={isLeftCornerGradient}
      isRightCornerGradient={isRightCornerGradient}
      isCenterGradient={isCenterGradient}
    >
      {!isPlansLoading && plans.length === 0 && (
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-offset="25">
          <CardBody>
            <p className="text-lg font-medium text-default-500">
              No plans available at the moment. Please check back later.
            </p>
          </CardBody>
        </Card>
      )}

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {isPlansLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <Card
              className="p-8 w-full max-w-96 mx-auto relative animate-pulse"
              key={index}
            >
              <CardHeader className="p-0 flex-col items-start gap-2">
                <Skeleton className="h-6 w-32 bg-gray-300 rounded-md"></Skeleton>
                <div className="flex items-center mt-2 gap-2">
                  <Skeleton className="h-8 w-16 bg-gray-300 rounded-md"></Skeleton>
                  <Skeleton className="h-4 w-12 bg-gray-300 rounded-md"></Skeleton>
                </div>
              </CardHeader>
              <CardBody className="px-0 py-10 flex flex-col items-start gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <Skeleton className="h-4 w-4 bg-gray-300 rounded-full"></Skeleton>
                    <Skeleton className="h-4 w-48 bg-gray-300 rounded-md"></Skeleton>
                  </div>
                ))}
              </CardBody>
              <CardFooter className="p-0">
                <Skeleton className="h-10 w-full bg-gray-300 rounded-md"></Skeleton>
              </CardFooter>
            </Card>
          ))}

        {plans.map((plan, index) => (
          <Card
            className="p-8 w-full max-w-96 mx-auto relative bg-opacity-60"
            key={plan.id}
            data-aos={
              (index + 1) % 3 === 1
                ? "fade-right"
                : (index + 1) % 3 === 2
                ? "fade-down"
                : (index + 1) % 3 === 0
                ? "fade-left"
                : ""
            }
            data-aos-easing="ease-in-sine"
            data-aos-offset="25"
          >
            {(index + 1) % 3 === 1 && <PriceCardBackground1 />}
            {(index + 1) % 3 === 2 && <PriceCardBackground2 />}
            {(index + 1) % 3 === 0 && <PriceCardBackground3 />}
            <CardHeader className="p-0 flex-col items-start gap-2">
              <p className="text-2xl font-semibold">{plan.name}</p>
              <div className="flex items-center mt-2">
                <h4 className="font-semibold text-4xl">${plan.price}</h4>
                <small className="text-default-500 text-sm font-medium ml-2">
                  / {plan.duration > 1 && plan.duration} {plan.duration_unit}
                </small>
              </div>
            </CardHeader>
            <CardBody className="px-0 py-10 flex flex-col items-start gap-6">
              {plan.description.split(",").map((desc, index) => (
                <div key={desc + index} className="flex gap-2">
                  <CheckedIcon />
                  <span className="text-default-500 text-sm font-medium">
                    {desc.trim()}
                  </span>
                </div>
              ))}
            </CardBody>
            <CardFooter className="p-0">
              <Button
                as={Link}
                href={
                  user
                    ? CHECKOUT_PAGE_PATH(plan.id)
                    : `${LOGIN_PAGE_PATH}?redirect=${CHECKOUT_PAGE_PATH(
                        plan.id
                      )}`
                }
                variant="bordered"
                radius="full"
                className="w-full"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default PricingSection;
