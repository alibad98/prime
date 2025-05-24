"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeadText from "./HeadText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";
import qoutes from "@/images/qoutes.svg";

const Reviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section className="section bg-secondary w-full " ref={ref}>
      <div className="container space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center space-y-6 text-center px-4"
        >
          <HeadText title="اراء عمــــــــــلائنا" />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl"
          >
            عملائنا يشهدون: &quot;برايم غر طريقة تواصلنا مع عملائنا تمامًا!&quot;
          </motion.p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute w-[300px] h-full top-0 "
            style={{
              background:
                "linear-gradient(270deg,rgba(0, 26, 39, 1) 100%, rgba(0, 26, 39, 1) 100%)",
            }}
          ></div>
          <div
            className="absolute w-[300px] h-full top-0 left-0"
            style={{
              background:
                "linear-gradient(90deg,rgba(0, 26, 39, 1) 100%, rgba(0, 26, 39, 1) 100%)",
            }}
          ></div>

          <Carousel
            className=""
            dir="ltr"
            opts={{
              align: "start",
              slidesToScroll: 1,
              loop: true,
              active: true,
            }}
          >
            <CarouselContent>
              {arabicComments.map((item, i) => (
                <CarouselItem 
                  key={i} 
                  className="basis-full sm:basis-1/2 lg:basis-1/3" // Responsive breakpoints
                >
                  <div
                    dir="rtl"
                    className="text-white bg-[#FFFFFF0F] sm:h-[300px] h-[200px] rounded-2xl relative pb-6 px-10 pt-12 flex flex-col justify-between" // Responsive padding
                  >
                    <Image
                      src={qoutes}
                      alt={"qoutes"}
                      width={35}
                      height={68}
                      className="absolute top-3 right-3 "
                    />
                    <Image
                      src={qoutes}
                      alt={"qoutes"}
                      width={60}
                      height={68}
                      className="absolute bottom-5 left-5 "
                    />
                    <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed"> {/* Responsive text size */}
                      {item.comment}
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white"></div> {/* Responsive avatar size */}
                      <div>
                        <p className="text-sm sm:text-base">{item.name}</p> {/* Responsive text size */}
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill={index < item.rating ? "#CD9D5D" : "#DCDCDC"}
                              strokeWidth="2"
                              className="w-4 h-4 sm:w-5 sm:h-5" // Responsive star size
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselDots className="mt-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

const arabicComments = [
  { name: "أحمد محمد", rating: 5, comment: "خدمة ممتازة وسرعة في التنفيذ." },
  { name: "ليلى خالد", rating: 4, comment: "تجربة رائعة وتعامل راقٍ." },
  { name: "نورا عبد الله", rating: 5, comment: "احترافية في العمل وتواصل سريع." },
  { name: "محمد ياسين", rating: 4, comment: "أنصح بالتعامل معهم، نتائج رائعة." },
  { name: "هند سامي", rating: 5, comment: "فريق عمل مميز ومتعاون جدًا." },
  { name: "علي طارق", rating: 5, comment: "تجربة ممتازة وخدمة تفوق التوقعات." },
  { name: "سارة إبراهيم", rating: 4, comment: "تعامل راقٍ وجودة عالية في التنفيذ." },
  { name: "خالد عماد", rating: 5, comment: "أفضل خدمة حصلت عليها على الإطلاق!" },
  { name: "فاطمة زكي", rating: 4, comment: "سعدت جدًا بالتجربة، شكراً لكم." },
  { name: "يوسف حسان", rating: 5, comment: "خدمة سريعة ونتائج احترافية." }
];