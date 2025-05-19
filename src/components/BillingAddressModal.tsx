"use client";

import React, { FC, useState } from "react";
import { CityIcon, LocationDotIcon, StateIcon, UserIcon } from "@/icons";
import { NAME_INVALID_ERROR_MESSAGE, NAME_REGEX } from "@/lib/utils";
import {
  addToast,
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { UPDATE_BILLING_ADDRESS_ROUTE } from "@/lib/constants";
import { useUserCookie } from "@/hooks/use-cookies";
import Input from "./Input";
import { BillingAddress } from "@/types";
import { useBillingAddress } from "@/hooks/use-billing-address";
import { useDispatch } from "react-redux";
import { setBillingAddress } from "@/store/app.slice";

const BillingAddressModal: FC<{
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}> = ({ isOpen, onOpenChange, onClose }) => {
  const dispatch = useDispatch();
  const { user } = useUserCookie();

  const [isLoading, setLoading] = useState<boolean>(false);

  const { billingAddress } = useBillingAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<BillingAddress>({
    defaultValues: {
      name: (billingAddress && billingAddress.name) || "",
      address: (billingAddress && billingAddress.address) || "",
      city: (billingAddress && billingAddress.city) || "",
      state: (billingAddress && billingAddress.state) || "",
      postal_code: (billingAddress && billingAddress.postal_code) || "",
    },
  });

  const submit: SubmitHandler<BillingAddress> = async (values) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios
        .post<{
          status: boolean;
          message: string;
          user: { billing_address: BillingAddress };
        }>(UPDATE_BILLING_ADDRESS_ROUTE, values, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => res.data);
      if (res.status) {
        dispatch(setBillingAddress(res.user.billing_address));
        addToast({ color: "success", description: res.message });
        reset();
        onClose();
      } else {
        addToast({ color: "danger", description: res.message });
        setError("root", { type: "manual", message: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Filed to change email";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="bottom-center"
      className="p-6"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-2xl font-semibold">
          {billingAddress ? "Update" : "Add"} Billing Address
        </ModalHeader>
        <form onSubmit={handleSubmit(submit)}>
          <ModalBody className="gap-6">
            {errors.root && (
              <Alert color="danger" title={errors.root.message} />
            )}

            <Input
              label="Name"
              placeholder="Enter your Name"
              type="text"
              size="md"
              endContent={
                <UserIcon className="w-5 text-default-500 !pointer-events-none" />
              }
              errorMessage={errors.name?.message}
              {...register("name", {
                required: { value: true, message: "Enter your name" },
                pattern: {
                  value: NAME_REGEX,
                  message: NAME_INVALID_ERROR_MESSAGE,
                },
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 chars",
                },
              })}
            />

            <Input
              label="Address"
              placeholder="Enter your address"
              type="text"
              size="md"
              endContent={
                <LocationDotIcon className="text-default-500 !pointer-events-none" />
              }
              errorMessage={errors.address?.message}
              {...register("address", {
                required: { value: true, message: "Enter your address" },
                minLength: {
                  value: 10,
                  message: "Address must be at least 10 chars",
                },
              })}
            />

            <Input
              label="City"
              placeholder="Enter your city"
              type="text"
              size="md"
              endContent={
                <CityIcon className="w-5 text-default-500 !pointer-events-none" />
              }
              errorMessage={errors.city?.message}
              {...register("city", {
                required: { value: true, message: "Enter your city" },
                minLength: {
                  value: 2,
                  message: "city must be at least 2 chars",
                },
              })}
            />

            <div className="flex items-start gap-4">
              <Input
                label="State"
                placeholder="State"
                type="text"
                size="md"
                endContent={
                  <StateIcon className="w-5 text-default-500 !pointer-events-none" />
                }
                errorMessage={errors.state?.message}
                {...register("state", {
                  required: { value: true, message: "Enter your state" },
                  minLength: {
                    value: 2,
                    message: "state must be at least 2 chars",
                  },
                })}
              />

              <Input
                label="Postal Code"
                placeholder="Postal Code"
                type="text"
                size="md"
                endContent={
                  <LocationDotIcon className="text-default-500 !pointer-events-none" />
                }
                errorMessage={errors.postal_code?.message}
                {...register("postal_code", {
                  required: {
                    value: true,
                    message: "Enter your postal code",
                  },
                })}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              type="submit"
              fullWidth
              color="primary"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default BillingAddressModal;
