"use client";

import { fadeInLeft, fadeInTopVariants } from "@/lib/animate";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="px-8 py-4 bg-blue w-full flex flex-col justify-end h-[38rem] md:h-[26rem]"
    >
      <section className="px-8 py-16 w-full">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center max-w-[36rem] w-full gap-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="flex items-center gap-4"
            >
              <span className="h-0.5 w-20 bg-sea rounded-lg"></span>
              <span className="text-sea text-lg font-semibold">Contact us</span>
            </motion.div>
            <motion.h1
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInTopVariants}
              custom={0}
              className="font-bold text-4xl lg:text-5xl text-white text-left md:text-center leading-snug"
            >
              Have a question or an idea? Please let us know.
            </motion.h1>
            <motion.a
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInTopVariants}
              custom={1}
              href="mailto:eddie1124.work@gmail.com"
              className="w-full bg-mountain rounded-full text-white py-3 flex flex-col sm:flex-row items-center gap-2 md:gap-4 justify-center hover:-translate-y-1 transition hover:shadow-lg hover:shadow-sea/30"
            >
              <FaEnvelope className="w-6 h-6" />
              eddie1124.work@gmail.com
            </motion.a>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-h-full">
            <div className="w-7">
              <Logo />
            </div>
            <h2 className="font-bold text-2xl text-white">Craft.me</h2>
          </div>
          <div>
            <p className="text-desc">+84 935 5727 55 | Eddie</p>
          </div>
          <div>
            <p className="text-desc">Craft.me © All right reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
