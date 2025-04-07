"use client"; // Required for Next.js 13+ App Router

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const banner1 = [
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.5,
    price: 199,
  },
  {
    img: "/product/02.jpg",
    name: "",
    rating: 4.8,
    price: 349,
  },
  {
    img: "/product/03.jpg",
    name: "",
    rating: 4.7,
    price: 299,
  },
  {
    img: "/product/04.jpg",
    name: "",
    rating: 4.6,
    price: 399,
  },
  {
    img: "/product/05.jpg",
    name: "",
    rating: 4.3,
    price: 149,
  },
  {
    img: "/product/06.jpg",
    name: "",
    rating: 4.9,
    price: 129,
  },
  {
    img: "/product/07.jpg",
    name: "",
    rating: 4.5,
    price: 159,
  },
  {
    img: "/product/08.jpg",
    name: "",
    rating: 4.8,
    price: 499,
  },
  {
    img: "/product/09.jpg",
    name: "",
    rating: 4.8,
    price: 499,
  },
  {
    img: "/product/10.jpg",
    name: "",
    rating: 4.8,
    price: 499,
  },
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.4,
    price: 179,
  },
];
const haircare = [
  {
    img: "/product/01.jpg",
    rating: 4.5,
    price: 199,
  },
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.8,
    price: 339,
  },
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.7,
    price: 299,
  },
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.6,
    price: 399,
  },
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.3,
    price: 149,
  },
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.9,
    price: 129,
  },
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.5,
    price: 159,
  },
  {
    img: "/product/01.jpg",
    name: "",
    rating: 4.8,
    price: 499,
  },
];

export default function ServiceCarousel(){
  const swiperRef = useRef(null);
    return (
    <>
      

      <div className="w-full px-6 md:px-14 lg:px-24 py-8 relative bg-white">
        <h1 className="text-4xl font-semibold pb-8 text-black">Most selling products</h1>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={2} // Default for small screens
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 }, // Tablet (min-width: 640px)
            768: { slidesPerView: 4, spaceBetween: 20 }, // Medium tablets (min-width: 768px)
            1024: { slidesPerView: 5, spaceBetween: 30 }, // Desktop (min-width: 1024px)
          }}
          loop={true}
          pagination={{ clickable: true }}
          className="relative"
        >
          {banner1.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white cursor-pointer rounded-lg overflow-hidden border border-gray-300 max-w-[300px] mx-auto">
                {/* Image (Smaller Size) */}
                <div className="relative w-full h-[180px] md:h-[220px] lg:h-[220px]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-start">
                  <h3 className="text-md font-semibold text-black">{item.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center justify-start mt-1">
                    <FaStar className="text-gray-400" />
                    <span className="ml-1 text-gray-700">{item.rating}</span>
                  </div>

                  {/* Price */}
                  <p className="text-md font-bold text-gray-600 mt-2">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <FaChevronLeft />
        </button>

        <button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <FaChevronRight />
        </button>

        {/* Custom Pagination Styling */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: black !important;
            width: 8px;
            height: 8px;
          }
          .swiper-pagination-bullet-active {
            background: black !important;
          }
        `}</style>
      </div>
      

      
      <div className="w-full px-6 md:px-14 lg:px-24 py-8 relative bg-white">
        <div className="mb-10 flex flex-row gap-2 md:flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left text-black">
            products
          </h2>
          <span className="text-lg font-light text-gray-600 md:mt-1">
           sub heading of product
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {haircare.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-0">
              {/* Image */}
              <div className="relative w-full h-[330px] rounded-md overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Content */}
              <div className="mt-3 text-start p-4">
                <h3 className="text-lg font-semibold text-black">{item.name}</h3>

                {/* Rating */}
                <div className="flex items-center justify-start mt-1">
                  <FaStar className="text-gray-500" />
                  <span className="ml-1 text-gray-700">{item.rating}</span>
                </div>

          
                
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

