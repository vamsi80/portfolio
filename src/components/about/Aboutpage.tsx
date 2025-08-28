"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Typewriter } from "../ui/Typewriter";
import { aboutSections } from "@/types/types";
import { AccordionTrigger, Accordion, AccordionContent, AccordionItem } from "../ui/Accordion";

const Aboutpage: FC = () => {
  return (
    <div className="h-full w-full bg-[#f4f4f4] pb-20">
      {/* Intro Section */}
      <div className="max-w-5xl mx-auto mb-20 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-sm md:text-base">
          {/* Left column */}
          <div className="md:w-1/4 w-full">
            <p className="font-medium mb-2">VAMSI KRISHNA</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          {/* Right column */}
          <div className="md:w-3/4 w-full">
            <p>
              I graduated from GITAM University, where I developed strong problem-solving and analytical skills. During my graduation, I completed a Full Stack Development internship, where I built and deployed real-world projects. This experience helped me bridge my engineering background with software development and strengthened my practical skills in building end-to-end applications.
            </p>
            <p className="mt-3">
              After completing my degree, I joined Creative and Interactive Immersive Solutions Company in Bengaluru as a Full-Time Full Stack Developer. In this role, I collaborated with diverse clients and was responsible for designing, developing, and deploying fully functional websites and real-time web solutions. My work contributed to enhancing client visibility, improving user engagement, and delivering scalable digital products tailored to business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic About Sections */}
      {aboutSections.map((section) => (
        <section
          key={section.id}
          className="px-4 sm:px-6 md:px-10 lg:px-20 mt-10 sm:mt-16 md:mt-20"
        >
          <div className="flex items-center px-2 sm:px-6">
            <Typewriter
              text={[section.sectionTitle]}
              speed={80}
              loop={false}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold"
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-lg sm:text-xl ml-2 rotate-[39deg]"
            />
          </div>

          <div className="w-full px-2 sm:px-6 md:px-10 mt-6">
            <div className="flex justify-end text-sm md:text-base">
              <div className="grid grid-cols-1 gap-6 text-[#222] max-w-3xl w-full text-left">
                {section.type === "skills" &&
                  section.categories.map((category) => (
                    <div key={category.id}>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 font-medium mb-3">
                        {category.skills.join("  \u00A0\u00A0 ")}
                      </p>
                      <div className="leading-relaxed space-y-2">
                        {category.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </div>
                    </div>
                  ))}

                {section.type === "experience" &&
                  section.categories.map((category) => (
                    <div key={category.id}>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                        {category.monthStart}
                        <sup className="text-xs align-super ml-0.5">{category.yearStart}</sup>
                        {" - "}
                        {category.monthEnd}
                        {category.yearEnd && (
                          <sup className="text-xs align-super ml-0.5">{category.yearEnd}</sup>
                        )}
                      </h3>
                      <p className="text-gray-400 font-medium mb-3">
                        {category.role} At {""}
                        <span className="font-semibold text-[#090909]">{category.company}</span>
                      </p>
                      <div className="leading-relaxed space-y-2">
                        {category.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                {section.type === "strengths" && (
                  <Accordion type="single" collapsible className="w-full">
                    {section.categories.map((c) => (
                      <AccordionItem key={c.id} value={`strength-${c.id}`}>
                        <AccordionTrigger className="flex items-center justify-between py-3 text-left text-[15px] font-semibold leading-6 transition-all">
                          {c.title}
                        </AccordionTrigger>
                        <AccordionContent className="pb-2 text-muted-foreground">
                          {c.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Aboutpage;
