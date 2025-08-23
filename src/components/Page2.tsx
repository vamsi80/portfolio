"use client";

import React, { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Page2: FC = () => {
    const [fontSize, setFontSize] = useState(60);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            // Smooth scaling: min 28px, max 80px, scales with width
            const size = Math.max(45, Math.min(80, width / 20));
            setFontSize(size);
        };

        handleResize(); // run on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <div className="bg-[#1B1B1B] text-white h-full w-full lg:pb-0 m:pb-0 pb-[30rem] max-sm:pb-0">
                <div className="flex">
                    <h3 className="text-sm max-sm:text-xs text-start pl-20 pt-20 max-sm:pl-5 font-semibold max-sm:font-bold">
                        MY PROFILE
                    </h3>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-xs pt-24 ml-9 rotate-[39deg]"
                    />
                </div>

                <Link href="/about">
                    <h2
                        className="cursor-pointer text-center font-bold mt-10 text-7xl max-sm:text-[12vw] glitch"
                        data-text="Who Is Vamsi?"
                    >
                        Who Is Vamsi?
                    </h2>
                </Link>

                <p className="text-center mt-2 text-[1rem] text-[#8E8E8E] font-semibold max-sm:px-12 max-sm:text-start">
                    Handling graphic design and coding at a design company,
                    <br />
                    implementing solutions that balance functionality with visual appeal.
                </p>

                <div className="pt-14 group">
                    <p className="text-center cursor-pointer font-semibold text-sm max-sm:text-xs max-sm:text-start max-sm:pl-12 max-sm:font-bold pb-20">
                        Know about him
                    </p>
                </div>
            </div>
        </>
    );
};

export default Page2;
