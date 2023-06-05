"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <div className="bg-red-800 h-screen flex justify-center items-center">
        <div className="w-full text-center">
          <button className="bg-white p-2 px-4 rounded-lg">
            {session ? <p>Log-in</p> : <p>logout</p>}
          </button>
        </div>
      </div>
    </>
  );
}
