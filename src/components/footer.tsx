"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                variant="outline"
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-6xl mx-auto px-4 py-8"
        >
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-8">
            {/* Logo and About */}
            <div className="flex flex-col items-center md:items-start !space-y-8  md:space-y-4 text-center md:text-right">
              <Image
                src={logo}
                alt="Prime Marketing"
                width={150}
                height={50}
                className="mb-2 md:scale-100 scale-125"
              />
              <p className="text-sm">
                برايم هي وكالة تسويق إلكتروني متكاملة نقدم حلولًا إبداعية ونتائج
                ملموسة. نؤمن بأن كل علامة تجارية تستحق الظهور والتأثير.
              </p>
            </div>

            {/* Useful Links */}
            <div className="text-right">
              <h3 className="text-lg font-bold mb-4">روابط مفيدة</h3>
              <ul className="space-y-2 text-white/80">
                {[
                  "من نحن",
                  "خدماتنا التسويقية",
                  "المدونة والأخبار",
                  "فريق العمل",
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors "
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-right">
              <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-start gap-2 ">
                  <FaPhone className="text-white" />
                  <span>+966XXXXXXXX</span>
                </li>
                <li className="flex items-center justify-start gap-2 truncate">
                  <FaEnvelope className="text-white" />
                  <span>info@primemarketingco.com</span>
                </li>
                <li className="flex items-center justify-start gap-2">
                  <FaMapMarkerAlt className="text-white" />
                  <span>المملكة العربية السعودية - الرياض</span>
                </li>
              </ul>
            </div>

            {/* Quick Access */}
            <div className="text-right">
              <h3 className="text-lg font-bold mb-4">وصول سريع</h3>
              <ul className="space-y-2 text-white/80">
                {["المدونة", "الخدمات", "من نحن", "تواصل معنا"].map(
                  (link, i) => (
                    <li key={i}>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
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
