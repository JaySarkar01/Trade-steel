"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = ['Home', 'Industries', 'Services & Support', 'About Us', 'Contact Us'];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with animation */}
        <motion.h1 
          className="text-2xl font-bold text-blue-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TRADE STEEL
        </motion.h1>

        {/* Desktop Menu (shows on lg screens and up) */}
        <ul className="hidden lg:flex space-x-8 text-lg relative">
          {navItems.map((item) => (
            <motion.li 
              key={item}
              className="relative px-2 py-1 cursor-pointer"
              onHoverStart={() => setHoveredItem(item)}
              onHoverEnd={() => setHoveredItem(null)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative z-10">{item}</span>
              {hoveredItem === item && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Tablet/Mobile Menu Button */}
        <motion.button 
          className="lg:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isOpen ? (
            <X className="w-7 h-7 text-blue-300 transition-all duration-300" />
          ) : (
            <Menu className="w-7 h-7 text-blue-300 transition-all duration-300" />
          )}
        </motion.button>
      </div>

      {/* Tablet Sidebar (md and lg screens) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar Content */}
            <motion.div 
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }} 
              transition={{ 
                duration: 0.4, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="fixed inset-y-0 left-0 w-64 bg-blue-800 shadow-xl z-40 pt-20 px-6 overflow-y-auto"
            >
              <motion.ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.1 + index * 0.05,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <a 
                      href="#" 
                      className="block py-3 px-2 text-blue-100 hover:text-white hover:bg-blue-700/50 rounded-lg transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}