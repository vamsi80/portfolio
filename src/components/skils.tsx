"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skils: FC = () => {
  const headingLine1 = useRef<HTMLHeadingElement | null>(null);
  const headingLine2 = useRef<HTMLHeadingElement | null>(null);
  const [fontSize, setFontSize] = useState(60);

  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingLine1.current) {
        gsap.to(headingLine1.current, {
          duration: 0.6,
          text: "Logic × Code × Design =",
          ease: "none",
          scrollTrigger: {
            trigger: headingLine1.current,
            start: "top 80%", // triggers when text enters viewport
            toggleActions: "play none none reverse", 
          },
        });
      }

      if (headingLine2.current) {
        gsap.to(headingLine2.current, {
          duration: 0.6,
          delay: 0.6,
          text: "Digital Innovation",
          ease: "none",
          scrollTrigger: {
            trigger: headingLine2.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Smooth scaling: min 45px, max 80px, scales with width
      const size = Math.max(45, Math.min(80, width / 20));
      setFontSize(size);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#f4f4f4] text-[#090909] h-full w-full lg:pb-0 m:pb-0 pb-[30rem] max-sm:pb-0">
      {/* Header */}
      <div className="flex">
        <h3 className="text-sm max-sm:text-xs text-start pl-20 pt-20 max-sm:pl-5 font-semibold max-sm:font-bold">
          SKILLS
        </h3>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-xs pt-24 ml-9 rotate-[39deg]"
        />
      </div>

      {/* Animated Text */}
      <div className="hero-content flex flex-col pl-20 max-sm:pl-5 flex-1 justify-center relative text-[#090909] font-bold">
        <h1
          ref={headingLine1}
          className="text-7xl cursor-default text-start max-sm:text-[12vw]"
        >
          DSIING OT
        </h1>
        <h1
          ref={headingLine2}
          className="text-7xl cursor-default text-start max-sm:text-[12vw]"
        >
          DEVDPLEMEWT
        </h1>
      </div>

      {/* Subtext */}
      <p className="text-right pr-20 mt-2 text-[1rem] text-[#8E8E8E] font-semibold max-sm:px-12 max-sm:text-start">
        Handling graphic design and coding at a design company,
        <br />
        implementing solutions that balance functionality with visual appeal.
      </p>
    </div>
  );
};

export default Skils;
