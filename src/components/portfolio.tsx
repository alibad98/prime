"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import portfolioImage from "@/images/portfolioImage.png";
import HeadText from "./HeadText";

const testimonials = [
  { image: portfolioImage },
  { image: portfolioImage },
  { image: portfolioImage },
  { image: portfolioImage },
  { image: portfolioImage },
  { image: portfolioImage },
  { image: portfolioImage },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section className="!max-w-full space-y-10 py-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center space-y-6 text-center px-4"
      >
        <HeadText title="بورتفوليــــو أعمـــــــالنا" />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
          استعرض مشاريعنا المميزة والأعمال التي نفخر بها نقدم لك مجموعة من
          الأعمال التي تعكس خبرتنا وإبداعنا في مختلف المجالات
        </motion.p>
      </motion.div>

      <motion.div
        dir="ltr"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
        <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
      </motion.div>
    </section>
  );
};

export default Portfolio;
