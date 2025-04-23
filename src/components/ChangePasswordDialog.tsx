"use client";

import React, { FC, useState } from "react";
import {} from "@/icons";
import { PASSWORD_INVALID_ERROR_MESSAGE, PASSWORD_REGEX } from "@/lib/utils";
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
import { UPDATE_USER_PASSWORD_ROUTE } from "@/lib/constants";
import { useUserCookie } from "@/hooks/use-cookies";
import Input from "./Input";

const ChangePasswordDialog: FC = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user } = useUserCookie();

  type Data = {
    old_password: string;
    password: string;
    confirm_password: string;
  };

  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
    reset,
  } = useForm<Data>({
    defaultValues: {
      old_password: "",
      password: "",
      confirm_password: "",
    },
  });

  const submit: SubmitHandler<Data> = async (values) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios
        .post<{ status: boolean; message: string }>(
          UPDATE_USER_PASSWORD_ROUTE,
          { old_password: values.old_password, new_password: values.password },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        addToast({ color: "success", description: res.message });
        onClose();
      } else {
        addToast({ color: "danger", description: res.message });
        setErrorMessage(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Filed to change password";
      addToast({ color: "danger", description: errorMessage });
      setErrorMessage(errorMessage);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <>
      <Button color="primary" variant="shadow" onPress={onOpen}>
        Update Password
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        className="p-6"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl font-semibold">
            Update Password
          </ModalHeader>
          <form onSubmit={handleSubmit(submit)}>
            <ModalBody className="space-y-10">
              {errorMessage && <Alert color="danger" title={errorMessage} />}
              <Input
                label="Old Password"
                placeholder="Type old password"
                type="password"
                errorMessage={errors.old_password?.message}
                {...register("old_password", {
                  required: { value: true, message: "Type old password" },
                  //   pattern: {
                  //     value: PASSWORD_REGEX,
                  //     message: PASSWORD_INVALID_ERROR_MESSAGE,
                  //   },
                })}
              />

              <Input
                label="Change Password"
                placeholder="Type new password"
                type="password"
                errorMessage={errors.password?.message}
                {...register("password", {
                  required: { value: true, message: "Type new password" },
                  pattern: {
                    value: PASSWORD_REGEX,
                    message: PASSWORD_INVALID_ERROR_MESSAGE,
                  },
                  validate: (value) => {
                    const old_password = getValues("old_password");
                    if (value === old_password)
                      return "New password same as old password";
                    return true;
                  },
                })}
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm password"
                errorMessage={errors.confirm_password?.message}
                {...register("confirm_password", {
                  required: {
                    value: true,
                    message: "Please confirm the password",
                  },
                  validate: (value) => {
                    const password = getValues("password");
                    if (value !== password) return "Password do not match";
                    return true;
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

export default ChangePasswordDialog;
