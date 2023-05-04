"use client";
import { motion } from "framer-motion";
import React from "react";

const cardVariants = {
  offscreen: {
    opacity: 0,
    translateY: "20px",
  },
  onscreen: {
    opacity: 1,
    translateY: "0px",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};
export default function RealDealCard() {
  return (
    <motion.section
      variants={cardVariants}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="grid auto-rows-auto lg:grid-cols-[auto_476px] lg:grid-rows-1"
    >
      <div className="row-span-1 row-start-2 flex flex-col items-center gap-6 bg-lighter-peach bg-[url('../assets/shared/desktop/bg-pattern-three-circles.svg')] bg-[position:left_top] bg-no-repeat py-20 px-6 text-center md:gap-8 md:rounded-b-2xl md:bg-[position:right_11px_bottom_44px] md:px-14 md:py-14 md:text-left lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:items-start lg:rounded-l-2xl lg:rounded-r-none lg:bg-[position:left_-146px_bottom] lg:py-[154px] lg:px-24">
        <h2 className=" text-[2rem] font-medium capitalize leading-[1.125em]  text-peach md:text-[2.5rem]">
          The real deal
        </h2>
        <p className="w-full text-center text-[0.9375rem] leading-relaxed text-black md:text-body lg:text-left">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p className="w-full text-center text-[0.9375rem] leading-relaxed text-black md:text-body lg:text-left">
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
      <div
        role="none presentation"
        className="row-span-1 row-start-1 h-[20rem] w-full bg-[url('../assets/about/mobile/image-real-deal.jpg')] bg-cover md:rounded-t-2xl md:bg-[url('../assets/about/tablet/image-real-deal.jpg')] lg:col-span-1 lg:col-start-2 lg:h-full lg:rounded-r-2xl lg:rounded-l-none lg:bg-[url('../assets/about/desktop/image-real-deal.jpg')]"
      ></div>
    </motion.section>
  );
}
