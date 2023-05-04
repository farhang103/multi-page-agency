"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
motion;

const navItems = [
  { title: "our company", link: "/about", slug: "about" },
  { title: "locations", link: "/locations", slug: "locations" },
  { title: "contact", link: "/contact", slug: "contact" },
];

const LargeNav = () => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <nav className="navWrapper mdmax:hidden">
      <ul className="largeNavList">
        {navItems.map(({ title, link, slug }, index) => (
          <li
            key={`navigation${index}`}
            className={`relative isolate uppercase transition-all duration-150 ease-out ${
              slug === activeSegment
                ? "font-medium text-white"
                : "text-black focus-within:text-peach  hover:text-peach"
            }`}
          >
            <Link href={link} className={`inline-block px-6 py-3`}>
              {title}
            </Link>
            {slug === activeSegment && (
              <motion.span
                key={"activeNavKey"}
                layoutId="activeNav"
                transition={{ ease: "easeOut", duration: 0.3 }}
                className="absolute inset-x-0 inset-y-0 -z-10 rounded-[22px] bg-peach bg-[url(../assets/exports/Oval.svg)] bg-no-repeat shadow-[10px_-5px_40px_rgba(93,2,2,0.3)]"
              ></motion.span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LargeNav;
