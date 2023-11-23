"use client";

import React, { Fragment, useRef, useState } from "react";
import ProjectCard from "../projectCard/projectCard";
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import clsx from "clsx";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [swiperStatus, setSwiperStatus] = useState({
    begin: true,
    end: false,
  });

  const handleSlideNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleSlidePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="bg-mountain scroll-mt-14 w-full"
    >
      <div className="container h-full py-14">
        <div className="flex flex-col gap-12 h-full justify-center px-6">
          <div className="lg:flex lg:justify-between md:text-center lg:text-left items-center space-y-6">
            {/* Left */}
            <div className="space-y-4 md:flex md:items-center md:flex-col lg:block">
              <div className="flex items-center gap-4">
                <span className="h-0.5 w-20 bg-sea rounded-lg"></span>
                <span className="text-sea text-lg font-semibold">
                  Our works
                </span>
              </div>
              <h1 className="font-bold text-3xl text-white md:text-center lg:text-left">
                Our latest project.
              </h1>
              <div className="h-0.5 w-96 bg-light-gray/20 rounded-lg"></div>
            </div>
            {/* Right */}
            <div className="space-y-6">
              <div>
                <p className="text-desc">
                  We build product close to our heart. We make your idea to
                  reality
                </p>
                <p className="text-desc">
                  and make your dream successful with awesome experience.
                </p>
              </div>
              <div className="flex justify-end md:justify-center lg:justify-end items-center gap-4">
                <button
                  type="button"
                  onClick={handleSlidePrev}
                  className={clsx(
                    "p-2 rounded-full border text-white transition",
                    {
                      "opacity-50": swiperStatus.begin,
                    }
                  )}
                >
                  <HiMiniArrowLongLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleSlideNext}
                  className={clsx(
                    "p-2 rounded-full border text-white transition",
                    {
                      "opacity-50": swiperStatus.end,
                    }
                  )}
                >
                  <HiMiniArrowLongRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
              }}
              speed={2000}
              onSlideChange={(swiper) =>
                setSwiperStatus({
                  begin: swiper.isBeginning,
                  end: swiper.isEnd,
                })
              }
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                1500: {
                  slidesPerView: 3,
                },
              }}
            >
              {projectsData.map((project) => (
                <Fragment key={project.id}>
                  <SwiperSlide>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                </Fragment>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
