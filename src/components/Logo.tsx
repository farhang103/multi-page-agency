import Link from "next/link";
import React from "react";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  variable: "--font-league-spartan",
  display: "swap",
});

const Logo = () => {
  return (
    <Link href="/" className="flex cursor-pointer items-center gap-4">
      <span
        aria-label="Designo Logo"
        className="inline-block h-6 w-6 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-peach via-light-peach to-transparent"
      />
      <span
        className={`${league_spartan.className} text-2xl font-bold uppercase leading-none tracking-[0.2em]`}
      >
        designo
      </span>
    </Link>
  );
};

export default Logo;
