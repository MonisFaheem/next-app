'use client';
import { linkList } from "@/constant/linkList.js";
import React from "react";
import CustomButton from "../CustomButton";
// import {ICONS} from '@/utils/getIcons';
import Link from "next/link";

 const NavList = () => {
//    const handleClick = () => {
//     if (setIsOpen) setIsOpen(false); 
//   };
// const navClass = `navlist ${mobile ? "mobile" : "desktop"} ${mobile && isOpen ? "open" : ""} ${horizontal ? "horizontal" : ""}`;

  return (
  <nav className="flex justify-center items-center  py-6 text-lg leading-tight">
    <ol className="flex gap-8 m-0 p-0">
      {linkList.map((data, ind) => (
        <li key={ind}>
          <Link href={data.link}>{data.title}</Link>
        </li>
      ))}
    </ol>

    <div className="absolute right-8 flex">
      <CustomButton
        title="Login"
        className="bg-transparent hover:bg-transparent"
      />
      <CustomButton
        title="Register"
        className="bg-teal-600 text-white hover:bg-teal-700 transition-colors"
      />
    </div>
  </nav>
);

};

export default NavList;
