"use client";

import React, { useEffect, useState } from "react";
import Close from "./svg/Close";
import Hamburger from "./svg/Hamburger";
import Link from "next/link";

const navItems = [
  { title: "our company", link: "/about" },
  { title: "locations", link: "/locations" },
  { title: "contact", link: "/contact" },
];

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleNav = () => {
    setIsVisible((prevState) => !prevState);
  };
  const mediaQueryString = "(max-width: 767px)";

  useEffect(() => {
    const mediaQuery = window.matchMedia(mediaQueryString);
    function handleMediaChange() {
      setIsVisible(!mediaQuery.matches);
    }
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [mediaQueryString]);

  return (
    <div className="z-50 md:hidden">
      <button className="inline-block" onClick={toggleNav}>
        {isVisible ? <Close /> : <Hamburger />}
      </button>

      {isVisible && (
        <nav className="navWrapper">
          <ul className="mobileNavList">
            {navItems.map(({ title, link }, index) => (
              <li key={`navigation${index}`}>
                <Link
                  href={link}
                  className="uppercase hover:underline"
                  onClick={toggleNav}
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

export default MobileNav;
