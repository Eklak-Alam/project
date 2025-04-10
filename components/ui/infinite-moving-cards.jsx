"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  title = "What Our Clients Say",
  subtitle = "Real experiences from our valued customers.",
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setupAnimation();
  }, []);

  function setupAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      updateDirection();
      updateSpeed();
      setStart(true);
    }
  }

  const updateDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const updateSpeed = () => {
    if (containerRef.current) {
      const speedMap = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty("--animation-duration", speedMap[speed] || "40s");
    }
  };

  return (
    <section className={`w-full py-12 px-4 md:px-8 lg:px-16 ${className}`}>

      {/* Infinite Scrolling Container */}
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Enhanced gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-[5%] bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-[5%] bg-gradient-to-l from-black via-black/90 to-transparent z-10" />

        <motion.ul
          ref={scrollerRef}
          className={`flex min-w-full gap-6 py-4 w-max ${
            start ? "animate-scroll" : ""
          } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        >
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              className="group relative w-[300px] md:w-[400px] shrink-0 perspective-1000"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-bl from-[#c8102e]/5 via-black to-black border border-[#c8102e]/10 p-8 transition-all duration-500 group-hover:border-[#ff2d62]/50 group-hover:shadow-[0_0_30px_-5px_rgba(200,16,46,0.3)] backdrop-blur-sm">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/0 via-[#ff2d62]/10 to-[#c8102e]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Quote mark decoration */}
                <div className="absolute top-4 right-4 text-6xl font-serif text-[#c8102e]/10 group-hover:text-[#ff2d62]/20 transition-colors duration-500">"</div>
                
                <div className="relative flex flex-col h-full z-10">
                  {/* Quote text */}
                  <p className="flex-grow text-sm md:text-base text-gray-300 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-100">
                    {item.quote}
                  </p>

                  {/* Author info with enhanced hover effects */}
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-[#ff2d62] transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 group-hover:text-[#ff2d62]/70 transition-colors duration-300">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Animated border lines */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff2d62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-0" />
                  </div>
                  <div className="absolute top-0 right-0 h-full w-[1px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c8102e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-100%] group-hover:translate-y-0" />
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 1.5rem));
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};