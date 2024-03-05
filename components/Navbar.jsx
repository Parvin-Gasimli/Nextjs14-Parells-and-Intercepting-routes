import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-4 items-center p-4 bg-gray-800 text-white">
      <Link
        className=" inline-block bg-blue-600 px-4 py-2 rounded-md "
        href="/"
      >
        Home
      </Link>
      <Link
        className=" inline-block bg-blue-600 px-4 py-2 rounded-md "
        href="/auth/login"
      >
        Login
      </Link>
      <Link
        className=" inline-block bg-blue-600 px-4 py-2 rounded-md"
        href="/auth/register"
      >
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
