"use client";

import AboutHeadding from "@/components/about/Aboutheading";
import Aboutpage from "@/components/about/Aboutpage";
import React from "react";

export default function WorksPage() {
  return (
    <div className="flex flex-col"
      data-theme="light"
    >
      <AboutHeadding />
      <Aboutpage />
    </div>
  );
}
