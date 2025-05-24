"use client";
import ServiceCard from "@/components/service-card-header";
import contentHero from "@/images/contentCreationBackground.png";
import WhatIsContentMaking from "@/images/WhatIsContentMaking.png";
import SectionTwoPics from "@/components/section-two-pics";
import React from "react";
import TwoImageContent1 from "@/images/TwoImageContent1.png";
import TwoImageContent2 from "@/images/TwoImageContent2.png";
import WhatIsItSection from "@/components/whatIsItSection";
import { CardHoverEffectDemo } from "@/components/cards-grid";
import {
  categoriesContentCreation,
  projectsContentCreation,
  StepsToContentCreaction,
} from "@/lib/data";
import ServiceShowcase from "@/components/service-showcase";
import TimeLineHorizontal from "@/components/TimeLineHorizontal";

const page = () => {
  return (
    <div className="lg:space-y-16 space-y-6 overflow-x-hidden">
      <ServiceCard
        image={contentHero.src}
        subtitle="صناعة المحتوى"
        title="محتــــــــوى يصنع الفــــــــــــرق"
        description=" في عالم رقمي مليء بالضوضاء، المحتوى هو الملك
 نحن نصنع لك محتوى يُلفت، يُقنع، ويُحوّل، لأننا نعرف كيف نحكي القصة الصح لجمهورك."
      />
      <WhatIsItSection
        image={WhatIsContentMaking.src}
        title="ماذا يعني صناعـــــــة محتــــــوى؟"
        button="ابدا مشروعك الان"
        desc={() => (
          <ul className=" list-disc list-inside text-base sm:text-xl xl:text-2xl space-y-3">
            <li>
              في عصر التحول الرقمي السريع، أول انطباع عن أي نشاط تجاري أو علامة
              تجارية بيبدأ من موقعها الإلكتروني.
            </li>
            <li>
              الموقع ليس مجرد تصميم أو كتالوج خدمات، ده ببساطة مكتبك الرقمي الذي
              يفتح 24 ساعة في اليوم، 7 أيام في الأسبوع.
            </li>
            <li>
              الموقع يقابل العملاء في أي وقت ومن أي مكان، وده بيساعد على زيادة
              فرص التواصل والبيع.
            </li>
            <li>
              سواء كنت صاحب شركة، متجر إلكتروني، مقدم خدمة فردية، أو حتى فنان
              بتعرض شغلك، موقعك الإلكتروني هو القناة التي تصل من خلالها صوتك و
              رسالتك للعالم.
            </li>
            <li>
              خدمة تصميم المواقع عندنا في Prime مبنية على مبدأ بسيط: &quot;كل موقع
              يجب ان يكون ذكي، مميز، وسهل الاستخدام.&quot;
            </li>
          </ul>
        )}
      />
      <CardHoverEffectDemo
        title=" لماذا تختارنا لصناعة المحتــــــــوى؟"
        description={<>أننا نفهم جمهورك قبل نكتب له:</>}
        projects={projectsContentCreation}
      />
      <ServiceShowcase
        categories={categoriesContentCreation}
        title="مــــــاذا تقــــدم لك شــــركة prime في هذه الخــــدمة؟"
      />
      <TimeLineHorizontal
        items={StepsToContentCreaction}
        title=" خطوات صناعة المحتــــــــــوى معنــــــــــا"
      />
      <SectionTwoPics
        title="ما هي النتيجة المتوقعة بعد انشاء محتوي معنا ؟"
        description="نقدم محتوى:"
        features={[
          "صيانة دورية للموقع",
          "تحديثات أمنية",
          "تحسينات دورية في الأداء",
          "تدريب كامل على استخدام لوحة التحكم",
          "دعم فني فوري عبر الإيميل أو الواتساب",
        ]}
        buttonText="اطلب الخدمة الان"
        mainImage={TwoImageContent1.src}
        logoImage={TwoImageContent2.src}
        buttonVariant="main"
        className="my-8"
      />
    </div>
  );
};
export default page;
