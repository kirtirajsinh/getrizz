import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32 space-y-4 ">
        <motion.div
          animate={{
            scale: [3, 1],
            rotate: [0, 360],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="font-font-heading text-6xl sm:text-8xl text-center"
        >
          Rizz check
        </motion.div>
        <p className="text-2xl font-md">
          A chat-based game where your goal is to befriend AI Celebs, <br />{" "}
          <span className="text-center">and ask them for a Date💕.</span>
        </p>
        {sessionData?.user ? (
          <Link
            className="flex flex-row items-center justify-center space-x-2 bg-white rounded-md p-2 shadow-lg hover:bg-gray-200"
            href="/characters"
          >
            <p>Let&apos;s goooo</p>
          </Link>
        ) : (
          <button
            className="flex flex-row items-center justify-center space-x-2 bg-white rounded-md p-2 hover:bg-gray-200"
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
