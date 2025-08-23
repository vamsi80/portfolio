"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Typewriter } from "../ui/Typewriter";

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
            <p className="">After graduating from a medical graduate school, he worked for an environmental consultant. He then moved to a design company, where he was responsible for in-house media operations in the public relations department.
              In July 2022, he transferred to the company's design department, where he works as a graphic designer.

              After graduating from Digital Hollywood STUDIO by LIG's web design major course in June 2023, he also works as a coder at the company.</p>
          </div>
        </div>
      </div>
      <section className="p-20 mt-10">
        <div className="flex px-10">
          <Typewriter
            text={["SKILS"]}
            speed={80}
            loop={false}
            className="
                text-3xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                font-semibold
              "
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-xl pt-4 ml-2 rotate-[39deg]"
          />
        </div>
        <div className="min-h-screen w-full px-40 py-10">
          <div className="flex justify-end text-sm md:text-base">
            {/* Skills Grid */}
            <div className="grid grid-cols-1 gap-16 text-[#222] max-w-2xl text-left">
              {/* Development Language */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Development Language</h3>
                <p className="text-gray-400 font-medium mb-4">
                  HTML/CSS &nbsp; Sass &nbsp; JavaScript
                </p>
                <p className="text-sm leading-relaxed">
                  It is possible to code static sites using HTML/CSS (or Sass) and
                  JavaScript.
                  <br />
                  It is conscious of class management and semantic coding using BEM.
                  <br />
                  JavaScript uses a library that does not depend on jQuery, so it adopts
                  pure writing.
                </p>
              </div>

              {/* Library */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Library</h3>
                <p className="text-gray-400 font-medium mb-4">
                  Swiper &nbsp; Three.js &nbsp; GSAP
                </p>
                <p className="text-sm leading-relaxed">
                  It is also possible to actively incorporate libraries found on many
                  sites, such as Swiper and GSAP.
                  <br />
                  Information gathering is based on reading documentation as much as
                  possible, but information is also gathered from blogs such as Zenn and
                  videos on YouTube and Udemy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Aboutpage;
