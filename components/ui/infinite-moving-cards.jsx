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
        <h2 className="text-2xl mb-4 md:text-3xl font-extrabold bg-gradient-to-r from-red-600 via-red-800 to-red-900 text-white px-6 py-3 inline-block rounded-2xl shadow-xl tracking-wide">
          Testimonials
        </h2>
        <h2 className="text-2xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Turning Cold Leads into Revenue: <br /> Real Stories with B2B Wizards
        </h2>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mt-2">
          Discover how companies shifted from hoping for results to experiencing <br /> predictable, steady growth through targeted cold outreach.
        </p>
      </div>

      {/* Infinite Scrolling Container */}
      <div ref={containerRef} className="relative overflow-hidden mb-5">
        {/* Left & Right Fade Shadows */}
        <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-black via-transparent to-transparent z-10"></div>

        <ul
          ref={scrollerRef}
          className={`flex w-max min-w-full flex-nowrap gap-6 py-4 transition-all duration-300 ease-in-out ${
            start && "animate-scroll"
          } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative w-[320px] md:w-[350px] max-w-full shrink-0 rounded-2xl border-t-4 border-red-600 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl hover:border-red-800"
            >
              <blockquote className="flex flex-col items-center text-center">
                {/* User Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 mb-4 rounded-full border-2 border-red-500 dark:border-red-700 object-cover shadow-md"
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