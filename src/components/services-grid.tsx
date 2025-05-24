"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import seoBackground from "@/images/seoBackground.png";
import campaignsBackground from "@/images/campaignsBackground.png";
import socialMediaManagment from "@/images/socialMediaManagment.png";
import contentCreationBackground from "@/images/contentCreationBackground.png";
import uiDesignBackground from "@/images/uiDesignBackground.png";
import motionGraphicsBackground from "@/images/motionGraphicsBackground.png";
import graphicDesignBackground from "@/images/graphicDesignBackground.png";
import ecommerceManagmentBackground from "@/images/ecommerceManagmentBackground.png";
import clientsAcountManagmentBackground from "@/images/clientsAcountManagmentBackground.png";
import webDevelopmentBackground from "@/images/webDevelopmentBackground.png";
import { cn } from "@/lib/utils";
import HeadText from "./HeadText";

const services = [
  {
    title: "تحسين محركات البحث (SEO)",
    desc: "نساعد موقعك يتصدر نتائج البحث في جوجل ويوصل لعملاء فعليين يبحثوا عن خدماتك.",
    img: seoBackground.src,
  },
  {
    title: "الحملات الإعلانية",
    desc: "نصمم وننفذ حملات إعلانية على جوجل، فيسبوك، وإنستجرام لتحقق أقصى عائد على الاستثمار.",
    img: campaignsBackground.src,
  },
  {
    title: "إدارة المنصات الإلكترونية",
    desc: "من تخطيط المحتوى للرد على التعليقات، نضمن لك حضور رقمي متفاعل واحترافي.",
    img: socialMediaManagment.src,
  },
  {
    title: "صناعة المحتوى",
    desc: "نكتب محتوى جذاب ومؤثر يعبر عن هويتك ويقنع جمهورك يتفاعل معك.",
    img: contentCreationBackground.src,
  },
  {
    title: "تصميم واجهة المستخدم (UI)",
    desc: "نصمم واجهات سهلة وجذابة تخلي تجربة المستخدم ممتعة وتزيد المبيعات.",
    img: uiDesignBackground.src,
  },
  {
    title: " موشن جرافيك",
    desc: "نعرض أفكارك بطريقة مرئية مبتكرة تحكي القصة وتجذب الانتباه في ثوانٍ.",
    img: motionGraphicsBackground.src,
  },
  {
    title: " التصميم الجرافيكي",
    desc: "هوية بصرية كاملة، بوستات، إعلانات... كل تصميم يعبر عنك ويوصل رسالتك بوضوح.",
    img: graphicDesignBackground.src,
  },
  {
    title: " إدارة المتاجر",
    desc: "ندير متجرك الإلكتروني من A إلى Z: منتجات، أسعار، محتوى، حملات، وخدمة عملاء.",
    img: ecommerceManagmentBackground.src,
  },
  {
    title: " إدارة حسابات العملاء",
    desc: "نتواصل مع عملائك، نحل مشاكلهم، ونحول كل تواصل إلى فرصة بيع وولاء.",
    img: clientsAcountManagmentBackground.src,
  },
  {
    title: " إنشاء المواقع الإلكترونية",
    desc: "نصمم لك موقع احترافي وسريع ومتوافق مع جميع الأجهزة يعرّف الناس عليك صح.",
    img: webDevelopmentBackground.src,
  },
];

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: false, margin: "-200px"});

  return (
    <section className="w-full space-y-10 flex items-center justify-center flex-col overflow-x-hidden">
      <HeadText title="خدماتنــــــــا" />
      <div
        ref={gridRef} // ✅ Apply the ref here
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full max-md:!bg-none"
        style={{
          backgroundImage: `url('${services[hoveredCard].img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={cn(
              "xl:h-[300px] lg:h-[150px] max-sm:h-[150px] text-white border border-l-0 border-[#FFFFFF14] p-6 flex flex-col justify-end gap-4 bg-[#00000020] hover:bg-[#00000099] transition-all duration-300 cursor-pointer sm:![background-image:none]",
              i === 9
                ? "lg:col-span-3 xl:col-span-1 lg:text-center xl:text-start"
                : "col-span-1"
            )}
            style={{
              backgroundImage: `url('${service.img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(0)}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default ServicesGrid;
