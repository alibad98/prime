"use client";
import { CardHoverEffectDemo } from "@/components/cards-grid";
import React from "react";
import analyticsIcon from "@/images/icons/analyticsicon.png";
import boardicon from "@/images/icons/boardicon.png";
import searchicon from "@/images/icons/searchicon.png";
import noteicon from "@/images/icons/noteicon.png";
import penicon from "@/images/icons/penicon.png";
// page 5
import webDesign1 from "@/images/icons/uxIcon1.svg";
import webDesign2 from "@/images/icons/easilikeIcon2.svg";
import webDesign3 from "@/images/icons/lampIcon3.svg";
import webDesign4 from "@/images/icons/mobileWebIcon4.svg";
import webDesign5 from "@/images/icons/rocketIcon5.svg";
import webDesign6 from "@/images/icons/searchIcon6.svg";
import webDesign7 from "@/images/icons/dashboardIcon7.svg";
import webDesign8 from "@/images/icons/costumerSerciceIcon8.svg";

// page 4
import contentIcon1 from "@/images/icons/contentIcon1.svg";
import contentIcon2 from "@/images/icons/contentIcon2.svg";
import contentIcon3 from "@/images/icons/contentIcon3.svg";
import contentIcon4 from "@/images/icons/contentIcon4.svg";
import contentIcon5 from "@/images/icons/contentIcon5.svg";

// page 3
import seoIcon1 from "@/images/icons/seoIcon1.svg";
import seoIcon2 from "@/images/icons/seoIcon2.svg";
import seoIcon3 from "@/images/icons/seoIcon3.svg";
import seoIcon4 from "@/images/icons/seoIcon4.svg";
import seoIcon5 from "@/images/icons/seoIcon5.svg";
import seoIcon6 from "@/images/icons/seoIcon6.svg";

// page 2
import UIIcon1 from "@/images/icons/UIIIcon1.svg";
import UIIcon2 from "@/images/icons/UIIcon2.svg";
import UIIcon3 from "@/images/icons/UIIcon3.svg";
import UIIcon4 from "@/images/icons/UIIcon4.svg";
import UIIcon5 from "@/images/icons/UIIcon5.svg";

// page 1
import campaignIcon1 from "@/images/icons/campaignsIcon1.svg";
import campaignIcon2 from "@/images/icons/campaignsIcon2.svg";
import campaignIcon3 from "@/images/icons/campaignsIcon3.svg";
import campaignIcon4 from "@/images/icons/campaignsIcon4.svg";
import campaignIcon5 from "@/images/icons/campaignsIcon5.svg";
import campaignIcon6 from "@/images/icons/campaignsIcon6.svg";
import campaignIcon7 from "@/images/icons/campaignsIcon7.svg";

// page 5
const projectsWebDesign = [
  {
    icon: webDesign1,
    description: "تصميم مخصص بالكامل يعكس هويتك التجارية.",
    link: "/",
  },
  {
    icon: webDesign2,
    description: "تجربة مستخدم سلسة (UX) تساعد الزائر يصل للمعلومة بسرعة.",
    link: "/",
  },
  {
    icon: webDesign3,
    description: "واجهة جذابة (UI) تشد الانتباه وتعكس الاحترافية.",
    link: "/",
  },
  {
    icon: webDesign4,
    description: "تصميم متجاوب بالكامل مع الموبايل، التابلت، والكمبيوتر.",
    link: "/",
  },
  {
    icon: webDesign5,
    description: "سرعة تحميل ممتازة لضمان تجربة مثالية للمستخدم.",
    link: "/",
  },
  {
    icon: webDesign6,
    description: "تهيئة متقدمة لمحركات البحث (SEO).",
    link: "/",
  },
  {
    icon: webDesign7,
    description: "لوحة تحكم سهلة لإدارة موقعك بدون تعقيد.",
    link: "/",
  },
  {
    icon: webDesign8,
    description: "خدمة دعم فني وتدريب بعد التسليم.",
    link: "/",
  },
];

// page 4
const projectsContentCreation = [
  {
    icon: contentIcon1,
    description: "نحلل سلوك المتابعين واهتماماتهم",
    link: "/",
  },
  {
    icon: contentIcon2,
    description: "نعرف كيف نحول أي منتج لقصة ممتعة",
    link: "/",
  },
  {
    icon: contentIcon3,
    description: "تصميم مخصص بالكامل يعكس هويتك التجارية.",
    link: "/",
  },
  {
    icon: contentIcon4,
    description: "نصمم ونصور بشكل متناسق مع هويتك",
    link: "/",
  },
  {
    icon: contentIcon5,
    description: "ونصنع محتوى له هدف: تفاعل أو مبيعات أو توعية",
    link: "/",
  },
];

// page 3
const projectsSEO = [
  {
    icon: seoIcon1,
    description: "تحليل تقني شامل لموقعك",
    link: "/",
  },
  {
    icon: seoIcon2,
    description: "بحث الكلمات المفتاحية بدقة",
    link: "/",
  },
  {
    icon: seoIcon3,
    description: "تحسين المحتوى والكلمات في صفحات الموقع",
    link: "/",
  },
  {
    icon: seoIcon4,
    description: " سيو محلي لظهورك في خرائط Google",
    link: "/",
  },
  {
    icon: seoIcon5,
    description: "بناء باك لينك بجودة عالية وبطريقة آمنة",
    link: "/",
  },
  {
    icon: seoIcon6,
    description: "تقارير شهرية توضح التقدم والكلمات اللي ترتفع",
    link: "/",
  },
];

// page 2
const projectsUI = [
  {
    icon: UIIcon1,
    description: "لترك انطباع أول قوي لدى الزائر",
    link: "/",
  },
  {
    icon: UIIcon2,
    description: "لتعزيز هوية علامتك التجارية",
    link: "/",
  },
  {
    icon: UIIcon3,
    description: "لتقديم تجربة استخدام مريحة وسلسة",
    link: "/",
  },
  {
    icon: UIIcon4,
    description: "لزيادة التفاعل والمبيعات",
    link: "/",
  },
  {
    icon: UIIcon5,
    description: "لتقليل معدل الارتداد من موقعك أو تطبيقك",
    link: "/",
  },
];

// page 1
const projectsCampaigns = [
  {
    icon: campaignIcon1,
    description: "تحليل السوق والجمهور بدقة",
    link: "/",
  },
  {
    icon: campaignIcon2,
    description: "تصميم اعلانات جذابة بصريا ونفسيا",
    link: "/",
  },
  {
    icon: campaignIcon3,
    description: "تحديد افضل المنصات حسب مجال نشاطك",
    link: "/",
  },
  {
    icon: campaignIcon4,
    description: "كتابة نَسَخ إعلانية تبيع وتُقنع",
    link: "/",
  },
  {
    icon: campaignIcon5,
    description: "تقسيم الميزانية لضمان أعلى عائد ممكن",
    link: "/",
  },
  {
    icon: campaignIcon6,
    description: "متابعة مستمرة للحملات وتحسين الأداء",
    link: "/",
  },
  {
    icon: campaignIcon7,
    description: "تقارير احترافية تبين كل ريال وين راح وإيش رجّع",
    link: "/",
  },
];

const page = () => {
  return (
    <div>
      {/* page 5 */}
      {/* <CardHoverEffectDemo
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
      /> */}

      {/* page 4 */}
      {/* <CardHoverEffectDemo
        title=" لماذا تختارنا لصناعة المحتــــــــوى؟"
        description={<>أننا نفهم جمهورك قبل نكتب له:</>}
        projects={projectsContentCreation}
      /> */}

      {/* page 3 */}
      {/* <CardHoverEffectDemo
        title="لماذا تختار شركة Prime  لتحسين موقعك؟"
        description={
          <>
            حن نعمل على السيو بذكاء واستراتيجية !
            <br />
            نقدم لك خطة مخصصة لمجال موقعك وجمهورك، مع متابعة وتحسين شهري مستمر.{" "}
          </>
        }
        projects={projectsSEO}
      /> */}

      {/* page 2 */}
      {/* <CardHoverEffectDemo
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
      /> */}

      {/* page 1 */}
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
    </div>
  );
};

export default page;
