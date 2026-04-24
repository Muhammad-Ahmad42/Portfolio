"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { NavLinks } from "@/constants/constants";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = { openNav: () => void };

export default function Nav({ openNav }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NavLinks.map((l) => l.url.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(7,16,29,0.88)] backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="h-[70px] flex items-center justify-between w-[90%] md:w-[85%] mx-auto">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 transition-transform duration-300 group-hover:scale-105">
            <FaCode className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200">
            Ahmad
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
          {NavLinks.map((link) => {
            const isActive = activeId === link.url.slice(1);
            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                    ? "text-white bg-white/5"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-4 bottom-[5px] h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden lg:block px-5 py-2 text-sm font-semibold rounded-full
              bg-gradient-to-r from-cyan-500 to-blue-600 text-white
              hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105
              transition-all duration-300"
          >
            Hire Me
          </Link>
          <button
            onClick={openNav}
            aria-label="Open navigation menu"
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg
              text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <HiBars3BottomRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
