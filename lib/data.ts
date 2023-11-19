import { v4 as uuidv4 } from "uuid";
import {
  ResearchIcon,
  DesignIcon,
  BrandingIcon,
  DevelopmentIcon,
} from "@/icons";
import React from "react";

export const servicesData = [
  {
    id: uuidv4(),
    title: "Research",
    description:
      "We build effective strategies to help you reach customers and prospect across the entire.",
    icon: React.createElement(ResearchIcon),
  },
  {
    id: uuidv4(),
    title: "Branding",
    description:
      "Brand identify represents the visual elements and assets taht distinguish a brand.",
    icon: React.createElement(BrandingIcon),
  },
  {
    id: uuidv4(),
    title: "UI/UX Design",
    description:
      "UI/UX design services focus on creating intuitive & user-centric interfaces digital products.",
    icon: React.createElement(DesignIcon),
  },
  {
    id: uuidv4(),
    title: "Development",
    description:
      "A concept or idea is brought to life through this servivce's various stages, such as planning, testing, and development.",
    icon: React.createElement(DevelopmentIcon),
  },
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About us",
    hash: "#about",
  },
];
