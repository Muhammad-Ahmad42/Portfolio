"use client";
import { skills } from "@/constants/Skills";
import React from "react";
import Tilt from "react-parallax-tilt";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" style={{ background: "var(--bg-base)" }} className="py-24">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow mb-5 block">My Expertise</span>
          <h2 className="display-font text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Skill cards */}
        <div className="flex flex-wrap justify-center gap-5 px-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Tilt
              key={skill.name}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              scale={1.04}
              transitionSpeed={900}
              glareEnable
              glareColor="#22d3ee"
              glareMaxOpacity={0.12}
              glarePosition="all"
              className="w-full sm:w-auto"
            >
              <div
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`glass-card w-full sm:w-48 p-6 rounded-2xl flex flex-col items-center
                  cursor-pointer group transition-all duration-500
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <div className="mb-4 group-hover:-translate-y-1.5 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-white text-2xl font-bold tracking-tight mb-0.5">
                  {skill.percentage}%
                </p>
                <p className="text-cyan-300 text-sm font-semibold tracking-wide mb-5">
                  {skill.name}
                </p>
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-[1200ms] ease-out"
                    style={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
                  />
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
