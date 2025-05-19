"use client";

import React, { FC } from "react";
import Section from "./Section";
import { cn } from "@/lib/utils";
import { AndroidIcon, IPhoneIcon, MACIcon, WindowsIcon } from "@/icons";
import { Button } from "@heroui/react";

const AvailableDevices: FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      "flex flex-wrap items-center justify-center gap-6",
      className
    )}
  >
    {[
      { deviceName: "Windows", Icon: WindowsIcon },
      { deviceName: "Mac", Icon: MACIcon },
      { deviceName: "Android", Icon: AndroidIcon },
      { deviceName: "iPhone", Icon: IPhoneIcon },
    ].map(({ deviceName, Icon }) => (
      <Button
        key={deviceName}
        className="w-28 h-24 rounded-3xl hover:bg-gradient-to-b hover:to-[#0F1657] hover:from-[#1A1A78] hover:text-white"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        <div className="p-4 flex flex-col items-center justify-center gap-y-4">
          <Icon />
          <span className="text-base font-bold">{deviceName}</span>
        </div>
      </Button>
    ))}
  </div>
);

const AvailableDevicesSection: FC = () => (
  <Section heading="Available For Download">
    <AvailableDevices className="mt-8" />
  </Section>
);

export { AvailableDevices };

export default AvailableDevicesSection;
