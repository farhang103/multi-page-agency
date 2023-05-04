"use client";
import { motion } from "framer-motion";

export default function AboutHero({}) {
  return (
    <section className=" grid auto-rows-auto bg-peach md:rounded-2xl md:shadow-[0px_40px_80px_rgba(93,2,2,0.3)] lg:grid-cols-[auto_476px]">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="row-span-1 row-start-2 flex flex-col items-center gap-6 bg-peach bg-[url('../assets/about/mobile/bg-pattern-hero-about-mobile.svg')] bg-[position:right_top_-140px] bg-no-repeat py-20 px-6 text-center text-white md:gap-8 md:rounded-b-2xl md:bg-[url('../assets/about/desktop/bg-pattern-hero-about-desktop.svg')] md:bg-[position:left_-121px_top_-430px] md:px-16 md:py-14 lg:col-span-1 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:items-start lg:justify-center lg:rounded-r-none lg:rounded-l-2xl lg:bg-[position:center_bottom] lg:px-24 lg:text-left"
      >
        <motion.h1
          variants={textVariants}
          className=" text-[2rem]  font-medium capitalize leading-[1.125em]  md:text-5xl"
        >
          About us
        </motion.h1>
        <motion.p
          variants={textVariants}
          className=" w-full text-[0.9375rem] leading-relaxed md:text-body"
        >
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </motion.p>
      </motion.div>
      <div
        role="none presentation"
        className="row-span-1 row-start-1 h-[20rem] w-full bg-[url('../assets/about/mobile/image-about-hero.jpg')] bg-cover md:rounded-t-2xl md:bg-[url('../assets/about/tablet/image-about-hero.jpg')] lg:col-span-1 lg:col-start-2 lg:row-span-1 lg:row-start-1 lg:h-[30rem] lg:rounded-l-none  lg:rounded-r-2xl lg:bg-[url('../assets/about/desktop/image-about-hero.jpg')]"
      ></div>
    </section>
  );
}

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: "easeOut",
      duration: 0.15,
    },
  },
};

const textVariants = {
  initial: { opacity: 0, translateY: "10px" },
  animate: {
    opacity: 1,
    translateY: "0px",
    transition: { ease: "easeOut", duration: 0.15 },
  },
};
