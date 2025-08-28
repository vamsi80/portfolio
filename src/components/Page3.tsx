"use client";

import React, { FC, useEffect, useRef } from "react";
import { projects } from "../types/types";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typewriter } from "./ui/Typewriter";
import Image from "next/image";
import Link from "next/link";

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

      {projects.slice(0, 3).map((project) => (
        <div key={project.id} className="sticky top-0 z-50 h-full w-full">
          <div className="relative h-full w-full">
            <Image
              loading="lazy"
              className="h-full w-full max-sm:h-[35rem] object-cover"
              src={project.img}
              alt={`Background for ${project.title}`}
              width={700}
              height={500}
            />
            <div className="absolute inset-0 backdrop-blur-sm"></div>

            {/* Title top-left */}
            <div className="absolute top-20 left-20 max-sm:top-5 max-sm:left-5 z-50">
              <h3 className="text-lg text-white max-sm:text-xs font-semibold">
                {project.caseNumber}
              </h3>
            </div>

            {/* Description bottom-right */}
            <div className="absolute bottom-80 right-36 max-sm:bottom-5 max-sm:right-5 z-50 text-white">
              <h2 className="text-xl sm:text-lg md:text-xl max-sm:text-sm font-bold">
                {project.title}
              </h2>
              <h4 className="text-[1rem] sm:text-sm md:text-base max-sm:text-xs font-semibold">
                {project.description}
              </h4>
              <Link href={`/works/${project.id}`}>
                <h5 className="text-[1rem] sm:text-sm md:text-base pt-5 cursor-pointer max-sm:text-xs font-semibold">
                  View More
                </h5>
              </Link>
            </div>

            {/* Thumbnail center */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative w-[35vw] h-[31vw] max-sm:w-[91vw] bottom-12 max-sm:h-[101vw] max-sm:pt-12 cursor-pointer shadow-lg hover:scale-105 transition-all ease-in-out duration-300">
                <Image
                  className="h-full w-full object-cover"
                  src={project.thumbnail}
                  alt={`Thumbnail for ${project.title}`}
                  loading="lazy"
                  width={700}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page3;
