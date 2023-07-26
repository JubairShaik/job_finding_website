'use client' 

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { FaHome, FaListAlt, FaBuilding, FaInfoCircle } from 'react-icons/fa';


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    {
      id: 1,
      link: "home",
      link: "home",
      linkTo: "/",

    },
    {
      id: 2,
      link: "Job Category",
      icon:<FaListAlt/>,
      linkTo: "/",
    },
    {
      id: 3,
      link: "Company",
      icon:<FaBuilding/>,
      linkTo: "/",
    },
    {
      id: 4,
      link: "About us",
      icon:<FaInfoCircle/>,
      linkTo: "/",
    },
     
  ];

  return (
    <div className="flex justify-between items-center w-full  h-20    py-3 px-6 md:px-[5rem] text-white fixed">
      <div className="flex items-center justify-center" >
        <span className="h-6 w-6 text-center bg-orange-500 roundede-xl" >J</span>
        <h1 className=" text-black  font-semibold font-poppins text-[1.4rem] ml-2">Pedamelan</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link ,icon ,linkTo}) => (
            <li
            key={id}
            className={`px-4 cursor-pointer flex items-center mr-2 gap-2 capitalize font-medium text-gray-500 hover:scale-105 duration-200 ${
              activeLink === link ? 'text-orange-500' : '' // Apply orange color for active link
            }`}
          >
            {/* Use href as a string */}
            <span >{icon}</span>
            <Link href={`/${linkTo}`} smooth duration={500}>
              {link} 
            </Link>
          </li>
        ))}
         <button  className="py-3 px-8 font-poppins bg-red-400  text-[15px] text-primary bg-blue-gradient rounded-[10px] outline-none " >Register Account</button>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col  bg-slate-200 justify-center items-center absolute top-0 left-0  w-full h-screen  ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-poppins text-black capitalize py-6  text-2xl"
            >
              {/* Use href as a string */}
              <Link
                onClick={() => setNav(!nav)}
                href={`/`}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <button  className="py-2 px-6 font-poppins bg-orange-500  text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none " >Register Account</button>

        </ul>
      )}
    </div>
  );
};

export default NavBar;
