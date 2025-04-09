"use client";

import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "/", label: "LinkedIn" },
    { icon: FaFacebook, href: "/", label: "Facebook" },
    { icon: FaTwitter, href: "/", label: "Twitter" },
    { icon: FaInstagram, href: "/", label: "Instagram" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-black to-red-950/20 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-250 -left-100 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-250 -right-100 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Main Content - Contact and Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
            Connect Us
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:contact@b2bwizards.com" className="text-white hover:text-amber-500 transition-colors">contact@b2bwizards.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+15551234567" className="text-white hover:text-amber-500 transition-colors">+1 (555) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">New York, NY</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Follow Us
            </h3>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-amber-500/20 p-[1px] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center">
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
            
            <p className="text-gray-400 text-sm max-w-xl">
              Follow us on social media to stay updated with our latest news and offerings.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent my-8"
        />

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <div className="flex gap-4">
            <a href="/terms" className="text-gray-400 hover:text-amber-500 transition-colors">
              Terms
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-amber-500 transition-colors">
              Privacy
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-amber-500 transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};