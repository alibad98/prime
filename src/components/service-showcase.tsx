"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export type CategoryType = {
  id: number;
  title: string;
  image: StaticImageData;
  description: {
    title: string;
    content: string;
    platforms: string[];
  };
};

type ServiceShowcaseProps = {
  categories: CategoryType[];
  initialActiveCategory?: number;
};

const fadeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({
  categories,
  initialActiveCategory = 0,
}) => {
  const [activeCategory, setActiveCategory] = useState(initialActiveCategory);

  const handleCategoryChange = (categoryId: number) => {
    if (categoryId === activeCategory) return;
    setActiveCategory(categoryId);
  };

  const currentCategory = categories[activeCategory];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 h-full min-h-96">
        {/* Buttons */}
        <div className="lg:col-span-1">
          <div className="relative flex flex-col h-full">
            <AnimatePresence>
              <motion.div
                layoutId="blob"
                className="absolute left-0 w-full bg-[#CD9D5D] z-0"
                style={{
                  top: `${activeCategory * (100 / categories.length)}%`,
                  height: `${100 / categories.length}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            </AnimatePresence>

            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "relative z-10 flex-1 w-full text-right justify-start rounded-none my-0 border-x-0 py-4 px-6 border-t-0 border-[#FFFFFF14] transition-all duration-300 h-full",
                  activeCategory === category.id
                    ? "bg-[#CD9D5D] hover:bg-transparent text-white"
                    : "bg-transparent border-gray-600 text-white hover:text-[#CD9D5D] hover:bg-secondary/90"
                )}
              >
                <span className="text-lg font-medium leading-relaxed">
                  {category.title}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-1">
          <div className="relative w-full h-80 lg:h-full bg-transparent overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={currentCategory.image}
                  alt={currentCategory.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id + "-desc"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full flex flex-col justify-center text-right bg-primary px-12 py-6 space-y-6"
            >
              <div className="space-y-3">
                {currentCategory.description.platforms.map(
                  (platform, index) => (
                    <motion.div
                      key={platform}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2 + index * 0.05,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <span className="text-white sm:text-lg ">• {platform}</span>
                    </motion.div>
                  )
                )}
              </div>
              <div>
                <h3 className="text-white sm:text-xl text-lg font-bold mb-2">
                  {currentCategory.description.title}
                </h3>
                <p className="text-white sm:text-xl text-lg leading-relaxed">
                  {currentCategory.description.content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;
