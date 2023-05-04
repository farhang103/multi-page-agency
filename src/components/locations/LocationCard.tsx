"use client";
import { motion } from "framer-motion";
import React from "react";

const LocationCard = ({
  country,
  title,
  addressLines,
  phone,
  mail,
  mapPosition,
  mobileBg,
  desktopBg,
  id,
}) => {
  const leftLocationCardVariants = {
    initial: {
      opacity: 0,
      translateX: "-20px",
    },
    animate: {
      opacity: 1,
      translateX: "0px",
      transition: { ease: "easeOut", duration: 0.3 },
    },
  };
  const rightLocationCardVariants = {
    initial: {
      opacity: 0,
      translateX: "20px",
    },
    animate: {
      opacity: 1,
      translateX: "0px",
      transition: { ease: "easeOut", duration: 0.3 },
    },
  };

  return (
    <motion.article
      variants={
        mapPosition === "left"
          ? leftLocationCardVariants
          : rightLocationCardVariants
      }
      id={id}
      className={`grid auto-rows-fr md:gap-y-8 lg:grid-flow-col mdmax:grid-rows-[320px_auto] ${
        mapPosition === "right"
          ? "lg:grid-cols-[auto_350px]"
          : "lg:grid-cols-[350px_auto]"
      } lg:grid-rows-1 lg:gap-x-8`}
    >
      <div
        className={`row-span-1 row-start-2 flex flex-col items-center gap-6 bg-lighter-peach bg-[url('../assets/shared/desktop/bg-pattern-three-circles.svg')] bg-[position:left_top] bg-no-repeat py-[5.5rem] px-6 text-center md:items-start md:rounded-2xl md:bg-[position:left_bottom] md:px-[4.625rem] lg:row-start-1 lg:${
          mapPosition === "left" ? "col-start-2" : "col-start-1"
        }`}
      >
        <h3 className="text-[2rem] font-medium capitalize leading-[1.125em]  text-peach md:text-[2.5rem]">
          {country}
        </h3>
        <div className="flex flex-col gap-6 text-center md:flex-row md:gap-28 md:text-left">
          <address className="shrink-0 text-[0.9375rem] not-italic leading-relaxed text-black md:text-body">
            <span className="font-bold">{title}</span>
            <br />
            {addressLines.map((line) => (
              <>
                {line} <br />
              </>
            ))}
          </address>
          <p className="w-full  text-[0.9375rem] leading-relaxed text-black md:text-body">
            <span className="font-bold">Contact</span>
            <br />P : {phone}
            <br />M : {mail}
          </p>
        </div>
      </div>
      <div
        role="none presentation"
        className={`row-span-1 row-start-1 w-full ${mobileBg} bg-cover md:rounded-2xl ${desktopBg} bg-cover bg-center lg:${
          mapPosition === "left" ? "col-start-1" : "col-start-2"
        }`}
      ></div>
    </motion.article>
  );
};

export default LocationCard;
