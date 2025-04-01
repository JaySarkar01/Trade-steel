"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Wrench, BookOpen, Truck, Users, 
  Calendar, Mail, ArrowRight, ChevronRight 
} from "lucide-react";
import EnhancedHeader from "@/app/components/servicehdr"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Get Onsite Service",
      description: "Connect with our support team via service request, phone, or information inquiry",
      color: "from-blue-500 to-blue-600",
      action: "Request Service",
      link: "#service"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Increase Your Knowledge",
      description: "Access our expert-curated library of training videos and technical documentation",
      color: "from-purple-500 to-purple-600",
      action: "Explore Resources",
      link: "#knowledge"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Track Your Order",
      description: "Monitor order status using customer ID, order number, or purchase reference",
      color: "from-emerald-500 to-emerald-600",
      action: "Track Now",
      link: "#tracking"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join the Team",
      description: "Bring your unique skills to our collaborative environment at TRADE STEEL",
      color: "from-amber-500 to-amber-600",
      action: "View Careers",
      link: "#careers"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Browse Events",
      description: "Expand your professional network at upcoming TRADE STEEL industry events",
      color: "from-rose-500 to-rose-600",
      action: "Find Events",
      link: "#events"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      description: "Get answers to your questions from our knowledgeable support team",
      color: "from-indigo-500 to-indigo-600",
      action: "Get in Touch",
      link: "#contact"
    }
  ];
const ServiceCard = ({ icon, title, description, color, action, link, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    // Set initial state
    gsap.set(card, { y: 30, opacity: 0 });
    
    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
    
    tl.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: index * 0.1,
      ease: "back.out(1)"
    });

    // Hover animation
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -3, // Reduced from -5
        scale: 1.02, // Reduced scale-up
        duration: 0.3,
        ease: "power1.out"
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
      });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-100 will-change-transform"
    >
      {/* Rest of the card JSX remains the same */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className={`mb-5 w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        <a
          href={link}
          className="flex items-center text-sm font-semibold hover:translate-x-1 transition-transform duration-200"
        >
          <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {action}
          </span>
          <ChevronRight className={`ml-1 h-4 w-4 ${color.replace('from', 'text').replace('to.*', '')}`} />
        </a>
      </div>
    </div>
    
  );
};

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (

    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <EnhancedHeader/>
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          {/* Heading JSX remains the same */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#all-services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-[1.02]"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}