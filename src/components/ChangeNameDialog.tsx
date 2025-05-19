"use client";

import React, { FC, useState } from "react";
import { UserIcon } from "@/icons";
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
  useDisclosure,
} from "@heroui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { UPDATE_USER_INFO_ROUTE } from "@/lib/constants";
import { useUserCookie } from "@/hooks/use-cookies";
import Input from "./Input";

const ChangeNameDialog: FC = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user, setUserCookie } = useUserCookie();

  type Data = {
    name: string;
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
      name: "",
    },
  });

  const submit: SubmitHandler<Data> = async (values) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios
        .post<{ status: boolean; message: string }>(
          UPDATE_USER_INFO_ROUTE,
          { email: user.email, name: values.name },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        setUserCookie({ ...user, name: values.name });
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
          : "Filed to change name";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button color="primary" variant="shadow" onPress={onOpen}>
        Update Name
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        className="p-6"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl font-semibold">
            Update Name
          </ModalHeader>
          <form onSubmit={handleSubmit(submit)}>
            <ModalBody>
              {errors.root && (
                <Alert color="danger" title={errors.root.message} />
              )}
              <Input
                label="Name"
                placeholder="Enter your Name"
                type="text"
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

export default ChangeNameDialog;
