"use client";

import React, { FC } from "react";
import Section from "./Section";
import { Image } from "@heroui/react";

const VPNBlogSection: FC = () => {
  const blogs = [
    {
      imageSrc:
        "https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg",
      heading: "While traveling",
      description:
        "A VPN helps you enjoy secure, uninterrupted streaming on platforms like Netflix, Hulu, Amazon, and HBO. Say goodbye to ISP throttling and securely stream your favorite shows and movies with ease.",
    },
    {
      imageSrc:
        "https://app.requestly.io/delay/1000/https://heroui.com/images/fruit-4.jpeg",
      heading: "While streaming",
      description:
        "A VPN helps you enjoy secure, uninterrupted streaming on platforms like Netflix, Hulu, Amazon, and HBO. Say goodbye to ISP throttling and securely stream your favorite shows and movies with ease.",
    },
    {
      imageSrc:
        "https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg",
      heading: "While on public Wi-Fi",
      description:
        "Public Wi-Fi hotspots in cafes, airports, and parks can expose your personal information to cyber threats. A VPN encrypts your connection, protecting your data from hackers and prying eyes.",
    },
    {
      imageSrc:
        "https://app.requestly.io/delay/1000/https://heroui.com/images/fruit-4.jpeg",
      heading: "While gaming",
      description:
        "A VPN unlocks games, maps, skins, and other content that might be blocked on your network. It also protects against DDoS attacks, reduces ping, and minimizes lag for smoother gameplay.",
    },
    {
      imageSrc:
        "https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg",
      heading: "While file-sharing",
      description:
        "Peer-to-peer file sharing often reveals your IP address to strangers, exposing your downloads to potential tracking. A VPN keeps your IP address hidden, providing greater anonymity and peace of mind",
    },
  ];

  return (
    <Section
      title="VPN"
      heading="Why do you need a VPN? Key reasons and use cases"
    >
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={blog.heading + index}
            className="p-3 rounded-lg flex flex-col items-center gap-4 text-center cursor-pointer border-2 border-transparent hover:border-default-400 hover:bg-default-200 dark:hover:bg-gray-900/90 dark:hover:border-default-300"
          >
            <Image
              alt="HeroUI hero Image with delay"
              src={blog.imageSrc}
              sizes="100vw"
              className="w-full h-auto"
            />

            <h4 className="text-2xl font-semibold">{blog.heading}</h4>

            <p className="text-default-500 text-base font-medium">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default VPNBlogSection;
