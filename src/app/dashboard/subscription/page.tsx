"use client";

import React, { FC } from "react";
import { DashboardSection } from "../layout";
import { Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";

const SubscriptionPage: FC = () => {
  return (
    <DashboardSection title="My Subscription" heading="Subscription Details">
      <Card className="p-6">
        <CardHeader className="flex-col items-start gap-3">
          <h5 className="text-default-500 text-sm font-bold">Vpn Services</h5>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h4 className="text-lg font-bold">1 Month of VPN </h4>
            <p className="text-white bg-primary py-0.5 px-2 text-xs font-semibold sm:ml-6 rounded-xl">
              Free Trail : 7 days left
            </p>
          </div>
          <Divider />
        </CardHeader>
        <CardBody className="gap-4">
          <p className="text-base font-medium">
            Free trial ends on Mar 25, 2025. You’ll be billed when your
            subscription starts on Mar 26, 2025.
          </p>

          <p className="text-default-500 text-xs font-medium">
            ID: e2c7dbaf-fe4b-574d-bec8-939d46d77c40
          </p>

          <h5 className="text-default-500 text-sm font-bold">Plan Details</h5>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 border-2 border-default-200 rounded-lg">
            <div className="h-16 flex items-center gap-4">
              <div>
                <h3 className="text-xl font-bold">$12.99</h3>
                <span className="text-xs">Per Month</span>
              </div>

              <Divider orientation="vertical" />

              <div>
                <h3 className="text-xl font-bold">On</h3>
                <span className="text-xs">Automatic renewal</span>
              </div>
            </div>

            <Button variant="shadow" color="danger">
              Cancel
            </Button>
          </div>
        </CardBody>
      </Card>
    </DashboardSection>
  );
};

export default SubscriptionPage;
