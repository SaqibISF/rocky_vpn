"use client";

import React, { FC, useState } from "react";
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
import axios, { AxiosError } from "axios";
import { DELETE_USER_ACCOUNT_ROUTE } from "@/lib/constants";
import { useUserCookie } from "@/hooks/use-cookies";
import { useRouter } from "next/navigation";

const DeleteAccountDialog: FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user, removeUserCookie } = useUserCookie();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleDeleteAccount = async () => {
    try {
      setErrorMessage("");
      setLoading(true);
      const res = await axios
        .delete<{ status: boolean; message: string }>(
          DELETE_USER_ACCOUNT_ROUTE,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        removeUserCookie();
        addToast({ color: "success", description: res.message });
        router.refresh();
      } else {
        setErrorMessage(res.message);
        addToast({ color: "danger", description: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Filed to change name";
      setErrorMessage(errorMessage);
      addToast({ color: "danger", description: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button color="danger" variant="shadow" onPress={onOpen}>
        Delete Account
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        size="2xl"
        className="p-4"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl font-semibold">
            Delete Account
          </ModalHeader>
          <ModalBody>
            {errorMessage && <Alert color="danger" title={errorMessage} />}

            <p>
              Are you sure you want to delete your account? This action cannot
              be undone, and all your data will be permanently removed.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              variant="shadow"
              color="danger"
              onPress={handleDeleteAccount}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
            <Button variant="bordered" color="default" onPress={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteAccountDialog;
