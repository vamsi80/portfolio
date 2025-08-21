"use client";

import React, { FC } from "react";
import { Typewriter } from "../ui/Typewriter";

const Headding: FC = () => {
  return (
    <div className="h-full w-full">
      {/* Works Title */}
      <div className="top-0 z-40 h-[100vh] px-20 w-full flex flex-col items-left justify-center bg-[#f4f4f4] text-[#1B1B1B]">
        <Typewriter
          text={["WORKS"]}
          speed={80}
          loop={false}
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            lg:text-9xl
            font-bold
          "
        />
      </div>
    </div>
  );
};

export default Headding;
