"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaPencilAlt, FaGlobe, FaChartLine } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const steps = [
  {
    title: "Onboarding Call",
    description:
      "We dive deep into your business to understand your goals, audience, and challenges to craft a custom game plan.",
    icon: <FaUsers size={50} className="text-red-600" />,
  },
  {
    title: "Strategy and Setup",
    description:
      "Within two weeks, we develop your campaign, optimize messaging, and ensure engagement-driven success.",
    icon: <FaPencilAlt size={50} className="text-red-600" />,
  },
  {
    title: "Campaign Goes Live",
    description:
      "After launch, expect results within days. Leads flow into your pipeline, and we refine continuously.",
    icon: <FaGlobe size={50} className="text-red-600" />,
  },
  {
    title: "Improve and Scale",
    description:
      "Beyond launch, we analyze data, test strategies, and optimize campaigns for maximum ROI.",
    icon: <FaChartLine size={50} className="text-red-600" />,
  },
];

export default function OurProcess() {
  return (
    <section id="Our Process" className="w-full text-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-black via-gray-900 to-gray-950 text-white px-6 py-3 inline-block rounded-xl shadow-xl tracking-wide">
          Our Process
        </h2>
        <p className="text-white mt-3 text-xl lg:text-6xl font-semibold">
          Streamline Your Success in 4 Steps
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gradient-to-r from-black via-gray-900 to-gray-950 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-gray-900 dark:border-gray-700 border w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {step.icon}
              </motion.div>
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                {step.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm max-w-sm mt-2">
                {step.description}
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem translateZ={20} as={Link} href="" className="px-4 py-2 rounded-xl text-xs font-normal text-red-600 hover:text-red-500">
                  Learn More →
                </CardItem>
                <CardItem translateZ={20} as="button" className="cursor-pointer px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 via-red-900 to-red-950 text-white text-xs font-bold">
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