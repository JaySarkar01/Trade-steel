"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-100/20 -skew-x-12 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-yellow-100/20 skew-x-12 translate-x-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
          {/* Text content - left side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm lg:text-lg font-medium text-blue-600">About Our Company</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to <span className="text-blue-600">Trade-Steel</span> Industries Pvt. Ltd.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Leading Manufacturer, Exporter, Supplier & Service Provider of Standard Weights & Calibration Services.
            </p>
            
            <p className="text-gray-600 md:text-lg">
              "Trade-Steel Industries Pvt. Ltd." is India's leading manufacturer, exporter, supplier & service provider of certified standard weights & calibration services. Since 1999, we have been engaged in manufacturing weights and mass standards and enhanced our reputation as the premier company in the metrology industry.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Control System</h4>
                  <p className="text-sm text-gray-600">100% Satisfaction Guarantee</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Team</h4>
                  <p className="text-sm text-gray-600">Highly Qualified Staff</p>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="px-3 py-1.5 bg-blue-50 rounded-full text-sm md:text-lg font-medium text-blue-700">
                ISO 9001:2015 Certified
              </div>
              <div className="px-3 py-1.5 bg-green-50 rounded-full text-sm md:text-lg font-medium text-green-700">
                NABL Accredited
              </div>
            </div>
          </motion.div>
          
          {/* Image - right side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              {/* Replace with your actual image */}
              <Image
                src="/img/aboutus.webp" // Replace with your image path
                alt="Weightronics Industries"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-gray-900/10" />
              
              {/* Image badge */}
              <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Since</p>
                    <p className="font-bold text-gray-900">1999</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}