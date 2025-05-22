"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HeadText = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-fit relative text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-white xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-bold relative z-10"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scale: 1, opacity: 0 , borderRadius: "0" }}
        animate={isInView ? { scale: 1, opacity: 1 , borderRadius: "50% 50% 50% 0" } : {}}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="absolute -top-2 sm:-right-4 -right-2 aspect-square h-full bg-gold rounded-full max-h-[50px]"
      />
    </motion.div>
  );
};

export default HeadText;
