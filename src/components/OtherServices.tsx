"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ServiceTile from "./ServiceTile";

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
    bgDesktop: "lg:bg-[url('../assets/home/desktop/image-graphic-design.jpg')]",
    bgMobile: "bg-[url('../assets/home/mobile/image-graphic-design.jpg')]",
    bgTablet: "md:bg-[url('../assets/home/tablet/image-graphic-design.jpg')]",
    title: "graphic design",
    link: "/services/graphic-design",
  },
];

const OtherServices = () => {
  const pathname = usePathname();
  console.log(pathname === servicesData[0].link);
  return (
    <ul className="md:auto-rows-[200px]lg:grid-cols-2 grid auto-rows-[250px] grid-cols-1 gap-y-6 text-center lg:auto-rows-[308px] lg:grid-cols-2 lg:gap-x-6 mdmax:px-6 ">
      {servicesData
        .filter((service) => service.link !== pathname)
        .map((otherService) => (
          <li
            key={otherService.title}
            className={`${(otherService.gridStyles ??= null)} rounded-2xl ${
              otherService.bgMobile
            } bg-cover ${otherService.bgTablet}
        ${otherService.bgDesktop}`}
          >
            <ServiceTile {...otherService} />
          </li>
        ))}
    </ul>
  );
};

export default OtherServices;
