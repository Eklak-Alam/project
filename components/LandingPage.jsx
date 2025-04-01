"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation"; // Ensure correct import
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div id="Home" className="flex flex-col overflow-hidden bg-gradient-to-r from-black via-gray-900 to-gray-950">
      {/* Fixed Text at Top */}
      <div className="h-screen flex justify-center items-center flex-col relative px-4">
  <div className="text-center">
    {/* Main Title */}
    <motion.h1
      initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-3xl md:text-5xl font-extrabold text-black dark:text-white leading-tight tracking-tight"
    >
      Revenue-Generating Outbound
      <br />
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-300 font-serif"
      >
        Systems, Done For You
      </motion.span>
    </motion.h1>

    {/* Subtitle / Promise */}
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-4 text-lg md:text-xl text-gray-400 font-semibold"
    >
      We promise <span className="font-bold text-black dark:text-white">30-50 qualified appointments</span> within 90 days.
    </motion.p>

    {/* Guarantee Statement */}
    <motion.p
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="mt-2 text-md md:text-xl text-gray-400"
    >
      If we don't deliver, you pay <span className="font-bold text-red-500">$0</span> & we’ll send you
      <span className="font-bold text-green-500"> $500</span> for wasting your time.
    </motion.p>

    {/* Button */}
    <div className="flex justify-center mt-12">
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#dc2626", // Slightly brighter red on hover
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="py-3 px-8 md:px-12 md:py-4  bg-gradient-to-r from-red-600 via-red-900 to-red-950 text-white font-semibold text-sm md:text-xl rounded-full shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        🚀 Schedule a Call
      </motion.button>
    </div>
  </div>
</div>


      {/* Scrolling 3D Image with Scroll Effect */}
      <ContainerScroll>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg"
        >
          <video
            className="w-full h-[60vh] md:h-[80vh] object-cover rounded-2xl shadow-lg"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
            <source src="/video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </ContainerScroll>
    </div>
  );
}
