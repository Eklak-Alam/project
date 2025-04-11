"use client";
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const NumberOfPeopleUse = () => {
  const stats = [
    { number: 25, suffix: "+", label: "Successful Projects" },
    { number: 2, suffix: "Y+", label: "Years in business" },
    { number: 7, suffix: "+", label: "Team Members" },
    { number: 13, suffix: "M+", label: "Revenue Generated" }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const AnimatedCounter = ({ value, suffix }) => {
    const nodeRef = useRef(null);
    
    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = parseInt(value);
        const duration = 2000;
        const increment = end / (duration / 16);
        
        let timer = setInterval(() => {
          start += increment;
          if (start > end) start = end;
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(start) + suffix;
          }
          if (start === end) clearInterval(timer);
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, value, suffix]);

    return <span ref={nodeRef}>0{suffix}</span>;
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-bl from-black via-black to-[#c8102e]/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c8102e] to-transparent transform -rotate-3" />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff2d62] to-transparent transform rotate-3" />
      </div>

      <div className="container mx-auto px-4 relative" ref={ref}>
        {/* Headings Section */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-white bg-clip-text text-transparent"
          >
            Get your first client <span className='bg-gradient-to-r from-[#b40623] to-[#a90404e2] bg-clip-text text-transparent'>this week</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            <span className="font-semibold text-white">1 week to get started</span>.{' '}
            <span className="font-semibold bg-gradient-to-r from-[#b40623] to-[#a90404e2] bg-clip-text text-transparent">4 days</span> to get your first client on average
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {/* Scribble Effect - Top */}
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { pathLength: 1, opacity: 1 }
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute -top-4 left-0 w-full h-2"
          >
            <svg className="w-full h-full" viewBox="0 0 1000 10">
              <motion.path
                d="M0,5 C200,-5 300,15 500,5 C700,-5 800,15 1000,5"
                stroke="url(#gradient-1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
              />
              <defs>
                <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c8102e" />
                  <stop offset="100%" stopColor="#ff2d62" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center py-6 rounded-xl transition-all duration-300"
            >
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#c8102e] to-[#ff2d62] bg-clip-text text-transparent mb-3">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}

          {/* Scribble Effect - Bottom */}
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { pathLength: 1, opacity: 1 }
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute -bottom-4 left-0 w-full h-2"
          >
            <svg className="w-full h-full" viewBox="0 0 1000 10">
              <motion.path
                d="M0,5 C200,15 300,-5 500,5 C700,15 800,-5 1000,5"
                stroke="url(#gradient-2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
              />
              <defs>
                <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff2d62" />
                  <stop offset="100%" stopColor="#c8102e" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NumberOfPeopleUse;