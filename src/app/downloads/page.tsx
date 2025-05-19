import React, { FC } from "react";
import { AvailableDevicesSection, Section } from "@/components/sections";
import Image from "next/image";
import { CheckedIcon } from "@/icons";
import { macBookBase64Src } from "@/lib/mac-book-base64";

const DownloadsPage: FC = () => (
  <>
    <Section
      isHeroSection
      className="flex-col lg:flex-row gap-y-10"
      isRightCornerGradient
      isCenterGradient
    >
      <div className="md:w-3/5 flex flex-col gap-y-6 px-4  text-center sm:text-left">
        <span
          className="text-accent text-xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          Rocky VPN
        </span>
        <h1
          className="text-4xl sm:text-5xl font-bold leading-[3.5rem] md:leading-[5rem]"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-offset="25"
        >
          Get the Ultimate High-Speed VPN for All Your Devices
        </h1>
        <div
          className="space-y-5"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          {[
            "Lightning-Fast VPN with No Lag",
            "Protect Up to 10 Devices at Once",
            "Top-Tier Encryption for Data Security",
            "Advanced Threat Shield for Safe Browsing",
          ].map((feature, index) => (
            <div key={feature + index} className="flex gap-2">
              <CheckedIcon />
              <span className="text-default-500 text-sm font-medium">
                {feature.trim()}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="md:w-2/5 w-full"
        data-aos="fade-left"
        data-aos-offset="25"
      >
        <Image
          className="max-w-[22.5rem] w-full h-auto m-auto"
          src="/mac-book.png"
          alt="imag not founded"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={macBookBase64Src}
        />
      </div>
    </Section>

    <AvailableDevicesSection />
  </>
);

export default DownloadsPage;
