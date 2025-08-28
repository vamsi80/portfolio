import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/types/types";
import Image from "next/image";

interface Params {
  id: string;
}

export default async function CaseDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;

  const caseData = projects.find((c) => c.id === id);

  if (!caseData) {
    return <p className="p-20">Case not found</p>;
  }

  return (
    <main className="min-h-screen bg-white text-black px-6 md:px-32 py-20">
      <p className="text-sm font-medium text-gray-800 mb-4">
        {caseData.caseNumber}
      </p>

      <div className="max-w-4xl mx-auto mt-20">
        <div className="mb-12">
          {caseData.isFictional && (
            <p className="text-sm text-gray-500 mb-2">*Fictional site</p>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {caseData.title}
          </h1>
          <Link
            href={caseData.launchUrl}
            target="_blank"
            className="flex items-center gap-1 text-sm font-medium hover:underline"
          >
            Launch Site <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base">
          <div>
            <p className="text-gray-400 mb-2">Area of responsibility</p>
            <p className="font-medium">{caseData.areaOfResponsibility}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Development</p>
            <p className="font-medium">{caseData.development}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Project Overview</p>
            <p className="font-medium">{caseData.overview}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Production period</p>
            <p className="font-medium">{caseData.productionPeriod}</p>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="mt-10">
          <p className="text-gray-400 mb-2">Implementation details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseData.implementationDetails.map((detail, index) => (
              <div key={index}>
                <p className="text-gray-400 mb-2">{detail.title}</p>
                <ul className="list-disc list-inside space-y-1">
                  {detail.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* First full-width */}
        <div>
          {caseData.media[0].type === "image" ? (
            <Image
              src={caseData.media[0].src}
              alt="Case Detail"
              className="w-full h-auto mt-10"
              width={700}
              height={500}
            />
          ) : (
            <video
              controls
              className="w-full h-auto mt-10 rounded-lg"
            >
              <source src={caseData.media[0].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Grid 2 columns */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          {[caseData.media[1], caseData.media[2]].map((item, index) => (
            <div
              key={index}
              className={index === 1 ? "mt-20" : ""} 
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`Case Detail ${index}`}
                  className="w-full h-auto mt-10"
                  width={700}
                  height={500}
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto mt-10 rounded-lg"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>


        {/* Last single */}
        <div>
          {caseData.media[3].type === "image" ? (
            <Image
              src={caseData.media[3].src}
              alt="Case Detail"
              className="w-[700px] h-auto mt-10"
              width={700}
              height={500}
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[700px] h-auto mt-20 rounded-lg"
            >
              <source src={caseData.media[3].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </main>
  );
}
