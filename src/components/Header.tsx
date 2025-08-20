"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

const Header: React.FC = () => {
  const Titleref = useRef<HTMLDivElement | null>(null);
  const Listref = useRef<HTMLUListElement | null>(null);
  const headingLine1 = useRef<HTMLHeadingElement | null>(null);
  const headingLine2 = useRef<HTMLHeadingElement | null>(null);
  const subheadingref = useRef<HTMLHeadingElement | null>(null);

  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      if (Titleref.current) {
        tl.from(Titleref.current, {
          duration: 1,
          y: -10, // Slide down effect
          opacity: 0,
          filter: "blur(10px)", // Add blur effect
          ease: "power2.inOut", // Smooth easing
        });
      }

      if (Listref.current) {
        gsap.from(Listref.current.querySelectorAll("li"), {
          duration: 1,
          opacity: 0,
          filter: "blur(10px)",
          y: -50,
          ease: "power2.out",
          stagger: 0.2,
        });
      }

      if (headingLine1.current) {
        gsap.to(headingLine1.current, {
          duration: 0.6,
          ease: "none",
          text: "IDEA TO",
        });
      }

      if (headingLine2.current) {
        gsap.to(headingLine2.current, {
          duration: 0.6,
          delay: 0.6,
          ease: "none",
          text: "EXECUTION",
        });
      }

      if (subheadingref.current) {
        gsap.to(subheadingref.current, {
          duration: 0.2,
          ease: "none",
          text: "VAMSIKRISHNA PORTFOLIO SITE",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="hero h-screen w-full flex flex-col justify-between 
      bg-[url('/images/bg-2.png')] bg-cover bg-center bg-no-repeat">
        <div className="page1 sticky top-0 z-50">
          <div
            className="flex justify-between max-sm:px-5 font-semibold px-20 py-4"
            id="home"
          >
            <div ref={Titleref} className="flex">
              <a href="index.html">
                <h1 className="title text-[#E4E4E4] text-xl max-sm:text-lg">
                  _VK_
                </h1>
              </a>
            </div>
            <ul
              ref={Listref}
              className="list flex gap-10 text-lg mt-1 max-sm:text-sm"
            >
              <li className="cursor-pointer text-[#E4E4E4]">WORKS</li>
              <li className="cursor-pointer text-[#E4E4E4]">ABOUT</li>
            </ul>
          </div>
        </div>

        <div className="hero-content flex flex-col pl-20 max-sm:pl-5 flex-1 justify-center relative text-white font-bold">
          <h1
            ref={headingLine1}
            className="text-9xl cursor-default text-start max-sm:text-[12vw]"
          >
            DSIING OT
          </h1>
          <h1
            ref={headingLine2}
            className="text-9xl cursor-default text-start max-sm:text-[12vw]"
          >
            DEVDPLEMEWT
          </h1>
        </div>
        <div className="hero-bottom text-white font-semibold pl-20 max-sm:pl-5 mt-10">
          <h3 ref={subheadingref} className="text-xl max-sm:text-[5vw]">
            LOREM IPSUM DOLOR
          </h3>
        </div>
        <div className="flex justify-between px-20 max-sm:px-4 pb-16 font-normal max-sm:font-normal text-white text-sm">
          <h3 className="mt-8 max-sm:mt-56">Frontend</h3>
          <h3 className="mt-8 max-sm:mt-56">Backend</h3>
          <h3 className="mt-8 max-sm:mt-56">Beyond</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
