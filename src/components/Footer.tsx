"use client";

import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="footer text-white pt-16 pb-6 px-5 pl-10">
      <div className="flex flex-col max-sm:flex-col justify-between items-start max-sm:gap-5">
        {/* Contact and SNS Section */}
        <div className="flex w-full">
          {/* Left Section */}
          <div className="text-start">
            <h3 className="text-sm max-sm:text-xs font-bold">
              ・Contact <br />
              <span className="cursor-pointer font-normal">
                vamsimannam111@gmail.com
              </span>
            </h3>
          </div>

          {/* Right Section */}
          {/* <div className="text-start pl-20">
            <h3 className="text-sm max-sm:text-xs font-bold cursor-pointer">
              ・SNS(X)
            </h3>
          </div> */}
        </div>

        {/* Main Heading */}
        <div className="mt-20 w-[32rem] max-sm:w-full">
          <h1 className="text-8xl font-bold max-sm:text-[12vw]">
            IDEA TO EXECUTION
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
