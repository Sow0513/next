import React from "react";
import Link from "next/link";

type navmenu = {
  name: string;
  href?: string;
};

export const NavButton = ({ name }: navmenu) => {
  return (
    <span className="h-[50px]  w-[80px]  bg-white content-center px-5 rounded-full border-gray-100 border">
      {name}
    </span>
  );
};

export const NavText = ({ name, href }: navmenu) => {
  return (
    <Link href={href!} target="blank ">
      <span className="text-sm">{name}</span>
    </Link>
  );
};
