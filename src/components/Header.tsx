"use client";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import LargeNav from "./LargeNav";

const Header = () => {
  return (
    <header className=" bg-white py-9 px-6 md:py-16 md:px-10">
      <div className="mx-auto flex w-full max-w-[1111px] items-center justify-between">
        <Logo />
        <MobileNav />
        <LargeNav />
      </div>
    </header>
  );
};

export default Header;
