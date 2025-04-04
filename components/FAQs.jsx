"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    {
      question: "What services does Blix Media offer?",
      answer: "Blix Media offers a comprehensive range of digital services including web development, mobile app development, UI/UX design, custom software development, digital marketing, and branding & strategy services."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary depending on the scope and complexity. A basic website might take 4-6 weeks, while a comprehensive web application or mobile app can take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements."
    },
    {
      question: "Do you provide ongoing support after the project is completed?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. These include regular updates, security monitoring, performance optimization, and content updates."
    },
    {
      question: "How do you approach the design process?",
      answer: "Our design process begins with understanding your business goals, target audience, and industry. We create wireframes and prototypes, gather feedback, and refine our designs until we achieve the perfect balance of aesthetics and functionality that aligns with your brand identity."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We use the latest technologies and frameworks suitable for your project requirements. These may include React, Angular, or Vue.js for front-end; Node.js, Python, or PHP for back-end; React Native or Flutter for mobile apps; and various CMS platforms like WordPress or Shopify when appropriate."
    },
    {
      question: "Can you help with existing projects or only new ones?",
      answer: "We're equipped to help with both new projects and existing ones that need improvements, updates, or complete overhauls. Our team can analyze your current digital assets and recommend the best approach to achieve your goals."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-red-900/10 via-black to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
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
            className="text-xs font-medium bg-gradient-to-r from-amber-500 to-red-500 text-transparent bg-clip-text inline-block mb-4 tracking-widest"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-400 max-w-2xl mx-auto"
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