'use client';
import { linkList } from "@/constant/linkList.js";
import Link from "next/link";
import React from "react";
// import {ICONS} from '@/utils/getIcons';

 const NavList = () => {
//    const handleClick = () => {
//     if (setIsOpen) setIsOpen(false); 
//   };
// const navClass = `navlist ${mobile ? "mobile" : "desktop"} ${mobile && isOpen ? "open" : ""} ${horizontal ? "horizontal" : ""}`;

  return (
    <nav className='flex justify-center w-full py-4'>
      <ol className="flex gap-8">
        {linkList.map((data, ind) => (
          <li key={ind}>
            <Link href={data.link}>{data.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default NavList;
