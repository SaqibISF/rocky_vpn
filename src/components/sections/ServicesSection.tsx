"use client";
import React, { FC } from "react";
import Section from "./Section";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";

const ServicesSection: FC = () => (
  <Section
    title="Services"
    heading="Elevate Your Online Experience"
    description="Our services are designed to enhance your online experience, providing a perfect blend of security, accessibility, and convenience."
  >
    <div className="w-full grid lg:grid-cols-2 gap-6">
      {[
        {
          imageSrc: "/services-section-card-1-image.png",
          heading: "Data Encryption",
          title: "Stay Connected Securely",
          description:
            "Encrypts your online activities with military-grade encryption, ensuring your data remains confidential and shielded from prying eyes.",
        },
        {
          imageSrc: "/services-section-card-2-image.png",
          heading: "High-Speed",
          title: "Optimize Your Connection",
          description:
            "With just a tap, our lightning-fast tests provide accurate results, so you can gauge your internet's performance.",
        },
      ].map((item) => (
        <Card
          key={item.imageSrc}
          className="space-y-4 px-2 sm:px-16 py-2 sm:py-16 mx-auto overflow-visible bg-transparent shadow-none relative"
        >
          <div
            className="size-[33rem] rounded-[33rem] absolute blur-[6.25rem]"
            style={{
              background:
                "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(15, 15, 16, 0.00) 100%)",
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="25"
          ></div>
          <CardHeader
            className="pb-0 pt-2 px-4 flex-col items-start"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="25"
          >
            <Image
              className="w-full h-auto"
              src={item.imageSrc}
              alt="imag not founded"
              width={0}
              height={0}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={item.imageSrc}
            />
          </CardHeader>
          <CardBody className="sm:space-y-4 space-y-3 overflow-hidden">
            <span
              className="text-accent sm:text-2xl text-xl font-bold inline-block"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="25"
            >
              {item.heading}
            </span>
            <h4
              className="sm:text-3xl text-2xl font-bold"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
              data-aos-offset="25"
            >
              {item.title}
            </h4>
            <small
              className="text-default-500 sm:text-xl text-lg font-medium"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-offset="25"
            >
              {item.description}
            </small>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default ServicesSection;
