"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div id="Testimonials" className="relative min-h-[45rem] bg-gradient-to-bl from-black via-black to-red-950/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header section */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium bg-gradient-to-r from-amber-500 to-red-500 text-transparent bg-clip-text uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Turning Cold Leads into </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">Revenue</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
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
