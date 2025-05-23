import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "-100px 0px -100px 0px",
  });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Hover background variants with enhanced animation
  const hoverBackgroundVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotate: 2,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="bg-secondary my-6 w-full">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={cn(
          "flex flex-wrap justify-center items-center gap-4 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <motion.a
            key={idx}
            href={item?.link}
            variants={cardVariants}
            className="relative group block p-2 justify-center items-center w-1/5 max-2xl:w-1/4 max-xl:w-1/3 max-lg:w-full max-md:w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary via-primary to-primary/80 mx-auto block rounded-3xl shadow-2xl"
                  layoutId="hoverBackground"
                  variants={hoverBackgroundVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              )}
            </AnimatePresence>

            <Card className="h-[226px]">
              <CardTitle className="text-white flex items-center gap-2 justify-between my-0 py-11 pt-2">
                <motion.div
                  className="bg-gold rounded-full w-15 h-15 items-center flex justify-center rounded-bl-none shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: isInView ? 1 : 0,
                    rotate: isInView ? 0 : -180,
                  }}
                  transition={{
                    delay: 0.4 + idx * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.img
                    src={item.title.src}
                    alt="index"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{
                      delay: 0.6 + idx * 0.1,
                      duration: 0.3,
                    }}
                  />
                </motion.div>

                <motion.span
                  className="text-5xl font-extrabold text-[#FFFFFF14]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    x: isInView ? 0 : 20,
                  }}
                  transition={{
                    delay: 0.5 + idx * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "#FFFFFF25",
                    transition: { duration: 0.2 },
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </motion.span>
              </CardTitle>

              <CardDescription className="text-white !leading-relaxed text-2xl font-normal">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{
                    delay: 0.7 + idx * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {item.description}
                </motion.span>
              </CardDescription>
            </Card>
          </motion.a>
        ))}
      </motion.div>
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
    <motion.div
      className={cn(
        "rounded-2xl gap-2 h-full w-full overflow-hidden bg-transparent border border-[#FFFFFF45] dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 backdrop-blur-sm",
        className
      )}
      whileHover={{
        borderColor: "#CD9D5D",
        boxShadow: "0 10px 40px rgba(205, 157, 93, 0.1)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative z-50">
        <div className="py-7 px-5">{children}</div>
      </div>
    </motion.div>
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
    <div className={cn("text-zinc-100 font-bold tracking-wide", className)}>
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
        "text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
