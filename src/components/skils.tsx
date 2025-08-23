"use client";

import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { Typewriter } from "./ui/Typewriter";
import { skilsText } from "@/types/types";
import Link from "next/link";

const Skils: FC = () => {
  return (
    <div className="bg-[#f4f4f4] min-h-screen w-full text-[#090909] pb-20">
      {/* View All Works Button */}
      <div className="flex pt-10 items-center justify-center">
        <Link
          href="/works"
          className="border border-black hover:bg-black hover:text-white transition rounded-full py-3 px-8 text-sm sm:text-base"
        >
          ・view all works
        </Link>
      </div>

      <div className="flex w-full px-4 sm:px-20 lg:px-20 pt-12 sm:pt-16">
        <div
          className="
      w-full flex items-center
      mx-auto            /* center for mobile/tablet */
      lg:mx-0            /* keep original desktop left alignment */
    "
        >
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold">
            SKILLS
          </h3>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-3 text-xs sm:text-sm lg:text-base rotate-[39deg]"
          />
        </div>
      </div>

      {/* Hero Typewriter Text */}
      <div className="w-full px-4 sm:px-18 lg:px-20 pt-12 sm:pt-16 lg:pt-20">
        <div
          className="
      w-full text-left
      mx-auto
      lg:mx-0           /* desktop stays aligned with padding */
    "
        >
          <Typewriter
            text={["Logic × Creativity ="]}
            speed={20}
            loop={false}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
          />
          <br />
          <Typewriter
            text={["Smart Solutions"]}
            speed={40}
            loop={false}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold"
          />
        </div>
      </div>


      {/* Skills List */}
      <div className="flex w-full mt-16 sm:mt-20 px-4 sm:px-6 lg:px-20">
        <div
          className="
          w-full max-w-2xl text-left space-y-10
          mx-auto            /* Center on small screens */
          lg:ml-auto lg:mr-0 /* Push to right on large screens */
        "
        >
          {skilsText.map((item) => (
            <div key={item.id} className="space-y-3">
              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#090909]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-[#444] font-normal">
                {item.description}
              </p>

              {/* Keywords */}
              <div className="mt-2">
                <h4 className="text-xs sm:text-sm font-semibold text-[#8e8e8e]">
                  Keywords:
                </h4>
                <div className="flex flex-wrap gap-3 mt-1">
                  {item.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm lg:text-base font-medium text-[#9c9c9c]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skils;
