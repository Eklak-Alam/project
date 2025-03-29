"use client";

import React, { useEffect, useState, useRef } from "react";

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
      {/* Heading & Subheading */}
      <div className="text-center mb-8">
      <h2 className="text-2xl mb-4 md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white px-4 py-2 inline-block rounded-2xl shadow-lg tracking-wide">Testimonials</h2>
        <h2 className="text-2xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Turning cold leads into Revenue : <br /> real stories with B2B Wizards
        </h2>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mt-2">
            Discover how companies shifted from hoping for results to experiencing <br /> predictable, steady growth through targeted cold outreach.
        </p>
      </div>

      {/* Infinite Scrolling Container */}
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Left & Right Fade Shadows */}
        <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-black to-transparent z-10"></div>

        <ul
          ref={scrollerRef}
          className={`flex w-max min-w-full flex-nowrap gap-6 py-4 ${
            start && "animate-scroll"
          } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative w-[320px] md:w-[350px] max-w-full shrink-0 rounded-2xl border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900 p-6 shadow-lg"
            >
              <blockquote className="flex flex-col items-center text-center">
                {/* User Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 mb-4 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
                />

                {/* Quote Text */}
                <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100">
                  {item.quote}
                </p>

                {/* User Details */}
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.title}</p>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
