"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  bgTitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  title,
  subtitle,
  description,
  bgTitle,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="relative h-[680px] w-full overflow-hidden "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#001018C9]/80 via-transparent " />
      </div>

      {/* Content Container */}
      <div className="relative z-30 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl text-center">
          {/* Subtitle */}
          <motion.h2
            className="mb-10 text-lg font-semibold text-white sm:text-2xl lg:text-3xl"
            variants={textVariants}
          >
            {subtitle}
          </motion.h2>

          {/* Title */}
          <motion.h1
            className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            variants={textVariants}
          >
            {title}
          </motion.h1>

          {bgTitle && (
            <>
              <motion.h1
                className="mt-12 -mb-4  text-3xl font-bold text-white bg-[#2589BC] sm:text-4xl lg:text-5xl"
                variants={textVariants}
              >
                {bgTitle}
              </motion.h1>
            </>
          )}

          {/* Description */}
          <motion.p
            className="mt-10 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed sm:text-xl"
            variants={textVariants}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
