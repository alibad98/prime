import ServiceCard from "@/components/service-card-header";
import React from "react";
import webHero from "@/images/webDevelopmentBackground.png";
import contentHero from "@/images/contentCreationBackground.png";
import seoHero from "@/images/seoBackground.png";
import campaigntHero from "@/images/campaignsBackground.png";
import UIHero from "@/images/uiDesignBackground.png";

const page = () => {
  return (
    <div>
      <ServiceCard
        image={webHero.src}
        title="حضــــــــور رقمـــي يمـــــــيزك عن الجميـــــــــع"
        subtitle="أفضل شركة تصميم موقع الكتروني احترافي مع Prime"
        description="احصل على موقع مخصص يعكس هوية علامتك التجارية، يقدم تجربة مستخدم سلسة، ويضمن لك ظهور متميز على محركات البحث. فريقنا يرافقك من الفكرة حتى الإطلاق والدعم المستمر."
      />
      <ServiceCard
        image={contentHero.src}
        subtitle="صناعة المحتوى"
        title="محتــــــــوى يصنع الفــــــــــــرق"
        description=" في عالم رقمي مليء بالضوضاء، المحتوى هو الملك
 نحن نصنع لك محتوى يُلفت، يُقنع، ويُحوّل، لأننا نعرف كيف نحكي القصة الصح لجمهورك."
      />
      <ServiceCard
        image={seoHero.src}
        title="أفضـــــــل شــــــركة سيــــــو بالسعــــــــودية."
        subtitle="خدمة تحسين محركات البحث (SEO)"
        description="هنا دور خدمة السيو (SEO)، نعمل على رفع ظهور موقعك في نتائج Google ونصل الي  من دون إعلان… بل عن طريق بحثهم !"
      />
      <ServiceCard
        image={UIHero.src}
        title="لأن الانطبــــــاع الأول يـــــــدوم"
        subtitle="تصميم واجهة المستخدم (UI) "
        description="نحن نساعدك على تحويل أفكارك إلى واجهات أنيقة، سهلة الاستخدام، و متوافقة مع هوية علامتك التجارية."
      />
      <ServiceCard
        image={campaigntHero.src}
        title=" نتائــــــــج ســــــــريعة بذكــــــــاء اســــــتراتيجي"
        subtitle="الحمــــــــلات الإعـــــــــلانية "
        bgTitle="هل تبحث عن طريقة توصل بها لجمهورك المستهدف بأسرع وقت؟"
        description=" مع خدمة الحملات الإعلانية مع شركة Prime ، نوصلك لعملائك في المكان المناسب والوقت المناسب بأقل تكلفة وأعلى عائد!"
      />
    </div>
  );
};

export default page;
