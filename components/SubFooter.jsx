"use client";

import React from "react";
import { motion } from "framer-motion";

export const SubFooter = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-t-[2.5rem] bg-gradient-to-bl from-red-900 via-black to-black">
      {/* Wave Animation */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ 
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -right-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2"
        >
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute h-full w-full rounded-[42%] blur-2xl"
          />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Text Content with Strike-through Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Transform your business <span className="text-red-600">Today</span>
              <div className="relative inline-block">
                <span className="relative">
                  <span className="absolute left-0 top-1/2 h-0.5 w-full transform -translate-y-1/2"></span>
                </span>
              </div>
            </h2>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-opacity-90 border border-white hover:shadow-xl"
              >
                Let's Discuss a project
                <svg
                  className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .font-handwriting {
          font-family: 'Comic Sans MS', cursive;
        }
      `}</style>
    </div>
  );
};
