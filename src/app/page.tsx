"use client";
import React, { FC } from "react";
import {
  DevicesSection,
  FAQSection,
  FeaturesSection,
  GlobalServerNetworkSection,
  HomeSection,
  PricingSection,
  ServicesSection,
} from "@/components/sections";

const HomePage: FC = () => {
  return (
    <>
      <HomeSection />
      <FeaturesSection />
      <ServicesSection />
      <GlobalServerNetworkSection />
      <DevicesSection />
      <PricingSection />
      <FAQSection />
    </>
  );
};

export default HomePage;
