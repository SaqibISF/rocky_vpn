"use client";
import React, { FC } from "react";
import { DashboardSection } from "./layout";
import { Button } from "@heroui/react";
import { AvailableDevicesSection } from "@/components/sections";
import { HeadphoneIcon } from "@/icons";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH } from "@/lib/pathnames";
import { useAppState } from "@/hooks/use-app-state";
import { useUserCookie } from "@/hooks/use-cookies";
import { getFormattedDate } from "@/lib/utils";
import { useActivePlan } from "@/hooks/usePlans";

const DashboardPage: FC = () => {
  const { isAppMounted } = useAppState();
  const { user } = useUserCookie();
  const { activePlan } = useActivePlan();
  return (
    <DashboardSection
      title="Dashboard"
      heading={`Welcome back, ${isAppMounted && user ? user.name : ""}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-default-500 rounded-xl">
          <Button
            as={Link}
            href={DOWNLOADS_PAGE_PATH}
            variant="shadow"
            color="primary"
            size="lg"
            radius="full"
          >
            Connect
          </Button>
          <p className="text-default-500 text-2xl font-normal">
            Your Online activity is protected.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-default-500 rounded-xl">
          <h3 className="text-2xl font-medium">Subscription</h3>
          {isAppMounted &&
            (activePlan ? (
              <>
                <div className="flex items-center justify-between text-xl text-default-500 font-normal">
                  <p>Plan: {activePlan.plan.name}</p>
                  <p className="text-base">
                    {activePlan.duration} {activePlan.duration_unit}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 text-xl text-default-500 font-normal">
                  <p>Renewal Date: {getFormattedDate(activePlan.end_date)}</p>
                  <p className="text-base">
                    ${activePlan.amount_paid}/
                    {activePlan.duration > 1 ? activePlan.duration + " " : ""}
                    {activePlan.duration_unit}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-default-500 text-base font-normal">
                No, Active Plan Found.
              </p>
            ))}
        </div>

        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-default-500 rounded-xl">
          <h3 className="text-2xl font-medium">Recent Activity</h3>
          <p className="text-default-500 text-xl font-normal">
            Now connected to New York Server
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 p-6 border-2 border-default-500 rounded-xl">
          <h3 className="flex items-center gap-2 text-2xl font-medium">
            <HeadphoneIcon size={44} /> Customer Contact Support
          </h3>
          <p className="text-default-500 text-xl font-normal">
            We&apos;re here to help you 24/7—get in touch anytime!
          </p>
        </div>
      </div>

      <AvailableDevicesSection />
    </DashboardSection>
  );
};

export default DashboardPage;
