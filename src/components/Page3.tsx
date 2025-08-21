"use client";

import React, { FC, useEffect, useRef } from "react";
import { bgimages } from "../types/types";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typewriter } from "./ui/Typewriter";

const Page3: FC = () => {
  const headingLine1 = useRef<HTMLHeadingElement | null>(null);

  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingLine1.current) {
        gsap.to(headingLine1.current, {
          duration: 0.4,
          ease: "none",
          text: "WORKS",
          scrollTrigger: {
            trigger: headingLine1.current,
            start: "top 80%", // when the top of h1 hits 80% of viewport
            toggleActions: "play none none reverse", // play on enter, reverse on leave
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-full w-full">
      {/* Works Title */}
      <div className="sticky top-0 z-40 h-[40vh] w-full flex flex-col items-center justify-center bg-[#1B1B1B] text-white">
        <Typewriter
          text={["WORKS"]}
          speed={80}
          loop={false}
          className="
            text-3xl           /* base → mobile */
            sm:text-4xl        /* small screens */
            md:text-6xl        /* medium screens */
            lg:text-9xl        /* large screens */
            font-semibold
          "
        />
      </div>

      {bgimages.map((bgimage) => (
        <div key={bgimage.id} className="sticky top-0 z-50 h-full w-full">
          <img
            loading="lazy"
            className="h-full w-full max-sm:h-[35rem] object-cover"
            src={bgimage.img}
            alt={`Background for ${bgimage.project}`}
          />
          <div className="absolute inset-0 backdrop-blur-sm"></div>

          <div className="absolute top-20 left-20 max-sm:top-5 max-sm:left-5 z-50">
            <h3 className="text-lg text-white max-sm:text-xs font-semibold">
              {bgimage.title}
            </h3>
          </div>

          <div className="absolute bottom-80 right-36 
                sm:bottom-20 sm:right-10 
                md:bottom-12 md:right-12
                max-sm:bottom-5 max-sm:right-5 
                z-50 text-white">
            <h2 className="text-xl sm:text-lg md:text-xl max-sm:text-sm font-bold">
              {bgimage.project}
            </h2>
            <h4 className="text-[1rem] sm:text-sm md:text-base max-sm:text-xs font-semibold">
              {bgimage.description}
            </h4>
            <h5 className="text-[1rem] sm:text-sm md:text-base pt-5 cursor-pointer max-sm:text-xs font-semibold">
              View More
            </h5>
          </div>


          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-[35vw] h-[31vw] max-sm:w-[91vw] bottom-12 max-sm:h-[101vw] max-sm:pt-12 cursor-pointer shadow-lg hover:scale-105 transition-all ease-in-out duration-300">
              <img
                className="h-full w-full object-cover"
                src={bgimage.thumbnail}
                alt={`Thumbnail for ${bgimage.project}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page3;
