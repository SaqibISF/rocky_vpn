"use client";

import React, { FC, ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import { useRouter } from "next/navigation";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export const Providers: FC<{
  className?: string;
  children: ReactNode;
  themeProps: ThemeProviderProps;
}> = ({ className, children, themeProps }) => {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push} className={className}>
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </HeroUIProvider>
  );
};
