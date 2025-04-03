import React, { FC } from "react";
import Section from "./Section";
import Image from "next/image";

const GlobalServerNetworkSection: FC = () => {
  return (
    <Section
      title="Global Server Network"
      heading="Ultra-Fast Servers Around the World"
      description="Choose among 1000+ high-speed VPN servers and enjoy fast and stable connections anywhere."
    >
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          className="rounded-2xl max-w-lg w-full h-auto"
          src="/global-server-network-section.png"
          alt="imag not founded"
          width={0}
          height={0}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/global-server-network-section.png"
        />
        <div className="w-full flex flex-wrap items-center justify-between lg:justify-center gap-16 text-center">
          {[
            { title: "100+", subtitle: "Countries" },
            { title: "1,000+", subtitle: "Servers" },
            { title: "100+", subtitle: "Locations" },
            { title: "Unlimited", subtitle: "Bandwidth" },
          ].map(({ title, subtitle }, index) => (
            <div key={subtitle + index} className="space-y-4">
              <div className="lg:text-5xl text-4xl font-bold">{title}</div>
              <div className="text-default-500 lg:text-2xl text-xl">
                {subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default GlobalServerNetworkSection;
