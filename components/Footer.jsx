"use client";

import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full text-white py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Upper Row - Logo & Social Icons */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="text-2xl font-bold text-white">
              B2B <span className="text-red-500">WIZARDS</span>
            </span>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="flex gap-6 text-white"
          >
            <a href="#" className="hover:text-gray-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <FaFacebook size={24} />
            </a>
          </motion.div>
        </div>

        {/* Lower Row - Copyright & Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center text-gray-400 text-sm flex-wrap gap-4"
        >
          <p>© 2025 B2B Wizards. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="/" className="hover:text-white transition-colors">FAQs</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
