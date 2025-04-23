"use client";

import React, { FC } from "react";
import { DashboardSection } from "../layout";
import { Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { useActivePlan } from "@/hooks/usePlans";
import { getFormattedDate } from "@/lib/utils";

const SubscriptionPage: FC = () => {
  const { activePlan } = useActivePlan();
  return (
    <DashboardSection title="My Subscription" heading="Subscription Details">
      {activePlan && (
        <Card className="p-6 bg-opacity-60">
          <CardHeader className="flex-col items-start gap-3">
            <h5 className="text-default-500 text-sm font-bold">Vpn Services</h5>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h4 className="text-lg font-bold">
                {activePlan.plan.duration} {activePlan.plan.duration_unit} of
                VPN{" "}
              </h4>
              {/* <p className="text-white bg-primary py-0.5 px-2 text-xs font-semibold sm:ml-6 rounded-xl">
                Free Trail : 7 days left
              </p> */}
            </div>

            <Divider />
          </CardHeader>
          <CardBody className="gap-4">
            <p className="text-base font-medium">
              Your Plan ends on {getFormattedDate(activePlan.end_date)}. You’ll
              be billed when your subscription starts on{" "}
              {getFormattedDate(activePlan.start_date)}.
            </p>

            <h5 className="text-default-500 text-sm font-bold">Plan Details</h5>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 border-2 border-default-200 rounded-lg">
              <div className="h-16 flex items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    ${activePlan.amount_paid}
                  </h3>
                  <span className="text-xs">
                    {activePlan.plan.duration} {activePlan.plan.duration_unit}
                  </span>
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
      )}
    </DashboardSection>
  );
};

export default SubscriptionPage;
