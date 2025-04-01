"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function PremiumFooter() {
  const footerRef = useRef(null);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const socialRef = useRef(null);
  const copyrightRef = useRef(null);
  const waveRef = useRef(null);

  // Ultra-minimal SVG logo
  const Logo = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="4" fill="currentColor" className="text-indigo-600"/>
      <path d="M12 12L24 24M24 12L12 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  // Optimized social icons
  const SocialIcon = ({ children }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 hover:text-white transition-colors duration-200">
      {children}
    </svg>
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Faster initial animations
      gsap.set([logoRef.current, ...linksRef.current, socialRef.current, copyrightRef.current, waveRef.current], {
        opacity: 0,
        y: 15
      });

      // Faster timeline with reduced durations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: { duration: 0.4 } // Reduced from 0.6
      });

      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        ease: "power2.out"
      })
      .to(linksRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.05, // Faster stagger
        ease: "power1.out"
      }, "-=0.2")
      .to(socialRef.current, {
        opacity: 1,
        y: 0,
        ease: "power1.out"
      }, "-=0.2")
      .to(copyrightRef.current, {
        opacity: 1,
        y: 0,
        ease: "power1.out"
      }, "-=0.2")
      .to(waveRef.current, {
        opacity: 1,
        y: 0,
        ease: "power1.out"
      }, "-=0.2");

      // Continuous wave animation
      gsap.to(waveRef.current, {
        x: -50,
        duration: 15,
        repeat: -1,
        ease: "none",
        yoyo: true
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const links = [
    { name: "Products", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Legal", href: "#" }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: <path d="M22 4c-1 .5-2 .8-3 1-1.5-1.7-4-1.8-5.8-.2-1 1-1.3 2.6-.6 3.8-3.4-.4-6.7-1.7-8.6-4.4C2.5 5.6 3 8 4.8 9.2c-.7 0-1.3-.2-1.9-.5.1 1.8 1.3 3.5 3.3 3.8-.6.2-1.2.2-1.9.1.6 1.5 2 2.6 3.9 2.7-1.7 1.3-3.8 2-6.1 2H2c2.2 1.3 4.8 2 7.5 2 9 0 14-7 14-14 0-.2 0-.4 0-.6 1.8-1.2 3-2.8 3.5-4.8z" fill="currentColor"/>
    },
    {
      name: "LinkedIn",
      icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 15h-2v-5h2v5zm-1-6.3c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2 0 .6-.5 1.2-1.2 1.2zm4 6.3h-2v-3c0-.8-.2-1.3-1-1.3-.5 0-1 .3-1.2.8-.1.2-.1.3-.1.5v3.1h-2v-4.5h2V12h.1c.3-.5.8-1 1.7-1 1.2 0 2.1.8 2.1 2.4v3.6z" fill="currentColor"/>
    },
    {
      name: "GitHub",
      icon: <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.9.8 1.3 1.9 1.3 3.1 0 4.6-3.7 5.6-5.5 5.9.5.4.9 1.2.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3z" fill="currentColor"/>
    }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gray-900 text-white pt-16 pb-12 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo/Company */}
          <div className="col-span-2 md:col-span-1">
            <div ref={logoRef} className="flex items-center gap-3 mb-5 opacity-0">
              <Logo />
              <span className="text-xl font-bold tracking-tight">TradeSteel</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Industrial precision and innovation since 1999
            </p>
          </div>

          {/* Links - 3 columns */}
          {['Products', 'Company', 'Resources'].map((title, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="text-sm font-semibold tracking-wider text-gray-300 uppercase mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.slice(i*2, i*2+4).map((link, j) => (
                  <li 
                    key={j}
                    ref={el => linksRef.current[i*4 + j] = el}
                    className="opacity-0"
                  >
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150 hover:pl-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div ref={copyrightRef} className="text-xs text-gray-500 mb-4 md:mb-0 opacity-0">
            © {new Date().getFullYear()} TradeSteel Industries. All rights reserved.
          </div>
          
          <div ref={socialRef} className="flex space-x-5 opacity-0">
            {socialLinks.map((social, i) => (
              <a 
                key={i}
                href="#"
                aria-label={social.name}
                className="hover:scale-110 transition-transform duration-200"
              >
                <SocialIcon>{social.icon}</SocialIcon>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animated wave background */}
      <div ref={waveRef} className="absolute bottom-0 left-0 w-full h-32 opacity-0">
        <svg 
          className="absolute bottom-0 left-0 w-full h-full text-gray-900"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor"
            opacity="0.25"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="currentColor"
            opacity="0.5"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </footer>
  );
}