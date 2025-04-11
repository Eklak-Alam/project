"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TermsOfService = () => {
  const terms = [
    {
      title: "1. About Us",
      content:
        "Blix Media (\"we,\" \"our,\" \"us\") is a digital marketing and automation agency offering services including but not limited to AI automation, paid advertising, CRM systems, lead generation, and client acquisition campaigns across various industries.",
    },
    {
      title: "2. Services",
      content:
        "We provide tailored services based on each client's goals and agreed-upon deliverables. Results may vary depending on market conditions, budget, platform policies, and client collaboration. No specific results are guaranteed unless clearly stated in a written contract.",
    },
    {
      title: "3. Payments",
      content:
        "All services require upfront payment unless otherwise agreed upon in writing. Ad spend is paid directly by the client unless stated otherwise. Late or failed payments may result in paused or terminated services. We do not offer refunds for time or services already rendered.",
    },
    {
      title: "4. Client Obligations",
      content:
        "Clients are responsible for: Providing timely access to necessary platforms (e.g., Meta Ads Manager, Google Ads, CRM). Responding to communications promptly. Ensuring any information shared is accurate and legally compliant. Respecting intellectual property rights.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "All custom campaigns, assets, and systems developed by Blix Media remain the property of Blix Media unless agreed upon in writing. Clients may not reproduce, resell, or share our systems or processes without permission.",
    },
    {
      title: "6. Confidentiality",
      content:
        "Both parties agree to maintain confidentiality over sensitive business information and not disclose it to third parties.",
    },
    {
      title: "7. Termination",
      content:
        "We reserve the right to terminate services if: The client violates any part of these terms. There is abuse, fraud, or misrepresentation. Communication becomes unreasonably difficult or unprofessional.",
    },
    {
      title: "8. Limitation of Liability",
      content:
        "Blix Media is not liable for: Platform bans, delays, or errors caused by 3rd parties. Client losses, including lost profits, reputation damage, or indirect damages. Ad spend outcomes, market changes, or audience behavior.",
    },
    {
      title: "9. Governing Law",
      content:
        "These terms are governed by the laws of India and/or the United States, depending on the client's location and agreement terms.",
    },
    {
      title: "10. Changes to Terms",
      content:
        "We may update these Terms of Service at any time. Continued use of our site or services means acceptance of the updated terms.",
    },
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
    <div id="terms" className="min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white">
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
              Terms of Service
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Effective Date: April 10, 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Terms Content */}
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
              Welcome to Blix Media. By accessing our website or working with us, you agree to the following Terms of Service. If you do not agree, please do not use our site or services.
            </motion.p>
          </motion.div>

          {terms.map((term, index) => (
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
                {term.title}
              </motion.h2>
              <motion.p 
                className="text-gray-300 ml-4 border-l-2 border-[#c8102e]/50 pl-4 py-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {term.content}
              </motion.p>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-6 rounded-xl bg-gradient-to-br from-[#c8102e]/20 to-black/50 border border-[#c8102e]/30"
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-4">
              If you have questions, reach out to:
            </p>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;