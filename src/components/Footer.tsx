"use client"
import { Link } from "@heroui/react";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        className="flex items-center gap-1 text-current"
        href="mail:MSaqibAliISF@gmail.com"
        title="heroui.com homepage"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">M SAQIB ALI</p>
        <p className="text-default-500">(MERN Stack Developer)</p>
      </Link>
    </footer>
  );
};

export default Footer;
