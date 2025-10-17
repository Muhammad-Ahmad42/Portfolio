import { NavLinks } from "@/constants/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import { IconType } from "react-icons";

type NavLinkType = {
  id: number;
  label: string;
  url: string;
  icon: IconType;
};

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

function MobileNav({ showNav, closeNav }: Props) {
  const openNav = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`fixed inset-0 ${openNav} bg-black/80 z-[100002] flex justify-end transition-all duration-100 ease-in-out`}
    >
      <div
        className={`text-cyan-300 ${openNav} flex flex-col justify-center h-full w-[80%] sm:w-[60%]
       bg-gradient-to-b from-[#0f1627] to-[#07101d] space-y-8 px-8 py-10 shadow-2xl z-[100005] transition-transform duration-500`}
      >
        {NavLinks.map((link: NavLinkType) => {
          return (
            <Link key={link.id} href={link.url}>
              <div className="flex items-center space-x-3 group">
                <link.icon className="text-2xl text-cyan-300" />
                <p
                  className="text-cyan-300 text-xl sm:text-2xl md:text-3xl font-semibold 
                  border-b border-cyan-300 w-fit pb-1 transition-all duration-200"
                >
                  {link.label}
                </p>
              </div>
            </Link>
          );
        })}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.7rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-cyan-300"
        />
      </div>
    </div>
  );
}

export default MobileNav;
