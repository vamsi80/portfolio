"use client";

import React, { FC } from "react";

const Aboutpage: FC = () => {
  return (
    <div className="h-full w-full bg-[#f4f4f4]">
      <div className="max-w-4xl mx-auto mt-20 px-4">
        <div className="flex flex-col md:flex-row gap-10 text-sm md:text-base">
          {/* Left column - 25% on md+ screens */}
          <div className="md:w-1/4 w-full">
            <p className="font-medium mb-2">VAMSI KRISHNA</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          {/* Right column - 75% on md+ screens */}
          <div className="md:w-3/4 w-full">
            <p className="font-medium">Production period</p>
            <p className="">Production period</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
