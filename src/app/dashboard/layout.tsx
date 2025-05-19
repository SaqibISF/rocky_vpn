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
import { useLogout } from "@/hooks/useLogout";

const SideBar: FC<{ className?: string }> = ({ className }) => {
  const { handleLogout } = useLogout();
  return (
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
            onPress={handleLogout}
          >
            <SignOutIcon />
            <span className="text-sm font-medium">Sign Out</span>
          </Button>
        </li>
      </ul>
      <div
        className="w-[21.875rem] h-[27.125rem] rounded-xl absolute blur-[5.375rem] -left-[10.625rem] -bottom-[12.5rem] !pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
        }}
      ></div>
    </aside>
  );
};

const DashboardLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div
      id="main-section"
      className="w-full flex flex-col items-center justify-center pt-4 relative"
      style={{
        backgroundImage: 'url("/stars.png")',
        backgroundSize: "25rem",
        backgroundRepeat: "revert",
      }}
    >
      <Navbar />

      <div
        className="w-[21.875rem] h-[27.125rem] rounded-[27.125rem] absolute blur-[12.5rem] top-16 -right-10 !pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
        }}
      ></div>

      <div
        className="size-[33rem] rounded-[33rem] absolute blur-[12.5rem] !pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 140, 0.80) 12.38%, rgba(15, 15, 16, 0.00) 100%)",
        }}
      ></div>

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

        <div className="flex-1 relative pt-20 lg:pt-14">
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

export default DashboardLayout;
