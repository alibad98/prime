"use client";
import ServiceShowcase, { CategoryType } from "@/components/service-showcase";
import React from "react";

// page 5 Campaigns
import showcase1 from "@/images/showcase-1.png";
import showcase2 from "@/images/showcase-2.png";
import showcase3 from "@/images/showcase-3.png";
import showcase4 from "@/images/showcase-4.png";

// page 5 webSesign
import rectangleWeb1 from "@/images/RectangleWeb1.png";
import rectangleWeb2 from "@/images/RectangleWeb2.png";
import rectangleWeb3 from "@/images/RectangleWeb3.png";
import rectangleWeb4 from "@/images/RectangleWeb4.png";
import rectangleWeb5 from "@/images/RectangleWeb5.png";

// page 4 Content Creation
import rectangleContent1 from "@/images/RectangleContent1.png";
import rectangleContent2 from "@/images/RectangleContent2.png";
import rectangleContent3 from "@/images/RectangleContent3.png";
import rectangleContent4 from "@/images/RectangleContent4.png";
import rectangleContent5 from "@/images/RectangleContent5.png";
import rectangleContent6 from "@/images/RectangleContent6.png";

// page 3 SEO
import rectangleSEO1 from "@/images/RectangleSEO1.png";
import rectangleSEO2 from "@/images/RectangleSEO2.png";
import rectangleSEO3 from "@/images/RectangleSEO3.png";
import rectangleSEO4 from "@/images/RectangleSEO4.png";
import rectangleSEO5 from "@/images/RectangleSEO5.png";

// page 2 UI/UX
import rectangleUI1 from "@/images/RectangleUI1.png";
import rectangleUI2 from "@/images/RectangleUI2.png";
import rectangleUI3 from "@/images/RectangleUI3.png";
import rectangleUI4 from "@/images/RectangleUI4.png";
import rectangleUI5 from "@/images/RectangleUI5.png";

// page 1 Campaigns
const categoriesCampaigns: CategoryType[] = [
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

// page 5
const categoriesWebDesign: CategoryType[] = [
  {
    id: 0,
    title: "مواقع الشركات",
    image: rectangleWeb1,
    description: {
      title: "هدفنا:",
      content:
        "تصميم يعكس احترافية شركتك، يعرض خدماتك وإنجازاتك، ويسهّل التواصل مع عملائك.",
    },
  },
  {
    id: 1,
    title: "المتاجر الإلكترونية",
    image: rectangleWeb2,
    description: {
      title: "هدفنا:",
      content:
        "سواء كان عندك منتجات ملموسة أو رقمية، بنصمم متجر إلكتروني متكامل مزود بسلة مشتريات، بوابات دفع، لوحة تحكم، ونظام إدارة مخزون.",
    },
  },
  {
    id: 2,
    title: "مواقع تقديم خدمات",
    image: rectangleWeb3,
    description: {
      title: "هدفنا:",
      content:
        "لو بتقدم خدمات مثل الاستشارات، الحجز، الدورات التدريبية أو غيرها، بنصمم موقع يشرح خدماتك ويوفر وسيلة تواصل أو حجز سهلة.",
    },
  },
  {
    id: 3,
    title: "مواقع شخصية و بورتفوليو",
    image: rectangleWeb4,
    description: {
      title: "هدفنا:",
      content:
        "لو مصور، مصمم، مطور، أو أي فنان، بنصمم موقع يعرض أعمالك بشكل أنيق يبرز مهاراتك.",
    },
  },
  {
    id: 4,
    title: "مدونات ومجلات إلكترونية",
    image: rectangleWeb5,
    description: {
      title: "هدفنا:",
      content:
        "اذا كان لديك محتوى بتقدمه لجمهور، بنوفر تصميم مريح للقراءة، منظم وسهل التفاعل.",
    },
  },
];

// page 4
const categoriesContentCreation: CategoryType[] = [
  {
    id: 0,
    title: "محتوى سوشيال ميديا",
    image: rectangleContent1,
    description: {
      title: "هدفنا:",
      content: "كتابة بوستات جذابة، أفكار Reels، ستوريات تفاعلية",
    },
  },
  {
    id: 1,
    title: "محتوى تعريفي",
    image: rectangleContent2,
    description: {
      title: "هدفنا:",
      content:
        "سواء كان عندك منتجات ملموسة أو رقمية، بنصمم متجر إلكتروني متكامل مزود بسلة مشتريات، بوابات دفع، لوحة تحكم، ونظام إدارة مخزون.",
    },
  },
  {
    id: 2,
    title: "محتوى إبداعي",
    image: rectangleContent3,
    description: {
      title: "هدفنا:",
      content: "سيناريوهات، سكربتات فيديو، قصص مصورة",
    },
  },
  {
    id: 3,
    title: "محتوى SEO",
    image: rectangleContent4,
    description: {
      title: "هدفنا:",
      content: "مقالات للمدونة تساعد في الظهور بمحركات البحث",
    },
  },
  {
    id: 4,
    title: "محتوى إعلاني",
    image: rectangleContent5,
    description: {
      title: "هدفنا:",
      content: "نصوص لإعلانات مدفوعة تقنع وتبيع",
    },
  },
  {
    id: 5,
    title: "محتوى تعليمي",
    image: rectangleContent6,
    description: {
      title: "هدفنا:",
      content: "منشورات تثقيفية أو نصوص دورات إلكترونية",
    },
  },
];

// page 3 SEO
const categoriesSEO: CategoryType[] = [
  {
    id: 0,
    title: "سيو داخلي (On-page)",
    image: rectangleSEO1,
    description: {
      title: "هدفنا:",
      content: "تحسين العناوين، الوصف، الروابط، الصور، تجربة المستخدم",
    },
  },
  {
    id: 1,
    title: "سيو تقني (Technical SEO)",
    image: rectangleSEO2,
    description: {
      title: "هدفنا:",
      content: "تحسين سرعة الموقع، التوافق مع الجوال، خريطة الموقع، وغيرها",
    },
  },
  {
    id: 2,
    title: "سيو خارجي (Off-page)",
    image: rectangleSEO3,
    description: {
      title: "هدفنا:",
      content: "بناء روابط خارجية (Backlinks) وتحسين سمعة الموقع",
    },
  },
  {
    id: 3,
    title: "سيو محلي (Local SEO)",
    image: rectangleSEO4,
    description: {
      title: "هدفنا:",
      content: "تحسين ظهورك في Google Maps ونتائج البحث المحلية",
    },
  },
  {
    id: 4,
    title: "سيو المتاجر الإلكترونية ",
    image: rectangleSEO5,
    description: {
      title: "هدفنا:",
      content: "تحسين صفحات المنتجات، الفلاتر، وصف التصنيفات، الخ",
    },
  },
];

// page 2 UI/UX
const categoriesUI: CategoryType[] = [
  {
    id: 0,
    title: "واجهة المستخدم",
    image: rectangleUI1,
    description: {
      title: "هدفنا:",
      content: " تصميم واجهات فريدة و مخصصة حسب مجالك",
    },
  },
  {
    id: 1,
    title: "تجربة المستخدم",
    image: rectangleUI2,
    description: {
      title: "هدفنا:",
      content: "دراسة سلوك المستخدم وتجربته (UX Basics)",
    },
  },
  {
    id: 2,
    title: "ديزاين سيستم",
    image: rectangleUI3,
    description: {
      title: "هدفنا:",
      content: "الالتزام بالمعايير العالمية في التصميم",
    },
  },
  {
    id: 3,
    title: "ملفات التصميم",
    image: rectangleUI4,
    description: {
      title: "هدفنا:",
      content: "توفير ملفات التصميم بصيغ متعددة (Figma / XD)",
    },
  },
  {
    id: 4,
    title: "تطوير التصميم",
    image: rectangleUI5,
    description: {
      title: "هدفنا:",
      content: "قابلية التطوير وربط التصميم البرمجة بسهولة",
    },
  },
];

const page = () => {
  return (
    <div>
      {/* page 5 */}
      {/* <ServiceShowcase
        categories={categoriesWebDesign}
        title="مــــــاذا تقــــدم لك شــــركة prime في هذه الخــــدمة؟"
      /> */}

      {/* page 4 */}
      {/* <ServiceShowcase
        categories={categoriesContentCreation}
        title="مــــــاذا تقــــدم لك شــــركة prime في هذه الخــــدمة؟"
      /> */}

      {/* page 3 */}
      {/* <ServiceShowcase
        categories={categoriesSEO}
        title="مــــــاذا تقــــدم لك شــــركة prime في هذه الخــــدمة؟"
      /> */}

      {/* page 2 UI/UX */}
      <ServiceShowcase
        categories={categoriesUI}
        title="مــــــاذا تقــــدم لك شــــركة prime في هذه الخــــدمة؟"
      />

      {/* page 1  */}
      <ServiceShowcase
        categories={categoriesCampaigns}
        title="أنـــــــواع الإعـــــلانات التي نقــــــدمها"
      />
    </div>
  );
};

export default page;
