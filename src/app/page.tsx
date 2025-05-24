"use client";
import WhyPrime from "@/components/why-prime";
import ServiceShowcase, { CategoryType } from "@/components/service-showcase";
import showcase1 from "@/images/showcase-1.png";
import showcase2 from "@/images/showcase-2.png";
import showcase3 from "@/images/showcase-3.png";
import showcase4 from "@/images/showcase-4.png";
import analyticsIcon from "@/images/icons/analyticsicon.png";
import boardicon from "@/images/icons/boardicon.png";
import searchicon from "@/images/icons/searchicon.png";
import noteicon from "@/images/icons/noteicon.png";
import penicon from "@/images/icons/penicon.png";
import { useEffect, useRef } from "react";
import ScrollSnapSection from "@/components/scroll-snap-showcase";
import { motion } from "framer-motion";
import { CardHoverEffectDemo } from "@/components/cards-grid";
import ServicesGrid from "@/components/services-grid";
import OurNumbers from "@/components/OurNumbers";
import Portfolio from "@/components/portfolio";
import Reviews from "@/components/reviews";
import TimeLineComponent from "@/components/TimeLineComponent";
import TimeLineHorizontal from "@/components/TimeLineHorizontal";
import {
  StepsToContentCreaction,
  StepsToCreateUI,
  StepsToCreateWebsite,
  WorkStepsWithUs,
} from "@/lib/data";
import WhatIsItSection from "@/components/whatIsItSection";
import WhatIsAdvertising from "@/images/WhatIsAdvertising.png";
import WhatIsUI from "@/images/WhatIsUI.png";
import WhatIsSEO from "@/images/WhatIsSEO.png";
import WhatIsContentMaking from "@/images/WhatIsContentMaking.png";
import WhatIsWebDevelopment from "@/images/WhatIsWebDevelopment.png";

const categories: CategoryType[] = [
  {
    id: 0,
    title: "إعلانات زيادة المبيعات",
    image: showcase1,
    description: {
      title: "هدفنا:",
      content: "تحقيق المبيعات والمتجر الإلكتروني",
      platforms: ["فيسبوك facebook", "انستغرام instagram", "تيك توك Tik Tok"],
    },
  },
  {
    id: 1,
    title: "إعلانات جمع بيانات العملاء",
    image: showcase2,
    description: {
      title: "هدفنا:",
      content: "جمع قاعدة بيانات عملاء مهتمين",
      platforms: ["فيسبوك facebook", "انستغرام instagram", "لينكد إن LinkedIn"],
    },
  },
  {
    id: 2,
    title: "إعلانات التفاعل والتوعية",
    image: showcase3,
    description: {
      title: "هدفنا:",
      content: "زيادة التفاعل والوعي بالعلامة التجارية",
      platforms: ["فيسبوك facebook", "انستغرام instagram", "تويتر Twitter"],
    },
  },
  {
    id: 3,
    title: "إعلانات البحث",
    image: showcase4,
    description: {
      title: "هدفنا:",
      content: "الوصول للعملاء المحتملين عبر البحث",
      platforms: ["جوجل Google", "بينغ Bing", "يوتيوب YouTube"],
    },
  },
];

const projects = [
  {
    icon: analyticsIcon,
    description: "تحليل السوق والجمهور بدقة",
    link: "https://stripe.com",
  },
  {
    icon: searchicon,
    description: "تصميم اعلانات جذابة بصريا ونفسيا",
    link: "https://google.com",
  },
  {
    icon: noteicon,
    description: "تحديد افضل المنصات حسب مجال نشاطك",
    link: "https://meta.com",
  },
  {
    icon: penicon,
    description: "كتابة نَسَخ إعلانية تبيع وتُقنع",
    link: "https://asd.com",
  },
  {
    icon: boardicon,
    description: "تقسيم الميزانية لضمان أعلى عائد ممكن",
    link: "https://microsoft.com",
  },
  {
    icon: penicon,
    description: "متابعة مستمرة للحملات وتحسين الأداء",
    link: "https://asdsa.com",
  },
  {
    icon: penicon,
    description: "تقارير احترافية تبين كل ريال وين راح وإيش رجّع",
    link: "https://kassd.com",
  },
];

export default function Home() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  const ref = useRef(null);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center lg:space-y-16 space-y-6 ">
      <div className="min-h-screen">
        <ScrollSnapSection scrollToRef={ref} />
      </div>

      <div className="w-full " ref={ref}>
        <WhatIsItSection
          image={WhatIsContentMaking.src}
          title="ماذا يعني صناعـــــــة محتــــــوى؟"
          button="ابدا مشروعك الان"
          desc={() => (
            <ul className=" list-disc list-inside text-base sm:text-xl xl:text-2xl space-y-3">
              <li>
                في عصر التحول الرقمي السريع، أول انطباع عن أي نشاط تجاري أو
                علامة تجارية بيبدأ من موقعها الإلكتروني.
              </li>
              <li>
                الموقع ليس مجرد تصميم أو كتالوج خدمات، ده ببساطة مكتبك الرقمي
                الذي يفتح 24 ساعة في اليوم، 7 أيام في الأسبوع.
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
                خدمة تصميم المواقع عندنا في Prime مبنية على مبدأ بسيط: "كل موقع
                يجب ان يكون ذكي، مميز، وسهل الاستخدام."
              </li>
            </ul>
          )}
        />
        <WhatIsItSection
          image={WhatIsUI.src}
          title="ما هي واجهة المستخدم (UI)؟"
          button="اطلب الخدمة الان"
          desc={() => (
            <div className="space-y-4">
              <p className="text-white/80 sm:text-lg md:text-xl leading-relaxed">
                واجهة المستخدم هي كل ما يراه ويتفاعل معه الزائر عند استخدامه
                لموقع إلكتروني أو تطبيق تشمل:
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
        <WhatIsItSection
          image={WhatIsSEO.src}
          title="ماذا يعني تحسين محركات البحث SEO ؟"
          button="ابدا مشروعك الان"
          desc={() => (
            <div className="space-y-4">
              <p className="text-white/80 sm:text-lg md:text-xl leading-relaxed">
                تحسين محركات البحث هو مجموعة تقنيات تساعد موقعك على الظهور في
                أول نتائج البحث لما الناس يدورون على خدماتك أو منتجاتك.
              </p>
              <ul className=" list-disc list-inside">
                <li>زيادة الزيارات</li>
                <li> زيادة الثقة</li>
                <li> وزيادة المبيعات!</li>
              </ul>
            </div>
          )}
        />
        <WhatIsItSection
          image={WhatIsAdvertising.src}
          title="ما هي الحملات الإعلانية؟"
          button="اطلب الخدمة الان"
          desc={() => (
            <p className="text-white/80 sm:text-lg md:text-xl leading-relaxed">
              الإعلانات الممولة هي حملات إعلانية مدفوعة تُنفذ عبر منصات مثل
              Google، Instagram، Facebook، Snapchat، TikTok، وغيرها. هدفها
              الوصول السريع والمباشر للجمهور المناسب وتحقيق نتائج واضحة مثل
              زيارات، مبيعات، أو حتى رسائل واستفسارات.
            </p>
          )}
        />
        <WhyPrime />

        <ServiceShowcase categories={categories} />
        <div className="w-full bg-secondary">
          <CardHoverEffectDemo
            title="لماذا تحتاج إلى تصميم واجهة مستخدم احترافية؟"
            description={
              <>
                نحن لا نقدم إعلانًا فقط… نحن نبني استراتيجية ذكية تستهدف عملائك
                الحقيقيين
                <br />
                وتحولهم إلى زبائن دائمين.
              </>
            }
            projects={projects}
          />
        </div>
        <ServicesGrid />
        <OurNumbers />
        <Reviews />

        <Portfolio />
        <TimeLineComponent
          items={StepsToCreateWebsite}
          title="خطوات إنشاء الموقـــــــــع مع Prime"
        />
        <TimeLineHorizontal
          items={WorkStepsWithUs}
          title="خطـــــوات العمـــــل معنــــــا"
        />
        <TimeLineHorizontal
          items={StepsToCreateUI}
          title="خطواتنــــــــــــا في تصميم واجهــــــــــــة المستخدم"
        />
        <TimeLineHorizontal
          items={StepsToContentCreaction}
          title=" خطوات صناعة المحتــــــــــوى معنــــــــــا"
        />
      </div>
    </div>
  );
}
