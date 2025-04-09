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
      answer: "We use a mix of tools like GoHighLevel, Instantly, Twilio, Zapier, Meta Ads Manager, Google Ads, and custom AI agents. But don't worry — you don’t have to touch any of that. We build the full backend for you."
    },
    {
      question: "Can you work with businesses that already run ads?",
      answer: "Absolutely. If you’re already advertising or booking calls, we can optimize and plug in our backend systems to increase efficiency, reduce cost per lead, and automate your follow-ups."
      
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 1))
        `
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
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
            <span className="relative z-10 py-2 px-4 bg-gradient-to-r from-amber-500 to-red-500 text-transparent bg-clip-text">
              FAQs
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 blur-xl rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-white/50 rounded-full" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
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
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-red-900/30 to-black/70 border-l-4 border-amber-500 shadow-lg' 
                    : 'bg-black/50 hover:bg-red-900/20 border border-amber-500/20 hover:border-amber-500/40'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 text-amber-500 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-black/50 text-gray-300 rounded-b-lg border border-amber-500/20 border-t-0">
                      <p className="text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;