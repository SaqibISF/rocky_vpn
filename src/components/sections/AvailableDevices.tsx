import React, { FC } from "react";
import { AndroidIcon, IPhoneIcon, MACIcon, WindowsIcon } from "@/icons";
import { Card, CardBody } from "@heroui/react";

const AvailableDevices: FC = () => (
  <div className="flex flex-wrap items-center justify-center gap-6">
    {[
      { deviceName: "Windows", Icon: WindowsIcon },
      { deviceName: "Mac", Icon: MACIcon },
      { deviceName: "Android", Icon: AndroidIcon },
      { deviceName: "iPhone", Icon: IPhoneIcon },
    ].map(({ deviceName, Icon }) => (
      <Card
        key={deviceName}
        className="w-28 rounded-3xl hover:bg-gradient-to-b hover:to-[#0F1657] hover:from-[#1A1A78] hover:text-white"
      >
        <CardBody className="p-4 flex flex-col items-center justify-center gap-y-4">
          <Icon />
          <span className="text-base font-bold">{deviceName}</span>
        </CardBody>
      </Card>
    ))}
  </div>
);

export default AvailableDevices;
