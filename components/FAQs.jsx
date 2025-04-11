"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    {
      question: "What services does Blix Media offer?",
      answer: "We build and manage done-for-you outbound systems that drive leads and revenue. This includes: Paid Ads (Google, Meta, TikTok, YouTube) AI appointment-setting infrastructure CRM setup (GoHighLevel included) Lead tracking, nurturing, and automation Daily reporting & Slack support You just show up to the booked calls."
    },
    {
      question: "How long does it take to start getting results?",
      answer: "Most clients see qualified leads and booked appointments in the first 7–14 days after launch. Our full system setup takes 3–5 business days, depending on niche and ad approvals."
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes. We offer end-to-end ongoing support via Slack — this includes reporting, optimization, creative refreshes, and any adjustments you need. You're not left hanging."
    },
    {
      question: "What platforms/tools do you use?",
      answer: "We use a mix of tools like GoHighLevel, Instantly, Twilio, Zapier, Meta Ads Manager, Google Ads, and custom AI agents. But don't worry — you don't have to touch any of that. We build the full backend for you."
    },
    {
      question: "Can you work with businesses that already run ads?",
      answer: "Absolutely. If you're already advertising or booking calls, we can optimize and plug in our backend systems to increase efficiency, reduce cost per lead, and automate your follow-ups."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-bl from-black via-black to-[#c8102e]/10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c8102e] to-transparent transform -rotate-3" />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff2d62] to-transparent transform rotate-3" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="py-2 px-4 text-xs md:text-sm font-medium tracking-widest inline-block mb-4 relative"
          >
            <span className="relative z-10 py-2 px-4 bg-gradient-to-r from-[#c8102e] to-[#ff2d62] text-transparent bg-clip-text">
              FAQs
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/10 to-[#ff2d62]/10 blur-xl rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/5 to-white/50 rounded-full" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Frequently Asked <span className="bg-gradient-to-r from-[#b40623] to-[#a90404e2] bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services and process
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-[#c8102e]/30 to-black/70 border-l-4 border-[#ff2d62] shadow-lg' 
                    : 'bg-black/50 hover:bg-[#c8102e]/20 border border-[#ff2d62]/20 hover:border-[#ff2d62]/40'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ChevronDown className="text-[#ff2d62]" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      transition: {
                        height: {
                          duration: 0.5,
                          ease: [0.04, 0.62, 0.23, 0.98]
                        },
                        opacity: { 
                          duration: 0.25,
                          delay: 0.15 
                        }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98]
                        },
                        opacity: { 
                          duration: 0.25 
                        }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-black/50 text-gray-300 rounded-b-lg border border-[#ff2d62]/20 border-t-0"
                    >
                      <p className="text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Add subtle scribble effects similar to the stats component */}
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute -bottom-4 left-0 w-full h-2"
        >
          <svg className="w-full h-full" viewBox="0 0 1000 10">
            <motion.path
              d="M0,5 C200,15 300,-5 500,5 C700,15 800,-5 1000,5"
              stroke="url(#gradient-faq)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
            />
            <defs>
              <linearGradient id="gradient-faq" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff2d62" />
                <stop offset="100%" stopColor="#c8102e" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;