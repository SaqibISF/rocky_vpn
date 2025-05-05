import React, { ReactNode } from "react";
import "./globals.css";
import "aos/dist/aos.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { Fira_Code, Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Rocky VPN",
    template: "%s - Rocky VPN",
  },
  description:
    "Rocky VPN is a service that creates an encrypted connection between your device and the internet, ensuring your data remains private and secure. By routing your internet traffic through a remote server, Rocky VPN hides your real IP address, protecting your online identity and activities from potential tracking or surveillance. This means your data becomes more secure, making it harder for anyone to monitor your online actions due to the added layer of security. Additionally, Rocky VPN helps you bypass censorship and access websites that might be blocked in your country, enhancing your internet freedom. With servers located in various regions, you can also enjoy faster browsing speeds and access content as if you were in a different location. Whether you're at home or on the go, Rocky VPN ensures your connection is protected, allowing you to browse the web with peace of mind.",
  icons: {
    icon: "/head-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={cn(
          "bg-[#FFFFFF] dark:bg-[#0F0F0F] text-foreground font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
          className="min-h-screen flex flex-col"
        >
          <MainLayout className="flex-grow overflow-hidden">
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
