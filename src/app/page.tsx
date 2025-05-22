'use client';
import WhyPrime from '@/components/why-prime';
import ServiceShowcase, { CategoryType } from '@/components/service-showcase';
import showcase1 from '@/images/showcase-1.png';
import showcase2 from '@/images/showcase-2.png';
import showcase3 from '@/images/showcase-3.png';
import showcase4 from '@/images/showcase-4.png';
import analyticsIcon from '@/images/icons/analyticsicon.png';
import boardicon from '@/images/icons/boardicon.png';
import searchicon from '@/images/icons/searchicon.png';
import noteicon from '@/images/icons/noteicon.png';
import penicon from '@/images/icons/penicon.png';
import { useEffect, useRef } from 'react';
import ScrollSnapSection from '@/components/scroll-snap-showcase';
import { motion } from 'framer-motion';
import { CardHoverEffectDemo } from '@/components/cards-grid';

const categories: CategoryType[] = [
  {
    id: 0,
    title: 'إعلانات زيادة المبيعات',
    image: showcase1,
    description: {
      title: 'هدفنا:',
      content: 'تحقيق المبيعات والمتجر الإلكتروني',
      platforms: ['فيسبوك facebook', 'انستغرام instagram', 'تيك توك Tik Tok'],
    },
  },
  {
    id: 1,
    title: 'إعلانات جمع بيانات العملاء',
    image: showcase2,
    description: {
      title: 'هدفنا:',
      content: 'جمع قاعدة بيانات عملاء مهتمين',
      platforms: ['فيسبوك facebook', 'انستغرام instagram', 'لينكد إن LinkedIn'],
    },
  },
  {
    id: 2,
    title: 'إعلانات التفاعل والتوعية',
    image: showcase3,
    description: {
      title: 'هدفنا:',
      content: 'زيادة التفاعل والوعي بالعلامة التجارية',
      platforms: ['فيسبوك facebook', 'انستغرام instagram', 'تويتر Twitter'],
    },
  },
  {
    id: 3,
    title: 'إعلانات البحث',
    image: showcase4,
    description: {
      title: 'هدفنا:',
      content: 'الوصول للعملاء المحتملين عبر البحث',
      platforms: ['جوجل Google', 'بينغ Bing', 'يوتيوب YouTube'],
    },
  },
];

const projects = [
  {
    icon: analyticsIcon,
    description: 'تحليل السوق والجمهور بدقة',
    link: 'https://stripe.com',
  },
  {
    icon: searchicon,
    description: 'تصميم اعلانات جذابة بصريا ونفسيا',
    link: 'https://google.com',
  },
  {
    icon: noteicon,
    description: 'تحديد افضل المنصات حسب مجال نشاطك',
    link: 'https://meta.com',
  },
  {
    icon: penicon,
    description: 'كتابة نَسَخ إعلانية تبيع وتُقنع',
    link: 'https://asd.com',
  },
  {
    icon: boardicon,
    description: 'تقسيم الميزانية لضمان أعلى عائد ممكن',
    link: 'https://microsoft.com',
  },
  {
    icon: penicon,
    description: 'متابعة مستمرة للحملات وتحسين الأداء',
    link: 'https://asdsa.com',
  },
  {
    icon: penicon,
    description: 'تقارير احترافية تبين كل ريال وين راح وإيش رجّع',
    link: 'https://kassd.com',
  },
];

export default function Home() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  const ref = useRef(null);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="min-h-screen">
        <ScrollSnapSection scrollToRef={ref} />
      </div>

      <div className="w-full" ref={ref}>
        <WhyPrime />
        <ServiceShowcase categories={categories} />
        <div className="w-full bg-secondary">
          <CardHoverEffectDemo projects={projects} />
        </div>
      </div>
    </div>
  );
}
