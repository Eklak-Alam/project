"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", href: "home" },
    { name: "Process", href: "process" },
    { name: "Services", href: "services" },
    { name: "Testimonials", href: "testimonials" },
    { name: "FAQs", href: "faq" },
  ];

  const scrollToSection = useCallback((id) => {
    if (!id) return;
    const element = document.getElementById(id);
    const navHeight = document.querySelector("nav")?.offsetHeight || 80;
  
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  }, []);  

  const handleLinkClick = useCallback((href) => {
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(href);
      setActiveLink(href);
    }, 300);
  }, [scrollToSection]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll("section[id], div[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveLink(section.id);
        }
      });
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 ${
        isScrolled || isOpen 
          ? "backdrop-blur-lg bg-black/80 border-b border-white/10 shadow-lg" 
          : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="/" 
          className="flex items-center font-bold text-lg relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
        >
          <div className="relative">
            <motion.img 
              className="lg:h-7 lg:w-32 h-5 w-20 mr-2 rounded-full" 
              src="/logo.png" 
              alt="Logo"
            />
            <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <motion.button
              key={link.href}
              className={`relative text-lg font-medium transition-colors group px-1 py-2 ${
                activeLink === link.href 
                  ? "text-white" 
                  : "text-white/70 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick(link.href)}
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeLink === link.href ? "100%" : "0%",
                    transition: { duration: 0.3 }
                  }}
                  whileHover={{ width: "100%" }}
                />
              </div>
            </motion.button>
          ))}
          
          {/* New Schedule Button - Integrated in Navbar */}
          <motion.button
            className="cursor-pointer relative overflow-hidden px-6 py-3 text-sm font-mono tracking-wide rounded-full border border-neutral-800 text-white bg-transparent group"
            onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              <span>Book a Strategy Call Now!</span>
              <span className="ml-2 transition-all duration-300 transform group-hover:translate-x-1">
                <FaArrowRight size={16} />
              </span>
            </span>
            
            {/* Hover effect layers */}
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute top-0 left-0 h-full w-0 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </motion.button>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors relative z-50 group"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
          <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="mobile-menu" 
              className="fixed top-16 inset-x-0 backdrop-blur-lg bg-black/90 lg:hidden shadow-xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
            >
              <div className="flex flex-col items-center space-y-4 p-6 cursor-pointer">
                {links.map((link) => (
                  <motion.button
                    key={link.href}
                    className={`text-lg transition-colors relative group px-4 py-3 w-full text-center ${
                      activeLink === link.href 
                        ? "text-white" 
                        : "text-white/70 hover:text-white"
                    }`}
                    onClick={() => handleLinkClick(link.href)}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#ffffff",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-500 to-red-500"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: activeLink === link.href ? "100%" : "0%",
                          transition: { duration: 0.3 }
                        }}
                        whileHover={{ width: "100%" }}
                      />
                    </div>
                  </motion.button>
                ))}
                <motion.div 
                  variants={itemVariants}
                  className="w-full px-4 py-2"
                >
                  <button
                    className="relative overflow-hidden px-6 py-3 text-sm font-mono tracking-wide rounded-full border border-neutral-800 text-white bg-transparent group w-full"
                    onClick={() => window.open("https://calendly.com/wolfwisemedia/letsmakesomemoney", "_blank")}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <span>Book a Strategy Call Now!</span>
                      <span className="ml-2 transition-all duration-300 transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                    
                    {/* Hover effect layers */}
                    <span className="absolute inset-0 overflow-hidden">
                      <span className="absolute top-0 left-0 h-full w-0 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
                      <span className="absolute top-0 left-0 h-full w-full">
                        <span className="absolute top-1/2 left-full -translate-y-1/2 w-0 h-0.5 bg-white transition-all duration-500 group-hover:left-0 group-hover:w-full"></span>
                      </span>
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;