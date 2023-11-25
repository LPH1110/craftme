"use client";

import { fadeInLeft, scaleUp } from "@/lib/animate";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import intro2 from "@/public/images/intro2.png";

const introBgStyle = {
  backgroundImage: `url(${intro2.src})`,
};

const AboutIntro = () => {
  return (
    <motion.div
      variants={fadeInLeft}
      viewport={{ once: true }}
      initial="initial"
      whileInView="animate"
    >
      <div className="flex flex-col md:items-center lg:items-start justify-between gap-6 max-w-[36rem]">
        <div className="flex items-center gap-4">
          <span className="h-0.5 w-20 bg-sea rounded-lg"></span>
          <span className="text-sea text-lg font-semibold">Who we are</span>
        </div>
        <h1 className="leading-tight font-bold text-5xl text-blue md:text-center lg:text-left">
          Providing creative and technology services for growing brands.
        </h1>
        <div className="h-0.5 w-full bg-light-gray rounded-lg"></div>
        <p className="text-semi-gray md:text-center lg:text-left">
          Our company specializes in research, brand identity design, UI/UX
          design, development, and graphic design. To help our clients improve
          their businesses, we work with them all over the world.
        </p>
        <button
          type="button"
          className="w-full md:max-w-[12rem] group bg-blue text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-blue/90 shadow-md hover:shadow-lg"
        >
          Learn more
        </button>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { ref } = useSectionInView("About us");

  return (
    <section ref={ref} id="about" className="px-8 my-28 w-full scroll-mt-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
          {/* Desktop */}
          <div className="flex items-center justify-center">
            <AboutIntro />
          </div>
          <motion.div
            variants={scaleUp}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
          >
            <div style={introBgStyle} className="intro-bg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
