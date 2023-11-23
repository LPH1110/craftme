import { Variants } from "framer-motion";

export const fadeInRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

export const fadeInLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

export const fadeInTop: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

export const fadeInTopVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },

  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 * index,
    },
  }),
};

export const fadeInLeftVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 * index,
    },
  }),
};

export const scaleUp: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};
