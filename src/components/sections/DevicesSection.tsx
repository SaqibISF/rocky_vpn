"use client";
import React, { FC } from "react";
import Section from "./Section";
import { ArrowRightIcon } from "@/icons";
import { Button } from "@heroui/react";
import { AvailableDevices } from "./AvailableDevicesSection";

const DevicesSection: FC = () => (
  <Section
    title="Devices"
    heading="Available for All Your Devices"
    description="Connect to your devices, enjoy secure and private access to the internet — even on public Wi-Fi."
  >
    <div className="flex flex-col items-center justify-center gap-y-14">
      <AvailableDevices />
      <Button variant="bordered" className="rounded-full w-fit">
        See All Devices <ArrowRightIcon />
      </Button>
    </div>
  </Section>
);

export default DevicesSection;
