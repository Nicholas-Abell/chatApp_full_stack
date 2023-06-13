"use client";
import { signOut } from "next-auth/react";
import React from "react";

type pageProps = {};

const Users: React.FC<pageProps> = () => {
  return (
    <>
      <button onClick={() => signOut}>Logout</button>
    </>
  );
};
export default Users;
