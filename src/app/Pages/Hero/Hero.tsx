"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <ParticlesHero />

      {/* Ambient orbs */}
      <div
        className="orb w-[600px] h-[600px] bg-cyan-600/15 -top-48 -left-48"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb w-[500px] h-[500px] bg-blue-700/10 bottom-0 -right-32"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="orb w-[280px] h-[280px] bg-indigo-600/10 top-1/3 right-1/4"
        style={{ animationDelay: "5s" }}
      />

      <div className="relative z-10 w-[90%] md:w-[85%] lg:w-[82%] mx-auto pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: TEXT ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                border border-cyan-500/25 bg-cyan-500/5 mb-8 animate-fade-in-down"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-cyan-300">
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            <h1
              className="display-font text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem]
                font-bold leading-[1.08] tracking-tight animate-fade-in-up mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Crafting{" "}
              <span className="gradient-text-animated">digital</span>
              <br />
              products &amp; experiences
              <br />
              that <span className="gradient-text">inspire.</span>
            </h1>

            {/* Typewriter subtitle */}
            <div
              className="text-lg sm:text-xl text-slate-400 flex flex-wrap justify-center
                lg:justify-start items-center gap-2 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span>I&apos;m Ahmad —</span>
              <span className="text-cyan-300 font-semibold min-h-[1.75rem]">
                <Typewriter
                  options={{
                    strings: [
                      "a Software Engineer",
                      "a Mobile App Developer",
                      "a Web Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 35,
                  }}
                />
              </span>
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center
                lg:justify-start gap-4 mb-10 animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#projects"
                className="group relative px-7 py-3.5 rounded-full
                  bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold
                  text-sm tracking-wide shadow-lg shadow-cyan-500/25
                  hover:shadow-cyan-500/45 transition-all duration-300
                  hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <HiArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border border-white/10 text-slate-300
                  hover:text-white font-semibold text-sm tracking-wide transition-all
                  duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-white/5"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links + stats */}
            <div
              className="flex items-center justify-center lg:justify-start
                gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="https://github.com/Muhammad-Ahmad42"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center
                  justify-center text-slate-400 hover:text-white hover:border-white/25
                  hover:bg-white/5 transition-all duration-200"
              >
                <FaGithub className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ahmad-940653252/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center
                  justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30
                  hover:bg-cyan-500/5 transition-all duration-200"
              >
                <FaLinkedin className="w-[18px] h-[18px]" />
              </a>

              <div className="h-7 w-px bg-white/10 mx-1" />

              <div className="flex items-center gap-5 text-sm">
                <div>
                  <span className="font-bold text-white text-base tracking-tight">3+</span>
                  <span className="text-slate-500 text-xs ml-1">Yrs Exp.</span>
                </div>
                <div>
                  <span className="font-bold text-white text-base tracking-tight">20+</span>
                  <span className="text-slate-500 text-xs ml-1">Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: AVATAR ── */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 to-blue-600/20 blur-2xl scale-125" />
              {/* Slow-spinning dashed ring */}
              <div
                className="absolute rounded-full border border-dashed border-cyan-500/20 animate-spin-slow"
                style={{ inset: "-18px" }}
              />
              {/* Static outer ring */}
              <div
                className="absolute rounded-full border border-cyan-500/10"
                style={{ inset: "-8px" }}
              />
              {/* Avatar image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/35 shadow-[0_0_50px_rgba(34,211,238,0.25)]">
                <Image
                  src="/Images/Ahmad.png"
                  alt="Muhammad Ahmad"
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 glass-card px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl animate-float">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 text-sm">
                  ✦
                </div>
                <div className="leading-none">
                  <p className="text-white text-sm font-semibold">Full Stack</p>
                  <p className="text-slate-400 text-xs mt-0.5">Developer</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
