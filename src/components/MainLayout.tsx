"use client";

import React, { FC, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppMounted } from "@/store/app.slice";

const MainLayout: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAppMounted());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main className={className}>{children}</main>;
};

export default MainLayout;
