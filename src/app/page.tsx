"use client";
import React, { FC } from "react";
import { FeaturesSection, HomeSection, ServicesSection } from "@/components/sections";

const HomePage: FC = () => {
  return (
    <>
      <HomeSection />
      <FeaturesSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;
