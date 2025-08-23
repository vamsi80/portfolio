"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Typewriter } from "../ui/Typewriter";
import { aboutSections, AboutStrengths } from "@/types/types";
import { AccordionTrigger, Accordion, AccordionContent, AccordionItem } from "../ui/Accordion";

const Aboutpage: FC = () => {
  return (
    <div className="h-full w-full bg-[#f4f4f4]">
      <div className="max-w-4xl mx-auto mb-40 px-4">
        <div className="flex flex-col md:flex-row gap-10 text-sm md:text-base">
          {/* Left column - 25% on md+ screens */}
          <div className="md:w-1/4 w-full">
            <p className="font-medium mb-2">VAMSI KRISHNA</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          {/* Right column - 75% on md+ screens */}
          <div className="md:w-3/4 w-full">
            <p className="">After graduating from a medical graduate school, he worked for an environmental consultant. He then moved to a design company, where he was responsible for in-house media operations in the public relations department.
              In July 2022, he transferred to the company`&apos;`s design department, where he works as a graphic designer.

              After graduating from Digital Hollywood STUDIO by LIG`&apos;`s web design major course in June 2023, he also works as a coder at the company.</p>
          </div>
        </div>
      </div>
      {aboutSections.map((section) => (
        <section key={section.id} className="px-20 mt-20">
          {/* Dynamic Section Title */}
          <div className="flex px-10">
            <Typewriter
              text={[section.sectionTitle]}
              speed={80}
              loop={false}
              className="
                  text-3xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-4xl
                  font-bold
                "
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xl pt-4 ml-2 rotate-[39deg]"
            />
          </div>

          <div className=" w-full px-20 py-0">
            <div className="flex justify-end text-sm md:text-base">
              <div className="grid grid-cols-1 gap-5 text-[#222] max-w-3xl w-full text-left">
                {section.categories.map((category) => (
                  <div key={category.id}>
                    <h3 className="text-2xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 font-medium mb-3">
                      {category.skills.join("   ")}
                    </p>
                    <div className=" leading-relaxed">
                      {category.description.map((desc, i) => (
                        <p key={i} className="mb-0">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="px-20 mt-20">
        {/* Dynamic Section Title */}
        <div className="flex px-10">
          <Typewriter
            text={"STRENGTHS"}
            speed={80}
            loop={false}
            className="
                  text-3xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-4xl
                  font-bold
                "
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-xl pt-4 ml-2 rotate-[39deg]"
          />
        </div>

        <div className="w-full px-20 py-10">
          <div className="flex justify-end text-sm md:text-base">
            <div className="space-y-4 max-w-3xl w-full ">
              <Accordion type="single" collapsible className="w-full" defaultValue="3">
                {AboutStrengths.map((strength) => (
                  <AccordionItem key={strength.id} value={strength.id}>
                    <AccordionTrigger className="flex items-center justify-between py-3 text-left text-[15px] font-semibold leading-6 transition-all">
                      {strength.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2 text-muted-foreground">
                      {strength.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Aboutpage;
