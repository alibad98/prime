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
import qrcode from "@/images/qrcode.jpeg";
import logo from "@/images/logo/Orginal-Logo.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const path = usePathname() as keyof typeof content;
  const content = {
    "/": {
      title: "جاهز تكبر علامتك التجارية؟",
      desc: "احجز استشارتك المجانية مع فريق برايم وابدأ مشوارك الرقمي بثقة.",
      button: "احجز الآن",
    },
    "/advertising-campaigns": {
      title: "جاهز تبدأ وتخلي إعلانك يشتغل لك وانت مرتاح؟",
      desc: "احجز مكالمتك المجانية معنا اليوم وخلينا نخطط لحملتك الإعلانية باحترافية",
      button: "تواصل معنا الآن",
    },
    "/content-creation": {
      title:
        " جاهز تبدأ تبني هويتـــــــك وتكســـــــب جمهورك بالمحتوى الصـــــــــح؟",
      desc: "تواصل معنا الآن واحصل على استشارة مجانية",
      button: "اتصل بنا الآن ",
    },
    "/seo-services": {
      title:
        "تواصــــــــــل معنا الآن وابدأ خطـــــــــــــة السيو المناسبــــــــــــــــة معك !",
      desc: "",
      button: "اتصل بنا الآن",
    },
    "/ui-ux-design": {
      title: " هل ترغب في واجهة تُعبّر عنك وتجذب جمهورك؟",
      desc: "تواصل معنا اليوم، ودعنا نصمم لك واجهة استثنائية ترتقي بتجربتك الرقمية.",
      button: "تواصل معنا الآن",
    },
    "/web-design": {
      title: "ابدأ موقعــــــــك الآن مع Prime",
      desc: "اذا كنت تبدأ مشروعك أو بتجدد حضورك الرقمي، فريق Prime جاهز يصمم لك موقع يعبر عنك و يوصل رسالتك بأفضل صورة.",
      button: "اتصل بنا الآن للحصول على استشارة مجانية",
    },
  };
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
              <h2 className="text-2xl md:text-4xl font-bold lg:w-4/5 leading-relaxed text-center">
                {content[path]?.title || content["/"].title}
              </h2>
              {content[path]?.desc && (
                <p className="text-sm md:text-base text-[#001018B5] max-w-md text-center">
                  {content[path].desc}
                </p>
              )}
              {content[path]?.button && (
                <a
                  href="https://api.whatsapp.com/send?phone=966559713394"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="main"
                    size="lg"
                    className="bg-white text-primary hover:bg-primary hover:text-white transition-colors border-none px-12 rounded-r-full rounded-bl-full"
                  >
                    <span className="text-base font-medium">
                      {content[path].button}
                    </span>
                  </Button>
                </a>
              )}
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
                  <a target="_blank" dir="ltr" href="tel:+966559713394">
                    +966 55 971 3394
                  </a>
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
                  <a target="_blank" href="mailto:info@primemarketingco.com">
                    info@primemarketingco.com
                  </a>
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
                {[
                  {
                    label: "الحملات الإعلانية",
                    link: "/advertising-campaigns",
                  },
                  { label: "تصميم واجهة المستخدم (UI)", link: "/ui-ux-design" },
                  {
                    label: "خدمة تحسين محركات البحث (SEO)",
                    link: "/seo-services",
                  },
                  { label: "صناعة المحتوى", link: "/content-creation" },
                  { label: "تصميم موقع الكتروني احترافي", link: "/web-design" },
                ].map((item, i) => (
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
                      href={item.link}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
              {/* <motion.h3
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
              </motion.h3> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linktr.ee/PrimeAgency.sa"
                title="Prime Agency Social Media Links"
              >
                <Image
                  src={qrcode}
                  alt="QR Code"
                  width={150}
                  height={150}
                  className="shadow-lg transition-transform hover:scale-105"
                />
              </a>
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
