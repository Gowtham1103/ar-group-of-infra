import {
  FaTools,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import {
  user1,
  user2,
  user3,
  
} from "./assets";

export const navigations = [
  {
    label: "Home",
    to: "header",
  },
  {
    label: "Services",
    to: "services",
  },
  {
    label: "About Us",
    to: "about",
  },
  {
    label: "Reviews",
    to: "testimonials",
  },
  {
    label: "Contact Us",
    to: "contact",
  },
];

export const keypoints = [
  {
    title: "Expert Craftsmanship",
    description:"Every detail matters. We ensure high-quality workmanship in every phase of construction."
  },
  {
    title: "On-Time, Within Budget",
    description:"Efficiency is key. We deliver your projects on schedule, without unexpected costs."
  },
  {
    title: "Innovative Solutions",
    description:"We use the latest technologies and sustainable materials to build for the future."
  },
  {
    title: "Client-Centered Approach",
    description:"We listen to your needs and tailor our services to exceed your expectations."
  },
];

export const whyChooseUs = [
  {
    title: "Unmatched Quality",
    icon: <FaCheckCircle />,
    description: "Craftsmanship guaranteed",
  },
  {
    title: "Timely Delivery",
    icon: <FaClock />,
    description: "Projects completed on schedule",
  },
  {
    title: "Innovative Designs",
    icon: <FaDraftingCompass />,
    description: "Creative and modern solutions",
  },
  {
    title: "Focused Service",
    icon: <FaUserFriends />,
    description: "Prioritizing client satisfaction always",
  },
];

export const services = [
  {
    title: "Building Construction",
    icon: <FaHome />,
    description: `Building strong, beautiful spaces designed for comfort, quality, and lasting value.`,
  },

  {
    title: "Residential & Commercial Projects",
    icon: <FaBuilding />,
    description: `Creating modern spaces that match your needs, style, and vision.`,
  },

  {
    title: "Interior Design & Execution",
    icon: <FaTools />,
    description: `Creating stylish interiors that bring your vision to life.`,
  },

  {
    title: "Renovation & Remodeling",
    icon: <FaTools />,
    description: `Transforming existing spaces into modern, beautiful, and functional environments.`,
  },

  {
    title: "Turnkey Solutions",
    icon: <FaTools />,
    description: `From planning to completion, we handle every detail with care and precision.`,
  },

  {
    title: "Project Management",
    icon: <FaTools />,
    description: `Managing every stage to deliver quality projects on time and within budget.`,
  },
];

export const testimonials = [

  {
    name: "Karthik Raj",
    image: user1,
    review: `Really happy with the work done by the team. They were very professional, completed everything on time, and the final output was simply superb.`,
  },

  {
    name: "Arun Kumar",
    image: user2,
    review: `Overall a very good experience with Confix. The team understood our requirements properly, worked neatly, and delivered exactly as we expected.`,
  },

  {
    name: "Praveen Mohan",
    image: user3,
    review: `Superb work from the entire team! They were friendly, responsive, and handled the project smoothly. Really satisfied with the quality and service.`,
  },

];

export const footer = [
  {
    title: "Company",
    routes: [
      {
        name: "About Us",
        href: "#about",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Contact Us",
        href: "#contact",
      },
    ],
  },
  {
    title: "Services",
    routes: [
      {
        name: "Residential Construction",
        href: "#",
      },
      {
        name: "Commercial Projects",
        href: "#",
      },
      {
        name: "Renovation & Remodeling",
        href: "#",
      },
      {
        name: "Project Management",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    routes: [
      {
        name: "Case Studies",
        href: "#",
      },
      {
        name: "FAQs",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ar_groups.in?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];