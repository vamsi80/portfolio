"use client";

import AboutHeadding from "@/components/aboutus/Aboutheading";
import Aboutpage from "@/components/aboutus/Aboutpage";
import React from "react";

export default function WorksPage() {
  return (
    <div className="flex flex-col items-center justify-center"
      data-theme="light"
    >
      <AboutHeadding />
      <Aboutpage />
    </div>
  );
}
