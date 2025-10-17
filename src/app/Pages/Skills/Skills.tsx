"use client";
import { skills } from "@/constants/Skills";
import React from "react";
import Tilt from "react-parallax-tilt";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0f1627] to-[#07101d]">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
        My <span className="text-cyan-400">Skills</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-10 mt-16 px-4">
        {skills.map((skill) => (
          <Tilt
            key={skill.name}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={800}
            glareEnable={true}
            glareColor="#00ffff"
            glareMaxOpacity={0.3}
            glarePosition="all"
            className="rounded-3xl"
          >
            <div className="bg-[#101b2d] border border-cyan-500/10 hover:border-cyan-400/40
                            w-40 h-48 sm:w-48 sm:h-56 rounded-3xl flex flex-col items-center justify-center
                            shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40
                            transition-all duration-300 hover:scale-105 hover:bg-[#13203b]">
              <div className="mb-3">{skill.icon}</div>

              <p className="text-white text-2xl font-bold mb-1">
                {skill.percentage}%
              </p>

              <p className="text-cyan-300 text-lg font-medium tracking-wide mt-1">
                {skill.name}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
