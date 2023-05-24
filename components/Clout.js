import Link from "next/link";
import React from "react";

const Clout = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-64">
      Built with Rizz😻 by{" "}
      <span>
        {" "}
        <Link
          target="_blank"
          className="text-blue-600"
          href="https://twitter.com/ktarchived"
        >
          {" "}
          kirrttiraj
        </Link>
      </span>
    </div>
  );
};

export default Clout;
