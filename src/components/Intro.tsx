"use client";
import { animate, motion } from "framer-motion";
import React from "react";

const sectinoVariants = {
    initial: {
        opacity: 0,
    },
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

const Intro = ({ title, desc }) => {
    return (
        <motion.section
            variants={sectinoVariants}
            initial="initial"
            animate="animate"
            className={`flex flex-col items-center gap-4 bg-peach bg-[url(../assets/about/mobile/bg-pattern-hero-about-mobile.svg)] bg-right-top bg-no-repeat py-[6.5625rem] px-6 text-center md:gap-6 md:rounded-xl md:bg-[url(../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg)] md:bg-[position:center_right_-160px] md:py-16 md:shadow-[0px_40px_80px_rgba(93,2,2,0.3)] lg:bg-[position:center_right]`}
        >
            <motion.h1
                variants={textVariants}
                className="md:h1  max-w-[573px] text-[2rem] font-medium capitalize leading-[1.125em] text-white "
            >
                {title}
            </motion.h1>
            <motion.p
                variants={textVariants}
                className=" max-w-[24.25rem] text-[0.9375rem] leading-relaxed text-white md:text-body "
            >
                {desc}
            </motion.p>
        </motion.section>
    );
};

export default Intro;
