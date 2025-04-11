"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "We may collect:",
        "• Name, email address, phone number, business details",
        "• Website behavior (via cookies and analytics tools)",
        "• Information submitted through forms or bookings",
        "• Communication history between you and our team"
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use collected data to:",
        "• Deliver our services and campaigns",
        "• Communicate with you effectively",
        "• Improve our website and offerings",
        "• Analyze user behavior and optimize performance",
        "• Process payments and service-related actions"
      ]
    },
    {
      title: "3. Sharing Information",
      content: [
        "We do not sell your data. We may share it with:",
        "• Trusted third-party services (e.g., Stripe, Meta, Google Ads)",
        "• Our team and partners working on your project",
        "• Legal authorities when required"
      ]
    },
    {
      title: "4. Cookies & Tracking",
      content: [
        "We use cookies for:",
        "• Website analytics",
        "• Retargeting",
        "• Performance improvement",
        "You can control cookie settings in your browser."
      ]
    },
    {
      title: "5. Data Security",
      content: [
        "We implement reasonable safeguards including:",
        "• SSL encryption",
        "• Secure servers",
        "• Limited access controls",
        "We do not store payment details like credit card numbers on our servers."
      ]
    },
    {
      title: "6. Your Rights",
      content: [
        "You can:",
        "• Request a copy of your stored data",
        "• Ask us to delete your information",
        "• Unsubscribe from our communications at any time"
      ]
    },
    {
      title: "7. Children's Privacy",
      content: [
        "Our services are not directed at individuals under 13.",
        "We do not knowingly collect personal information from minors."
      ]
    },
    {
      title: "8. Changes to This Policy",
      content: [
        "We may update this Privacy Policy.",
        "Changes will be posted here, and your continued use means you agree to the updated policy."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/20 via-black/80 to-black z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          {/* Top Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-6 left-4 sm:left-8"
          >
            <Link href="/">
              <motion.button
                whileHover={{ 
                  x: -8,
                  backgroundColor: "rgba(200, 16, 46, 0.4)",
                  boxShadow: "0 0 15px rgba(255, 45, 98, 0.4)"
                }}
                whileTap={{ scale: 0.92 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-[#c8102e]/60 text-white transition-all duration-300 backdrop-blur-sm"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{ x: [0, -3, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 1.5,
                    repeatDelay: 1
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
                <span className="hidden sm:inline font-medium">Back to Home</span>
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Effective Date: April 10, 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              At Blix Media, we care about your privacy. This policy outlines how we collect, use, and protect your data when you use our services or visit our website.
            </motion.p>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group"
            >
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {section.title}
              </motion.h2>
              <motion.div 
                className="text-gray-300 ml-4 border-l-2 border-[#c8102e]/50 pl-4 py-2 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {section.content.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-6 rounded-xl bg-gradient-to-br from-[#c8102e]/20 to-black/50 border border-[#c8102e]/30"
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="text-gray-300 space-y-2">
              <p>Have questions about our privacy practices?</p>
              <motion.a
                href="mailto:hello@blixmedia.io"
                className="inline-flex items-center text-[#ff2d62] hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                📩 hello@blixmedia.io
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="https://blixmedia.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#ff2d62] hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                🌐 blixmedia.io
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;