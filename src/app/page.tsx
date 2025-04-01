"use client"
import React from "react";
import TopBanner from "@/app/components/topbanner";
import StatCard from "@/app/components/totalcust";
import AboutUs from "@/app/components/about";
import ServiceCard from "@/app/components/services";
import Footer from "@/app/components/footer"
import ServiceCarousel from "@/app/components/ServiceCarousel";

export default function Home() {
  return (
   <div>
        <section>
          <TopBanner/>
        </section>
        <section>
          <AboutUs/>
        </section>
        <section>
          <StatCard/>
        </section>
        <section>
          <ServiceCard/>
        </section>
        <section>
          <ServiceCarousel/>
        </section>
        <section>
          <Footer/>
        </section>
   </div>
  );
}
