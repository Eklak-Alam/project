"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqsData = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase, provided it is unused and in its original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary by location, but typically take between 5-7 business days.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! Our customer support team is available 24/7 to assist you with any inquiries.",
  },
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQs" className="w-full max-w-3xl mx-auto py-12 px-6 md:px-10 lg:px-14 text-white rounded-xl shadow-2xl border border-gray-800 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] opacity-30 blur-2xl" />

      {/* Heading */}
      <h2 className="text-2xl text-center mb-10 md:text-3xl font-extrabold bg-gradient-to-r from-black via-gray-900 to-gray-950 text-white px-4 py-2 inline-block rounded-2xl shadow-lg tracking-wide">Frequently Asked Questions</h2>

      {/* FAQ Items */}
      <div className="space-y-5 relative z-10">
        {faqsData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="border border-gray-700 rounded-lg bg-[#111] shadow-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-[#222] hover:bg-[#333] transition-all duration-300 text-gray-200 font-medium text-left focus:outline-none"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl text-gray-400"
              >
                ▼
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="px-6 py-4 text-gray-400 bg-[#181818]"
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};