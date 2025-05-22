'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
import { HoverEffect } from './ui/card-hover-effect';
import HeadText from './HeadText';

type Project = {
  icon: any;
  description: string;
  link: string;
};

interface CardHoverEffectProps {
  projects: Project[];
}

export function CardHoverEffectDemo({ projects }: CardHoverEffectProps) {
  // const controls = useAnimation();
  // const { ref, inView } = useInView({
  //   triggerOnce: false,
  //   rootMargin: '-100px',
  // });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start({
  //       opacity: 1,
  //       y: 0,
  //       transition: { duration: 0.6, ease: 'easeOut' },
  //     });
  //   }
  // }, [inView, controls]);

  return (
    <div className="items-center flex flex-col gap-8 py-12 my-5 text-center">
      <HeadText title="لماذا تحتاج إلى تصميم واجهة مستخدم احترافية؟" />
      <motion.p
        // ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[#FFFFFF]/80 text-xl max-w-3xl mx-auto"
      >
        نحن لا نقدم إعلانًا فقط… نحن نبني استراتيجية ذكية تستهدف عملائك
        الحقيقيين
        <br />
        وتحولهم إلى زبائن دائمين.
      </motion.p>

      <div className="mx-auto px-8 -mt-9 pt-0 !bg-secondary">
        <HoverEffect
          items={projects.map((project) => ({
            title: project.icon, // because HoverEffect expects `title`
            description: project.description,
            link: project.link,
          }))}
        />
      </div>
    </div>
  );
}
