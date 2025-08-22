"use client";

import Image from "next/image";
import React from "react";

interface WorkItemProps {
  id: number | string;
  leftImage: string;
  rightImage: string;
  title: string;
  client: string;
  detailLink?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({
  id,
  leftImage,
  rightImage,
  title,
  client,
  detailLink = "#",
}) => {
  return (
    <div
      id={`work-${id}`}
      className="relative w-full bg-[#f4f4f4] flex flex-col justify-start items-start overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 pb-15 sm:pb-28 md:pb-36 lg:pb-40"
    >
      {/* Background big text */}
      <div className="absolute inset-0 flex items-start overflow-hidden z-0">
        <h1 className="scroll-text whitespace-nowrap text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] font-light text-gray-400 opacity-30 transition-opacity duration-500">
          {title} {title} {title} {title}
        </h1>
      </div>

      {/* Image section */}
      <div className="relative z-10 flex flex-row gap-2 md:gap-10 w-full items-start">
        {/* Left (main) image */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[500px]">
          <Image
            src={leftImage}
            alt="Project Main"
            width={500}
            height={400}
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>

        {/* Right (preview) image */}
        <div className="w-[70%] sm:w-[60%] md:w-[40%] lg:w-[300px]">
          <Image
            src={rightImage}
            alt="Project Preview"
            width={300}
            height={400}
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Bottom links */}
      <div className="relative z-10 mt-6 sm:mt-8 flex w-full justify-between items-center flex-row sm:flex-row gap-4 sm:gap-0">
        <a
          href={detailLink}
          className="text-sm sm:text-base text-black hover:underline"
        >
          view detail
        </a>
        <p className="text-gray-600 text-xs sm:text-sm text-left sm:text-right">
          client work <br />({client})
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
