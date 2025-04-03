import React, { FC, ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import Navbar from "../Navbar";

const Section: FC<{
  isHeroSection?: boolean;
  title?: string;
  heading?: string;
  subtitle?: string;
  description?: string;
  parentClassName?: string;
  className?: string;
  children?: ReactNode;
}> = ({
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

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const heroSection = document.getElementById("hero-section");

      if (navbar && heroSection) {
        if (window.scrollY > heroSection.offsetTop + 16) {
          navbar.classList.add("fixed");
          navbar.classList.remove("sticky");
          heroSection.classList.add("pt-20");
          heroSection.classList.remove("pt-4");
        } else {
          navbar.classList.remove("fixed");
          navbar.classList.add("sticky");
          heroSection.classList.add("pt-4");
          heroSection.classList.remove("pt-20");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParentComp
      id={isHeroSection ? "hero-section" : undefined}
      className={cn(
        "w-full flex flex-col items-center justify-center relative",
        isHeroSection ? "pt-4" : "",
        parentClassName
      )}
    >
      {isHeroSection && <Navbar />}
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
          <span className="text-2xl font-semibold text-center mt-4 mb-6">
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
