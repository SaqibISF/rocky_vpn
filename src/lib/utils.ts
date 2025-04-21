import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NAME_REGEX = /^[A-Za-z ]+$/;
export const NAME_INVALID_ERROR_MESSAGE = "Name must only contain letters and spaces";

export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
export const EMAIL_INVALID_ERROR_MESSAGE =
  "Please enter valid email address\n e.g. username@domain.com";

export const PASSWORD_REGEX = new RegExp(
  "^" +
    "(?=.*[0-9])" + //at least 1 digit
    // "(?=.*[a-z])" + //at least 1 lower case letter
    // "(?=.*[A-Z])" + //at least 1 upper case letter
    "(?=.*[a-zA-Z])" + //any letter
    // "(?=.*[@#$%^&+=])" + //at least 1 spacial character
    // "(?=\\S+$)" + //no white spaces
    ".{8,}" + //at least 8 characters , (maximum 15)
    "$"
);
export const PASSWORD_INVALID_ERROR_MESSAGE =
  "Password must be at least 8 characters long and contain at least one letter and one number";
