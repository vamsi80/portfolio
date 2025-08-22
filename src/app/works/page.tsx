"use client";

import Headding from "@/components/works/heading";
import WorkItem from "@/components/works/WorkItem";
import { workItems } from "@/types/types";
import React from "react";

export default function WorksPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Headding />

      {workItems.map((item) => (
        <WorkItem
          key={item.id}
          id={item.id}
          leftImage={item.leftImage}
          rightImage={item.rightImage}
          title={item.title}
          client={item.client}
          detailLink={item.detailLink}
        />
      ))}
    </div>
  );
}
