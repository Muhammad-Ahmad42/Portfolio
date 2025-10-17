"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center 
      text-white bg-gradient-to-b from-[#0f1627] to-[#07101d] overflow-hidden px-4"
    >
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden 
          border-[3px] border-cyan-300 shadow-lg shadow-cyan-500/30"
        >
          <Image
            src="/Images/Ahmad.png"
            alt="Muhammad Ahmad"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        <h1
          className="mt-8 font-bold tracking-wide leading-snug text-center 
          text-3xl sm:text-5xl md:text-6xl max-w-[90%] sm:max-w-3xl lg:max-w-4xl"
        >
          Crafting <span className="text-cyan-300">digital products</span>, brands, <br />
          and experiences that <span className="text-cyan-300">inspire.</span>
        </h1>

        <div
          className="mt-6 text-lg sm:text-2xl text-gray-300 flex flex-wrap justify-center 
          items-center leading-relaxed"
        >
          <span className="mr-1">I am Ahmad,</span>
          <span className="text-cyan-300 font-semibold">
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

        <button
          className="mt-10 px-8 sm:px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-700 
          hover:from-cyan-400 hover:to-blue-600 text-white rounded-full text-lg 
          font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 
          transition-all duration-300 flex items-center gap-2 group"
        >
          <span>See my Work</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
