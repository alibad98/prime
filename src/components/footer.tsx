"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopyright,
} from "react-icons/fa";
import { Separator } from "./ui/separator";
import doorOpen from "@/images/doorOpen.png";
import logo from "@/images/logo/Orginal-Logo.png";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <footer className="w-full bg-primary text-white">
      {/* Feature Card */}
      <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-4 h-full">
        <div className="rounded-lg overflow-hidden relative h-full">
          <div className="absolute inset-0 z-0 h-full">
            <Image
              src={doorOpen}
              alt="Footer background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 text-black"
          >
            {/* Image Content side */}
            <div className="flex flex-col items-center md:items-start text-right space-y-4 md:space-y-6 flex-1">
              <h2 className="text-2xl md:text-4xl font-bold">
                جاهز تكبر علامتك التجارية؟
              </h2>
              <p className="text-sm md:text-base text-[#001018B5] max-w-md">
                احجز استشارتك المجانية مع فريق برايم وابدأ مشوارك الرقمي بثقة.
              </p>
              <Button
                variant="main"
                size="lg"
                className="bg-white text-primary hover:bg-primary hover:text-white transition-colors border-none px-12 rounded-r-full rounded-bl-full"
              >
                <span className="text-base font-medium">احجز الآن</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-secondary w-full -mt-16 pt-14">
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="max-w-6xl mx-auto px-4 py-8"
        >
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-8">
            {/* Logo and About - Staggered animation */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              className="flex flex-col items-center md:items-start !space-y-8 md:space-y-4 text-center md:text-right"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={logo}
                  alt="Prime Marketing"
                  width={150}
                  height={50}
                  className="mb-2 md:scale-100 scale-125"
                />
              </motion.div>
              <motion.p
                className="text-sm"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.3,
                      type: "spring",
                      stiffness: 50,
                    },
                  },
                }}
              >
                برايم هي وكالة تسويق إلكتروني متكاملة نقدم حلولًا إبداعية ونتائج
                ملموسة. نؤمن بأن كل علامة تجارية تستحق الظهور والتأثير.
              </motion.p>
            </motion.div>

            {/* Useful Links - Fade in with slight bounce */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                  },
                },
              }}
              className="text-right"
            >
              <motion.h3
                className="text-lg font-bold mb-4"
                whileHover={{ scale: 1.02 }}
              >
                روابط مفيدة
              </motion.h3>
              <ul className="space-y-2 text-white/80">
                {[
                  "من نحن",
                  "خدماتنا التسويقية",
                  "المدونة والأخبار",
                  "فريق العمل",
                ].map((link, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.1 * i,
                        },
                      },
                    }}
                    whileHover={{ x: -5 }}
                  >
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info - Slide up with fade */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.6,
                  },
                },
              }}
              className="text-right"
            >
              <motion.h3
                className="text-lg font-bold mb-4"
                whileHover={{ scale: 1.02 }}
              >
                تواصل معنا
              </motion.h3>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-center justify-start gap-2"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.2 },
                    },
                  }}
                >
                  <motion.div whileHover={{ rotate: 10 }}>
                    <FaPhone className="text-white" />
                  </motion.div>
                  <span>+966XXXXXXXX</span>
                </motion.li>
                <motion.li
                  className="flex items-center justify-start gap-2 truncate"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.3 },
                    },
                  }}
                >
                  <motion.div whileHover={{ rotate: 10 }}>
                    <FaEnvelope className="text-white" />
                  </motion.div>
                  <span>info@primemarketingco.com</span>
                </motion.li>
                <motion.li
                  className="flex items-center justify-start gap-2"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.4 },
                    },
                  }}
                >
                  <motion.div whileHover={{ rotate: 10 }}>
                    <FaMapMarkerAlt className="text-white" />
                  </motion.div>
                  <span>المملكة العربية السعودية - الرياض</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Quick Access - Staggered fade in */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="text-right"
            >
              <motion.h3
                className="text-lg font-bold mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
              >
                وصول سريع
              </motion.h3>
              <ul className="space-y-2 text-white/80">
                {["المدونة", "الخدمات", "من نحن", "تواصل معنا"].map(
                  (link, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: 30 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                          },
                        },
                      }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Separator and Copyright */}
        <Separator className="bg-white/5 max-w-[90%] mx-auto" />
        <div className="bg-secondary py-4">
          <div className="max-w-6xl mx-auto px-4 flex justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <FaCopyright size={14} />
              <span>جميع الحقوق محفوظة لبرايم {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
