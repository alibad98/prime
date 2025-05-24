"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeadText from "./HeadText";
import Image from "next/image";
import { Button } from "./ui/button";
import checkIcon from "@/images/checkIcon.svg";

interface SectionTwoPicsProps {
  title: string;
  description?: string;
  features: string[];
  buttonText: string;
  mainImage: string;
  logoImage: string;
  className?: string;
  children?: React.ReactNode;
  buttonVariant?: "main" | "secondary" | "outline";
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: -60, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imagesContainerVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const SectionTwoPics = ({
  title,
  description,
  features,
  buttonText,
  mainImage,
  logoImage,
  children,
  className = "",
  buttonVariant = "main",
}: SectionTwoPicsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "-50px 0px -50px 0px",
  });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`py-12 lg:py-24 bg-gradient-to-br bg-transparent ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            variants={contentVariants}
            className="order-2 lg:order-2 !items-start space-y-5 lg:space-y-6"
          >
            <HeadText title={title} />

            <motion.p
              className="text-white/80 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {description}
            </motion.p>

            <motion.ul
              variants={listVariants}
              className="space-y-4 lg:space-y-6"
            >
              {features.map((text, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    variants={{
                      hidden: { scale: 0, rotate: -180 },
                      visible: { scale: 1, rotate: 0 },
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={checkIcon}
                      alt=""
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform duration-200"
                    />
                  </motion.div>
                  <span className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {children && (
              <motion.div variants={contentVariants} className="pt-3 lg:pt-4">
                {children}
              </motion.div>
            )}

            <motion.div variants={buttonVariants} className="pt-3 lg:pt-4">
              <a
                href="https://api.whatsapp.com/send?phone=966559713394"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={buttonVariant}>
                  <span className="text-base sm:text-lg md:text-xl font-medium">
                    {buttonText}
                  </span>
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Images Section */}
          <motion.div
            variants={imagesContainerVariants}
            className="order-1 lg:order-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <motion.div
                  variants={imageVariants}
                  className="relative -translate-y-4 sm:-translate-y-6 lg:-translate-y-8"
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative aspect-[5/7] rounded-none lg:rounded-none overflow-hidden">
                    <Image
                      src={mainImage}
                      alt="Main content"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 45vw, (max-width: 1024px) 35vw, 25vw"
                      priority
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={imageVariants}
                  className="relative translate-y-4 sm:translate-y-6 lg:translate-y-8"
                  whileHover={{
                    scale: 1.05,
                    y: 8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative aspect-[5/7] rounded-none lg:rounded-none overflow-hidden">
                    <Image
                      src={logoImage}
                      alt="Secondary content"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 45vw, (max-width: 1024px) 35vw, 25vw"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionTwoPics;
