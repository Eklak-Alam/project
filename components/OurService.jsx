"use client";

import React from "react";
import { motion } from "framer-motion";

export const OurServices = () => {
  return (
    <div
      className="relative w-full flex flex-col items-center py-20 px-6 text-white"
      style={{
        backgroundImage: "url('/your-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold text-white mb-12"
        >
          Our Services
        </motion.h2>

        {/* Services Container */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Online Advertising */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-xl border border-gray-700 hover:scale-105 transition-transform relative overflow-hidden"
          >
            <h3 className="text-3xl font-semibold mb-4 text-red-400">Online Advertising</h3>
            <p className="text-gray-300 text-lg">
              Boost your brand’s presence with targeted ads that drive engagement and conversions.
            </p>
          </motion.div>

          {/* AI & Automation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-xl border border-gray-700 hover:scale-105 transition-transform relative overflow-hidden"
          >
            <h3 className="text-3xl font-semibold mb-4 text-blue-400">AI & Automation</h3>
            <p className="text-gray-300 text-lg">
              Optimize your workflow with AI-driven solutions, enhancing efficiency and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
