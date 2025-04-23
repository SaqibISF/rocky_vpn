"use client";

import React, { FC } from "react";
import { DashboardSection } from "../layout";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { useUserCookie } from "@/hooks/use-cookies";
import { useAppState } from "@/hooks/use-app-state";
import {
  ChangeEmailDialog,
  ChangeNameDialog,
  ChangePasswordDialog,
  DeleteAccountDialog,
  PaymentHistoryTable,
} from "@/components";

const BillingDetailsPage: FC = () => {
  const { isAppMounted } = useAppState();
  const { user } = useUserCookie();
  return (
    <>
      <DashboardSection title="My Account" heading="User Information">
        <Card className="p-6 bg-opacity-35">
          <CardBody className="sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Name</h3>
              {isAppMounted && user && (
                <p className="text-default-500 text-lg font-normal">
                  {user.name}
                </p>
              )}
            </div>
            <ChangeNameDialog />
          </CardBody>
        </Card>

        <Card className="p-6 bg-opacity-35">
          <CardBody className="sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Email Address</h3>
              {isAppMounted && user && (
                <p className="text-default-500 text-lg font-normal">
                  {user.email}
                </p>
              )}
            </div>
            <ChangeEmailDialog />
          </CardBody>
        </Card>

        <Card className="p-6 bg-opacity-35">
          <CardBody className="sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Password</h3>
              <p className="text-default-500 text-lg font-normal">**********</p>
            </div>
            <ChangePasswordDialog />
          </CardBody>
        </Card>

        <Card className="p-6 bg-opacity-35">
          <CardHeader className="text-3xl font-bold">
            Account management
          </CardHeader>
          <Divider />
          <CardBody className="md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 md:w-2/3">
              <h3 className="text-2xl font-semibold">Delete</h3>

              <p className="text-default-500 text-lg font-normal">
                Delete your account and its associated data in accordance with
                our Privacy Policy. You may choose to do it immediately or once
                your subscription ends and its
              </p>
            </div>
            <DeleteAccountDialog />
          </CardBody>
        </Card>
      </DashboardSection>
      <DashboardSection title="Billing Details" heading="Payment History">
        <PaymentHistoryTable />
      </DashboardSection>
    </>
  );
};

export default BillingDetailsPage;
