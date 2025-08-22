import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseDetails } from "@/types/types";

interface Params {
  id: string;
}

export default async function CaseDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;

  const caseData = caseDetails.find((c) => c.id === id);

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

        {/* Images */}
        <div>
          <img
            src={caseData.images[0]}
            alt="Case Detail"
            className="w-full h-auto mt-10"
          />
        </div>

        <div className="grid grid-cols-2 gap-10 mt-20">
          <div>
            <img
              src={caseData.images[1]}
              alt="Case Detail"
              className="w-full h-auto mt-10"
            />
          </div>
          <div>
            <img
              src={caseData.images[2]}
              alt="Case Detail"
              className="w-full h-auto mt-10"
            />
          </div>
        </div>

        <div>
          <img
            src={caseData.images[3]}
            alt="Case Detail"
            className="w-[700px] h-auto mt-10"
          />
        </div>
      </div>
    </main>
  );
}
