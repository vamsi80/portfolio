"use client";

import React, { FC, useEffect, useRef } from "react";
import { bgimages } from "../types/images";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        <h1
          ref={headingLine1}
          className="text-9xl cursor-default text-center max-sm:text-[12vw] font-bold"
        >
          well
        </h1>
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

          <div className="absolute bottom-80 right-36 max-sm:bottom-5 max-sm:right-5 z-50 text-white">
            <h2 className="text-xl max-sm:text-sm font-bold">
              {bgimage.project}
            </h2>
            <h4 className="text-[1rem] max-sm:text-xs font-semibold">
              {bgimage.description}
            </h4>
            <h5 className="text-[1rem] pt-5 cursor-pointer max-sm:text-xs font-semibold">
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

      {/* View All Works */}
      <div className="flex pt-10 items-center justify-center">
        <button
          type="button"
          className="border border-black hover:bg-black hover:text-white transition rounded-full p-4 w-48"
        >
          ・view all works
        </button>
      </div>
    </div>
  );
};

export default Page3;
