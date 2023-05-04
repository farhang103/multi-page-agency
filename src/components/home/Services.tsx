"use client";
import React from "react";
import ServiceTile from "../ServiceTile";
import { motion } from "framer-motion";

const servicesData = [
    {
        bgDesktop:
            "lg:bg-[url('../assets/home/desktop/image-web-design-large.jpg')]",
        bgMobile: "bg-[url('../assets/home/mobile/image-web-design.jpg')]",
        bgTablet: "md:bg-[url('../assets/home/tablet/image-web-design.jpg')]",
        title: "web design",
        link: "/services/web-design",
        gridStyles: "lg:col-span-1 lg:col-start-1 lg:row-span-full",
    },
    {
        bgDesktop: "lg:bg-[url('../assets/home/desktop/image-app-design.jpg')]",
        bgMobile: "bg-[url('../assets/home/mobile/image-app-design.jpg')]",
        bgTablet: "md:bg-[url('../assets/home/tablet/image-app-design.jpg')]",
        title: "app design",
        link: "/services/app-design",
    },
    {
        bgDesktop:
            "lg:bg-[url('../assets/home/desktop/image-graphic-design.jpg')]",
        bgMobile: "bg-[url('../assets/home/mobile/image-graphic-design.jpg')]",
        bgTablet:
            "md:bg-[url('../assets/home/tablet/image-graphic-design.jpg')]",
        title: "graphic design",
        link: "/services/graphic-design",
    },
];

const servicesGridVariant = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const serviceTileVariants = {
    offscreen: {
        opacity: 0,
        translateY: "20px",
    },
    onscreen: {
        opacity: 1,
        translateY: "0px",
        transition: { ease: "easeOut", duration: 0.3 },
    },
};

const Services = () => {
    return (
        <section className="mdmax:px-6">
            <motion.ul
                variants={servicesGridVariant}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="grid grid-cols-1 grid-rows-[repeat(3,_250px)] gap-y-6 text-center md:grid-rows-[repeat(3,_200px)] lg:grid-cols-2 lg:grid-rows-[repeat(2,_308px)] lg:gap-x-6"
            >
                {servicesData.map((service) => (
                    <motion.li
                        variants={serviceTileVariants}
                        key={service.title}
                        className={`${(service.gridStyles ??=
                            null)} rounded-2xl ${service.bgMobile} bg-cover ${
                            service.bgTablet
                        }
        ${service.bgDesktop}`}
                    >
                        <ServiceTile {...service} />
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
};

export default Services;
