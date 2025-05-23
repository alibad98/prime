import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import HeadText from "./HeadText";
import stepsOfBuildingWebsite1 from "@/images/stepsOfBuildingWebsite1.svg";
import stepsOfBuildingWebsite2 from "@/images/stepsOfBuildingWebsite2.svg";
import stepsOfBuildingWebsite3 from "@/images/stepsOfBuildingWebsite3.svg";
import stepsOfBuildingWebsite4 from "@/images/stepsOfBuildingWebsite4.svg";
import stepsOfBuildingWebsite5 from "@/images/stepsOfBuildingWebsite5.svg";
import stepsOfBuildingWebsite6 from "@/images/stepsOfBuildingWebsite6.svg";
import stepsOfBuildingWebsite7 from "@/images/stepsOfBuildingWebsite7.svg";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: " جلسة فهم وتحليل",
    image: stepsOfBuildingWebsite1,
    desc: () => (
      <p className="text-white/80 text-base">
        نبدأ بجلسة تعارف نفهم فيها نشاطك، رؤيتك، الجمهور المستهدف، وأهداف
        الموقع. بنحلل منافسيك في السوق (بدون نسخ) ونعمل تصور أولي لطبيعة المحتوى
        والشكل.
      </p>
    ),
  },
  {
    id: 2,
    title: "إعداد هيكل الموقع وتجربة المستخدم",
    image: stepsOfBuildingWebsite2,
    desc: () => (
      <p className="text-white/80 text-base">
        لنرسم خريطة الموقع (Site Map) ونصمم تدفق الزائر داخل الصفحات. الهدف هو
        سهولة الوصول للمعلومة وتحقيق أقصى استفادة من كل زيارة.
      </p>
    ),
  },
  {
    id: 3,
    title: "تصميم الواجهة البصرية",
    image: stepsOfBuildingWebsite3,
    desc: () => (
      <p className="text-white/80 text-base">
        تصميم واجهة بصرية مبهرة، بألوان متناسقة وخطوط مقروءة وصور جذابة. التصميم
        بيكون متوافق مع البراند بتاعك، وبيعكس الهوية بشكل احترافي.
      </p>
    ),
  },
  {
    id: 4,
    title: " تطوير وبرمجة الموقع",
    image: stepsOfBuildingWebsite4,
    desc: () => (
      <div>
        <p className="text-white/80 text-base">باستخدام أحدث التقنيات:</p>
        <ul className="list-disc ml-5 text-white/80 text-sm list-inside mt-3">
          <li>HTML5 / CSS3 / JavaScript</li>
          <li>أنظمة إدارة المحتوى مثل WordPress أو حلول برمجية مخصصة</li>
          <li>تكامل مع أنظمة دفع إلكتروني، بوابات حجز، قواعد بيانات، وغيرها</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: "تهيئة الموقع لمحركات البحث (SEO)",
    image: stepsOfBuildingWebsite5,
    desc: () => (
      <div>
        <p className="text-white/80 text-base">
          بنبني الموقع بأسس SEO من أول لحظة:
        </p>
        <ul className="list-disc ml-5 text-white/80 text-sm list-inside mt-3 flex flex-wrap gap-x-3">
          <li>روابط نظيفة وسريعة </li>
          <li>بنية صفحات منظمة</li>
          <li>توافق كامل مع الموبايل</li>
          <li>كلمات مفتاحية مدروسة</li>
          <li>سرعة تحميل عالية</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    title: "اختبار الموقع وتجربته",
    image: stepsOfBuildingWebsite6,
    desc: () => (
      <p className="text-white/80 text-base">
        قبل الإطلاق، نختبر الموقع على مختلف الأجهزة والمتصفحات. نتأكد إن كل
        الصفحات تعمل بدون أخطاء بأقصى كفاءة ممكنة.
      </p>
    ),
  },
  {
    id: 7,
    title: "الإطلاق الرسمي والدعم المستمر",
    image: stepsOfBuildingWebsite7,
    desc: () => (
      <p className="text-white/80 text-base">
        بعد الإطلاق، نتابع معك الأداء، نرد على استفساراتك، وننفذ أي تعديلات أو
        تطويرات مستقبلية.
      </p>
    ),
  },
];

export default function TimeLineHorizontal() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });
  return (
    <section className="section container flex flex-col items-center justify-center space-y-16">
      <HeadText title="خطوات إنشاء الموقـــــــــع مع Prime" />
      <div className="relative w-full h-[700px]">
        {/* line  */}
        <div className="absolute w-full h-px bg-gold"></div>
        


      </div>
    </section>
  );
}
