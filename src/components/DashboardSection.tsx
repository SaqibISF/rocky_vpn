import React, { FC, ReactNode } from "react";

const DashboardSection: FC<{
  title?: string;
  heading?: string;
  children?: ReactNode;
}> = ({ title, heading, children }) => (
  <section className="space-y-6 lg:px-8 px-6 pb-20 lg:pb-14">
    {title && (
      <span
        className="text-accent sm:text-xl text-lg font-bold inline-block"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        {title}
      </span>
    )}

    {heading && (
      <h2
        className="sm:text-3xl text-2xl font-bold"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        data-aos-offset="25"
      >
        {heading}
      </h2>
    )}
    {children}
  </section>
);

export default DashboardSection;
