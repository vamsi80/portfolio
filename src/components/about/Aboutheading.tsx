"use client";

import React, { FC } from "react";
import { Typewriter } from "../ui/Typewriter";

const AboutHeadding: FC = () => {
  return (
    <div className="h-full w-full">
      <div className="top-0 h-[100vh] px-10 md:px-20 w-full flex flex-col items-left justify-center bg-[#f4f4f4] text-[#1B1B1B]">
        <Typewriter
          text={["ABOUT"]}
          speed={80}
          loop={false}
          className="
            text-3xl
            sm:text-5xl
            md:text-7xl
            lg:text-9xl
            font-bold
          "
        />
      </div>
    </div>
  );
};

export default AboutHeadding;
