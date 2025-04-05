"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-[45rem] relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 1))
        `
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header section */}
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-medium tracking-widest inline-block mb-4 relative">
            <span className="py-2 px-4 relative z-10 bg-gradient-to-r from-amber-500 to-red-500 text-transparent bg-clip-text">
              TESTIMONIALS
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 blur-xl rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-white/50 rounded-full" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 blur-xl rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-red-500/5 rounded-full" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Turning Cold Leads into </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Revenue</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Real stories from businesses that transformed their growth through our targeted strategies
          </p>
        </div>

        {/* Testimonials slider */}
        <div className="relative">
          <InfiniteMovingCards 
            items={testimonials} 
            direction="right" 
            speed="slow" 
          />
        </div>
      </div>
    </div>
  );
}

// Testimonials Data
const testimonials = [
  {
    quote:
      "Working with B2BWizards for 4-5 months doubled my client base with steady, quality leads—highly satisfied and recommend them!",
    name: "Peter Komorowski",
    title: "Founder | Email Crew",
    image: "https://framerusercontent.com/images/2Us2pTWuedJJCXyPIihHKe0HC0.jpeg",
  },
  {
    quote: "After trying multiple appointment-setting companies, B2B Wizards was the only one that exceeded my expectations.",
    name: "Mike Coon",
    title: "VP of Ops | Outsource Demand Gen",
    image: "https://framerusercontent.com/images/JT4ypkg7yQy1m25LEwNK5MqhNGA.webp?scale-down-to=1024",
  },
  {
    quote: "After eight years with various agencies, B2B Wizards stands out for delivering top-quality leads and seamless, adaptive teamwork.",
    name: "Clinton Jiggetts",
    title: "Founder | Best Fit Digital",
    image: "https://framerusercontent.com/images/6dziZLqrrP2nA6OdSPK4pJuIVRc.webp?scale-down-to=512",
  },
  {
    quote:
      "The strategies at B2B Wizards transformed our agency—over $100K generated, including a $30K client, with ongoing successful campaigns.",
    name: "Ashish Pandey",
    title: "Co-founder | Growth Magnet Studio",
    image: "https://framerusercontent.com/images/ufbP1OsT7U761JmQAlS86vJ1skw.jpg?scale-down-to=1024",
  },
];
