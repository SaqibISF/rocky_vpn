"use client";
import React, { FC } from "react";
import Section from "./Section";
import Image from "next/image";
import { mockupBase64Src } from "@/lib/mockup-base64";
import { Avatar, Button } from "@heroui/react";
import { DownloadIcon } from "@/icons";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";

const HomeSection: FC = () => (
  <Section
    isHeroSection
    isLeftCornerGradient
    isRightCornerGradient
    startsRepeat="no-repeat"
    className="flex-col lg:flex-row gap-y-12"
  >
    <div className="lg:w-3/5 flex flex-col gap-y-6 px-4 items-center md:items-start text-center md:text-left">
      <span
        className="text-accent text-xl font-bold"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        Rocky VPN
      </span>
      <h1
        className="text-5xl md:text-7xl font-bold leading-[3.5rem] md:leading-[5rem]"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="25"
      >
        Stay{" "}
        <span
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A78] to-[#0F1657]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="25"
        >
          Private
        </span>{" "}
        and Access Worldwide Content
      </h1>
      <p
        className="text-default-500 text-2xl font-medium leading-10"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        Surf the web without tracking with a VPN, protect your devices &
        identity with an all-in-one app.
      </p>
      <Button
        as={Link}
        href={PRICING_PAGE_PATH}
        color="primary"
        variant="shadow"
        radius="full"
        className="self-center sm:self-start"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="25"
      >
        Get Started
      </Button>
      <div className="w-full px-8 md:px-0 flex flex-wrap items-center justify-between md:justify-start sm:gap-20">
        <div
          className="flex flex-col items-start justify-center gap-y-2"
          data-aos="fade-up-right"
          data-aos-offset="25"
        >
          <div className="flex">
            {[
              "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              "https://i.pravatar.cc/150?u=a04258114e29026702d",
              "https://i.pravatar.cc/150?u=a04258114e29026302d",
            ].map((imgSrc, index) => (
              <span key={imgSrc} className={index !== 0 ? "-ml-2" : ""}>
                <Avatar
                  className="w-6 h-6 text-tiny"
                  src={imgSrc}
                />
              </span>
            ))}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold">172+ K</h3>
          <p className="text-default-500 text-sm sm:text-base font-medium leading-8">
            Satisfied user
          </p>
        </div>

        <div
          className="flex flex-col items-start justify-center gap-y-2"
          data-aos="flip-down"
          data-aos-offset="25"
        >
          <div className="text-yellow-500 text-lg md:text-3xl">★★★★☆</div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold">4.8</h3>
          <p className="text-default-500 text-sm sm:text-base font-medium leading-8">
            Rating
          </p>
        </div>

        <div
          className="flex flex-col items-start justify-center gap-y-2"
          data-aos="fade-up-left"
          data-aos-offset="25"
        >
          <DownloadIcon />
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold">20+ M</h3>
          <p className="text-default-500 text-sm sm:text-base font-medium leading-8">
            Downloads
          </p>
        </div>
      </div>
    </div>
    <div
      className="lg:w-2/5 w-full flex items-center justify-center"
      data-aos="fade-left"
      data-aos-offset="25"
    >
      <Image
        className="max-w-lg w-full h-auto"
        src="/mockup.png"
        alt="imag not founded"
        width={0}
        height={0}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={mockupBase64Src}
      />
    </div>
  </Section>
);

export default HomeSection;
