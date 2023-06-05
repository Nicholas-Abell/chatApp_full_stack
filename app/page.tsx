import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <div className="bg-red-800 h-screen flex justify-center items-center">
          <div className="w-full text-center">
            <button className="bg-white p-2 px-4 rounded-lg">
              Login With Google
            </button>
          </div>
        </div>
      </>
    );
  }
  return <div>Logged In</div>;
}
