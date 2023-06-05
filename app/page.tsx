import Image from "next/image";

export default function Home() {
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
