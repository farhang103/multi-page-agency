"use client";
import React from "react";
import { motion } from "framer-motion";
import LocationCard from "./LocationCard";

export default function LocationsGrid() {
  const locations = [
    {
      id: "ca",
      country: "canada",
      title: "Designo Central Office",
      addressLines: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
      phone: "+1 253-863-8967",
      mail: "contact@designo.co",
      mapPosition: "right",
      mobileBg: "bg-[url('../assets/locations/tablet/image-map-canada.png')]",
      desktopBg:
        "lg:bg-[url('../assets/locations/desktop/image-map-canada.png')]",
    },
    {
      id: "au",
      country: "australia",
      title: "Designo AU Office",
      addressLines: ["19 Balonne Street", "New South Wales 2443"],
      phone: "(02) 6720 9092",
      mail: "contact@designo.au",
      mapPosition: "left",
      mobileBg:
        "bg-[url('../assets/locations/tablet/image-map-australia.png')]",
      desktopBg:
        "lg:bg-[url('../assets/locations/desktop/image-map-australia.png')]",
    },
    {
      id: "uk",
      country: "United Kingdom",
      title: "Designo UK Office",
      addressLines: ["13  Colorado Way", "Rhyd-y-fro SA8 9GA"],
      phone: "078 3115 1400",
      mail: "contact@designo.co.uk",
      mapPosition: "right",
      mobileBg: "bg-[url('../assets/locations/tablet/image-map-uk.png')]",
      desktopBg:
        "lg:bg-[url('../assets/locations/desktop/image-map-united-kingdom.png')]",
    },
  ];

  const locationsGridVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      variants={locationsGridVariant}
      initial="initial"
      animate="animate"
      className="pageWrapper grid grid-flow-row auto-rows-fr gap-y-10 lg:gap-y-8"
    >
      {locations.map((location) => (
        <LocationCard key={location.id} {...location} />
      ))}
    </motion.section>
  );
}
