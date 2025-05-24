"use client";
import SectionTwoPics from "@/components/section-two-pics";
import React from "react";

// web design page
import TwoImageWebDesign1 from "@/images/TwoImageWebDesign1.png";
import TwoImageWebDesign2 from "@/images/TwoImageWebDesign2.png";

// content creation page
import TwoImageContent1 from "@/images/TwoImageContent1.png";
import TwoImageContent2 from "@/images/TwoImageContent2.png";

// seo
import TwoImageSeo1 from "@/images/TwoImageSEO1.png";
import TwoImageSeo2 from "@/images/TwoImageSEO2.png";

// UI
import TwoImageUI1 from "@/images/TwoImageUI1.png";
import TwoImageUI2 from "@/images/TwoImageUI2.png";

// campaign
import TwoImageCampaign1 from "@/images/TwoImageCampaign1.png";
import TwoImageCampaign2 from "@/images/TwoImageCampaign2.png";

const page = () => {
  return (
    <div>
      {/* <SectionTwoPics
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
      /> */}
      {/* <SectionTwoPics
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
      /> */}
      {/* <SectionTwoPics
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
      </SectionTwoPics> */}
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
