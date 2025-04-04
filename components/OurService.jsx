"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";

const services = [
  {
    title: "Online\nAdvertising",
    img: "/ourservice1img.png",
    color: "from-blue-900/30 to-black/70"
  },
  {
    title: "AI &\nAutomation",
    img: "/ourservice2img.png",
    color: "from-sky-900/30 to-black/70"
  }
];

export const OurServices = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      id="services"
      ref={ref}
      className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-red-900/10 via-black to-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative"
        >
          <motion.span
            className="text-sm font-medium bg-gradient-to-r from-amber-500 to-red-500 text-transparent bg-clip-text inline-block mb-4"
          >
            SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            What can we do for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">you?</span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-amber-500/20 via-red-500/20 to-amber-500/20 hidden lg:block" />
          
          {/* Plus symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 p-4 rounded-full shadow-lg backdrop-blur-sm border border-amber-500/20 hidden lg:block"
          >
            <FaPlus className="text-2xl text-amber-500" />
          </motion.div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              {/* Service Card */}
              <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300`}>
                {/* Title */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-4 mb-6"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white whitespace-pre-line leading-tight">
                    {service.title}
                  </h3>
                </motion.div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl aspect-video group"
                >
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </motion.div>
              </div>

              {/* Connecting line to header */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-20 w-1 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden lg:block" />
            </motion.div>
          ))}
        </div>

        {/* Booking Button with Connecting Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 relative flex justify-center"
        >
          {/* Connecting lines */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-20 w-1 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden lg:block" />
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-full h-20 w-1 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden lg:block" />
          <div className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-full h-20 w-1 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent hidden lg:block" />

          {/* Booking Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-black/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 text-white font-medium transition-all duration-300"
          >
            <FaCalendarAlt className="text-amber-500" />
            Book an Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};