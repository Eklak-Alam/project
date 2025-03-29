"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaPencilAlt, FaGlobe, FaChartLine } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const steps = [
  {
    title: "Onboarding Call",
    description:
      "We dive deep into your business to understand what drives you and what’s holding you back. We’ll discuss your goals, your audience, and your pain points to craft a custom game plan.",
    icon: <FaUsers size={50} className="text-red-500" />, 
    image: "/onboardingcall.jpg",
  },
  {
    title: "Strategy and Setup",
    description:
      "Within 12-14 days, we’ll develop your campaign, create the messaging framework, and optimize every detail to ensure a high level of engagement.",
    icon: <FaPencilAlt size={50} className="text-red-500" />, 
    image: "/setupimg.jpg",
  },
  {
    title: "Campaign Goes Live",
    description:
      "Once we launch, you’ll start seeing results within days. Qualified leads will begin flowing into your pipeline, and we’ll continuously refine the campaign to keep the momentum going.",
    icon: <FaGlobe size={50} className="text-red-500" />, 
    image: "/golive.jpg",
  },
  {
    title: "Improve and Scale",
    description:
      "We don’t just stop at sending emails. Our team analyzes the data, tests new approaches, and keeps tweaking until we squeeze every bit of ROI out of your campaign.",
    icon: <FaChartLine size={50} className="text-red-500" />, 
    image: "/scale.jpg",
  },
];

export default function OurProcess() {
  return (
    <section id="Our Process" className="w-full bg-black text-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white px-4 py-2 inline-block rounded-2xl shadow-lg tracking-wide">Our Process</h2>

        <p className="text-white mt-3 text-xl lg:text-6xl">
          Our simple 4-step process <br /> to skyrocket your business.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {step.icon}
              </motion.div>
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {step.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {step.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={step.image}
                  height={1000}
                  width={1000}
                  className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={step.title}
                  priority
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem translateZ={20} as={Link} href="" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  Learn More →
                </CardItem>
                <CardItem translateZ={20} as="button" className="cursor-pointer px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  Get Started
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
