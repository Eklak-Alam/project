"use client";

import React from "react";
import { motion } from "framer-motion";

export const SubFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center py-12 px-6"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="max-w-3xl w-full bg-black text-white rounded-xl px-8 py-10 text-center shadow-lg border border-gray-800 bg-gradient-to-r from-gray-900 via-black to-gray-900"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-200">
          Get your first client <br /> this week
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-gray-400 text-sm md:text-lg">
          2 weeks to get started. 7 days to get your first client on average.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgb(255, 0, 0)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 relative overflow-hidden"
        >
          Schedule a call
          <span className="absolute inset-0 bg-red-700 opacity-20 blur-lg"></span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};