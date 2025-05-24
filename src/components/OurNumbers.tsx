"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeadText from "./HeadText";
import CountUp from "react-countup";

const countItems = [
  {
    label: "عدد المشاريع",
    value:366,
  },
  {
    label: "عدد العملاء",
    value: 294,
  },
  {
    label: "عدد المبيعات",
    value: 753,
  },
];

const OurNumbers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-secondary w-full overflow-x-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container flex flex-col items-center justify-center gap-16"
      >
        <HeadText title="ارقامنــــــــا تتحـــــــدث" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {countItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className={`${
                i !== 2 ? "sm:border-l border-[#FFFFFF2E]" : ""
              } flex items-center justify-center flex-col text-center px-4 py-6`}
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-gold">
                <CountUp
                  enableScrollSpy
                  scrollSpyDelay={500}
                  end={item.value}
                  duration={2}
                />
                +
              </h3>
              <p className="text-lg sm:text-xl text-white">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurNumbers;
