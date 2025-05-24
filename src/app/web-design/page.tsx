"use client";
import ServiceCard from "@/components/service-card-header";
import React from "react";
import webHero from "@/images/webDevelopmentBackground.png";
import WhatIsWebDevelopment from "@/images/WhatIsWebDevelopment.png";
import WhatIsItSection from "@/components/whatIsItSection";
import { CardHoverEffectDemo } from "@/components/cards-grid";
import {
  categoriesWebDesign,
  projectsWebDesign,
  StepsToCreateWebsite,
} from "@/lib/data";
import ServiceShowcase from "@/components/service-showcase";
import TimeLineComponent from "@/components/TimeLineComponent";
import SectionTwoPics from "@/components/section-two-pics";
import TwoImageWebDesign1 from "@/images/TwoImageWebDesign1.png";
import TwoImageWebDesign2 from "@/images/TwoImageWebDesign2.png";

const page = () => {
  return (
    <div className="lg:space-y-16 space-y-6 overflow-x-hidden">
      <ServiceCard
        image={webHero.src}
        title="حضــــــــور رقمـــي يمـــــــيزك عن الجميـــــــــع"
        subtitle="أفضل شركة تصميم موقع الكتروني احترافي مع Prime"
        description="احصل على موقع مخصص يعكس هوية علامتك التجارية، يقدم تجربة مستخدم سلسة، ويضمن لك ظهور متميز على محركات البحث. فريقنا يرافقك من الفكرة حتى الإطلاق والدعم المستمر."
      />

      <WhatIsItSection
        image={WhatIsWebDevelopment.src}
        title="لماذا الموقع الإلكتروني مهم لنشاطك؟"
        button="ابدا مشروعك الان"
        desc={() => (
          <ul className=" list-disc list-inside text-base sm:text-xl space-y-4">
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
        title="لمـــــــاذا تختــــــــــار Prime؟"
        description={
          <>
            في Prime، لا نقدم تصاميم جاهزة فقط أو حلول عامة. نحن نبني كل موقع من
            الصفر، حتي يعبر عن هويتك ويحقق أهدافك الرقمية. نعمل معاك خطوة بخطوة،
            من الفكرة إلى الإطلاق، ونبني موقعك كأنه مشروع خاص بينا.{" "}
          </>
        }
        descriptionClassName="max-w-5xl"
        projects={projectsWebDesign}
      />
      <ServiceShowcase
        categories={categoriesWebDesign}
        title="مــــــاذا تقــــدم لك شــــركة prime في هذه الخــــدمة؟"
      />
      <TimeLineComponent
        items={StepsToCreateWebsite}
        title="خطوات إنشاء الموقـــــــــع مع Prime"
      />
      <SectionTwoPics
        title="خدمة شاملة بعد التسليـــــــم"
        description="عشان نضمن استمرارية نجاح موقعك، نقدم خدمات ما بعد التسليم، منها:"
        features={[
          "صيانة دورية للموقع",
          "تحديثات أمنية",
          "تحسينات دورية في الأداء",
          "تدريب كامل على استخدام لوحة التحكم",
          "دعم فني فوري عبر الإيميل أو الواتساب",
        ]}
        buttonText="اطلب الخدمة الان"
        mainImage={TwoImageWebDesign1.src}
        logoImage={TwoImageWebDesign2.src}
        buttonVariant="main"
        className="my-8"
      />
    </div>
  );
};

export default page;
