"use client";
import React, { FC } from "react";
import { DevicesSection, FeaturesSection, GlobalServerNetworkSection, HomeSection, ServicesSection } from "@/components/sections";

const HomePage: FC = () => {
  return (
    <>
      <HomeSection />
      <FeaturesSection />
      <ServicesSection />
      <GlobalServerNetworkSection />
      <DevicesSection />
    </>
  );
};

export default HomePage;
