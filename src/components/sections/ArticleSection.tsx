import React, { FC, ReactNode } from "react";
import Section from "./Section";
import { Spinner } from "@heroui/react";

const ArticleSection: FC<{
  heading: string;
  htmlContent?: string;
  errorMessage?: string;
  isLoading?: boolean;
  children?: ReactNode;
}> = ({ heading, htmlContent, errorMessage, isLoading, children }) => (
  <Section isHeroSection className="flex-col gap-4 py-10">
    <h2 className="text-4xl sm:text-5xl font-bold">{heading}</h2>
    {isLoading && (
      <span className="mt-4 flex items-center justify-center">
        <Spinner
          classNames={{ label: "text-foreground mt-4" }}
          label="Loading..."
          variant="spinner"
        />
        {/* <Loader2 className="animate-spin size-8 mr-2" /> */}
      </span>
    )}

    {errorMessage && (
      <div className="text-danger-600 bg-danger-50 border-2 border-solid border-danger-100 p-3 rounded-xl">
        {errorMessage}
      </div>
    )}

    {children && (
      <article className="w-full max-w-7xl prose prose-neutral dark:prose-invert">
        {children}
      </article>
    )}

    {htmlContent && (
      <article
        className="w-full max-w-7xl prose prose-neutral dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></article>
    )}
  </Section>
);

export default ArticleSection;
