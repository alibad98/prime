import WhyPrime from "@/components/why-prime";
import ServiceShowcase, { CategoryType } from "@/components/service-showcase";
import showcase1 from "@/images/showcase-1.png";
import showcase2 from "@/images/showcase-2.png";
import showcase3 from "@/images/showcase-3.png";
import showcase4 from "@/images/showcase-4.png";
import ServicesGrid from "@/components/services-grid";
import OurNumbers from "@/components/OurNumbers";
import Portfolio from "@/components/portfolio";
import Reviews from "@/components/reviews";
import TimeLineComponent from "@/components/TimeLineComponent";

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

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center lg:space-y-16 space-y-6">
      <WhyPrime />
      <ServicesGrid/>
      <OurNumbers/>
      <Portfolio/>
      <Reviews/>
      <TimeLineComponent/>
      <ServiceShowcase categories={categories} />
    </div>
  );
}
