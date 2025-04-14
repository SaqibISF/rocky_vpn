"use client";

import React, { FC } from "react";
import { DashboardSection } from "../layout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@heroui/react";
import Input from "@/components/Input";
import { CreditCardIcon, VPNIcon } from "@/icons";

const BillingDetailsPage: FC = () => {
  return (
    <DashboardSection title="Check Out" heading="Billing Details">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <form className="w-full max-w-md">
          <Card className="p-6">
            <CardBody className="gap-6">
              <Input
                label="Name"
                placeholder="Enter your name"
                type="text"
                // errorMessage={errors.username?.message}
                // {...register("name", {
                //   required: "Enter your Name",
                //   minLength: {
                //     value: 3,
                //     message: "Name must be at least 3 chars",
                //   },
                // })}
              />

              <Input
                label="Email"
                placeholder="you@example.com"
                type="email"
                // errorMessage={errors.email?.message}
                // {...register("email", {
                //   required: "Enter email address",
                //   minLength: {
                //     value: 2,
                //     message: "Enter email address",
                //   },
                //   pattern: {
                //     value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
                //     message:
                //       "Please enter valid email address\n e.g. username@domain.com",
                //   },
                // })}
              />

              <Input
                label="Address"
                placeholder="Enter your address"
                type="text"
              />

              <div className="w-full flex justify-between">
                <Input
                  label="City"
                  placeholder="City"
                  type="text"
                  className="w-5/12"
                />
                <Input
                  label="State"
                  placeholder="State"
                  type="text"
                  className="w-5/12"
                />
              </div>

              <Input
                label="Credit or Debit Card Number"
                placeholder="Enter card number"
                type="text"
                startContent={
                  <CreditCardIcon className="w-6 text-default-500 pointer-events-none" />
                }
                endContent={
                  <Image
                    alt="HeroUI hero Image"
                    src="/auto-fill-link.png"
                    className="w-20 h-auto pointer-events-none"
                  />
                }
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 "); // Add space after every 4 digits
                  e.target.value = formattedValue;
                }}
                maxLength={19} // Limit input to 16 digits + 3 spaces
              />

              <Button variant="shadow" color="primary" size="lg" type="submit">
                Submit
              </Button>
            </CardBody>
          </Card>
        </form>

        <Card className="p-6 w-full max-w-md">
          <CardHeader className="flex flex-col items-start gap-3">
            <h3 className="text-lg font-bold">Free Trial</h3>
            <p className="text-xs font-medium">
              7 Days Free
              <span className="text-white bg-primary px-2 py-1 rounded-lg ml-6">
                Full Access
              </span>
            </p>
            <Divider />
          </CardHeader>
          <CardBody className="gap-4">
            <h3 className="text-lg font-bold">Order Summary</h3>
            <div className="flex items-center justify-between text-xs font-medium">
              <p>
                2 Years of VPN
                <span className="text-white bg-primary px-2 py-1 rounded-lg ml-6">
                  Save 61%
                </span>
              </p>
              <p className="text-default-500">$139</p>
            </div>

            <div className="flex items-center justify-between text-xs font-medium">
              <p>
                + 4 Months FREE
                <span className="text-white bg-primary px-2 py-1 rounded-lg ml-6">
                  Special Deal
                </span>
              </p>
              <p className="text-default-500">$50</p>
            </div>

            <Divider />

            <div className="flex gap-1 items-center">
              <VPNIcon />
              <p className="text-sm font-medium flex-1">
                Included for free with your VPN
              </p>
            </div>

            <Divider />

            <p className="text-default-500 text-xs font-light">
              Country: Pakistan
            </p>
          </CardBody>
          <CardFooter className="flex-col gap-4">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-lg font-bold">Oder total</h3>
              <span className="text-primary text-lg font-bold">$139.72</span>
            </div>
            <p className="self-end text-sm font-medium">Billing after 7 days</p>
          </CardFooter>
        </Card>
      </div>
    </DashboardSection>
  );
};

export default BillingDetailsPage;
