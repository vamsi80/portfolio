"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // ✅ Lenis smooth scrolling setup
  useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // ✅ Loader animation
  useEffect(() => {
    if (loading && loaderRef.current) {
      gsap.from(loaderRef.current, {
        duration: 2.5,
        opacity: 1,
        ease: "power2.inOut",
        onComplete: () => setLoading(false),
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        ref={loaderRef}
        className="fixed inset-0 flex items-center justify-center bg-[#1B1B1B] z-50"
      >
        {/* Loader SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-20">
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
    );
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
