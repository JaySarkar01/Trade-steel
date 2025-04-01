"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function EnhancedHeader() {
  const containerRef = useRef(null);
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const gradientRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([taglineRef.current, headingRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30
      });
      gsap.set(gradientRef.current, { 
        opacity: 0,
        backgroundSize: "0% 100%" 
      });

      // Master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      // Staggered animations
      tl.to(taglineRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      })
      .to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(gradientRef.current, {
        opacity: 1,
        backgroundSize: "100% 100%",
        duration: 1.2,
        ease: "sine.inOut"
      }, "-=0.6")
      .to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // Continuous subtle animation for gradient text
      gsap.to(gradientRef.current, {
        backgroundPositionX: "100%",
        duration: 8,
        repeat: -1,
        ease: "none",
        delay: 2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="text-center">
      <span 
        ref={taglineRef}
        className="inline-block px-4 py-2 text-sm font-medium tracking-wider text-blue-600 bg-blue-50 rounded-full mb-5 shadow-sm opacity-0"
      >
        OUR SERVICES
      </span>
      
      <h2 
        ref={headingRef}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight opacity-0"
      >
        Comprehensive <span 
          ref={gradientRef}
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent bg-[length:0%_100%]"
          style={{
            backgroundImage: "linear-gradient(90deg, #2563eb, #4f46e5, #7c3aed)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text"
          }}
        >
          Solutions
        </span>
      </h2>
      
      <p 
        ref={descriptionRef}
        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto opacity-0 leading-relaxed"
      >
        Tailored services designed to meet your industrial requirements and exceed expectations
      </p>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-1/2 w-64 h-32 bg-indigo-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -z-10" />
    </div>
  );
}