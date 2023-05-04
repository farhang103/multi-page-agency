import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectTile({ title, desc, image }) {
  return (
    <Link
      href={""}
      className=" focus-within::-translate-y-2 group group grid grid-flow-row rounded-2xl bg-lighter-peach transition-all duration-150 ease-out focus-within:bg-peach focus-within:text-white focus-within:shadow-[0px_30px_30px_rgba(93,2,2,0.2)] hover:-translate-y-2 hover:bg-peach hover:text-white hover:shadow-[0px_30px_30px_rgba(93,2,2,0.2)] md:grid-flow-col md:grid-cols-2 lg:grid-flow-row lg:grid-cols-1"
    >
      <Image
        src={image}
        alt={`Screenshot of the ${title} project`}
        className="w-full rounded-t-2xl object-contain md:rounded-l-2xl md:rounded-tr-none lg:rounded-tr-2xl lg:rounded-bl-none"
      />
      <div className="p-8 text-center md:flex md:flex-col md:justify-center ">
        <h3 className="h3 mb-4 text-peach transition-colors ease-out group-focus-within:text-white group-hover:text-white">
          {title}
        </h3>
        <p className="text-body">{desc}</p>
      </div>
    </Link>
  );
}
