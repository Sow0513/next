import React from "react";
import Link from "next/link";
import Head from "next/head";
import { ArrowUpRight } from "lucide-react";

export const NavMenuWithContent = ({ name, content, side }: NavMenuType) => {
  return (
    <div className="flex justify-between bg-gray-200  rounded-full border-gray-200 border">
      <span className="content-center mx-3 text-xs">{content}</span>
      <NavButton name={name} />
    </div>
  );
};
export const NavButton = ({ name }: NavMenuType) => {
  return (
    <span className=" h-[35px]  bg-white content-center px-5 rounded-full border-gray-100 border ">
      {name}
    </span>
  );
};

export const NavText = ({ name, href }: NavMenuType) => {
  return (
    <Link href={href!} target="blank ">
      <span className="text-sm">{name}</span>
    </Link>
  );
};

<Head>
  <Link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</Head>;

export const ButtonWithIcon = ({ name }: NavMenuType) => {
  return (
    <button className="flex px-7 h-[45px] bg-black items-center justify-center text-sm rounded-full border-gray-100 border text-gray-200 ">
      {name}
      <ArrowUpRight className="ml-1" size={18} />
    </button>
  );
};
