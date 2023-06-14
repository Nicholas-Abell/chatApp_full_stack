"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import EmptyState from "../(site)/components/EmptyState";

type pageProps = {};

const Users: React.FC<pageProps> = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "unauthenticated") {
      console.log("Logged Out");
      router.push("/");
    }
  }, [session?.status, router]);

  return (
    <>
      <div className="hidden lg:block lg:pl-80 h-full">
        <EmptyState />
      </div>
      <button onClick={() => signOut}>Logout</button>
    </>
  );
};
export default Users;
