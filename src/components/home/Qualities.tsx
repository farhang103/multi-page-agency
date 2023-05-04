"use client";
import React from "react";
import Passionate from "../svg/Passionate";
import Resourceful from "../svg/Resourceful";
import Friendly from "../svg/Friendly";
import { motion } from "framer-motion";

const qualitiesListVariants = {
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

const qualitiesTileVariants = {
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

const Qualities = () => {
  return (
    <motion.section
      variants={qualitiesListVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-rows-3 gap-y-20 md:gap-y-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-[1.875rem] lg:gap-y-0 mdmax:px-6"
    >
      <motion.article
        variants={qualitiesTileVariants}
        className="group flex flex-col items-center gap-12 text-center md:flex-row md:text-left lg:flex-col lg:justify-center lg:text-center"
      >
        <Passionate />
        <div>
          <h2 className="h3 mb-8 uppercase transition-colors duration-150 ease-out group-hover:text-peach md:mb-4 lg:mb-8">
            Passionate
          </h2>
          <p className="max-w-[28rem] text-body">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </motion.article>
      <motion.article
        variants={qualitiesTileVariants}
        className="group flex flex-col items-center gap-12 text-center md:flex-row md:text-left lg:flex-col lg:justify-center lg:text-center"
      >
        <Resourceful />
        <div>
          <h2 className="h3 mb-8 uppercase transition-colors duration-150 ease-out group-hover:text-peach md:mb-4 lg:mb-8">
            Resourceful
          </h2>
          <p className="max-w-[28rem] text-body">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </motion.article>
      <motion.article
        variants={qualitiesTileVariants}
        className="group flex flex-col items-center gap-12 text-center md:flex-row md:text-left lg:flex-col lg:justify-center lg:text-center"
      >
        <Friendly />
        <div>
          <h2 className="h3 mb-8 uppercase transition-colors duration-150 ease-out group-hover:text-peach md:mb-4 lg:mb-8">
            Friendly
          </h2>
          <p className="max-w-[28rem] text-body">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </motion.article>
    </motion.section>
  );
};

export default Qualities;
