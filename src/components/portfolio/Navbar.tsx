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
import {
  Cable,
  DraftingCompass,
  Handshake,
  Mail,
  MapIcon,
  MonitorSpeaker,
  Pipette,
  RectangleEllipsis,
  Smartphone,
  TriangleRight,
  Videotape,
} from "lucide-react";

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
      <div className="justify-items-center my-5 z-0">
        <div className=" flex pl-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZHqWA3ajb0g2TmGMYzSoRpiR5HqjelAKfw&s"
            className="rounded-full border border-white-200 w-[120px] h-[120px] bg-cover"
          />
          <button className="flex h-[30px] justify-center items-center bg-white content-center px-2 text-sm text-black rounded-full -translate-x-8 origin-top-left rotate-[-12deg] border-gray-100 border text-black mt-10 ">
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
      <div
        className="flex justify-evenly  z-index:-10 m-10"
        style={{ borderRadius: "0px 0px 100px 100px" }}
      >
        <div className="flex m-10">
          <MapIcon />
          <p>
            National
            <br />
            bank
          </p>
        </div>
        <div className="flex m-10">
          <p>mattered</p>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/right-triangle-top-right-9115571-7477482.png?f=webp&w=256"
            className="h-[10px] w-[20px]"
          />
        </div>
        <div className="m-10">
          <img
            src="https://cdn-icons-png.flaticon.com/128/16183/16183588.png"
            className="h-[50px] w-[60px]"
          />
        </div>
        <div className="flex m-10">
          <img
            src="https://cdn-icons-png.flaticon.com/128/15465/15465572.png"
            className="h-[30px] w-[30px] m-1"
          />
          <p className="m-2">Adobe</p>
        </div>

        <img
          src="https://bllighting.com/wp-content/uploads/2016/12/logo-subway.jpg"
          className="h-[40px] w-[0px] m-10"
        />

        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-codecademy-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-9-pack-icons-282922.png?f=webp&w=256"
          className="h-[80px] w-[80px] m-5"
        />
      </div>
      <div>
        <span className="font-semibold grid text-center content-center my-10 p-6">
          Collaborate with brands and agencies
          <br />
          to create impactful results.
        </span>
        <div>
          <hr className="w-[1000px] mx-60 border-black " />
          <button className=" mx-auto  bg-white mb-10 flex items-center justify-center h-[40px] w-[100px] text-sm rounded-full   text-center p-2 -translate-x-8 origin-top-left rotate-[-20deg] border text-black ">
            services
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="m-5">
          <Videotape />
          <h3 className="font-semibold mt-5">UI & UX</h3>
          <p>
            Designing Interfaces that are
            <br />
            intuitive,efficient,and
            <br />
            enjoyable to use
          </p>
        </div>
        <div className="m-5">
          <div className="flex">
            <Cable />
            <Smartphone />
          </div>
          <h3 className="font-semibold mt-5">Web & Mobile app</h3>
          <p>
            Designing Interfaces that are
            <br />
            intuitive,efficient,and
            <br />
            enjoyable to use
          </p>
        </div>
        <div className="m-5">
          <div className="flex">
            <DraftingCompass />
            <Pipette />
          </div>
          <RectangleEllipsis />
          <h3 className="font-semibold mt-5">Design & Creative</h3>
          <p>
            Designing Interfaces that are
            <br />
            intuitive,efficient,and
            <br />
            enjoyable to use
          </p>
        </div>
        <div className="m-5">
          <MonitorSpeaker />
          <h3 className="font-semibold mt-5">Design & Creative</h3>
          <p>
            Designing Interfaces that are
            <br />
            intuitive,efficient,and
            <br />
            enjoyable to use
          </p>
        </div>
      </div>
      <div
        className="bg-stone-100  h-[450px] p-10"
        style={{ borderRadius: "80px 80px 100px 100px" }}
      >
        <Handshake className=" flex justify-center mx-auto rounded-full h-[70px] w-[70px] bg-white border border-gray-200" />
        <p className="text-center  text-xl font-semibold p-5">
          Tell me about your next
          <br /> project
        </p>
        <div className="flex justify-center m-5">
          <button className="flex h-[40px] w-[120px] bg-black text-white p-2 text-sm rounded-full mx-2">
            <Mail className="mx-2" />
            <p>Email me</p>
          </button>
          <button className="flex h-[40px] w-[120px] bg-white text-black p-2 text-center justify-center text-sm rounded-full mx-2">
            <p>WhatsApp</p>
          </button>
        </div>
        <hr className="m-5" />
        <div className="flex justify-between  m-0">
          <p className="text-sm">2004 All rights reserved</p>
          <div className="flex">
            <span className="text-sm">LinkedIn</span>
            <span className="text-sm">/</span>
            <span className="text-sm">Dribbble</span>
            <span className="text-sm">/</span>
            <span className="text-sm">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};
