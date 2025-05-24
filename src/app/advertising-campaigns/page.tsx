"use client";
import React from "react";
import campaigntHero from "@/images/campaignsBackground.png";
import ServiceCard from "@/components/service-card-header";
import WhatIsItSection from "@/components/whatIsItSection";
import WhatIsAdvertising from "@/images/WhatIsAdvertising.png";
import { CardHoverEffectDemo } from "@/components/cards-grid";
import {
  categoriesCampaigns,
  projectsCampaigns,
  WorkStepsWithUs,
} from "@/lib/data";
import ServiceShowcase from "@/components/service-showcase";
import TimeLineHorizontal from "@/components/TimeLineHorizontal";
import SectionTwoPics from "@/components/section-two-pics";
import TwoImageCampaign1 from "@/images/TwoImageCampaign1.png";
import TwoImageCampaign2 from "@/images/TwoImageCampaign2.png";

const page = () => {
  return (
    <div className="lg:space-y-16 space-y-6 overflow-x-hidden">
      <ServiceCard
        image={campaigntHero.src}
        title=" نتائــــــــج ســــــــريعة بذكــــــــاء اســــــتراتيجي"
        subtitle="الحمــــــــلات الإعـــــــــلانية "
        bgTitle="هل تبحث عن طريقة توصل بها لجمهورك المستهدف بأسرع وقت؟"
        description=" مع خدمة الحملات الإعلانية مع شركة Prime ، نوصلك لعملائك في المكان المناسب والوقت المناسب بأقل تكلفة وأعلى عائد!"
      />
      <WhatIsItSection
        image={WhatIsAdvertising.src}
        title="ما هي الحملات الإعلانية؟"
        button="اطلب الخدمة الان"
        desc={() => (
          <p className="text-white/80 sm:text-lg md:text-xl leading-relaxed">
            الإعلانات الممولة هي حملات إعلانية مدفوعة تُنفذ عبر منصات مثل
            Google، Instagram، Facebook، Snapchat، TikTok، وغيرها. هدفها الوصول
            السريع والمباشر للجمهور المناسب وتحقيق نتائج واضحة مثل زيارات،
            مبيعات، أو حتى رسائل واستفسارات.
          </p>
        )}
      />
      <CardHoverEffectDemo
        title="لماذا تختار خدمتنا لإنشاء أول حملاتك الإعلانية؟"
        description={
          <>
            نحن لا نقدم إعلانًا فقط… نحن نبني استراتيجية ذكية تستهدف عملائك
            الحقيقيين
            <br />
            وتحولهم إلى زبائن دائمين.
          </>
        }
        projects={projectsCampaigns}
      />
      <ServiceShowcase
        categories={categoriesCampaigns}
        title="أنـــــــواع الإعـــــلانات التي نقــــــدمها"
      />
      <TimeLineHorizontal
        items={WorkStepsWithUs}
        title="خطـــــوات العمـــــل معنــــــا"
      />
      <SectionTwoPics
        title="متى تبــــدأ حملـــة إعــــلانية ؟"
        features={[
          "عندك منتج أو خدمة تبغى توصل لأكبر عدد بسرعة؟",
          "تبغى نتائج واضحة قابلة للقياس؟",
          "تبغى توفر ميزانية وتستثمرها صح؟",
        ]}
        buttonText="اطلب الخدمة الان"
        mainImage={TwoImageCampaign1.src}
        logoImage={TwoImageCampaign2.src}
        buttonVariant="main"
        className="my-8"
      >
        <>
          <h2 className="text-2xl font-bold mb-4 text-white">
            إذن،{" "}
            <span className="text-gold">الإعلانــــــــات الممولــــــة</span>{" "}
            معانا هي خيارك الأول.
          </h2>
        </>
      </SectionTwoPics>
    </div>
  );
};

export default page;
