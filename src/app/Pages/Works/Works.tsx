"use client";
import React from "react";
import WorksCards from "./WorksCards";
import { FaLaptopCode, FaDesktop, FaUniversity, FaCertificate } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Works() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="works" style={{ background: "var(--bg-base)" }} className="py-24">
      <div
        ref={ref}
        className={`w-[90%] md:w-[85%] lg:w-[80%] mx-auto transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow mb-5 block">My Journey</span>
          <h2 className="display-font text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Work Experience column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 mb-7 flex items-center gap-2.5 uppercase tracking-wider">
              <span className="w-6 h-6 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-[10px] font-bold">
                W
              </span>
              Work Experience
            </h3>
            <div className="space-y-5">
              <WorksCards
                Icon={<FaLaptopCode />}
                title="Full Stack Developer"
                description="Developed end-to-end web and mobile applications using React Native, React, Node.js, and MongoDB — focused on clean UI, scalable backend design, and efficient state management."
              />
              <WorksCards
                Icon={<FaDesktop />}
                title="Front End Developer"
                description="Built responsive, interactive, and performant UIs with Next.js and Tailwind CSS, ensuring cross-device compatibility and optimal Core Web Vitals scores."
              />
            </div>
          </div>

          {/* Education column */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 mb-7 flex items-center gap-2.5 uppercase tracking-wider">
              <span className="w-6 h-6 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-[10px] font-bold">
                E
              </span>
              Education
            </h3>
            <div className="space-y-5">
              <WorksCards
                Icon={<FaUniversity />}
                title="University of Central Punjab"
                description="BSc in Software Engineering — specializing in full-stack development, AI, and cloud computing. Built robust applications optimized for real-world performance."
                date="Dec 2021 – May 2025"
              />
              <WorksCards
                Icon={<FaCertificate />}
                title="React.js Certification – Meta"
                description="Meta's professional React certification covering hooks, context, routing, performance optimization, and production deployment best practices."
                date="Aug 2024"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
