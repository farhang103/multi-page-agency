"use client";
import React from "react";
import { motion } from "framer-motion";
import Canada from "./svg/Canada";
import Link from "next/link";
import Australia from "./svg/Australia";
import UnitedKingdom from "./svg/UnitedKingdom";

const locationsListVariants = {
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

const locationTileVariants = {
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

const Locations = () => {
  return (
    <motion.ul
      variants={locationsListVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="grid auto-cols-fr grid-flow-row auto-rows-fr gap-y-12 gap-x-[1.875rem] py-[7.5rem] md:gap-y-20 md:py-0 lg:grid-flow-col"
    >
      <motion.li
        variants={locationTileVariants}
        className="flex flex-col items-center gap-12"
      >
        <Canada />
        <div className="flex flex-col items-center gap-8">
          <h3 className="h3">Canada</h3>
          <Link className="button light" href={"/locations#ca"}>
            See location
          </Link>
        </div>
      </motion.li>
      <motion.li
        variants={locationTileVariants}
        className="flex flex-col items-center gap-12"
      >
        <Australia />
        <div className="flex flex-col items-center gap-8">
          <h3 className="h3">Australia</h3>
          <Link className="button light" href={"/locations#au"}>
            See location
          </Link>
        </div>
      </motion.li>
      <motion.li
        variants={locationTileVariants}
        className="flex flex-col items-center gap-12"
      >
        <UnitedKingdom />
        <div className="flex flex-col items-center gap-8">
          <h3 className="h3">United Kingdom</h3>
          <Link className="button light" href={"/locations#uk"}>
            See location
          </Link>
        </div>
      </motion.li>
    </motion.ul>
  );
};

export default Locations;
