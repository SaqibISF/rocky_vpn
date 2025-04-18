"use client";

import React, { FC } from "react";
import { AllServersSection, Section } from "@/components/sections";
import { Button } from "@heroui/react";
import Image from "next/image";
import { ArrowRightIcon, CheckedIcon } from "@/icons";
import { earthBase64Src } from "@/lib/earth-base64";

const ServersPage: FC = () => (
  <>
    <Section
      isHeroSection
      className="flex-col lg:flex-row gap-y-10"
      isRightCornerGradient
      isCenterGradient
    >
      <div className="lg:w-3/5 flex flex-col gap-y-6 px-4  text-center sm:text-left">
        <span className="text-accent text-xl font-bold">Rocky VPN</span>
        <h1 className="text-4xl sm:text-5xl font-bold leading-[3.5rem] md:leading-[5rem]">
          VPN Server Locations
        </h1>
        <div className="space-y-5">
          {[
            "No Session or Traffic Logging",
            "High Speed and Low Latency",
            "Change your Location Easily",
            "1Gbps and 10Gbps Servers",
            "Built in Threat Protection",
            "Built in Ad Blocker",
          ].map((feature, index) => (
            <div key={feature + index} className="flex gap-2">
              <CheckedIcon />
              <span className="text-default-500 text-sm font-medium">
                {feature.trim()}
              </span>
            </div>
          ))}
        </div>
        <Button
          color="primary"
          variant="shadow"
          radius="full"
          endContent={<ArrowRightIcon />}
          className="self-center sm:self-start"
        >
          View All Location
        </Button>
      </div>
      <div className="lg:w-2/5 w-full">
        <Image
          className="max-w-[22.5rem] w-full h-auto m-auto"
          src="/earth.png"
          alt="imag not founded"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={earthBase64Src}
        />
      </div>
    </Section>

    <AllServersSection />
  </>
);

export default ServersPage;
