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
  DOWNLOADS_PAGE_PATH,
  FEATURES_PAGE_PATH,
  HOME_PAGE_PATH,
  LOGIN_PAGE_PATH,
  PRICING_PAGE_PATH,
  SERVERS_PAGE_PATH,
  SIGNUP_PAGE_PATH,
  WHAT_IS_A_VPN_PAGE_PATH,
} from "@/lib/pathnames";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
  const pathname = usePathname();

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
  ];

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
        <ul className="hidden md:flex gap-4 justify-start ml-2">
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

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex lg:gap-4 gap-3">
          <ThemeSwitch />
          <Button
            as={NextLink}
            href={
              pathname !== LOGIN_PAGE_PATH ? LOGIN_PAGE_PATH : SIGNUP_PAGE_PATH
            }
            variant="bordered"
            radius="full"
            className="hidden sm:inline-flex"
          >
            {pathname !== LOGIN_PAGE_PATH ? "Login" : "Sign Up"}
          </Button>
          <Button
            as={NextLink}
            href={DOWNLOADS_PAGE_PATH}
            color="primary"
            variant="shadow"
            radius="full"
            className="hidden sm:inline-flex"
          >
            Download
          </Button>
        </NavbarItem>
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {[
            {
              label: "Home",
              href: HOME_PAGE_PATH,
            },
            ...navItems,
            {
              label: "Login",
              href: LOGIN_PAGE_PATH,
            },
            {
              label: "Download",
              href: DOWNLOADS_PAGE_PATH,
            },
          ].map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item.href === LOGIN_PAGE_PATH ? (
                <Button
                  as={NextLink}
                  href={
                    pathname !== LOGIN_PAGE_PATH
                      ? LOGIN_PAGE_PATH
                      : SIGNUP_PAGE_PATH
                  }
                  variant="bordered"
                  radius="full"
                  className="w-full sm:hidden"
                >
                  {pathname !== LOGIN_PAGE_PATH ? "Login" : "Sign Up"}
                </Button>
              ) : item.href === DOWNLOADS_PAGE_PATH ? (
                <Button
                  as={NextLink}
                  href={DOWNLOADS_PAGE_PATH}
                  color="primary"
                  variant="shadow"
                  radius="full"
                  className="w-full sm:hidden"
                >
                  Download
                </Button>
              ) : (
                <Link
                  color={pathname === item.href ? "primary" : "foreground"}
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
