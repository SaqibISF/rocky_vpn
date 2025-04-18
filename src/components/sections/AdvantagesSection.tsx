"use client";
import React, { FC } from "react";
import Section from "./Section";
import {
  BoostIcon,
  ChatCheckIcon,
  LocationIcon,
  LockIcon,
  LogsIcon,
  SecureIcon,
  ServerStackIcon,
  WiFiProblemIcon,
} from "@/icons";

const AdvantagesSection: FC<{
  heading: string;
  subtitle?: string;
  isLeftCornerGradient?: boolean;
  isRightCornerGradient?: boolean;
  isCenterGradient?: boolean;
}> = ({
  heading,
  subtitle,
  isLeftCornerGradient,
  isRightCornerGradient,
  isCenterGradient,
}) => (
  <Section
    heading={heading}
    subtitle={subtitle}
    isLeftCornerGradient={isLeftCornerGradient}
    isRightCornerGradient={isRightCornerGradient}
    isCenterGradient={isCenterGradient}
  >
    <div className="mt-10 grid lg:grid-cols-2 gap-4">
      {[
        {
          Icon: LocationIcon,
          heading: "Location in 90 countries",
          description:
            "Choose from VPN server locations in 90 countries all over the world.",
        },
        {
          Icon: ChatCheckIcon,
          heading: "24- hour live chat support",
          description:
            "We're available anytime to help you with setup and troubleshooting.",
        },
        {
          Icon: SecureIcon,
          heading: "SecureServer Technology",
          description:
            "Our cutting-edge method of operating VPN servers guarantees that no data is ever stored on a hard drive.",
        },
        {
          Icon: WiFiProblemIcon,
          heading: "Network Lock kill switch",
          description:
            "Network Lock keeps your data safe if your VPN connection drops, blocking all online traffic until protection is restored.",
        },
        {
          Icon: LogsIcon,
          heading: "No activity or connection logs",
          description:
            "RockyVPN does not and will never log traffic data, DNS queries, or anything that could be used to identify you.",
        },
        {
          Icon: LockIcon,
          heading: "Best-in-class encryption",
          description:
            "Your data is protected by advanced mathematics in AES-256,the standard trusted by experts worldwide.",
        },
        {
          Icon: ServerStackIcon,
          heading: "Private DNS",
          description:
            "RockyVPN runs its own private, encrypted DNS on every server, making your connections both safer and faster.",
        },
        {
          Icon: BoostIcon,
          heading: "Lightway Protocol",
          description:
            "Our pioneering VPN protocol, Lightway is engineered for a faster, secure, and more reliable VPN experience.",
        },
      ].map(({ Icon, heading, description }) => (
        <div key={heading} className="flex justify-center">
          <span className="px-3">
            <Icon />
          </span>
          <div className="flex-grow space-y-2">
            <h4 className="text-2xl font-semibold">{heading}</h4>
            <p className="text-default-600 text-base leading-7 font-normal pr-4">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default AdvantagesSection;
