"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

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
          <div className="md:hidden intro-bg intro-bg-1"></div>
          <div className="max-w-lg text-white h-full flex flex-col items-start justify-center gap-6 col-span-2">
            <motion.div
              custom={0}
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center md:text-left space-y-4 text-5xl lg:text-7xl font-bold w-full"
            >
              <h1 className="capitalize leading-tight">
                Turning Your Business Goals into a Digital Reality
              </h1>
            </motion.div>
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-desc text-center md:text-left w-full"
            >
              <p>
                We build effective strategies to help you reach customers and
                prospects across the entire web.
              </p>
            </motion.div>
            <motion.button
              custom={2}
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-full md:max-w-[12rem] group bg-sea text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-mountain active:bg-mountain focus:bg-moutain"
              type="button"
            >
              Estimate Project
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block intro-bg intro-bg-1 col-span-3"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
