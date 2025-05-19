"use client";

import React, { FC, useState } from "react";
import { EnvelopeIcon } from "@/icons";
import { EMAIL_INVALID_ERROR_MESSAGE, EMAIL_REGEX } from "@/lib/utils";
import {
  addToast,
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { UPDATE_USER_INFO_ROUTE } from "@/lib/constants";
import { useUserCookie } from "@/hooks/use-cookies";
import Input from "./Input";

const ChangeEmailDialog: FC = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user, setUserCookie } = useUserCookie();

  type Data = {
    email: string;
  };

  const [isLoading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<Data>({
    defaultValues: {
      email: "",
    },
  });

  const submit: SubmitHandler<Data> = async (values) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios
        .post<{ status: boolean; message: string }>(
          UPDATE_USER_INFO_ROUTE,
          { email: values.email, name: user.name },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        setUserCookie({ ...user, email: values.email });
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
    <>
      <Button color="primary" variant="shadow" onPress={onOpen}>
        Update Email
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        className="p-6"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl font-semibold">
            Update Email Address
          </ModalHeader>
          <form onSubmit={handleSubmit(submit)}>
            <ModalBody>
              {errors.root && (
                <Alert color="danger" title={errors.root.message} />
              )}
              <Input
                label="Email"
                placeholder="you@example.com"
                type="email"
                endContent={
                  <EnvelopeIcon className="w-5 text-default-500 !pointer-events-none" />
                }
                errorMessage={errors.email?.message}
                {...register("email", {
                  required: { value: true, message: "Enter email address" },
                  pattern: {
                    value: EMAIL_REGEX,
                    message: EMAIL_INVALID_ERROR_MESSAGE,
                  },
                })}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                isLoading={isLoading}
                type="submit"
                fullWidth
                size="lg"
                color="primary"
              >
                {isLoading ? "Updating..." : "Update"}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangeEmailDialog;
