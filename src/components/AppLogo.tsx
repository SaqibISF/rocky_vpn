import React, { FC } from "react";
import { AppLogoIcon } from "@/icons";
import { cn } from "@/lib/utils";

const AppLogo: FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex justify-start items-center gap-1", className)}>
    <AppLogoIcon className="w-10 h-auto" />
    <h2 className="text-xl font-bold">
      RockyVPN
    </h2>
  </div>
);

export default AppLogo;
