"use client";

import React from "react";
import { motion } from "framer-motion";

export const SubFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex py-12 px-6"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="max-w-4xl w-full text-white rounded-xl px-8 py-10 text-left shadow-lg"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          Transform your <br />
          <span className="text-red-500"> BlixMedia</span> today!
        </h2>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 border-white border-2 bg-black hover:bg-white hover:text-black hover:border-black hover:border-2 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
        >
          Let's Discuss a Project
        </motion.button>
      </motion.div>
    </motion.div>
  );
};