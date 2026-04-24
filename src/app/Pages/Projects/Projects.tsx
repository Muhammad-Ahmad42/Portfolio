"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" style={{ background: "var(--bg-surface)" }} className="py-24">
      <div
        ref={ref}
        className={`w-[90%] md:w-[85%] lg:w-[80%] mx-auto transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow mb-5 block">Portfolio</span>
          <h2 className="display-font text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            A selection of recent{" "}
            <span className="gradient-text">projects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            imageSrc="/Images/project1.jpeg"
            title="Wildlife Conservation App"
            subtitle="AI and ML powered application for wildlife monitoring and tracking."
            tags={["AI/ML", "Python", "Data Science"]}
          />
          <ProjectCard
            imageSrc="/Images/project2.png"
            title="Modern E-commerce Platform"
            subtitle="Built on Next.js, featuring responsive Tailwind CSS design."
            tags={["Next.js", "Tailwind CSS", "TypeScript"]}
          />
          <ProjectCard
            imageSrc="/Images/project3.png"
            title="Cross-Platform Marketplace"
            subtitle="Includes real-time sync and secure payment integration."
            tags={["React Native", "PostgreSQL", "Node.js"]}
          />
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <Link
            href="https://github.com/Muhammad-Ahmad42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10
              text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/5
              text-sm font-semibold transition-all duration-300 group"
          >
            <FaGithub className="w-4 h-4" />
            <span>Explore more on GitHub</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
