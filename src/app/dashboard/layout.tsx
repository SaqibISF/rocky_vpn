"use client";

import React, { FC, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import {
  DashboardIcon,
  SettingsIcon,
  SignOutIcon,
  SubscriptionIcon,
} from "@/icons";
import {
  Button,
  Divider,
  Drawer,
  DrawerContent,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import { cn } from "@/lib/utils";
import {
  BILLING_DETAILS_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  SUBSCRIPTION_PAGE_PATH,
} from "@/lib/pathnames";
import Link from "next/link";

const SideBar: FC<{ className?: string }> = ({ className }) => (
  <aside className={cn("w-52 py-8", className)}>
    <ul>
      <li>
        <Button
          as={Link}
          href={DASHBOARD_PAGE_PATH}
          variant="light"
          radius="none"
          className="py-9 px-6 w-full justify-stretch"
        >
          <DashboardIcon />
          <span className="text-sm font-medium">Dashboard</span>
        </Button>
        <Divider />
      </li>

      {[
        {
          href: SUBSCRIPTION_PAGE_PATH,
          name: "Subscription",
          Icon: SubscriptionIcon,
        },
        {
          href: BILLING_DETAILS_PAGE_PATH,
          name: "Account & Billing",
          Icon: SettingsIcon,
        },
      ].map(({ href, name, Icon }) => (
        <li key={href}>
          <Button
            as={Link}
            href={href}
            variant="light"
            radius="none"
            className="py-9 px-6 w-full justify-stretch"
          >
            <Icon />
            <span className="text-sm font-medium">{name}</span>
          </Button>
        </li>
      ))}

      <li>
        <Divider />
        <Button
          variant="light"
          radius="none"
          className="py-9 px-6 w-full justify-stretch"
        >
          <SignOutIcon />
          <span className="text-sm font-medium">Sign Out</span>
        </Button>
      </li>
    </ul>
  </aside>
);

const DashboardSection: FC<{
  title: string;
  heading: string;
  children?: ReactNode;
}> = ({ title, heading, children }) => (
  <section className="space-y-6 lg:px-8 px-6 py-20 lg:py-14">
    <span className="text-accent sm:text-xl text-lg font-bold">{title}</span>
    <h2 className="sm:text-3xl text-2xl font-bold">{heading}</h2>
    {children}
  </section>
);

const DashboardLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div
      id="main-section"
      className="w-full flex flex-col items-center justify-center pt-4 relative"
    >
      <Navbar />
      <div className="w-full min-h-[calc(100vh-5rem)] flex">
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left">
          <DrawerContent className="w-52 rounded-none">
            <SideBar />
          </DrawerContent>
        </Drawer>

        <SideBar className="hidden lg:block" />

        <div className="hidden lg:block">
          <Divider orientation="vertical" />
        </div>

        <div className="flex-1 relative">
          <Tooltip content="dashboard" placement="bottom-start">
            <Button
              variant="light"
              isIconOnly
              onPress={onOpen}
              className="lg:hidden absolute top-4 left-4 p-2"
            >
              <DashboardIcon />
            </Button>
          </Tooltip>

          {children}
        </div>
      </div>
    </div>
  );
};

export { DashboardSection };

export default DashboardLayout;
