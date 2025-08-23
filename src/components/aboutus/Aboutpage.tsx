"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Typewriter } from "../ui/Typewriter";
import { aboutSections } from "@/types/types";
import { AccordionTrigger, Accordion, AccordionContent, AccordionItem } from "../ui/Accordion";

const Aboutpage: FC = () => {
  const items = [
    {
      id: "1",
      title: "What makes Origin UI different?",
      content:
        "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
    },
    {
      id: "2",
      title: "How can I customize the components?",
      content:
        "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
    },
    {
      id: "3",
      title: "Is Origin UI optimized for performance?",
      content:
        "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
    },
    {
      id: "4",
      title: "How accessible are the components?",
      content:
        "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
    },
  ];

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
              In July 2022, he transferred to the company's design department, where he works as a graphic designer.

              After graduating from Digital Hollywood STUDIO by LIG's web design major course in June 2023, he also works as a coder at the company.</p>
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
                  lg:text-5xl
                  font-semibold
                "
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xl pt-4 ml-2 rotate-[39deg]"
            />
          </div>

          <div className=" w-full px-40 py-10">
            <div className="flex justify-end text-sm md:text-base">
              <div className="grid grid-cols-1 gap-16 text-[#222] max-w-2xl w-full text-left">
                {section.categories.map((category) => (
                  <div key={category.id}>
                    <h3 className="text-xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 font-medium mb-4">
                      {category.skills.join("   ")}
                    </p>
                    <div className="text-sm leading-relaxed">
                      {category.description.map((desc, i) => (
                        <p key={i} className="mb-2">
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
                  lg:text-5xl
                  font-semibold
                "
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-xl pt-4 ml-2 rotate-[39deg]"
          />
        </div>

        <div className="w-full px-40 py-10">
          <div className="flex justify-end text-sm md:text-base">
            <div className="space-y-4 max-w-2xl w-full ">
              <Accordion type="single" collapsible className="w-full" defaultValue="3">
                {items.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="flex items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2 text-muted-foreground">
                      {item.content}
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
