"use client";

import React from "react";
import { motion } from "framer-motion";

export const SubFooter = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-t-[2.5rem] bg-gradient-to-bl from-[#c8102e] via-black to-black">
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
            className="absolute h-full w-full rounded-[42%] opacity-20 blur-2xl"
          />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Transform your business <span className="bg-gradient-to-r from-[#b40623] to-[#a90404e2] bg-clip-text text-transparent">Now!</span>
              <div className="relative inline-block">
                <span className="relative">
                  <span className="absolute left-0 top-1/2 h-0.5 w-full bg-gradient-to-r from-[#c8102e] to-[#ff2d62] transform -translate-y-1/2"></span>
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
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#000",
                  boxShadow: "0 0 20px rgba(255, 45, 98, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
                className="cursor-pointer group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c8102e] to-[#ff2d62] px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-opacity-90 border border-transparent hover:border-white hover:shadow-xl"
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

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-2 opacity-50">
        <svg width="100%" height="100%">
          <path 
            d="M0,10 Q250,0 500,10 T1000,10" 
            stroke="url(#footerGradient)" 
            strokeWidth="2" 
            fill="none"
          />
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c8102e" />
              <stop offset="50%" stopColor="#ff2d62" />
              <stop offset="100%" stopColor="#c8102e" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};