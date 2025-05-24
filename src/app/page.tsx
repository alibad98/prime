"use client";
import WhyPrime from "@/components/why-prime";
import { useEffect, useRef } from "react";
import ScrollSnapSection from "@/components/scroll-snap-showcase";
import ServicesGrid from "@/components/services-grid";
import OurNumbers from "@/components/OurNumbers";
import Portfolio from "@/components/portfolio";
import Reviews from "@/components/reviews";

export default function Home() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  const ref = useRef(null);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center lg:space-y-16 space-y-6 overflow-x-hidden ">
      <div className="min-h-screen">
        <ScrollSnapSection scrollToRef={ref} />
      </div>

      <div className="w-full lg:space-y-16 space-y-6 overflow-x-hidden" ref={ref}>
        <WhyPrime />
        <ServicesGrid />
        <OurNumbers />
        <Portfolio />
        <Reviews />
      </div>
    </div>
  );
}
