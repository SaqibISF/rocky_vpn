import React, { FC } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

import { ThemeSwitch } from "@/components/theme-switch";

import { AppLogo } from "@/icons";
import {
  BUSINESS_VPN_PAGE_PATH,
  DOWNLOADS_PAGE_PATH,
  FEATURES_PAGE_PATH,
  HOME_PAGE_PATH,
  LOGIN_PAGE_PATH,
  PRICING_PAGE_PATH,
  SERVERS_PAGE_PATH,
  WHAT_IS_A_VPN_PAGE_PATH,
} from "@/lib/pathnames";

const Navbar: FC = () => {
  const navItems = [
    {
      label: "Features",
      href: FEATURES_PAGE_PATH,
    },
    {
      label: "What is a VPN?",
      href: WHAT_IS_A_VPN_PAGE_PATH,
    },
    {
      label: "Servers",
      href: SERVERS_PAGE_PATH,
    },
    {
      label: "Pricing",
      href: PRICING_PAGE_PATH,
    },
    {
      label: "Business VPN",
      href: BUSINESS_VPN_PAGE_PATH,
    },
  ];

  const navMenuItems = [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ]

  return (
    <HeroUINavbar id="navbar" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            href={HOME_PAGE_PATH}
            className="flex justify-start items-center gap-1"
          >
            <AppLogo className="w-32 h-auto" />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={cn(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-4">
          <ThemeSwitch />
          <Button
            as={Link}
            href={LOGIN_PAGE_PATH}
            variant="bordered"
            className="rounded-full"
          >
            Login
          </Button>
          <Button
            as={Link}
            href={DOWNLOADS_PAGE_PATH}
            color="primary"
            variant="shadow"
            radius="full"
          >
            Download
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
