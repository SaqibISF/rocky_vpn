"use client";
import React, { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Navbar from "../Navbar";

const Section: FC<{
  onlyShowNavbar?: boolean;
  isHeroSection?: boolean;
  title?: string;
  heading?: string;
  subtitle?: string;
  description?: string;
  parentClassName?: string;
  className?: string;
  children?: ReactNode;
}> = ({
  onlyShowNavbar,
  isHeroSection,
  title,
  heading,
  subtitle,
  description,
  parentClassName,
  className,
  children,
}) => {
  const ParentComp = isHeroSection ? "main" : "section";
  const ChildComp = isHeroSection ? "section" : "div";

  return (
    <ParentComp
      id={isHeroSection || onlyShowNavbar ? "main-section" : undefined}
      className={cn(
        "w-full flex flex-col items-center justify-center relative",
        isHeroSection || onlyShowNavbar ? "pt-4" : "",
        parentClassName
      )}
    >
      {(isHeroSection || onlyShowNavbar) && <Navbar />}
      <ChildComp
        className={cn(
          "container w-full max-w-7xl flex flex-col flex-wrap items-center justify-center",
          isHeroSection
            ? "p-4 min-h-[calc(100vh-5rem)]"
            : "px-4 py-12 lg:py-14 h-auto",
          className
        )}
      >
        {title && (
          <span className="text-accent text-2xl font-bold text-center mb-10">
            {title}
          </span>
        )}

        {heading && (
          <h2 className="sm:text-6xl text-5xl font-bold leading-[3.5rem] text-center mb-6">
            {heading}
          </h2>
        )}

        {subtitle && (
          <span className="px-4 sm:text-xl text-base sm:leading-10 leading-9 font-medium md:w-2/3 text-center mt-4 mb-6">
            {subtitle}
          </span>
        )}

        {description && (
          <p className="text-default-500 px-8 sm:text-2xl text-xl font-medium leading-8 capitalize lg:w-2/3 text-center mb-14">
            {description}
          </p>
        )}

        {children}
      </ChildComp>
    </ParentComp>
  );
};

export default Section;
