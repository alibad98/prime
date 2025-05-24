"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeadText from "./HeadText";
import Image from "next/image";
import { Button } from "./ui/button";

const WhatIsItSection = ({
  desc,
  title,
  button,
  image,
}: {
  desc: () => React.ReactNode;
  title: string;
  button: string;
  image: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="container section grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 md:px-10"
    >
      {/* Left Content */}
      <motion.div
        className="md:space-y-8 space-y-6 flex flex-col justify-center items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeadText title={title} />

        <motion.div
          className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {desc()}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button variant="main">
            <span className="text-base sm:text-lg md:text-xl font-medium">
              {button}
            </span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative flex justify-center lg:justify-end items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-full flex items-center justify-center">
          <Image
            src={image}
            alt="What Is Advertising"
            className="xl:max-w-[600px] max-lg:max-h-[300px] w-auto"
            width={724}
            height={460}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhatIsItSection;
