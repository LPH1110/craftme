"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import { fadeInLeftVariants, scaleUp } from "@/lib/animate";
import intro1 from "../../public/images/intro1.png";

const introBgStyle = {
  backgroundImage: `url(${intro1.src})`,
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
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="py-8 mx-auto lg:mx-0 max-w-lg text-white h-full flex flex-col items-start md:items-center lg:items-start justify-center gap-6 col-span-2">
            <motion.div
              custom={0}
              variants={fadeInLeftVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-left md:text-center lg:text-left space-y-4 text-5xl lg:text-7xl font-bold w-full"
            >
              <h1 className="capitalize leading-tight">
                Turning Your Business Goals into a Digital Reality
              </h1>
            </motion.div>
            <motion.div
              custom={1}
              variants={fadeInLeftVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-desc text-left md:text-center lg:text-left w-full"
            >
              <p>
                We build effective strategies to help you reach customers and
                prospects across the entire web.
              </p>
            </motion.div>
            <motion.button
              custom={2}
              variants={fadeInLeftVariants}
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
            variants={scaleUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={introBgStyle}
            className="block intro-bg lg:col-span-3"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
