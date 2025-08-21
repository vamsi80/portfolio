"use client";

import React, { useLayoutEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header: React.FC = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Decide text color based on route (memoized)
  const isDark = useMemo(() => pathname === "/works", [pathname]);

  // ✅ Run GSAP on mount
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          duration: 1,
          y: -10,
          opacity: 0,
          filter: "blur(10px)",
          ease: "power2.inOut",
        });
      }

      if (listRef.current) {
        gsap.from(listRef.current.querySelectorAll("li"), {
          duration: 1,
          opacity: 0,
          filter: "blur(10px)",
          y: -50,
          ease: "power2.out",
          stagger: 0.2,
        });
      }
    });

    return () => ctx.revert(); // ✅ Cleanup GSAP
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-transparent">
      <div className="flex justify-between items-center max-sm:px-5 px-20 py-4 font-semibold">
        {/* Logo / Title */}
        <div ref={titleRef} className="flex">
          <Link href="/" aria-label="Go to home">
            <h1
              className={`title text-xl max-sm:text-lg transition-colors duration-500 ${
                isDark ? "text-black" : "text-[#f4f4f4]"
              }`}
            >
              _VK_
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav aria-label="Main Navigation">
          <ul
            ref={listRef}
            className={`flex gap-10 text-lg max-sm:text-sm transition-colors duration-500 ${
              isDark ? "text-black" : "text-[#f4f4f4]"
            }`}
          >
            <li
              className="cursor-pointer hover:underline underline-offset-4"
              onClick={() => router.push("/works")}
            >
              WORKS
            </li>
            <li
              className="cursor-pointer hover:underline underline-offset-4"
              onClick={() => router.push("/about")}
            >
              ABOUT
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
