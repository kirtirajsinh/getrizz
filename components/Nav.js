import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Nav = () => {
  const { data: sessionData } = useSession();
  const [optionsVisible, setOptionsVisible] = useState(false);
  const optionsRef = useRef(null);
  const handleLogoutClick = () => {
    signOut();
  };

  const handleOptionsClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOptionsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [optionsRef]);

  return (
    <>
      <nav className="border-b h-16 flex items-center justify-between px-4">
        <div className="text-white text-2xl sm:text-4xl font-semibold font-font-heading">
          Rizz Check
        </div>
        {sessionData?.user && (
          <div
            className="flex flex-row items-center border max-w-20 p-2 rounded-full  cursor-pointer"
            onClick={() => setOptionsVisible(!optionsVisible)}
          >
            {sessionData?.user && (
              <div className="flex flex-row items-center space-x-4 ">
                <div className="flex flex-row rounded-full bg-white ">
                  {sessionData?.user?.image && (
                    <Image
                      src={sessionData?.user?.image ?? ""}
                      alt={sessionData?.user?.name ?? ""}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                </div>
                <p className="text-md">{sessionData?.user?.name}</p>
              </div>
            )}
            {optionsVisible && (
              <div
                className="absolute mt-24 w-32 bg-white rounded-md shadow-lg z-10"
                onClick={handleOptionsClick}
                ref={optionsRef}
              >
                <div className="py-1">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
