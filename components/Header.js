import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24 ">
        <h1 className="font-font-heading text-6xl sm:text-8xl">Rizz check</h1>
        {sessionData?.user ? (
          <Link
            className="flex flex-row items-center justify-center space-x-2 bg-white rounded-md p-2"
            href="/characters"
          >
            <p>Let's goooo</p>
          </Link>
        ) : (
          <button
            className="flex flex-row items-center justify-center space-x-2 bg-white rounded-md p-2"
            onClick={() => signIn("google")}
          >
            <FcGoogle />
            <p>Sign in with Google</p>
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
