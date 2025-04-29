"use client";

import React, { FC, useState } from "react";
import { addToast, Button, useDisclosure } from "@heroui/react";
import { DownloadIcon } from "@/icons";
import { useBillingAddress } from "@/hooks/use-billing-address";
import BillingAddressModal from "./BillingAddressModal";
import { useUserCookie } from "@/hooks/use-cookies";

const DownloadInvoiceButton: FC<{ purchaseId: number; token: string }> = ({
  purchaseId,
  token,
}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user } = useUserCookie();
  const { isBillingAddressLoading, billingAddress } = useBillingAddress();

  const [isInvoiceDownloading, setInvoiceDownloading] =
    useState<boolean>(false);

  const handleDownload = async () => {
    if (!billingAddress) {
      onOpen();
      return;
    }

    try {
      setInvoiceDownloading(true);

      const response = await fetch(
        `/api/download-invoice?purchaseId=${purchaseId}&token=${token}&userId=${user.id}`
      );

      if (response.ok) {
        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "invoice.pdf";
        link.click();
        addToast({
          color: "success",
          description: "Invoice downloaded successfully",
        });
      } else {
        addToast({
          color: "danger",
          description:
            "Failed to download, maybe chromium not installed, check version of chromium, to install run npx playwright install chromium",
        });
      }
    } catch (error) {
      addToast({
        color: "danger",
        description:
          error instanceof Error ? error.message : "Failed to download",
      });
    } finally {
      setInvoiceDownloading(false);
    }
  };

  return (
    <>
      <BillingAddressModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />

      <Button
        isIconOnly
        size="sm"
        color="primary"
        variant="shadow"
        isLoading={isInvoiceDownloading}
        disabled={isBillingAddressLoading}
        onPress={handleDownload}
      >
        <DownloadIcon />
      </Button>
    </>
  );
};

export default DownloadInvoiceButton;
