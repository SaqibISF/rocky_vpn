"use client";

import React, { FC } from "react";
import { Button, useDisclosure } from "@heroui/react";
import { useBillingAddress } from "@/hooks/use-billing-address";
import BillingAddressModal from "./BillingAddressModal";

const ChangeBillingAddressDialog: FC = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { billingAddress } = useBillingAddress();

  return (
    <>
      <Button color="primary" variant="shadow" onPress={onOpen}>
        {billingAddress ? "Update" : "Add"} Billing Address
      </Button>

      <BillingAddressModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};

export default ChangeBillingAddressDialog;
