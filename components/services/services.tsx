"use client";

import { fadeInRight, fadeInTopVariants } from "@/lib/animate";
import { servicesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Fragment } from "react";
import ServiceCard from "./serviceCard";

const ServiceIntro = () => {
  return (
    <motion.div
      variants={fadeInRight}
      viewport={{ once: true }}
      initial="initial"
      whileInView="animate"
    >
      <div className="flex flex-col md:items-center lg:items-start justify-between gap-6 max-w-[36rem]">
        <div className="flex items-center gap-4">
          <span className="h-0.5 w-20 bg-sea rounded-lg"></span>
          <span className="text-sea text-lg font-semibold">Services</span>
        </div>
        <h1 className="leading-tight font-bold text-5xl text-blue md:text-center lg:text-left">
          We can help you solve your problem through our services.
        </h1>
        <div className="h-0.5 w-full bg-light-gray rounded-lg"></div>
        <p className="text-semi-gray md:text-center lg:text-left">
          We are a brand strategy & digital design agency building brands that
          matter in culture with more than ten years of experience.
        </p>
        <button
          type="button"
          className="w-full md:max-w-[12rem] group bg-mountain text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none transition hover:bg-mountain/80 shadow-md hover:shadow-lg"
        >
          Explore services
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { ref } = useSectionInView("Services");
  return (
    <section ref={ref} id="services" className="px-8 my-28 scroll-mt-28 w-full">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
          {/* Mobile */}
          <div className="flex lg:hidden items-center justify-center">
            <ServiceIntro />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              <Fragment key={service.id}>
                <motion.div
                  variants={fadeInTopVariants}
                  viewport={{ once: true }}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </motion.div>
              </Fragment>
            ))}
          </div>
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-center">
            <ServiceIntro />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
