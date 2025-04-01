"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Process", href: "/our-process" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <motion.nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-between transition-all duration-300
        ${isScrolled ? "bg-transparent backdrop-blur-xl shadow-none" : "bg-gray-950 backdrop-blur-lg shadow-lg"} 
        w-[80%] sm:w-[75%] md:w-[55%] lg:w-[50%]
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center font-bold text-lg sm:text-xl md:text-2xl lg:text-lg">
      {/* Logo Image */}
      <img className="h-10 mr-3" src="/1.png" alt="Blix Media Logo" />

      {/* Text with Gradient for "Blix" */}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
        Blix
      </span>

      {/* Text for "Media" */}
      <span className="text-white ml-1">
        Media
      </span>
    </a>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {links.map((link) => (
          <a
            onClick={() => scrollToSection(link.name)}
            key={link.name}
            className="text-white cursor-pointer text-sm sm:text-base lg:text-sm hover:text-orange-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <ScheduleButton />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-20 right-4 left-4 bg-black/90 p-5 rounded-lg md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-base sm:text-lg hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <ScheduleButton />
        </div>
      </motion.div>
    </motion.nav>
  );
};

const ScheduleButton = () => (
  <motion.button
    className=" bg-gradient-to-r from-red-600 via-red-900 to-red-950 text-white px-3 py-1.5 rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base font-semibold"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Schedule a call
  </motion.button>
);

export default Navbar;
