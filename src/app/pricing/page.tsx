"use client";
import React, { FC } from "react";
import { FAQSection, PricingSection } from "@/components/sections";

const PricingPage: FC = () => {
  return (
    <>
      <PricingSection
        isHeroSection
        isLeftCornerGradient
        isRightCornerGradient
        isCenterGradient
      />
      <FAQSection isLeftCornerGradient />
    </>
  );
};

export default PricingPage;
