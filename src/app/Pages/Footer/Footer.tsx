import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";

const footerLinks = [
  { label: "Home",       href: "#home" },
  { label: "Services",   href: "#services" },
  { label: "Experience", href: "#works" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative pt-14 pb-8 overflow-hidden" style={{ background: "#050c18" }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      <div className="w-[90%] md:w-[82%] lg:w-[76%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
              <FaCode className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
              Ahmad
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-1" aria-label="Footer navigation">
            {footerLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="px-3.5 py-2 text-sm text-slate-500 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-white/[0.06] mb-7" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Muhammad Ahmad. All rights reserved.
          </p>
          <Link
            href="#home"
            aria-label="Back to top"
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/[0.08]
              text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5
              hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
