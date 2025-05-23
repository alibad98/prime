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
import stepsOfBuildingWebsite1 from "@/images/stepsOfBuildingWebsite1.svg";
import stepsOfBuildingWebsite2 from "@/images/stepsOfBuildingWebsite2.svg";
import stepsOfBuildingWebsite3 from "@/images/stepsOfBuildingWebsite3.svg";
import stepsOfBuildingWebsite4 from "@/images/stepsOfBuildingWebsite4.svg";
import stepsOfBuildingWebsite5 from "@/images/stepsOfBuildingWebsite5.svg";
import stepsOfBuildingWebsite6 from "@/images/stepsOfBuildingWebsite6.svg";
import stepsOfBuildingWebsite7 from "@/images/stepsOfBuildingWebsite7.svg";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import HeadText from "./HeadText";



export default function TimeLineComponent({ items,title }:{ items: {
  id: number;
  title: string;
  image: StaticImageData;
  desc?: () => React.ReactNode;
}[],title:string}) {
  // Create arrays of refs for each item
  const desktopRefs = useRef(items.map(() => React.createRef()));
  const mobileRefs = useRef(items.map(() => React.createRef()));

  // Create arrays to track if each item is in view
  const desktopInView = items.map((_, index) =>
    useInView(desktopRefs.current[index] as React.RefObject<HTMLDivElement>, {
      once: false,
      margin: "0px 0px -100px 0px",
    })
  );

  const mobileInView = items.map((_, index) =>
    useInView(mobileRefs.current[index] as React.RefObject<HTMLDivElement>, {
      once: false,
      margin: "0px 0px -100px 0px",
    })
  );

  return (
    <section className="section flex flex-col items-center justify-center space-y-16">
      <HeadText title={title} />
      {/* Desktop View */}
      <Timeline
        defaultValue={items.length}
        dir="ltr"
        className="container max-sm:hidden"
      >
        {items.map((item, index) => {
          return (
            <TimelineItem
              key={item.id}
              step={item.id}
              className="w-[calc(50%-24px)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2 relative !pb-0"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <motion.div
                  ref={
                    desktopRefs.current[
                      index
                    ] as React.RefObject<HTMLDivElement>
                  }
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
          );
        })}
      </Timeline>

      {/* Mobile View */}
      <div className="container space-y-3 sm:hidden">
        {items.map((item, index) => {
          return (
            <motion.div
              key={index}
              ref={mobileRefs.current[index] as React.RefObject<HTMLDivElement>}
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
          );
        })}
      </div>
    </section>
  );
}
