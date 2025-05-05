"use client";

import React, { FC, ReactNode, useEffect } from "react";
import AOS from "aos";
import { useDispatch } from "react-redux";
import { setAppMounted } from "@/store/app.slice";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { INVOICE_PAGE_PATH } from "@/lib/pathnames";

const MainLayout: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  useEffect(() => {
    AOS.init();
    dispatch(setAppMounted());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className={className}>{children}</main>
      {pathname !== INVOICE_PAGE_PATH && <Footer />}
    </>
  );
};

export default MainLayout;
