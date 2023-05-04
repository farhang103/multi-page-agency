"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import phoneImg from "../../assets/exports/heroPhone.png";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="grid grid-flow-row grid-rows-[auto_22.8rem] overflow-hidden bg-peach bg-[url(../assets/home/desktop/bg-pattern-hero-home.svg)] bg-[size:640px_640px] bg-[position:left_center] bg-no-repeat md:grid-rows-[auto_24.5rem] md:rounded-xl md:bg-[position:center_right_-100px] lg:grid-flow-col lg:grid-cols-[auto_auto] lg:grid-rows-1 lg:bg-[position:center_right] lg:px-24">
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="z-20 flex  flex-col items-center gap-5 self-center py-20 px-7 text-center md:gap-8 md:py-[3.75rem] lg:items-start lg:gap-10 lg:px-0 lg:py-[9.0625rem] lg:text-left"
            >
                <motion.h1 className="md:h1  max-w-[573px] text-[2rem] font-medium leading-[1.125em] text-white ">
                    Award-winning custom designs and digital branding solutions
                </motion.h1>
                <motion.p
                    variants={textVariants}
                    className=" max-w-[445px] text-[0.9375rem] leading-relaxed text-white md:text-body "
                >
                    With over 10 years in the industry, we are experienced in
                    creating fully responsive websites, app design, and engaging
                    brand experiences. Find out more about our services.
                </motion.p>
                <motion.div variants={textVariants}>
                    <Link href={"/about"} className="button dark">
                        learn more
                    </Link>
                </motion.div>
            </motion.div>
            <div className=" justify-self-center lg:translate-y-[8.6875rem]">
                <Image
                    src={phoneImg}
                    alt=""
                    className="animate-slideUpMobile drop-shadow-heroShadow lg:animate-slideUpLarge"
                />
            </div>
        </section>
    );
};

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

export default Hero;
