"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    headline: "Explore Exciting Career Opportunities",
    desc: "Discover rewarding career paths and join a dynamic team at TRADE STEEL",
    GoText: "Contact us",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    headline: "We Innovate Amazing Solutions",
    desc: "Together with our customers, we are building a better, healthier, and safer tomorrow.",
    GoText: "Contact us",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    headline: "World of Opportunities for Future Generations",
    desc: "We are committed to building a better, safer, and healthier tomorrow.",
    GoText: "Contact us",
    bgImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
];

export default function TopBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden pt-16">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        {data.map(
          (item, i) =>
            i === index && (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full flex flex-col items-center justify-start md:justify-center text-center px-6 sm:px-8 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {data[index].headline}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 font-light max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {data[index].desc}
            </motion.p>

            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-lg md:text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {data[index].GoText}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-2">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-5 sm:w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
