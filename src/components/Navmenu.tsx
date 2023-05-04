"use client";

import React, { useEffect } from "react";
import useNavMenu from "../store/hooks/useNavMenu";
import Close from "./svg/Close";
import Hamburger from "./svg/Hamburger";
import Link from "next/link";

const navItems = [
  { title: "our company", link: "/about" },
  { title: "locations", link: "/locations" },
  { title: "contact", link: "/contact" },
];

const Navmenu = () => {
  const { isMobile, isVisible, toggleNav } = useNavMenu("(max-width: 767px)");
  // TODO (Feature) : Close menu on outside click

  return (
    <div className="z-50">
      {isMobile && (
        <button className="inline-block" onClick={toggleNav}>
          {isVisible ? <Close /> : <Hamburger />}
        </button>
      )}
      {isVisible && (
        <nav className="navWrapper">
          <ul className="nav">
            {navItems.map(({ title, link }, index) => (
              <li key={`navigation${index}`}>
                <Link
                  href={link}
                  className="button uppercase hover:underline"
                  onClick={() => isMobile && toggleNav()}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navmenu;
