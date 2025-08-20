"use client";

import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { Typewriter } from "./ui/Typewriter";
import { skilsText } from "@/types/types";

const Skils: FC = () => {
  return (
    <div className="bg-[#f4f4f4] h-full w-full text-[#090909] ">
      <div className="flex pt-10 items-center justify-center">
        <button
          type="button"
          className="border border-black hover:bg-black hover:text-white transition rounded-full p-4 w-48"
        >
          ・view all works
        </button>
      </div>
      <div className="flex items-center px-4 sm:px-6 lg:px-20 pt-10 sm:pt-16 lg:pt-20">
        {/* Heading */}
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold">
          SKILLS
        </h3>

        {/* Arrow */}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-xs sm:text-sm lg:text-base ml-4 rotate-[39deg]"
        />
      </div>

      <div className="pl-30 pt-20 sm:pl-5 max-sm:pl-5 sm:pt-10 max-sm:pt-10">
        <Typewriter
          text={["Logic × Creativity ="]}
          speed={20}
          loop={false}
          className="text-7xl md:text-6xl sm:text-4xl max-sm:text-3xl font-semibold"
        />
        <br />
        <Typewriter
          text={["Smart Solutions"]}
          speed={40}
          loop={false}
          className="text-7xl md:text-6xl sm:text-4xl max-sm:text-3xl font-semibold"
        />
      </div>

      <div className="flex w-full justify-center mt-20 px-4 sm:px-6 lg:px-20">
        <div className="w-full max-w-5xl text-left space-y-10">
          {skilsText.map((item) => (
            <div key={item.id} className="space-y-3">
              {/* Title */}
              <h3 className="text-lg font-bold text-[#090909]">{item.title}</h3>

              {/* Description */}
              <p className="text-[1rem] text-[#444] font-normal">
                {item.description}
              </p>

              {/* Keywords */}
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-[#8e8e8e]">Keywords:</h4>
                <div className="flex flex-wrap gap-3 mt-1">
                  {item.keywords.map((kw, idx) => (
                    <span key={idx} className="text-sm font-medium text-[#9c9c9c]">
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
