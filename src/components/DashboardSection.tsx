import React, { FC, ReactNode } from "react";

const DashboardSection: FC<{
  title?: string;
  heading?: string;
  children?: ReactNode;
}> = ({ title, heading, children }) => (
  <section className="space-y-6 lg:px-8 px-6 pb-20 lg:pb-14">
    {title && (
      <span className="text-accent sm:text-xl text-lg font-bold">{title}</span>
    )}

    {heading && <h2 className="sm:text-3xl text-2xl font-bold">{heading}</h2>}
    {children}
  </section>
);

export default DashboardSection;
