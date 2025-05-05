"use client";
import React, { FC } from "react";
import Section from "./Section";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";

const FeaturesSection: FC = () => (
  <Section
    title="Features"
    heading="Why Use Rocky"
    description="we offering a range of cutting-edge features that set us apart in the world of online security and privacy."
    isCenterGradient
  >
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          imageSrc: "/features-card-1-image.png",
          title: "6 Layers of Security",
          description:
            "Effortlessly run smart scans on software, files, and apps to find vulnerabilities.",
        },
        {
          imageSrc: "/features-card-2-image.png",
          title: "Easy to Install and Use",
          description:
            "It only takes a moment to install Pivien and once it’s done, it’ll run quietly in the background.",
        },
        {
          imageSrc: "/features-card-3-image.png",
          title: "Wi-Fi Network Security",
          description:
            "Connect safely to any Wi-Fi network, even unsecured public networks.",
        },
      ].map((item, index) => (
        <Card
          key={item.imageSrc}
          className="space-y-4 p-4 mx-auto bg-opacity-60"
          data-aos={
            (index + 1) % 3 === 1
              ? "zoom-out-right"
              : (index + 1) % 3 === 2
              ? "zoom-out-down"
              : (index + 1) % 3 === 0
              ? "zoom-out-left"
              : ""
          }
          data-aos-duration="1500"
        >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Image
              className="rounded-2xl w-full h-auto"
              src={item.imageSrc}
              alt="imag not founded"
              width={0}
              height={0}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={item.imageSrc}
            />
          </CardHeader>
          <CardBody className="space-y-4">
            <h4 className="text-3xl font-bold leading-[48px]">{item.title}</h4>
            <small className="text-default-500 text-xl font-medium">
              {item.description}
            </small>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default FeaturesSection;
