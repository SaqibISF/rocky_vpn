"use client";
import React, { FC } from "react";
import Section from "./Section";
import Image from "next/image";
import { WorldMap } from "@/icons";

const GlobalServerNetworkSection: FC = () => (
  <Section
    title="Global Server Network"
    heading="Ultra-Fast Servers Around the World"
    description="Choose among 1000+ high-speed VPN servers and enjoy fast and stable connections anywhere."
    className="z-[1]"
    isCenterGradient
  >
    <span
      className="absolute top-28 -z-[1] !pointer-events-none"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-offset="25"
    >
      <WorldMap />
    </span>

    <div
      className="w-full h-[49.75rem] absolute bottom-0 left-0 right-0 z-[1] !pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(15, 15, 15, 0.00) 10.03%, #0F0F0F 65.02%)",
      }}
    ></div>

    <div className="w-full flex flex-col items-center justify-center">
      <Image
        className="rounded-2xl max-w-lg w-full h-auto"
        src="/global-server-network-section.png"
        alt="imag not founded"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="/global-server-network-section.png"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="25"
      />
      <div className="w-full flex flex-wrap items-center justify-between lg:justify-center gap-16 text-center z-[2]">
        {[
          { title: "100+", subtitle: "Countries" },
          { title: "1,000+", subtitle: "Servers" },
          { title: "100+", subtitle: "Locations" },
          { title: "Unlimited", subtitle: "Bandwidth" },
        ].map(({ title, subtitle }, index) => (
          <div
            key={subtitle + index}
            className="space-y-4"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="25"
          >
            <div className="lg:text-5xl text-4xl font-bold">{title}</div>
            <div className="text-default-500 lg:text-2xl text-xl">
              {subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default GlobalServerNetworkSection;
