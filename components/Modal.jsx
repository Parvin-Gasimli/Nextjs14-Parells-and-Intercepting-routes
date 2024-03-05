"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Modal = ({ children }) => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <div className="modal">
      {/* <Link scroll={false} href="/"> */}
      {children}
      {/* </Link> */}
    </div>
  );
};

export default Modal;
