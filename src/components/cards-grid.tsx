"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import HeadText from "./HeadText";

type Project = {
  icon: any;
  description: string;
  link: string;
};

interface ServiceShowcaseProps {
  projects: Project[];
  title: string;
  description: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function CardHoverEffectDemo({
  projects,
  title,
  description,
  className = "",
  descriptionClassName = "",
}: ServiceShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`items-center px-4 flex flex-col gap-8 py-12 my-5 text-center bg-secondary ${className}`}
    >
      <HeadText title={title} />

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className={`text-[#FFFFFF]/80 text-xl max-w-3xl mx-auto ${descriptionClassName}`}
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mx-auto px-8 -mt-9 pt-0 !bg-secondary w-full"
      >
        <HoverEffect
          items={projects.map((project) => ({
            title: project.icon,
            description: project.description,
            link: project.link,
          }))}
        />
      </motion.div>
    </motion.div>
  );
}
