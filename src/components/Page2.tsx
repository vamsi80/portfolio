"use client";

import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TextParticle } from "./ui/TextParticle";

const Page2: FC = () => {
    return (
        <>
            <div className="bg-[#1B1B1B] text-white h-full w-full pb-[30rem] max-sm:pb-56">
                <div className="flex">
                    <h3 className="text-sm max-sm:text-xs text-start pl-20 pt-20 max-sm:pl-5 font-semibold max-sm:font-bold">
                        MY PROFILE
                    </h3>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-xs pt-24 ml-9 rotate-[39deg]"
                    />
                </div>

                <div className="h-48 w-full border border-0 rounded-lg overflow-hidden">
                    <TextParticle
                        text="Who Is He"
                        fontSize={100}
                        particleColor="#f4f4f4"
                        particleSize={1}
                        particleDensity={4}
                    />
                </div>

                <p className="text-center mt-2 text-[1rem] text-[#8E8E8E] font-semibold max-sm:px-12 max-sm:text-start">
                    Handling graphic design and coding at a design company,
                    <br />
                    implementing solutions that balance functionality with visual appeal.
                </p>

                <div className="pt-14 group">
                    {/* <p className="hidden top-[72rem] max-sm:group-hover:hidden group-hover:block absolute text-center text-blue-500 cursor-pointer font-semibold left-0 right-20 text-sm max-sm:text-xs max-sm:text-start max-sm:pl-12 max-sm:font-bold">
                        Learn about him
                    </p> */}
                    <p className="text-center cursor-pointer font-semibold text-sm max-sm:text-xs max-sm:text-start max-sm:pl-12 max-sm:font-bold">
                        Learn about him
                    </p>
                    {/* <p className="hidden max-sm:group-hover:hidden group-hover:block absolute text-center text-pink-600 cursor-pointer font-semibold left-20 right-0 text-sm max-sm:text-xs max-sm:text-start max-sm:pl-12 max-sm:font-bold">
                        Learn about him
                    </p> */}
                </div>

                <h3 className="text-center font-bold mt-20 text-9xl max-sm:text-[12vw]">
                    WORKS
                </h3>
            </div>
        </>
    );
};

export default Page2;
