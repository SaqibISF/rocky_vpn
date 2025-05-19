"use client";
import React, { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Navbar from "../Navbar";
import { Property } from "csstype";

const Section: FC<{
  isHeroSection?: boolean;
  title?: string;
  heading?: string;
  subtitle?: string;
  description?: string;
  isLeftCornerGradient?: boolean;
  isRightCornerGradient?: boolean;
  isCenterGradient?: boolean;
  startsRepeat?: Property.BackgroundRepeat;
  parentClassName?: string;
  className?: string;
  children?: ReactNode;
}> = ({
  isHeroSection,
  title,
  heading,
  subtitle,
  description,
  isLeftCornerGradient,
  isRightCornerGradient,
  isCenterGradient,
  startsRepeat = "revert",
  parentClassName,
  className,
  children,
}) => (
  <section
    id={isHeroSection ? "main-section" : undefined}
    className={cn(
      "w-full flex flex-col items-center justify-center relative",
      isHeroSection ? "pt-4" : "",
      parentClassName
    )}
  >
    {isHeroSection && <Navbar />}

    {isLeftCornerGradient && (
      <div
        className="size-[42rem] rounded-[42rem] absolute blur-[12.5rem] -top-80 left-4 pointer-events-none"
        style={{
          rotate: "-135deg",
          background:
            "linear-gradient(180deg, #8290FF 12.38%, rgba(15, 15, 16, 0.00) 33.74%)",
        }}
      ></div>
    )}

    {isRightCornerGradient && (
      <div
        className="w-[21.875rem] h-[27.125rem] rounded-[27.125rem] absolute blur-[12.5rem] top-16 -right-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(130, 144, 255, 0.70) 12.38%, rgba(130, 144, 255, 0.00) 100%)",
        }}
      ></div>
    )}

    {isCenterGradient && (
      <div
        className="size-[33rem] rounded-[33rem] absolute blur-[12.5rem] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 140, 0.80) 12.38%, rgba(15, 15, 16, 0.00) 100%)",
        }}
      ></div>
    )}

    <div
      style={{
        backgroundImage: 'url("/stars.png")',
        backgroundSize: "25rem",
        backgroundRepeat: startsRepeat,
      }}
      className={cn(
        "container w-full max-w-7xl flex flex-col flex-wrap items-center justify-center",
        isHeroSection
          ? "p-4 min-h-[calc(100vh-5rem)]"
          : "px-4 py-12 lg:py-14 h-auto",
        className
      )}
    >
      {title && (
        <span
          className="text-accent text-2xl font-bold text-center mb-10 inline-block"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          {title}
        </span>
      )}

      {heading && (
        <h2
          className="sm:text-5xl text-4xl font-bold leading-[3.5rem] text-center mb-6"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          {heading}
        </h2>
      )}

      {subtitle && (
        <span
          className="px-4 sm:text-xl text-base sm:leading-10 leading-9 font-medium md:w-2/3 text-center mt-4 mb-6 inline-block"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          {subtitle}
        </span>
      )}

      {description && (
        <p
          className="text-default-500 px-8 text-xl leading-8 capitalize lg:w-2/3 text-center mb-14"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          {description}
        </p>
      )}

      {children}
    </div>
  </section>
);

export default Section;
