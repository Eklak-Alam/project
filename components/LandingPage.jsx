"use client";
import React, { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const companyLogos = [
  "/asana.avif",
  "/instantly.avif",
  "/inframail.avif",
  "/highlevel.avif",
  "/zapier.png",
  "/twilio.png",
];

// Memoized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.8
    }
  }
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Memoized Logo Component
const Logo = memo(({ logo, index }) => (
  <motion.div
    className="inline-flex items-center justify-center h-8 px-10 mx-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ 
      opacity: 1,
      x: 0,
      transition: { 
        delay: 3 + index * 0.1,
        duration: 0.5
      }
    }}
    whileHover={{ 
      scale: 1.2,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }}
  >
    <Image
      src={logo}
      alt="Partner logo"
      width={120}
      height={60}
      className="object-contain h-full w-full grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
      priority={index < 3}
      loading={index < 3 ? "eager" : "lazy"}
    />
  </motion.div>
));

Logo.displayName = 'Logo';

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Memoize transform value
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Memoize duplicated logos array
  const duplicatedLogos = useMemo(() => [...companyLogos, ...companyLogos], []);

  return (
    <div 
      id="home" 
      className="flex flex-col overflow-hidden bg-gradient-to-br from-[#c8102e] via-black to-black"
      ref={containerRef}
    >
      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[200%] h-full opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-white"
                style={{
                  left: '0',
                  top: `${i * 8}%`,
                  width: '100%',
                  animation: `moveLines ${20 + i * 5}s linear infinite`,
                  transform: `rotate(${-35 + i * 2}deg)`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Enhanced Content with Superior Animations */}
        <motion.div 
          className="text-center max-w-6xl mx-auto relative z-10"
          style={{ y }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Welcome Text with Advanced Animation */}
          <motion.div
            className="mb-8 relative inline-block overflow-hidden"
            variants={itemVariants}
          >
            <motion.span 
              className="text-sm font-medium text-white tracking-widest inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.8
                }
              }}
            >
              WELCOME TO BLIX MEDIA
            </motion.span>
            <motion.div 
              className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#c8102e] to-transparent"
              initial={{ width: 0 }}
              animate={{ 
                width: "100%",
                transition: { 
                  delay: 0.8,
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
            />
          </motion.div>

          {/* Main Title with Character-by-Character Animation */}
          <motion.h1
            className="text-[2rem] md:text-[2.1rem] lg:text-[3rem] font-bold max-w-5xl text-white leading-tight tracking-tight mb-4"
          >
            {/* Line 1 */}
            <motion.div
              className="overflow-hidden"
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: 0.03,
                delayChildren: 0 * 0.2
              }}
            >
              {"We Build You a System That Books Calls With".split("").map((char, charIndex) => (
                <motion.span
                  key={`line1-${charIndex}`}
                  className="inline-block"
                  variants={letterAnimation}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Line 2 */}
            <motion.div
              className="overflow-hidden"
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: 0.03,
                delayChildren: 1 * 0.2
              }}
            >
              {"Ready-To-Buy Clients, ".split("").map((char, charIndex) => (
                <motion.span
                  key={`line2a-${charIndex}`}
                  className="inline-block"
                  variants={letterAnimation}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}

              <span className="font-bold italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
                {"While You Sleep.".split("").map((char, charIndex) => (
                  <motion.span
                    key={`line2b-${charIndex}`}
                    className="inline-block bg-gradient-to-r from-[#b40623] to-[#a90404e2] bg-clip-text text-transparent"
                    variants={letterAnimation}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.div>
          </motion.h1>

          {/* Description */}
          <motion.div
            className="mt-10 text-sm md:text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ 
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  delay: 1.8,
                  duration: 1,
                  ease: "easeOut"
                }
              }}
              whileHover={{
                scale: 1.02,
                color: "#ffffff",
                transition: { duration: 0.5 }
              }}
            >
              AI-powered, ad-driven, and human-refined — our done-for-you outbound system turns ad spend into sales calls like clockwork.
            </motion.p>
          </motion.div>

          {/* Enhanced Trusted By Section */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                delay: 2.2,
                duration: 0.8
              }
            }}
          >
            <motion.p 
              className="text-[0.9rem] text-gray-500 mb-6 relative inline-block"
              whileHover={{
                scale: 1.05,
                color: "#c8102e",
                transition: { duration: 0.3 }
              }}
            >
              Trusted by Law firms, HVAC, Ecom and Startups.....
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c8102e]/30"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: 1,
                  transition: { 
                    delay: 2.5,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
              />
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Dual Direction Infinite Logo Scroll */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full overflow-hidden py-4 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1,
            y: 0,
            transition: { 
              delay: 2.8,
              duration: 0.8
            }
          }}
        >
          <div className="relative flex items-center">
            <div className="flex animate-scroll-left hover:animation-paused whitespace-nowrap">
              {duplicatedLogos.map((logo, index) => (
                <Logo key={`left-${index}`} logo={logo} index={index} />
              ))}
            </div>
          </div>
          
          {/* Gradient edge effects in your brand colors */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />
        </motion.div>
      </section>

      {/* CSS Keyframes and Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          display: inline-block;
          will-change: transform;
        }
        .hover\:animation-paused:hover {
          animation-play-state: paused;
        }
        @keyframes moveLines {
          0% { transform: translateX(-50%) rotate(-35deg); }
          100% { transform: translateX(0%) rotate(-35deg); }
        }
      `}</style>
    </div>
  );
}