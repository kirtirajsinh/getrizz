import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Nav = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <nav className="bg-blue-500 h-16 flex items-center justify-between px-4">
        <div className="text-white text-xl font-bold">Be a Rizz</div>
        <div className="flex items-center">
          <div className="rounded-full w-8 h-8 bg-white mr-4">
            {sessionData?.user?.image ? (
              <Image
                src={sessionData?.user?.image ?? ""}
                alt={sessionData?.user?.name ?? ""}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <div className="text-blue-500">No image</div>
            )}
          </div>
          <div className="text-white">Logged in character</div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
