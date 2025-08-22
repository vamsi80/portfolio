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
     className="relative w-full bg-[#f4f4f4] flex flex-col justify-start items-start overflow-hidden px-20 pb-50">
      <div className="absolute inset-0 flex items-start overflow-hidden z-0">
        <h1
          className="scroll-text whitespace-nowrap text-[10rem] md:text-[14rem] font-light text-gray-400 opacity-30 transition-opacity duration-500"
        >
          {title} {title} {title} {title}
        </h1>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-10">
        <div className="w-[300px] md:w-[500px]">
          <Image
            src={leftImage}
            alt="Project Main"
            width={500}
            height={400}
            className="w-full object-cover shadow-lg"
          />
        </div>

        <div className="w-[200px] md:w-[300px]">
          <Image
            src={rightImage}
            alt="Project Preview"
            width={300}
            height={400}
            className="w-full object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="relative z-10 mt-8 flex w-full justify-between items-start">
        <a href={detailLink} className="text-sm text-black hover:underline">
          view detail
        </a>
        <p className="text-gray-600 text-xs text-right">
          client work <br />({client})
        </p>
      </div>
    </div>
  );
};

export default WorkItem;
