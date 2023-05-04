"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Facebook from "./svg/Facebook";
import Twitter from "./svg/Twitter";
import Youtube from "./svg/Youtube";
import Pinterest from "./svg/Pinterest";
import Instagram from "./svg/Instagram";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const navItems = [
    { title: "our company", link: "/about", slug: "about" },
    { title: "locations", link: "/locations", slug: "locations" },
    { title: "contact", link: "/contact", slug: "contact" },
  ];

  return (
    <footer className="relative grid grid-rows-[1fr_1fr_auto] place-items-center px-6 md:grid-rows-[4fr_1fr_auto] md:px-10">
      {pathname !== "/contact" && (
        <div className=" row-start-1 row-end-3 w-full max-w-[1111px] text-white ">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-peach bg-[url(../assets/exports/pattern-six-circles.svg)] bg-[size:876px_584px] bg-[position:center_right] bg-no-repeat px-6 py-16 lg:flex-row lg:px-24">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className=" md:h2 mb-4 text-center text-[2rem] font-medium leading-[1.125em] md:max-w-[335px]  lg:text-left lg:leading-none">
                Let&apos;s talk about
                <br />
                your project
              </h2>
              <p className="max-w-[28em] text-center text-[0.9375rem] leading-relaxed md:text-body lg:max-w-[28em] lg:text-left">
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <Link className="button dark" href={"/contact"}>
              get in touch
            </Link>
          </div>
        </div>
      )}
      <div className="row-span-1 row-start-3 w-full max-w-[1111px] text-white before:absolute before:inset-0 before:-z-10 before:row-span-full before:row-start-2 before:bg-black before:content-['']">
        <div className="py-16 md:py-20">
          <div className="flex w-full flex-col items-center justify-between border-white border-opacity-10 md:flex-row md:border-b md:pb-10">
            <div className="pb-8 md:pb-0">
              <Logo />
            </div>
            <ul className="p8-4 flex w-full flex-col items-center gap-8 border-t border-white border-opacity-10 py-8 md:w-auto md:flex-row md:gap-[2.625rem] md:border-none md:py-0">
              {navItems.map(({ link, slug, title }) => (
                <Link
                  href={link}
                  className={`footerNavItem ${
                    pathname === link && "text-peach"
                  }`}
                  key={slug}
                >
                  {title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-end md:justify-between md:pt-10">
            <div className="flex flex-col gap-10 md:flex-row lg:gap-52">
              <address
                className="text-center text-body not-italic opacity-50 transition-opacity duration-200 focus-within:opacity-100 hover:opacity-100 md:text-left
              "
              >
                <span className="font-medium">Designo Central Office</span>
                <br />
                3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </address>
              <p className="text-center text-body not-italic opacity-50 transition-opacity duration-200 focus-within:opacity-100 hover:opacity-100 md:text-left md:font-medium">
                <span className="font-medium">Contact Us (Central Office)</span>
                <br />
                P : +1 253-863-8967
                <br />
                M : contact@designo.co
                <br />
              </p>
            </div>
            <ul className="flex w-full justify-center gap-4 md:w-auto">
              <li>
                <Link
                  href="https://www.facebook.com"
                  aria-label="Our Facebook page"
                >
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com"
                  aria-label="Our Youtube channel"
                >
                  <Youtube />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com"
                  aria-label="Our Twitter account"
                >
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.pinterest.com"
                  aria-label="Our Pinterest account"
                >
                  <Pinterest />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com"
                  aria-label="Our Instagram"
                >
                  <Instagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
