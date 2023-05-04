import Link from "next/link";
import React from "react";

const ServiceTile = ({ title, link }) => {
  return (
    <Link
      className="group flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[color:rgba(29,_28,_30,_0.6)] bg-cover  text-white bg-blend-overlay transition-all duration-150 ease-out focus-within:bg-[color:rgba(231,_129,_107,_0.7)] focus-within:shadow-[0px_40px_80px_rgba(93,2,2,0.5)] hover:bg-[color:rgba(231,_129,_107,_0.7)] hover:shadow-[0px_40px_80px_rgba(93,2,2,0.5)]"
      href={link}
    >
      <p className="text-[1.75rem] font-medium uppercase tracking-wide md:text-[2.5rem]">
        {title}
      </p>
      <div className="flex items-center gap-4 md:gap-6">
        <p className="text-[0.9375rem] font-medium uppercase tracking-[0.3em]">
          view projects
        </p>
        <svg
          width="7"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          className="stroke-peach transition-all ease-out group-focus-within:stroke-white group-hover:translate-x-2 group-hover:stroke-white"
        >
          <path
            d="M1 1l4 4-4 4"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ServiceTile;
