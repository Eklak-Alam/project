"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-[45rem] relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(200, 16, 46, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(255, 45, 98, 0.1) 0%, transparent 50%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 1))
        `
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#c8102e]/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff2d62]/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#c8102e]/20 to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header section */}
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-medium tracking-widest inline-block mb-4 relative">
            <span className="py-2 px-4 relative z-10 bg-gradient-to-r from-[#c8102e] to-[#ff2d62] text-transparent bg-clip-text">
              TESTIMONIALS
              <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/10 to-[#ff2d62]/10 blur-xl rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/5 to-white/50 rounded-full" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/10 to-[#ff2d62]/10 blur-xl rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/5 to-[#ff2d62]/5 rounded-full" />
          </span>
          <h2 className="text-[1.4rem] md:text-5xl font-bold mb-4">
            <div className="whitespace-nowrap">
              <span className="text-white">Turning cold leads into </span>
              <span className="text-[#ff2d62]" style={{ fontFamily: "'Dancing Script', cursive" }}>Revenue:</span>
            </div>
            <div className="mt-1 md:mt-3 text-gray-300 font-medium">
              <span className="text-white">real stories with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] to-[#ff2d62]">Blix Media</span>
            </div>
          </h2>
          <p className="text-[0.6rem] md:text-base text-gray-400 max-w-2xl mx-auto">
            Discover how companies shifted from hoping from results to experiencing <br /> predictable, steady  growth through Ai Automation System
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
      "I was honestly skeptical at first — we've tried agencies before, and they just threw a bunch of Facebook ads at us. Sanskar and his co-founder actually built a full system for us: lead capture, follow-up, automations... all of it. We've been booking more trial sessions in the last month than we did all of last quarter. These guys just get it.",
    name: "Mike R",
    title: "Owner @ IronCore Fitness (Gym/Fitness Studio)",
  },
  {
    quote: "Our brand was doing decent numbers but we hit a ceiling. Blix Media helped us scale without breaking what was already working. Their email & ad strategies literally doubled our ROAS in under 30 days. But more than that — they communicated everything, kept us in the loop, and gave us clarity like never before.",
    name: "Jessica L.",
    title: "Founder @ WildAura Skincare (eCommerce)",
  },
  {
    quote: "We were getting maybe 3-4 leads a week, mostly referrals. Blix Media came in, set up our outbound + paid campaigns, and now we're averaging 25-30 qualified leads a week. No fluff, no nonsense. Just results. Honestly, best decision I've made this year.",
    name: "Chris D.",
    title: "Co-Owner @ ArcticAir Pros (HVAC)",
  },
  {
    quote:
      "What stood out was how deep they went into my offer and niche. It wasn't just ads — it was positioning, copy, funnel, follow-up… everything. It felt like they were part of my team. My calendar's been full, and I'm scaling my offer now — wouldn't have been possible without them.",
    name: "Natasha P.",
    title: "Online Coach @ LevelUp Performance ",
  },
  
  {
    quote:
      "We were running ads already, but the backend was messy. Blix came in, cleaned up our CRM, built a new funnel, and plugged in AI follow-ups. Everything just clicked. We hit our first 6-figure month within 8 weeks of working together. Absolute pros.",
    name: "Ankit S.",
    title: "Co-founder @ Aura Interiors ",
  },
];