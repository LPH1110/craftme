"use client";

import { fadeInLeft, fadeInTopVariants } from "@/lib/animate";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.2);
  return (
    <section ref={ref} id="contact" className="px-8 py-28 bg-blue w-full">
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
            className="font-bold text-5xl text-white text-left md:text-center leading-snug"
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
  );
};

export default Contact;
