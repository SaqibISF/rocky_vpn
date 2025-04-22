import React, { FC } from "react";
import { ArticleSection } from "@/components/sections";
import { useLegalNotes } from "@/hooks/useLegalNotes";

const TermsAndConditions: FC = () => {
  const { isLegalNotesLoading, errorMessage, termsAndConditions } =
    useLegalNotes();
  return (
    <ArticleSection
      heading="Terms and Conditions"
      htmlContent={termsAndConditions}
      errorMessage={errorMessage}
      isLoading={isLegalNotesLoading}
    />
  );
};

export default TermsAndConditions;
