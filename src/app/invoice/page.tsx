import { Metadata } from "next";
import React, { FC, Suspense } from "react";
import { Invoice } from "@/components";

export const metadata: Metadata = {
  title: "Invoice",
};

const InvoicePage: FC = () => (
  <Suspense>
    <Invoice />
  </Suspense>
);

export default InvoicePage;
