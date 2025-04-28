import React, { FC } from "react";
import { AppLogoIcon } from "@/icons";
import { cn } from "@/lib/utils";

const AppLogo: FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex justify-start items-center gap-1", className)}>
    <AppLogoIcon className="w-10 h-auto text-primary dark:text-[#b249f8]" />
    <h2 className="text-primary dark:text-transparent dark:bg-gradient-to-b dark:bg-clip-text dark:from-[#FF1CF7] dark:to-[#b249f8] text-xl font-bold">
      RockyVPN
    </h2>
  </div>
);

export default AppLogo;
