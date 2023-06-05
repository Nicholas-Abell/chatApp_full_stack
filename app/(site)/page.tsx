"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <div className="bg-red-800 h-screen flex justify-center items-center">
          <div className="w-full text-center">
            <button
              onClick={() => signIn("google")}
              className="bg-white p-2 px-4 rounded-lg"
            >
              Log In
            </button>
            <a href="http://localhost:3000/api/auth/callback/google">Test</a>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="bg-red-800 h-screen flex justify-center items-center">
        <div className="w-full text-center">
          <button
            onClick={() => signOut()}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Log Out
            {session.user?.email}
          </button>
        </div>
      </div>
    </>
  );
}
