import React from "react";
import celebsData from "../../utils/celebs.json";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Character = () => {
  const router = useRouter();
  return (
    <div className="items-center">
      <div className="flex flex-row items-center justify-center flex-wrap">
        {celebsData.map((celeb) => {
          return (
            <div key={celeb.id} className="flex flex-col items-center sm:mt-24">
              <motion.div
                key={celeb.id}
                className="rounded-full  bg-pink border-2 border-current  m-4 shadow-md hover:shadow-lg "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={
                  // move to a chat/celeb.id page
                  () => {
                    router.push(`/chat/${celeb.name.replace(/\s/g, "")}`);
                  }
                }
              >
                <img
                  src={celeb.image}
                  alt={celeb.name}
                  className=" rounded-full object-center object-cover w-40 h-40"
                />
              </motion.div>
              <div className="font-medium">
                <h1>{celeb.name}</h1>
                <p>{celeb.profession}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
