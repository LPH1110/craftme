import {
  BrandingIcon,
  DesignIcon,
  DevelopmentIcon,
  ResearchIcon,
} from "@/icons";
import React from "react";
import { v4 as uuidv4 } from "uuid";

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
      "Brand identify represents the visual elements and assets that distinguish a brand.",
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
    name: "About us",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1700550049/crafme/thumb1_wm9nkp.png",
    projectName: "Fitplan - Planner Dashboard",
    service: "Development",
    publishedDate: "November 11, 2023",
    demoURL: "",
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1700550057/crafme/thumb2_aazefx.png",
    projectName: "Catalyst - SASS",
    service: "UI/UX Design",
    publishedDate: "November 11, 2023",
    demoURL: "",
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1700550060/crafme/thumb3_qrhzko.jpg",
    projectName: "Wave - Mobile Banking",
    service: "UI/UX Design",
    publishedDate: "November 11, 2023",
    demoURL: "",
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1700550360/crafme/thumb4_rregns.png",
    projectName: "Swiftcargo - Logistic",
    service: "Development",
    publishedDate: "November 11, 2023",
    demoURL: "",
  },
  {
    id: uuidv4(),
    thumbnail:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1700550550/crafme/thumb5_lak6ng.jpg",
    projectName: "UrbanSpace - Creative Agency",
    service: "Research",
    publishedDate: "November 11, 2023",
    demoURL: "",
  },
];

export const feedBacksData = [
  {
    id: uuidv4(),
    avatarURL:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1670092118/taskbox-assets/avatar2_fssdbw.jpg",
    content:
      "I had a fantastic experience working with Craft.me Agency. They were also extremely responsive, promptly addressing any question or concerns I had. The final product they delivered was outstanding.",
    customerName: "Marcus Dorwart",
    customerTitle: "Co-Founder of Mona",
  },
  {
    id: uuidv4(),
    avatarURL:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1670050964/taskbox-assets/avatar1_ilyzbz.jpg",
    content:
      "I can't say enough good things about Craft.me Digital Agency. Their team understood my vision and translated it into stunning digital presence for my brand. I am beyond thrilled with the results and would recommend.",
    customerName: "Kadin Dorwart",
    customerTitle: "Founder of Thesign",
  },
  {
    id: uuidv4(),
    avatarURL:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1670092118/taskbox-assets/avatar3_clufwp.jpg",
    content:
      "Working with Craft.me Agency has been an absolute pleasure. We loved wholeheartedly endorse Craft.me for their professionalism, expertise and outstanding customer service.",
    customerName: "Anika Westervelt",
    customerTitle: "CEO & Founder of Maven",
  },
  {
    id: uuidv4(),
    avatarURL:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1670050964/taskbox-assets/avatar1_ilyzbz.jpg",
    content:
      "I can't say enough good things about Craft.me Digital Agency. Their team understood my vision and translated it into stunning digital presence for my brand. I am beyond thrilled with the results and would recommend.",
    customerName: "Kadin Dorwart",
    customerTitle: "Founder of Thesign",
  },
  {
    id: uuidv4(),
    avatarURL:
      "https://res.cloudinary.com/dzzv49yec/image/upload/v1670092118/taskbox-assets/avatar3_clufwp.jpg",
    content:
      "Working with Craft.me Agency has been an absolute pleasure. We loved wholeheartedly endorse Craft.me for their professionalism, expertise and outstanding customer service.",
    customerName: "Anika Westervelt",
    customerTitle: "CEO & Founder of Maven",
  },
];
