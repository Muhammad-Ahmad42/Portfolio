import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

function Projects() {
  return (
    <section id="projects"
    className="py-20 bg-gradient-to-b from-[#0f1627] to-[#07101d]">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
        A Small Selection of Recent <br />
        <span className="text-cyan-400">Projects</span>
      </h1>

      <div
        className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto mt-14 
                   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
                   gap-8 place-items-center"
      >
        <ProjectCard
          imageSrc="/Images/project1.jpeg"
          title="Modern AI and ML-Based Applications for Wildlife Conservation"
          subtitle="AI and ML Powered"
        />

        <ProjectCard
          imageSrc="/Images/project2.png"
          title="Modern E-commerce Solution Built on Next.js, Featuring a Responsive Tailwind CSS Design"
          subtitle="Next.js"
        />

        <ProjectCard
          imageSrc="/Images/project3.png"
          title="Cross-Platform Marketplace with Real-Time Sync and Secure Payment Integration"
          subtitle="React Native, PostgreSQL"
        />

        <Link
          href="https://github.com/Muhammad-Ahmad42"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:mt-2.5"
          >
          <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            Explore More Projects
          </h2>
          <p className="text-cyan-300 text-lg flex items-center gap-1 justify-center">
            Visit my GitHub ➡
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
