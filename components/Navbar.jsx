"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "home" },
    { name: "Process", href: "process" },
    { name: "Work", href: "work" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Contact", href: "contact" },
  ];

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

  const handleLinkClick = useCallback((name) => {
    setActiveLink(name);
    setIsOpen(false);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
        isScrolled || isHovering || isOpen 
          ? "backdrop-blur-md border-b border-white/5" 
          : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Logo */}
      <motion.a 
        href="/" 
        className="flex items-center font-bold text-lg group relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="relative"
        >
          <motion.img 
            className="h-8 mr-2 rounded-full" 
            src="/logo.png" 
            alt="Logo"
          />
          <motion.div
            className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
          />
        </motion.div>
        <motion.div className="relative">
          <motion.span 
            className="text-red-600 relative z-10"
            whileHover={{ 
              transition: { duration: 0.3 }
            }}
          >
            Blix
          </motion.span>
          <motion.span 
            className="text-white ml-1 relative z-10"
            whileHover={{ color: "#ffffff" }}
          >
            Media
          </motion.span>
          <motion.div
            className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
          />
        </motion.div>
      </motion.a>

      {/* Desktop Navigation - Changed breakpoint to lg */}
      <div className="hidden lg:flex items-center space-x-8">
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            className={`relative text-sm font-medium transition-colors group ${
              activeLink === link.name 
                ? "text-white" 
                : "text-white/70 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLinkClick(link.name)}
          >
            <span className="relative z-10">{link.name}</span>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-px bg-white"
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: activeLink === link.name ? 1 : 0,
                transition: { duration: 0.3 }
              }}
              whileHover={{ scaleX: 1 }}
            />
            <motion.div
              className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
            />
          </motion.a>
        ))}
        <ScheduleButton />
      </div>
      
      {/* Mobile Menu Button - Changed breakpoint to lg */}
      <motion.button 
        className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors relative z-50 group"
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
        <motion.div
          className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
        />
      </motion.button>

      {/* Mobile Menu - Changed breakpoint to lg */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-16 inset-x-0 backdrop-blur-lg lg:hidden"
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
            <div className="flex flex-col items-center space-y-6 p-8 bg-black/80">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`text-lg transition-colors relative group ${
                    activeLink === link.name 
                      ? "text-white" 
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => handleLinkClick(link.name)}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#ffffff",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.div
                    className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                  />
                </motion.a>
              ))}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <ScheduleButton />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const ScheduleButton = ({ className }) => (
  <motion.button
    className={`relative overflow-hidden bg-gradient-to-r from-red-900/20 to-red-800/20 text-white px-6 py-2.5 rounded-full text-sm font-medium border border-red-500/20 hover:border-red-500/40 transition-all duration-300 ${className}`}
    whileHover={{ 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10 flex items-center gap-2">
      Schedule a Call
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileHover={{ x: 5, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight size={16} />
      </motion.div>
    </span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10"
      initial={{ x: "-100%" }}
      whileHover={{ x: 0 }}
      transition={{ duration: 0.3 }}
    />
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
);

export default Navbar;