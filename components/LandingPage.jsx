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

const textLines = [
  "Revenue-Generating Outbound",
  "Systems, Done For You"
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
      className="flex flex-col overflow-hidden bg-gradient-to-bl from-red-900 via-black to-black"
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
              className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
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
            className="text-[1.6rem] md:text-[3.3rem] lg:text-7xl text-white leading-tight tracking-tight mb-4"
          >
            {textLines.map((line, lineIndex) => (
              <motion.div 
                key={lineIndex}
                className="overflow-hidden"
                initial="hidden"
                animate="visible"
                transition={{
                  staggerChildren: 0.03,
                  delayChildren: lineIndex * 0.2
                }}
              >
                {line.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    variants={letterAnimation}
                    whileHover={{ 
                      color: lineIndex === 1 ? "#f59e0b" : "red",
                      y: -5,
                      transition: { 
                        type: "spring",
                        stiffness: 500
                      }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.h1>

          {/* Description with Typewriter Effect */}
          <motion.div
            className="mt-10 text-sm md:text-2xl text-gray-400 max-w-2xl mx-auto"
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
              We are a leading digital agency with global reach & services
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
              className="text-sm text-gray-500 mb-6 relative inline-block"
              whileHover={{
                scale: 1.05,
                color: "#f59e0b",
                transition: { duration: 0.3 }
              }}
            >
              Trusted by startups, creatives, and suits alike
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400/30"
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
          
          {/* Enhanced Gradient edge effects */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 via-gray-950/90 to-transparent z-10 pointer-events-none" />
        </motion.div>
      </section>

      {/* CSS Keyframes */}
      <style jsx global>{`
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
      `}</style>
    </div>
  );
}