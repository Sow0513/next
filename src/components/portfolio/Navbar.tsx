import Link from "next/link";
import React from "react";
import { NavButton, NavText } from "./Nav-Components/nav-button";
import { email, rightsideItems, btn, button } from "../constants/Navitems";
export const NavBar = () => {
  return (
    <div className="flex h-[100px] justify-between items-center px-4">
      <div className="flex space-x-4">
        <div className="flex w-[300px] h-[50px] justify-between bg-gray-100 rounded-full border-gray-100 border">
          <span className="content-center ml-3 text-sm">{email}</span>
          {/* <NavButton name="copy" /> */}
          <span className="h-[50px]  w-[80px]  bg-white content-center px-5 rounded-full border-gray-100 border">
            {btn}
          </span>
        </div>
        {/* <NavButton name="cv" /> */}
        <span className="h-[50px]  w-[80px]  bg-white content-center px-5 rounded-full border-gray-100 border">
          {button}
        </span>
      </div>
      <div className="flex">
        {rightsideItems.map((menu, index) => {
          if (index != rightsideItems.length - 1) {
            return (
              <div key={index}>
                <NavText name={menu.name} href={menu.href} />
                <span className="text-xs mx-2"> / </span>
              </div>
            );
          } else {
            return <NavText key={index} name={menu.name} href={menu.href} />;
          }
        })}
      </div>
      {/* <div className="content-center">
        <NavText name="LinkedIn" href="https://in.linkedin.com/" />
        <span> / </span>
        <NavText name="Dribbble" href="https://dribbble.com/" />
        <span> /</span>
        <NavText name="Instagram" href="https://www.instagram.com/" />
      </div> */}
    </div>
  );
};
