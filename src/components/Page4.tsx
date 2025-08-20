"use client";

import React, { FC, useEffect } from "react";
import gsap from "gsap";
import Skils from "./skils";

const Page4: FC = () => {
  useEffect(() => {
    if (window.innerWidth > 758) {
      const handleWheel = (e: WheelEvent) => {
        gsap.to(".marque", {
          transform: e.deltaY > 0 ? "translateX(-200%)" : "translateX(100%)",
          duration: 5,
          repeat: -1,
          ease: "none",
        });
      };

      window.addEventListener("wheel", handleWheel);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className="bg-[#F4F4F4] h-full w-full text-black">

      <div id="page2" className="flex justify-center items-center shadow-lg">
        <div
          id="move"
          className="flex relative py-[5vw] overflow-hidden w-full max-sm:py-[8vw] text-[#333333]"
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="marque flex-shrink-0 flex items-center gap-[3vw] px-[1.5vw] animate-marquee"
            >
              <h1 className="text-[4vw] max-sm:text-xl">
                Thank you for visiting
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page4;
