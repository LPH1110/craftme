"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.75);
  return (
    <section
      ref={ref}
      id="home"
      className="px-8 pb-8 mt-[4.5rem] w-full scroll-mt-28 bg-blue flex items-center justify-center"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:hidden intro-bg-1"></div>
          <div className="text-white h-full flex flex-col items-start justify-center gap-6 col-span-2">
            <div className="text-center md:text-left space-y-4 text-5xl lg:text-7xl font-bold w-full">
              <h1>The Digital</h1>
              <h1>Service You</h1>
              <h1>Really Want</h1>
            </div>
            <div className="text-desc text-center md:text-left w-full">
              <p>We build effective strategies to help you reach </p>
              <p>customers and prospects across the entire web.</p>
            </div>
            <button
              className="w-full md:max-w-[12rem] group bg-sea text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-mountain active:bg-mountain focus:bg-moutain"
              type="button"
            >
              Estimate Project
            </button>
          </div>
          <div className="hidden md:block intro-bg intro-bg-1 col-span-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
