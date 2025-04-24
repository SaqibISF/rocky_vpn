"use client";

import React, { FC } from "react";
import { Section } from "@/components/sections";
import { Button } from "@heroui/react";
import Link from "next/link";
import { HOME_PAGE_PATH } from "@/lib/pathnames";

const NotFountPage: FC = () => (
  <Section
    isHeroSection
    isRightCornerGradient
    heading="Page Not Found"
    title="404"
  >
    <Button as={Link} href={HOME_PAGE_PATH} variant="shadow" color="primary">
      Back to Home
    </Button>
  </Section>
);

export default NotFountPage;
