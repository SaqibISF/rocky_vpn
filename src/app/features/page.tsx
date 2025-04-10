"use client";
import React, { FC } from "react";
import {
  AdvantagesSection,
  FeaturesSection,
  Section,
} from "@/components/sections";
import { Button } from "@heroui/react";
import { ArrowRightIcon } from "@/icons";

const FeaturesPage: FC = () => (
  <>
    <Section
      onlyShowNavbar
      heading="RockyVPN features"
      subtitle="Every ExpressVPN subscription comes jam-packed with privacy and security features to give you a safer, more enjoyable online experience."
    >
      <Button
        variant="shadow"
        color="primary"
        endContent={<ArrowRightIcon />}
        radius="full"
        size="lg"
      >
        Get RockyVPN
      </Button>
    </Section>

    <FeaturesSection />

    <AdvantagesSection
      heading="Top-rated VPN for online privacy"
      subtitle="RockyVPN is first and foremost a privacy company. We have meticulously designed our VPN to protect your data from third parties like your internet service provider and hackers."
    />
  </>
);

export default FeaturesPage;
