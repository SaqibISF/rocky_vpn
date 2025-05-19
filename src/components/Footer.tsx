"use client";

import React, { FC } from "react";
import { ShiningStar } from "@/icons";
import Link from "next/link";
import { Divider } from "@heroui/react";
import {
  CONTACT_US_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  DOWNLOADS_PAGE_PATH,
  PRICING_PAGE_PATH,
  PRIVACY_POLICY_PAGE_PATH,
  TERMS_AND_CONDITIONS_PAGE_PATH,
} from "@/lib/pathnames";
import AppLogo from "./AppLogo";

const Footer: FC = () => (
  <footer className="w-full relative overflow-hidden">
    <div
      className="w-[21.875rem] h-[27.125rem] rounded-[27.125rem] absolute blur-[12.5rem] top-16 -right-10 !pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
      }}
    ></div>

    <div
      className="size-[34.875rem] rounded-[[34.875rem] absolute blur-[12.5rem] -bottom-8 left-4 !pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(130, 144, 255, 0.50) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
      }}
    ></div>

    <div
      className="w-full max-w-7xl mx-auto px-4"
      style={{
        backgroundImage: 'url("/stars.png")',
        backgroundSize: "25rem",
        backgroundRepeat: "revert",
      }}
    >
      <AppLogo className="py-12 lg:py-14" />

      <ShiningStar className="absolute top-12 -left-44 sm:left-0 !pointer-events-none" />

      <Divider />

      <div className="w-full py-4 lg:py-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-8">
        {[
          {
            heading: "Company",
            links: [
              { name: "Dashboard", href: DASHBOARD_PAGE_PATH },
              { name: "About", href: "#" },
              { name: "Pricing", href: PRICING_PAGE_PATH },
              { name: "Support", href: CONTACT_US_PAGE_PATH },
            ],
          },
          {
            heading: "Products",
            links: [
              { name: "VPN for Windows", href: DOWNLOADS_PAGE_PATH },
              { name: "VPN for Mac", href: DOWNLOADS_PAGE_PATH },
              { name: "VPN for Android", href: DOWNLOADS_PAGE_PATH },
              { name: "VPN for iPhone", href: DOWNLOADS_PAGE_PATH },
            ],
          },
          {
            heading: "Other Resources",
            links: [
              { name: "What is My IP", href: "#" },
              { name: "How IP Works", href: "#" },
              { name: "How Hackers Use IP", href: "#" },
              { name: "Change My IP", href: "#" },
              { name: "Hide My IP", href: "#" },
            ],
          },
          {
            heading: "Legal",
            links: [
              { name: "Privacy Policy", href: PRIVACY_POLICY_PAGE_PATH },
              {
                name: "Terms & Condition",
                href: TERMS_AND_CONDITIONS_PAGE_PATH,
              },
            ],
          },
          {
            heading: "Social",
            links: [
              { name: "Twitter", href: "#" },
              { name: "LinkedIn", href: "#" },
              { name: "Instagram", href: "#" },
              { name: "Facebook", href: "#" },
              { name: "Youtube", href: "#" },
            ],
          },
        ].map(({ heading, links }) => (
          <section key={heading} className="w-full px-4 flex flex-col gap-3">
            <h4 className="text-base font-bold mb-2">{heading}</h4>
            {links.map((link) => (
              <Link
                key={link.name + link.href}
                target={
                  link.href.startsWith("https://") ||
                  link.href.startsWith("http://")
                    ? "_blank"
                    : "_self"
                }
                href={link.href}
                className="text-sm font-medium text-default-500"
              >
                {link.name}
              </Link>
            ))}
          </section>
        ))}
      </div>

      <Divider />

      <div className="w-full flex justify-between items-center py-4 lg:py-6">
        <div className="text-sm text-default-500">
          © 2025 RockyVPN. All rights reserved.
        </div>
        <div className="text-base text-default-500">
          <span>Powered by </span>
          <Link
            href="https://www.tecclubx.com/"
            target="_blank"
            className="text-accent font-bold"
          >
            Tecclub
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
