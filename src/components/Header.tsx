"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const Titleref = useRef<HTMLDivElement | null>(null);
  const Listref = useRef<HTMLUListElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      if (Titleref.current) {
        tl.from(Titleref.current, {
          duration: 1,
          y: -10,
          opacity: 0,
          filter: "blur(10px)",
          ease: "power2.inOut",
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-transparent">
      <div className="flex justify-between max-sm:px-5 font-semibold px-20 py-4">
        <div ref={Titleref} className="flex">
          <Link href="/">
            <h1 className="title text-[#E4E4E4] text-xl max-sm:text-lg">_VK_</h1>
          </Link>
        </div>
        <ul ref={Listref} className="list flex gap-10 text-lg mt-1 max-sm:text-sm text-[#E4E4E4]">
          <li
            className="cursor-pointer"
            onClick={() => router.push("/works")}
          >
            WORKS
          </li>
          <li
            className="cursor-pointer"
            onClick={() => router.push("/about")}
          >
            ABOUT
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
