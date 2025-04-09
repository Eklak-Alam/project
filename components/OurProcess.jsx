"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaPencilAlt, FaGlobe, FaChartLine } from "react-icons/fa";

const steps = [
  {
    title: "Onboarding Call",
    description: "We dive deep into your business to understand what drives you and what’s holding you back. We’ll discuss your goals, your audience, and your pain points to craft a custom game plan.",
    icon: <FaUsers className="text-amber-500" />,
  },
  {
    title: "Strategy and Setup",
    description: "Within 7 days, we’ll develop a personalized system, according to your goals, create the ultimate framework, and optimize every detail to ensure a high level of success.",
    icon: <FaPencilAlt className="text-amber-500" />,
  },
  {
    title: "System Goes Live",
    description: "Once we launch our system, you’ll start seeing results within days. Qualified leads will begin flowing into your pipeline, and we’ll continuously refine the system to keep the momentum going.",
    icon: <FaGlobe className="text-amber-500" />,
  },
  {
    title: "Improve and Scale",
    description: "We don’t just build a generic system for you. Our team analyzes the data, tests new approaches, and keeps tweaking until we squeeze every bit of ROI out of your campaign.",
    icon: <FaChartLine className="text-amber-500" />,
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
          radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 1))
        `
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span 
            className="text-xs md:text-sm font-medium tracking-widest inline-block mb-4 relative"
            variants={itemVariants}
          >
            <span className="py-2 px-4 relative z-10 bg-gradient-to-r from-amber-500 to-red-500 text-transparent bg-clip-text">
              OUR PROCESS
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 blur-xl rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-white/50 rounded-full" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 blur-xl rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-red-500/5 rounded-full" />
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            variants={itemVariants}
          >
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Strategy</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Innovation</span>
          </motion.h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(245, 158, 11, 0.1), 0 10px 10px -5px rgba(245, 158, 11, 0.04)"
              }}
              className="group relative rounded-xl p-6 border border-gray-800/80 hover:border-amber-500/30 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm h-full"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Icon with enhanced glow */}
              <motion.div
                className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-amber-500/20 group-hover:to-amber-600/20 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)"
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 5 // subtle tilt on hover
                  }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="text-2xl text-amber-500/80 group-hover:text-amber-400 transition-colors duration-200"
                >
                  {step.icon}
                </motion.div>
              </motion.div>
   
              {/* Content */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Enhanced hover indicator */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-500 to-transparent group-hover:w-full transition-all duration-500"></div>
              
              {/* 3D effect elements */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.1), transparent 70%)",
                  transform: "translateZ(-1px)"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}