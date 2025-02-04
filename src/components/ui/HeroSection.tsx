"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/hero-highlight";


export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="pt-[200px] text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
       Agriculture Land & Farmer Certificate by Farmerzone...!!!{" "} <br />
        <Highlight className="text-black dark:text-white">
        "THE BEST INVESTMENT ON EARTH IS EARTH"
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
