"use client";

import { feedBacksData } from "@/lib/data";
import { Fragment } from "react";
import FeedBackCard from "../feedBackCard";

// Import Swiper React components
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { fadeInLeft } from "@/lib/animate";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeedBacks = () => {
  return (
    <section className="min-h-screen flex items-center justify-center w-full px-8 py-28 bg-white shadow-2xl">
      <div className="container">
        <div className="space-y-12">
          <motion.div
            variants={fadeInLeft}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
            className="flex items-center md:justify-center lg:justify-start"
          >
            <h1 className="font-bold text-5xl text-blue md:text-center lg:text-left max-w-[32rem] leading-snug">
              Beloved by so many people worldwide.
            </h1>
          </motion.div>
          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={100}
              autoplay
              pagination={{
                clickable: true,
                bulletClass: "my-bullet",
                bulletActiveClass: "my-bullet-active",
              }}
              loop={true}
              speed={3000}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {feedBacksData.map((feedBack) => (
                <Fragment key={feedBack.id}>
                  <SwiperSlide>
                    <FeedBackCard feedBack={feedBack} />
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

export default FeedBacks;
