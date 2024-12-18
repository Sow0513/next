//import Link from "next/link";
import React from "react";

import {
  NavButton,
  NavText,
  NavMenuWithContent,
  ButtonWithIcon,
} from "./Nav-Components/nav-button";
//import { NavMenuWithContent } from "./Nav-Components/nav-button";
//import { rightsideItems, leftsideItems } from "../constants/Navitems";

import { navBarMenus } from "../constants/Navitems";
export const NavBar = () => {
  const navMenus = navBarMenus();
  return (
    <div>
      <div className="flex h-[100px] justify-between items-center px-4">
        <div className=" flex space-x-3">
          {navMenus.left.map((menu, index) => {
            if (menu.content != "") {
              return (
                <NavMenuWithContent
                  key={index}
                  name={menu.name}
                  content={menu.content}
                />
              );
            } else {
              return <NavButton key={index} name={menu.name} />;
            }
          })}
        </div>
        {/* {leftsideItems.map((item, index) => {
          if (item.content != "") {
            return (
              <NavMenuWithContent
                key={index}
                name={item.name}
                content={item.content}
              />
            );
          } else {
            return <NavButton key={index} name={item.name} />;
          }
        })}*/}

        {/* <NavButton name="copy" /> */}
        {/* <span className="h-[50px]  w-[80px]  bg-white content-center px-5 rounded-full border-gray-100 border">
            {btn}
          </span> */}
        {/* </div>
        {/* <NavButton name="cv" /> */}
        {/* <span className="h-[50px]  w-[80px]  bg-white content-center px-5 rounded-full border-gray-100 border">
          {button}
        </span> */}

        {/* </div> */}
        <div className="flex">
          {navMenus.right.map((menu, index) => {
            if (index != navMenus.right.length - 1) {
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
      <div className="justify-items-center my-5">
        <div className=" flex pl-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZHqWA3ajb0g2TmGMYzSoRpiR5HqjelAKfw&s"
            className="rounded-full border border-white-200 w-[120px] h-[120px] bg-cover"
          />
          <button className="flex h-[30px] justify-center items-center bg-white content-center px-2 text-sm text-gray-300 rounded-full -translate-x-8 origin-top-left rotate-[-12deg] border-gray-100 border text-black mt-10 ">
            Sowmya <p>👋</p>
          </button>
        </div>
        <span className="grid text-4xl text-center font-semibold my-5">
          Building digital
          <br />
          products,brands,and
          <br />
          experience
        </span>
        <div className="m-2 flex">
          <ButtonWithIcon name="Latest Shots" />
        </div>
      </div>
    </div>
  );
};
