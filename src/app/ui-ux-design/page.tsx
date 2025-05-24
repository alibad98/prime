"use client";
import React from "react";
import { CardHoverEffectDemo } from "@/components/cards-grid";
import ServiceCard from "@/components/service-card-header";
import UIHero from "@/images/uiDesignBackground.png";
import WhatIsUI from "@/images/WhatIsUI.png";
import TwoImageUI1 from "@/images/TwoImageUI1.png";
import TwoImageUI2 from "@/images/TwoImageUI2.png";
import WhatIsItSection from "@/components/whatIsItSection";
import ServiceShowcase from "@/components/service-showcase";
import { categoriesUI, projectsUI, StepsToCreateUI } from "@/lib/data";
import TimeLineHorizontal from "@/components/TimeLineHorizontal";
import SectionTwoPics from "@/components/section-two-pics";

const page = () => {
  return (
    <div className="lg:space-y-16 space-y-6 overflow-x-hidden">
      <ServiceCard
        image={UIHero.src}
        title="لأن الانطبــــــاع الأول يـــــــدوم"
        subtitle="تصميم واجهة المستخدم (UI) "
        description="نحن نساعدك على تحويل أفكارك إلى واجهات أنيقة، سهلة الاستخدام، و متوافقة مع هوية علامتك التجارية."
      />
      <WhatIsItSection
        image={WhatIsUI.src}
        title="ما هي واجهة المستخدم (UI)؟"
        button="اطلب الخدمة الان"
        desc={() => (
          <div className="space-y-4">
            <p className="text-white/80 sm:text-lg md:text-xl leading-relaxed">
              واجهة المستخدم هي كل ما يراه ويتفاعل معه الزائر عند استخدامه لموقع
              إلكتروني أو تطبيق تشمل:
            </p>
            <ul className=" list-disc list-inside grid grid-cols-2">
              <li>الألوان</li>
              <li>القوائم</li>
              <li>الخطوط</li>
              <li>الصفحات</li>
              <li>الأزرار</li>
              <li>الأيقونات</li>
            </ul>
          </div>
        )}
      />
      <CardHoverEffectDemo
        title="لماذا تحتاج إلى تصميم واجهة مستخدم احترافية؟"
        description={
          <>
            نحن لا نقدم إعلانًا فقط… نحن نبني استراتيجية ذكية تستهدف عملائك
            الحقيقيين
            <br />
            وتحولهم إلى زبائن دائمين.{" "}
          </>
        }
        projects={projectsUI}
      />
      <ServiceShowcase
        categories={categoriesUI}
        title="مــــــاذا تقــــدم لك شــــركة prime في هذه الخــــدمة؟"
      />
      <TimeLineHorizontal
        items={StepsToCreateUI}
        title="خطواتنــــــــــــا في تصميم واجهــــــــــــة المستخدم"
      />
      <SectionTwoPics
        title="لمن نقدم هذه الخدمــــــــــــة؟"
        features={[
          "المواقع الإلكترونية (الشركات، المتاجر، المدونات...)",
          "التطبيقات الذكية (iOS و Android)",
          "لوحات التحكم وأنظمة ERP",
          "الصفحات التعريفية وصفحات الهبوط",
        ]}
        buttonText="اطلب الخدمة الان"
        mainImage={TwoImageUI1.src}
        logoImage={TwoImageUI2.src}
        buttonVariant="main"
        className="my-8"
      >
        <>
          <h2 className="text-2xl font-semibold mb-3 text-gold">
             لأن التصميم ليس مجرد جمال بصري...
          </h2>
          <h2 className="text-2xl font-medium mb-4 text-white/80">
            بل هو أداة تسويقية تؤثر في قرارات العملاء وتجعل تجربتهم معك مريحة
            واحترافية وممتعة.{" "}
          </h2>
        </>
      </SectionTwoPics>
    </div>
  );
};

export default page;
