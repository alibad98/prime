"use client";

import React, { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useInView } from "framer-motion";
import HeadText from "./HeadText";

export type CategoryType = {
  id: number;
  title: string;
  image: StaticImageData;
  description: {
    title: string;
    content: string;
    platforms?: string[];
  };
};

type ServiceShowcaseProps = {
  title?: string;
  categories: CategoryType[];
  initialActiveCategory?: number;
};

const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({
  title,
  categories,
  initialActiveCategory = 0,
}) => {
  const [activeCategory, setActiveCategory] = useState(initialActiveCategory);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-50px 0px -50px 0px",
  });

  const handleCategoryChange = (categoryId: number) => {
    if (categoryId === activeCategory) return;
    setActiveCategory(categoryId);
  };

  const currentCategory = categories[activeCategory];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Button container variants
  const buttonContainerVariants = {
    hidden: { opacity: 0, x: -60, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  // Individual button variants
  const buttonVariants = {
    hidden: { opacity: 0, x: -40, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  // Gold blob variants
  const blobVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      scaleX: 0.8,
      transformOrigin: "left center",
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 25,
      },
    },
  };

  // Image container variants
  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.85, rotateX: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  // Description container variants
  const descriptionContainerVariants = {
    hidden: { opacity: 0, x: 60, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="items-center flex flex-col gap-8 px-4 py-12 my-5 text-center">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HeadText title={title} />
        </motion.div>
      )}

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-7xl mx-auto p-6 bg-secondary rounded-none shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-96">
          {/* Buttons */}
          <motion.div
            variants={buttonContainerVariants}
            className="lg:col-span-1 order-2 lg:order-1"
          >
            <div className="relative flex flex-col lg:flex-col flex-row lg:h-full overflow-x-auto lg:overflow-x-visible">
              {/* Animated Gold Blob */}
              <motion.div
                variants={blobVariants}
                layoutId="blob"
                className="absolute left-0 w-full bg-gradient-to-r from-[#CD9D5D] via-[#E6B77A] to-[#CD9D5D] z-0 shadow-lg lg:block hidden"
                style={{
                  top: `${activeCategory * (100 / categories.length)}%`,
                  height: `${100 / categories.length}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
              />

              {/* Mobile blob for horizontal layout */}
              <motion.div
                variants={blobVariants}
                layoutId="blob-mobile"
                className="absolute top-0 h-full bg-gradient-to-r from-[#CD9D5D] via-[#E6B77A] to-[#CD9D5D] z-0 shadow-lg lg:hidden block"
                // style={{
                //   right: `${activeCategory * (100 / categories.length)}%`,
                //   width: `${100 / categories.length}%`,
                // }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
              />

              <div className="flex lg:flex-col flex-row lg:h-full w-full">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    variants={buttonVariants}
                    custom={index}
                    className="lg:flex-1 flex-shrink-0"
                  >
                    <Button
                      variant={
                        activeCategory === category.id ? "default" : "outline"
                      }
                      size="lg"
                      onClick={() => handleCategoryChange(category.id)}
                      className={cn(
                        "relative z-10 lg:flex-1 flex-shrink-0 w-full lg:w-full min-w-max text-center lg:text-right justify-center lg:justify-start rounded-none my-0 border-x-0 py-4 px-6 border-t-0 border-[#FFFFFF14] transition-all duration-300 lg:h-full h-16 group",
                        activeCategory === category.id
                          ? "bg-gold hover:bg-transparent text-white shadow-none"
                          : "bg-transparent border-gray-600 text-white hover:text-[#CD9D5D] hover:bg-secondary/90"
                      )}
                    >
                      <motion.span
                        className="text-lg lg:text-2xl font-normal leading-relaxed"
                        whileHover={{
                          x: activeCategory !== category.id ? -5 : 0,
                          scale: 1.02,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.title}
                      </motion.span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageContainerVariants}
            className="lg:col-span-1 order-1 lg:order-2"
          >
            <div className="relative w-full h-60 sm:h-80 lg:h-full bg-transparent overflow-hidden rounded-none shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    rotateY: -10,
                    transition: {
                      duration: 0.3,
                      ease: "easeIn",
                    },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentCategory.image}
                    alt={currentCategory.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={descriptionContainerVariants}
            className="lg:col-span-1 order-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id + "-desc"}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  scale: 0.98,
                  transition: {
                    duration: 0.3,
                    ease: "easeIn",
                  },
                }}
                className="h-full flex flex-col justify-center text-center lg:text-right bg-primary px-6 lg:px-12 py-8 lg:py-6 space-y-6 rounded-none shadow-xl"
              >
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {currentCategory.description.platforms?.map(
                    (platform, index) => (
                      <motion.div
                        key={platform}
                        initial={{ opacity: 0, x: 30, scale: 0.9 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.5,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        whileHover={{
                          x: -8,
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                        className="cursor-default"
                      >
                        <span className="text-white text-lg sm:text-xl lg:text-xl inline-flex items-center justify-center lg:justify-end">
                          <motion.span
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: 0.4 + index * 0.1,
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                            className="text-white mr-3 text-2xl"
                          >
                            •{" "}
                          </motion.span>
                          {platform}
                        </span>
                      </motion.div>
                    )
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.h3
                    className="text-white text-xl sm:text-2xl lg:text-2xl font-bold mb-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {currentCategory.description.title}
                  </motion.h3>
                  <motion.p
                    className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed "
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    {currentCategory.description.content}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceShowcase;
