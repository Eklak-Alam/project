"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

// Company logos
const companyLogos = [
  "/asana.avif",
  "/instantly.avif",
  "/inframail.avif",
  "/highlevel.avif",
  "/zapier.png",
  "/twilio.png",
];

// Duplicate logos for seamless infinite scroll
const duplicatedLogos = [...companyLogos, ...companyLogos];

const EndlessScroll = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [speed, setSpeed] = useState(20); // Default Speed
  const containerRef = useRef(null);

  // Adjust speed dynamically when hover state changes
  useEffect(() => {
    setSpeed(isHovered ? 40 : 20); // Slow down on hover
  }, [isHovered]);

  return (
    <div className="relative w-full overflow-hidden pb-10">

      <div className="absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-black to-transparent z-10"></div>      

      {/* Scrolling Container */}
      <div ref={containerRef} className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex space-x-10 items-center"
          animate={{ x: ["0%", "-100%"] }} // Smooth infinite scroll
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Circular Loop of Logos */}
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="w-32 h-20 flex items-center justify-center">
              <Image
                src={logo}
                alt="Company Logo"
                width={128} // Uniform Size
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EndlessScroll;
