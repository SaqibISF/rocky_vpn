"use client";

import React, { FC, Suspense } from "react";
import { Invoice } from "@/components";

const InvoicePage: FC = () => (
  <Suspense>
    <Invoice />
  </Suspense>
);

export default InvoicePage;
