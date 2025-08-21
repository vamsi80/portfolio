"use client";

import React, { FC } from "react";
import "./globals.css";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Skils from "@/components/skils";

const App: FC = () => {

  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Skils />
    </>
  );
};

export default App;
