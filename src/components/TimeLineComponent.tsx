"use client";

import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HeadText from "./HeadText";

export default function TimeLineComponent({
  items,
  title,
}: {
  items: {
    id: number;
    title: string;
    image: StaticImageData;
    desc?: () => React.ReactNode;
  }[];
  title: string;
}) {
  const { refs: desktopRefs, inViews: desktopInView } = useMultipleInView<HTMLDivElement>(items.length);
  const { refs: mobileRefs, inViews: mobileInView } = useMultipleInView<HTMLDivElement>(items.length);

  return (
    <section className="section flex flex-col items-center justify-center space-y-16">
      <HeadText title={title} />

      {/* Desktop View */}
      <Timeline
        defaultValue={items.length}
        dir="ltr"
        className="container max-sm:hidden"
      >
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            step={item.id}
            className="w-[calc(50%-24px)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2 relative !pb-0"
          >
            <TimelineHeader>
              <TimelineSeparator />
              <motion.div
                ref={desktopRefs[index]}
                initial={{ opacity: 0, x: item.id % 2 === 0 ? -50 : 50 }}
                animate={
                  desktopInView[index]
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: item.id % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <TimelineDate
                  dir="rtl"
                  className="border border-gold/80 lg:min-h-[150px] rounded-md relative"
                >
                  <div
                    className={cn(
                      "absolute w-4 h-px bg-gold/80 top-1.5",
                      item.id % 2 === 0 ? "-right-4" : "-left-4"
                    )}
                  ></div>

                  <div className="w-full h-full flex flex-col p-5 gap-4">
                    <div dir="rtl" className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={32}
                        height={32}
                      />
                      <p className="text-white text-lg">{item.title}</p>
                    </div>
                    {item.desc && (
                      <div className="flex-1 flex flex-col justify-center">
                        {item.desc()}
                      </div>
                    )}
                  </div>
                </TimelineDate>
              </motion.div>
              <TimelineIndicator />
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Mobile View */}
      <div className="container space-y-3 sm:hidden">
        {items.map((item, index) => (
          <motion.div
            key={index}
            ref={mobileRefs[index]}
            initial={{ opacity: 0, y: 50 }}
            animate={
              mobileInView[index]
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            dir="rtl"
            className="border border-gold/80 lg:min-h-[150px] rounded-md relative"
          >
            <div className="w-full h-full flex flex-col p-5 gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={32}
                  height={32}
                />
                <p className="text-white text-lg">{item.title}</p>
              </div>
              {item.desc && (
                <div className="flex-1 flex flex-col justify-center">
                  {item.desc()}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function useMultipleInView<T extends HTMLElement>(length: number) {
  const refs = useRef<React.RefObject<T>[]>([]);
  const [inViews, setInViews] = useState<boolean[]>(Array(length).fill(false));

  // Initialize refs
  if (refs.current.length !== length) {
    refs.current = Array.from({ length }, () => React.createRef()) as React.RefObject<T>[];
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      const element = ref.current;
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInViews((prev) => {
              const updated = [...prev];
              updated[index] = entry.isIntersecting;
              return updated;
            });
          },
          { rootMargin: "0px 0px -100px 0px" }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [length]);

  return { refs: refs.current, inViews };
}
