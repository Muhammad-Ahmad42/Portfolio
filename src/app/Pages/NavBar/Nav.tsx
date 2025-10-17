"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { NavLinks } from "@/constants/constants";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-300 h-[8vh] z-[1000] fixed w-full 
      ${navBg ? "bg-[#0f142ed9] shadow-lg backdrop-blur-md" : "bg-transparent"}`} >

      <div className="flex items-center h-full justify-between w-[90%] mx-auto text-white">
        <Link href="#home" className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-md 
                            transition-all duration-300 group-hover:bg-cyan-300">
            <FaCode className="w-5 h-5 text-[#0f1627]" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-all duration-300">
            Ahmad
          </h1>
        </Link>

        <div className="hidden lg:flex items-center space-x-14">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="group flex items-center space-x-3 text-base md:text-lg font-semibold text-gray-300 
                        transition-all duration-300 hover:text-cyan-400"
            >
              <link.icon className="text-gray-300 group-hover:text-cyan-400 transition-all duration-300" />
              <span className="relative">
                {link.label}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"
                ></span>
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-gray-300 hover:text-cyan-400 lg:hidden transition-all duration-300"
            aria-label="Menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
