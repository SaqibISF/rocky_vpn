import React, { FC } from "react";
import Section from "./Section";
import {
  AndroidIcon,
  ArrowRightIcon,
  IPhoneIcon,
  MACIcon,
  WindowsIcon,
} from "@/icons";
import { Button, Card, CardBody } from "@heroui/react";

const DevicesSection: FC = () => (
  <Section
    title="Devices"
    heading="Available for All Your Devices"
    description="Connect to your devices, enjoy secure and private access to the internet — even on public Wi-Fi."
  >
    <div className="flex flex-col items-center justify-center gap-y-14">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {[
          { deviceName: "Windows", Icon: WindowsIcon },
          { deviceName: "Mac", Icon: MACIcon },
          { deviceName: "Android", Icon: AndroidIcon },
          { deviceName: "iPhone", Icon: IPhoneIcon },
        ].map(({ deviceName, Icon }) => (
          <Card
            key={deviceName}
            className="w-28 rounded-3xl hover:bg-gradient-to-b hover:to-[#0F1657] hover:from-[#1A1A78]"
          >
            <CardBody className="p-4 flex flex-col items-center justify-center gap-y-4">
              <Icon />
              <span className="text-base font-bold">{deviceName}</span>
            </CardBody>
          </Card>
        ))}
      </div>
      <Button variant="bordered" className="rounded-full w-fit">
        See All Devices <ArrowRightIcon />
      </Button>
    </div>
  </Section>
);

export default DevicesSection;
