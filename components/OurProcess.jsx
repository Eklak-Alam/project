"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaPencilAlt, FaGlobe, FaChartLine } from "react-icons/fa";

const steps = [
  {
    title: "Discovery",
    description: "We analyze your business needs, target audience, and market position to create a tailored strategy.",
    icon: <FaUsers className="text-amber-500" />,
  },
  {
    title: "Development",
    description: "Our team builds customized solutions with cutting-edge technology for maximum impact.",
    icon: <FaPencilAlt className="text-amber-500" />,
  },
  {
    title: "Design",
    description: "Crafting visually stunning interfaces that engage users and reflect your brand identity.",
    icon: <FaGlobe className="text-amber-500" />,
  },
  {
    title: "Launch",
    description: "Seamless deployment with continuous monitoring and optimization for peak performance.",
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
      className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-red-900/10 via-black to-black flex items-center"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at top left, rgba(185, 28, 28, 0.15) 0%, transparent 50%),
          linear-gradient(to bottom left, rgba(127, 29, 29, 0.1) 0%, rgba(0, 0, 0, 1) 70%)
        `
      }}
    >
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
            className="text-xs md:text-sm font-medium bg-gray-900 px-4 py-2 rounded-full text-amber-500 tracking-widest inline-block mb-4"
            variants={itemVariants}
          >
            OUR PROCESS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            variants={itemVariants}
          >
            Where <span className="text-amber-500">Strategy</span> Meets <span className="text-amber-500">Innovation</span>
          </motion.h2>
          <motion.p
            className="mt-3 text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Proven methodology for digital transformation
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
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="text-2xl"
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