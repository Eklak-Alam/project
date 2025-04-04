"use client";

import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    { text: "Terms of Use", href: "/" },
    { text: "Privacy Policy", href: "/" },
    { text: "Refund Policy", href: "/" },
    { text: "FAQs", href: "/" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-black to-red-950/20 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-250 -left-100 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-250 -right-100 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                B2B <span className="text-transparent bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text">WIZARDS</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Transforming businesses through innovative digital solutions and strategic growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="h-px w-4 bg-red-500/50" />
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: contact@b2bwizards.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: New York, NY</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-amber-500 p-[1px] group"
                >
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center transition-transform group-hover:bg-gradient-to-br from-red-500 to-amber-500">
                    <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent my-8"
        />

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>© 2025 B2B Wizards. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ color: "#f59e0b" }}
                className="hover:text-amber-500 transition-colors"
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
