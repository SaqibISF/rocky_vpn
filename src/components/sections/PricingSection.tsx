import React, { FC } from "react";
import Section from "./Section";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import {
  CheckedIcon,
  PriceCardBackground1,
  PriceCardBackground2,
  PriceCardBackground3,
} from "@/icons";

const PricingSection: FC = () => {
  const plans = [
    {
      id: 1,
      name: "Silver",
      price: 4.99,
      duration: 1,
      duration_unit: "week",
      description:
        "Unlimited Devices, Faster Connection, Unlimited Worldwide Location, Unlimited High Speed VPN, No Ads Forever, 24/7 Customer Service",
    },
    {
      id: 2,
      name: "Gold",
      price: 12.99,
      duration: 1,
      duration_unit: "month",
      description:
        "Unlimited Devices, Faster Connection, Unlimited Worldwide Location, Unlimited High Speed VPN, No Ads Forever, 24/7 Customer Service",
    },
    {
      id: 3,
      name: "Diamond",
      price: 39.99,
      duration: 1,
      duration_unit: "year",
      description:
        "Unlimited Devices, Faster Connection, Unlimited Worldwide Location, Unlimited High Speed VPN, No Ads Forever, 24/7 Customer Service",
    },
  ];
  return (
    <Section
      title="Pricing"
      heading="Choose Your VPN Plan"
      description="Flexible and affordable VPN plans designed to meet your needs. Pay securely with PayPal, Cryptocurrencies or in-app via Google Play and Apple App stores."
    >
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <Card className="p-8 w-full max-w-96 mx-auto relative" key={plan.id}>
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
                <div key={index} className="flex gap-2">
                  <CheckedIcon />
                  <span className="text-default-500 text-sm font-medium">
                    {desc.trim()}
                  </span>
                </div>
              ))}
            </CardBody>
            <CardFooter className="p-0">
              <Button variant="bordered" radius="full" className="w-full">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          //   <Card key={plan.id}>
          //     <CardHeader>
          //       <span className="text-2xl font-semibold">{plan.name}</span>
          //       <h3 className="text-3xl font-semibold">${plan.price}</h3>
          //       <h5>
          //         / {plan.duration > 1 && plan.duration} {plan.duration_unit}
          //       </h5>
          //     </CardHeader>
          //     <CardBody></CardBody>
          //     <CardFooter></CardFooter>
          //   </Card>
        ))}
      </div>
    </Section>
  );
};

export default PricingSection;
