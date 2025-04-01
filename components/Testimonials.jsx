"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div id="Testimonials" className="h-[40rem] flex flex-col items-center justify-center overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
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
