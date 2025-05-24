"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeadText from "./HeadText";
import checkIcon from "@/images/checkIcon.svg";
import ArabManInFuture from "@/images/ArabManInFuture.png";
import PrimeLogo from "@/images/PrimeLogo.png";
import Image from "next/image";
import { Button } from "./ui/button";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WhyPrime = () => {
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
        <HeadText title="لماذا تختار برايــــــــــــــــــــم؟" />

        <motion.p
          className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          مع برايم، نأخذ فكرتك ونحوّلها إلى قصة نجاح على الإنترنت. من
          الاستراتيجية وحتى التنفيذ، فريقنا يدير كل تفاصيل التسويق باحتراف.
        </motion.p>

        <motion.ul
          className="space-y-5 text-white text-lg sm:text-xl md:text-2xl"
          variants={listVariants}
        >
          {[
            "حلول مخصصة تناسب نشاطــــــــــــك",
            "خبرة حقيقيــــة في السوق العربي والعالمـــــــي",
            "نشتغـــــل بالأرقــــــــــام والإبداع معًــــــــــا",
            "نرافقــــك من أول خطوة حتــــى تحقيق النجــــــــــاح",
          ].map((text, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <Image src={checkIcon} alt="Check Icon" width={25} height={24} />
              <span>{text}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="https://api.whatsapp.com/send?phone=966559713394" target="_blank" rel="noopener noreferrer">
          <Button variant="main">
            <span className="text-base sm:text-lg md:text-xl font-medium">
              احجز استشارتك المجانية
            </span>
          </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative flex justify-center lg:justify-end items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-[500px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
          <Image
            src={ArabManInFuture}
            alt="Arab Man In Future"
            className="w-full h-auto"
            priority
          />
          <motion.div
            className="absolute top-1/2 -right-2 sm:-right-10 xl:-right-20 w-[120px] sm:w-[220px] md:w-[250px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src={PrimeLogo}
              alt="Prime Logo"
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhyPrime;
