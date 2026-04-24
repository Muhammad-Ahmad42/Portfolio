"use client";
import { NavLinks } from "@/constants/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

type NavLinkType = { id: number; label: string; url: string; icon: IconType };
type Props = { showNav: boolean; closeNav: () => void };

export default function MobileNav({ showNav, closeNav }: Props) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeNav}
        aria-hidden="true"
        className={`fixed inset-0 z-[100001] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs z-[100002]
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${showNav ? "translate-x-0" : "translate-x-full"}
          border-l border-white/[0.06]`}
        style={{ background: "#0a1528" }}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-[70px] border-b border-white/[0.06]">
          <Link href="#home" onClick={closeNav} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <FaCode className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-base font-bold text-white">Ahmad</span>
          </Link>
          <button
            onClick={closeNav}
            aria-label="Close navigation menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400
              hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <CgClose className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-6 gap-1" aria-label="Mobile navigation">
          {NavLinks.map((link: NavLinkType) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeNav}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-300
                hover:text-white hover:bg-white/5 transition-all duration-200 group"
            >
              <link.icon className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-medium text-sm">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-10 left-0 right-0 px-6">
          <Link
            href="#contact"
            onClick={closeNav}
            className="block w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600
              text-white text-sm font-semibold text-center shadow-lg shadow-cyan-500/20"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
}
