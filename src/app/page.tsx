"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis"; // ✅ Make sure you installed it
import Page4 from "@/components/Page4";
import Skils from "@/components/skils";

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ✅ Correct way to initialize Lenis
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // Cleanup if needed (no built-in destroy, but you can stop RAF)
      cancelAnimationFrame(raf as unknown as number);
    };
  }, []);

  useEffect(() => {
    // GSAP Animation for the loader
    if (loading && loaderRef.current) {
      const tl = gsap.timeline();

      tl.from(loaderRef.current, {
        duration: 3,
        opacity: 1,
        ease: "none",
      }).call(() => setLoading(false));
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        ref={loaderRef}
        className="loader h-screen w-full bg-[#1B1B1B] fixed flex items-center justify-center z-50"
      >
        <div className="stroke flex items-center justify-center h-screen w-20 bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <linearGradient id="a8">
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#ffffffff"></stop>
            </linearGradient>
            <circle
              fill="none"
              stroke="url(#a8)"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="0 44 0 44 0 44 0 44 0 360"
              cx="100"
              cy="100"
              r="70"
              transform-origin="center"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="discrete"
                dur="2"
                values="360;324;288;252;216;180;144;108;72;36"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Page2 />
      <Page3 />
      <Skils />
      {/* <Page4 /> */}
      <Footer />
    </>
  );
};

export default App;
