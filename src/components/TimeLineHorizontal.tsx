"use client";

import HeadText from "./HeadText";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import TimeLineComponent, { useMultipleInView } from "./TimeLineComponent";

export default function TimeLineHorizontal({
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
  const { refs, inViews } = useMultipleInView<HTMLDivElement>(items.length);

  return (
    <section className="section container flex flex-col items-center justify-center space-y-16">
      {/* Desktop */}
      <div className="w-full max-lg:hidden space-y-10 flex flex-col items-center">
        <HeadText title={title} />
        <div className="relative w-full h-[350px] flex flex-col justify-center">
          {/* Line */}
          <div className="absolute w-full h-px bg-gold"></div>
          <div className="absolute w-2 h-2 bg-gold right-0 rounded-full"></div>
          <div className="absolute w-2 h-2 bg-gold left-0 rounded-full"></div>

          {items.map((item, i) => (
            <motion.div
              key={item.id}
              ref={refs[i]}
              initial={{ opacity: 0, x: item.id % 2 === 0 ? -50 : 50 }}
              animate={
                inViews[i]
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: item.id % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={cn(
                "absolute flex flex-col items-center justify-center top-1/2",
                item.id % 2 === 0 ? "-translate-y-full mt-2.5" : "-mt-2.5"
              )}
              style={{
                right: `${(i * 100) / items.length}%`,
                flexDirection: item.id % 2 === 0 ? "column-reverse" : "column",
              }}
            >
              <div className="w-5 h-5 bg-gold rounded-full border-2 border-primary"></div>
              <div className="w-px h-12 bg-gold"></div>
              <div className="p-5 rounded-md border border-gold/60">
                <div dir="rtl" className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                  <p className="text-white xl:text-lg">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden w-full">
        <TimeLineComponent items={items} title={title} />
      </div>
    </section>
  );
}
