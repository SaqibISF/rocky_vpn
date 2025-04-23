"use client";

import React, { FC } from "react";
import { Section } from "@/components/sections";
import { Button } from "@heroui/react";

const NotFountPage: FC = () => (
  <Section isHeroSection isRightCornerGradient heading="Page Not Found" title="404">
    <Button variant="shadow" color="primary">
      Back to Home
    </Button>
  </Section>
);

export default NotFountPage;
