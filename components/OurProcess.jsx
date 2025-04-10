"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaPencilAlt, FaGlobe, FaChartLine } from "react-icons/fa";

const steps = [
  {
    title: "Onboarding Call",
    description: "We dive deep into your business to understand what drives you and what's holding you back. We'll discuss your goals, your audience, and your pain points to craft a custom game plan.",
    icon: <FaUsers className="text-[#c8102e]" />,
  },
  {
    title: "Strategy and Setup",
    description: "Within 7 days, we'll develop a personalized system, according to your goals, create the ultimate framework, and optimize every detail to ensure a high level of success.",
    icon: <FaPencilAlt className="text-[#c8102e]" />,
  },
  {
    title: "System Goes Live",
    description: "Once we launch our system, you'll start seeing results within days. Qualified leads will begin flowing into your pipeline, and we'll continuously refine the system to keep the momentum going.",
    icon: <FaGlobe className="text-[#c8102e]" />,
  },
  {
    title: "Improve and Scale",
    description: "We don't just build a generic system for you. Our team analyzes the data, tests new approaches, and keeps tweaking until we squeeze every bit of ROI out of your campaign.",
    icon: <FaChartLine className="text-[#c8102e]" />,
  },
];

// Enhanced animation variants with 3D effects
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -45 },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

export default function OurProcess() {
  return (
    <section 
      id="process" 
      className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(200, 16, 46, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(200, 16, 46, 0.08) 0%, transparent 50%),
          linear-gradient(to bottom, rgba(10, 10, 10, 0.98), rgba(5, 5, 5, 1))
        `
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#c8102e]/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c8102e]/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#c8102e]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header - Enhanced 3D Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Section Label with 3D Hover Effect */}
          <motion.div 
            className="inline-block mb-4 relative group"
            variants={itemVariants}
          >
            <div className="relative z-10 perspective-1000">
              <div className="transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-x-5">
                <motion.span
                  className="text-xs md:text-sm font-medium tracking-widest inline-block relative"
                >
                  <span className="py-2 px-4 relative z-10 bg-gradient-to-r from-[#c8102e] to-[#ff2d62] text-transparent bg-clip-text">
                    SERVICES
                    {/* Decorative glows */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/10 to-[#ff2d62]/10 blur-xl rounded-full" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/5 to-white/50 rounded-full" />
                  </span>
                  {/* Extra glows for depth */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/10 to-[#ff2d62]/10 blur-xl rounded-full" />
                  <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/5 to-[#ff2d62]/5 rounded-full" />
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
            variants={itemVariants}
          >
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d0d25] to-[#c31736]">Strategy</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b40623] to-[#e83a5a]">Innovation</span>
          </motion.h2>

          {/* Subtitle Text */}
          <motion.p
            className="mt-3 text-gray-400 mx-auto max-w-2xl"
            variants={itemVariants}
            style={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              lineHeight: "clamp(1.2, 3.5vw, 1.6)"
            }}
          >
            Proven methodology for Scale & Growth
          </motion.p>
        </motion.div>


        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 0,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(200, 16, 46, 0.15)"
              }}
              className="group relative rounded-xl px-8 py-4 border border-gray-800 hover:border-[#c8102e]/40 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm h-full"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Icon with enhanced glow */}
              <motion.div
                className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-[#c8102e]/10 group-hover:to-[#c8102e]/20 transition-all duration-500 shadow-lg shadow-black/50"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(200, 16, 46, 0.4)"
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.3,
                    rotate: 5
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400
                  }}
                  className="text-2xl text-[#c8102e] group-hover:text-[#ff2d62] transition-colors duration-300"
                >
                  {step.icon}
                </motion.div>
              </motion.div>
   
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#c8102e] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-md md:text-lg text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {/* Enhanced hover indicator */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#c8102e] to-[#ff2d62] group-hover:w-full transition-all duration-700 rounded-full" />
              
              {/* 3D effect elements */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(200, 16, 46, 0.08), transparent 70%)",
                  transform: "translateZ(-10px)"
                }}
              />
              <div className="absolute inset-0 rounded-xl border border-[#c8102e]/0 group-hover:border-[#c8102e]/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}