import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: any;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-secondary my-6 w-full">
      <div
        className={cn(
          'flex flex-wrap justify-center items-center gap-4 py-10',
          className
        )}
      >
        {items.map((item, idx) => (
          <a
            href={item?.link}
            key={item?.link}
            className="relative group block p-2 justify-center items-center w-1/5 max-2xl:w-1/4 max-xl:w-1/3 max-lg:w-full max-md:w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-primary dark:bg-transparent mx-auto  block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className=" h-[226px] ">
              <CardTitle className="text-white flex items-center gap-2 justify-between my-0 py-11 pt-2">
                <div className="bg-gold rounded-full w-15 h-15 items-center flex justify-center rounded-bl-none">
                  <img src={item.title.src} alt="index" />
                </div>
                <span className="  text-5xl font-extrabold text-[#FFFFFF14] ">
                  {0}
                  {idx + 1}
                </span>
              </CardTitle>
              <CardDescription className="text-white text-2xl  font-normal">
                {item.description}
              </CardDescription>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl gap-2 h-full w-full overflow-hidden bg-transparent border border-[#FFFFFF45] dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className="relative z-50">
        <div className="py-7 px-5">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn('text-zinc-100 font-bold tracking-wide ', className)}>
      {children}
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};
