"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Award, ThumbsUp, Briefcase } from "lucide-react";

const stats = [
  { 
    icon: <Briefcase size={40} className="text-blue-400" />,
    value: 25, 
    suffix: "+",
    label: "Years Experience",
    stars: 5
  },
  { 
    icon: <ThumbsUp size={40} className="text-blue-400" />,
    value: 3123, 
    label: "Happy Customers",
    stars: 4
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex mt-2">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i}
          size={16}
          className={i < count ? "text-blue-400 fill-blue-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const StatCard = ({ icon, value, suffix, label, stars, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const increment = value / (duration * 60);
      let currentCount = 0;
      
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, 1000/60);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden group"
    >
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-blue-500/10 rounded-full blur-lg"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon with shine effect */}
        <div className="mb-4 p-3 bg-gray-800 rounded-full group-hover:bg-yellow-500/10 transition-all duration-300">
          {icon}
        </div>
        
        {/* Animated number */}
        <div className="flex items-end mb-1">
          <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            {count.toLocaleString()}
          </span>
          {suffix && (
            <span className="text-3xl md:text-4xl font-medium text-blue-400 ml-1">
              {suffix}
            </span>
          )}
        </div>
        
        {/* Label */}
        <p className="text-lg md:text-xl text-gray-300 mb-2">{label}</p>
        
        {/* Star rating */}
        <StarRating count={stars} />
        
        {/* Shiny badge */}
        {stars === 5 && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 1, type: "spring" }}
            className="mt-3 flex items-center text-xs text-yellow-400"
          >
            <Award size={16} className="mr-1" />
            Premium Rated
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              stars={stat.stars}
              duration={index === 0 ? 1.5 : 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}