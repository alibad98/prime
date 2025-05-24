"use client";
import ServiceCard from "@/components/service-card-header";
import ServiceShowcase from "@/components/service-showcase";
import { categoriesSEO, projectsSEO, StepsToSEO } from "@/lib/data";
import seoHero from "@/images/seoBackground.png";
import WhatIsItSection from "@/components/whatIsItSection";
import WhatIsSEO from "@/images/WhatIsSEO.png";
import { CardHoverEffectDemo } from "@/components/cards-grid";
import TimeLineHorizontal from "@/components/TimeLineHorizontal";
import SectionTwoPics from "@/components/section-two-pics";
import TwoImageSeo1 from "@/images/TwoImageSEO1.png";
import TwoImageSeo2 from "@/images/TwoImageSEO2.png";

const page = () => {
  return (
    <div className="lg:space-y-16 space-y-6 overflow-x-hidden">
      <ServiceCard
        image={seoHero.src}
        title="أفضـــــــل شــــــركة سيــــــو بالسعــــــــودية."
        subtitle="خدمة تحسين محركات البحث (SEO)"
        description="هنا دور خدمة السيو (SEO)، نعمل على رفع ظهور موقعك في نتائج Google ونصل الي  من دون إعلان… بل عن طريق بحثهم !"
      />
      <WhatIsItSection
        image={WhatIsSEO.src}
        title="ماذا يعني تحسين محركات البحث SEO ؟"
        button="ابدا مشروعك الان"
        desc={() => (
          <div className="space-y-4">
            <p className="text-white/80 sm:text-lg md:text-xl leading-relaxed">
              تحسين محركات البحث هو مجموعة تقنيات تساعد موقعك على الظهور في أول
              نتائج البحث لما الناس يدورون على خدماتك أو منتجاتك.
            </p>
            <ul className=" list-disc list-inside">
              <li>زيادة الزيارات</li>
              <li> زيادة الثقة</li>
              <li> وزيادة المبيعات!</li>
            </ul>
          </div>
        )}
      />
      <CardHoverEffectDemo
        title="لماذا تختار شركة Prime  لتحسين موقعك؟"
        description={
          <>
            حن نعمل على السيو بذكاء واستراتيجية !
            <br />
            نقدم لك خطة مخصصة لمجال موقعك وجمهورك، مع متابعة وتحسين شهري مستمر.{" "}
          </>
        }
        projects={projectsSEO}
      />
      <ServiceShowcase
        categories={categoriesSEO}
        title="مــــــاذا تقــــدم لك شــــركة prime في هذه الخــــدمة؟"
      />

      <TimeLineHorizontal
        items={StepsToSEO}
        title="خطـــــوات العمـــــل معنــــــا"
      />
      <SectionTwoPics
        title="متى تحتاج الي السيو لمشروعــــــك؟"
        features={[
          "عندك موقع إلكتروني؟",
          "تريد مبيعات أو زيارات مستمرة بدون إعلان؟",
          "تبغى تظهر في النتائج الأولى في مجالك؟",
        ]}
        buttonText="اطلب الخدمة الان"
        mainImage={TwoImageSeo1.src}
        logoImage={TwoImageSeo2.src}
        buttonVariant="main"
        className="my-8"
      >
        <>
          <h2 className="text-2xl font-bold mb-4 text-white">
            إذا <span className="text-gold">السيـــــــو</span> هو الحل الذكــي
            والفعــــــــــال!
          </h2>
        </>
      </SectionTwoPics>
    </div>
  );
};

export default page;
