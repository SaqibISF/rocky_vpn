"use client";

import React, { FC, FormEvent, useState } from "react";
import { AppLogo, ShiningStar } from "@/icons";
import LanguageChanger from "./LanguageChanger";
import Link from "next/link";
import { Button, Divider, Form, Input } from "@heroui/react";
import { PRIVACY_POLICY_PAGE_PATH } from "@/lib/pathnames";

const Footer: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [email, setEmail] = useState("");
  let emailError = null;

  const isEmailValid =
    email.length !== 0 &&
    email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!isEmailValid) return;
    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSuccessMessage(`You submitted: ${JSON.stringify(data)}`);
  };

  if (isSubmitted) {
    if (email.length === 0) {
      emailError = "Email is required";
    } else if (
      !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      emailError = "Invalid email address";
    }
  }

  return (
    <footer className="w-full relative overflow-hidden">
      <div
        className="w-[21.875rem] h-[27.125rem] rounded-[27.125rem] absolute blur-[12.5rem] top-16 -right-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
        }}
      ></div>

      <div
        className="size-[34.875rem] rounded-[[34.875rem] absolute blur-[12.5rem] -bottom-8 left-4 pointer-events-none"
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
        <div className="w-full flex justify-between items-center py-12 lg:py-14">
          <AppLogo className="w-32 h-auto" />
          <LanguageChanger />
        </div>

        <Divider />

        <div className="w-full py-4 lg:py-6 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-8">
          {[
            {
              heading: "Company",
              links: [
                { name: "About", href: "#" },
                { name: "Pricing", href: "#" },
                { name: "Pivien Status", href: "#" },
                { name: "Support", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Open Source", href: "#" },
                { name: "Press/Media Kit", href: "#" },
              ],
            },
            {
              heading: "Products",
              links: [
                { name: "VPN for Windows", href: "#" },
                { name: "VPN for Mac", href: "#" },
                { name: "VPN for Android", href: "#" },
                { name: "VPN for iPhone", href: "#" },
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
                { name: "Glossary", href: "#" },
                { name: "Free Proxy", href: "#" },
              ],
            },
            {
              heading: "Legal",
              links: [
                { name: "Imprint", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Condition", href: "#" },
                { name: "Transparency Report", href: "#" },
                { name: "Threat Model", href: "#" },
                { name: "Report Abuse", href: "#" },
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

        <div className="w-full flex flex-col md:flex-row md:justify-between gap-y-8 items-center py-6 lg:py-8 relative">
          <ShiningStar className="absolute xl:left-40 lg:left-24 md:left-12 lg:top-0 md:-top-12 sm:top-6 sm:bottom-auto bottom-20 md:right-auto right-0 pointer-events-none" />
          <div className="w-full flex flex-col gap-y-4 px-4">
            <h1 className="text-5xl font-medium">Subscribe</h1>
            <p className="text-base text-default-500 lg:w-2/3 w-5/6">
              Subscribe to our newsletter and never miss an update. Stay
              informed about the latest news, trends, and exclusive offers.
            </p>
          </div>
          <div className="w-full lg:w-3/5 px-4 space-y-4">
            <h5 className="text-base font-bold">Stay up to date</h5>

            <Form className="w-full" onSubmit={onSubmit}>
              <div className="flex gap-2">
                <Input
                  // errorMessage={() => (
                  //   <ul>
                  //     {errors.map((error, i) => (
                  //       <li key={i}>{error}</li>
                  //     ))}
                  //   </ul>
                  // )}
                  errorMessage={emailError}
                  isInvalid={emailError !== null}
                  // label="Email"
                  // labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onValueChange={setEmail}
                  radius="full"
                  size="lg"
                />
                <Button
                  type="submit"
                  radius="full"
                  size="lg"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg disabled:opacity-50"
                  // style={{background: "linear-gradient(225deg, #D1ADFF 0%, #8290FF 37.81%, #D1ADFF 100%)"}}
                >
                  Subscribe
                </Button>
              </div>
              {successMessage && (
                <div className="text-small text-green-500">
                  {successMessage}
                </div>
              )}
            </Form>
            <p className="text-sm text-default-500">
              By subscribing, you agree to our{" "}
              <Link
                href={PRIVACY_POLICY_PAGE_PATH}
                className="text-foreground font-bold"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
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
};

export default Footer;
