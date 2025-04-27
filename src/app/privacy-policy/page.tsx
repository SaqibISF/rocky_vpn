"use client";

import React, { FC } from "react";
import { ArticleSection } from "@/components/sections";
import { useLegalNotes } from "@/hooks/useLegalNotes";

const PrivacyPolicyPage: FC = () => {
  const { isLegalNotesLoading, errorMessage, privacyPolicy } = useLegalNotes();
  return (
    <ArticleSection
      heading="Privacy Policy"
      htmlContent={privacyPolicy}
      errorMessage={errorMessage}
      isLoading={isLegalNotesLoading}
    />
  );
};

export default PrivacyPolicyPage;
