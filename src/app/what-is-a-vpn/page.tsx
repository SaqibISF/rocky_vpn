"use client";

import React, { FC } from "react";
import {
  AdvantagesSection,
  AvailableDevicesSection,
  FAQSection,
  Section,
  VPNBlogSection,
} from "@/components/sections";
import {
  ArrowRightIcon,
  HideTextIcon,
  JoystickIcon,
  SecureIcon,
  LaptopCheckIcon,
  WiFiProblemIcon,
  YoutubeIcon,
} from "@/icons";
import { Button } from "@heroui/react";

const WhatIsVPNPage: FC = () => {
  return (
    <>
      <Section
        onlyShowNavbar
        heading="What is a VPN and how does it work?"
        subtitle="A complete guide to virtual private networks"
        description="A VPN, or virtual private network, is a secure tunnel between your device and the internet. VPNs protect you from snooping, interference, and censorship"
      >
        <Button
          variant="shadow"
          color="primary"
          endContent={<ArrowRightIcon />}
          radius="full"
          size="lg"
        >
          Get RockyVPN
        </Button>
      </Section>

      <VPNBlogSection />

      <AvailableDevicesSection />

      <Section
        heading="Benefits of using a VPN"
        description="A VPN offers a wide range of benefits, whether you’re focused on securing your data, accessing restricted content, or improving your overall online experience. Here’s a closer look at how a VPN enhances your digital life:"
      >
        <div className="grid lg:grid-cols-2 gap-4">
          {[
            {
              Icon: SecureIcon,
              heading: "Protecting your privacy and security",
              description:
                "A VPN safeguards your personal information by encrypting your internet connection, preventing hackers, advertisers, and even government surveillance from accessing your data. By masking your IP address, a VPN keeps your online activity private, ensuring that your browsing, messaging, and online transactions remain secure from prying eyes.",
            },
            {
              Icon: WiFiProblemIcon,
              heading: "Securing public Wi-Fi connections",
              description:
                "Public Wi-Fi networks, such as those in cafes, airports, and hotels, are often unsecured, making them prime targets for hackers. A VPN encrypts your connection, securing your data even on these unprotected networks. This is particularly important when accessing sensitive information like banking details or logging into personal accounts while on the go.",
            },
            {
              Icon: HideTextIcon,
              heading: "Avoiding ISP tracking and censorship",
              description:
                "ISPs can track your browsing habits, throttle your connection, or even restrict access to certain websites. A VPN encrypts your traffic, preventing your ISP from monitoring your activity or limiting your speeds based on usage. It also helps users bypass censorship in restricted regions, allowing access to blocked content and ensuring an open internet experience.",
            },
            {
              Icon: LaptopCheckIcon,
              heading: "Securing remote work and file sharing",
              description:
                "A VPN is an essential tool for remote workers and businesses. It provides a secure connection to corporate networks and ensures that sensitive communications and file transfers remain private. By encrypting data, a VPN helps prevent unauthorized access, protect confidential files from cyber threats, and ensure secure collaboration across teams.",
            },
            {
              Icon: JoystickIcon,
              heading: "Enhancing online gaming",
              description:
                "For gamers, a VPN offers several benefits, such as preventing DDoS attacks, reducing lag, and enabling access to geo-restricted servers and content. Whether unlocking new content or looking for smoother gameplay, a VPN optimizes your connection.",
            },
            {
              Icon: YoutubeIcon,
              heading: "Buffer-free streaming",
              description:
                "Streaming enthusiasts can use a VPN to avoid ISP throttling and enjoy uninterrupted streaming of movies, TV shows, and live sports while protecting their privacy. A VPN shields your online activity from your ISP, so even during peak times you won’t be susceptible to content-based throttling.",
            },
          ].map(({ Icon, heading, description }) => (
            <div key={heading} className="flex justify-center">
              <span className="px-3">
                <Icon />
              </span>
              <div className="flex-grow space-y-5 px-2">
                <h4 className="text-2xl font-semibold">{heading}</h4>
                <p className="text-default-600 text-base leading-7 font-normal text-justify">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        heading="VPN protocols: How they work"
        description="VPN protocols define how your data is encrypted and transmitted. Here are the most common ones:"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              heading: "IKEv2/IPSec",
              description:
                "This protocol is known for stability during network changes and is great for mobile users needing reliable connectivity.",
            },
            {
                heading: "WireGuard®",
                description:
                  "A newer, lightweight protocol designed for top-tier performance and robust encryption.",
              },
            ].map(({ heading, description }) => (
            <div key={heading} className="w-3/4 mx-auto space-y-4 px-2">
              <h4 className="text-2xl font-semibold">{heading}</h4>
              <p className="text-default-600 text-base leading-7 font-normal">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <AdvantagesSection heading="Why choose RockyVPN?" />

      <FAQSection />
    </>
  );
};

export default WhatIsVPNPage;
