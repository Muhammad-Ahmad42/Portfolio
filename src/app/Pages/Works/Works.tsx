import React from "react";
import WorksCards from "./WorksCards";
import { FaLaptopCode, FaDesktop, FaUniversity, FaCertificate } from "react-icons/fa";

function Works() {
  return (
    <section id="works" className="pt-20 pb-16 bg-[#0f1627]">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-snug max-w-[20ch]">
            My Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Experience
            </span>
          </h1>

          <div className="mt-8 space-y-8">
            <WorksCards
              Icon={<FaLaptopCode />}
              title="Full Stack Developer"
              description="Developed end-to-end web and mobile applications using React Native, React, Node.js, and MongoDB. Focused on clean UI, efficient state management, and scalable backend design."
            />

            <WorksCards
              Icon={<FaDesktop />}
              title="Front End Developer"
              description="Created responsive, interactive, and modern UIs using Next.js and Tailwind CSS. Ensured cross-device compatibility and optimized performance."
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-snug max-w-[20ch]">
            My Education{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Journey
            </span>
          </h1>

          <div className="mt-12 space-y-8">
            <WorksCards
              Icon={<FaUniversity />}
              title="University of Central Punjab"
              description="Bachelor of Science in Software Engineering, specializing in full-stack development, artificial intelligence, and cloud computing. Learned to build robust applications and optimize systems for real-world performance."
              date="Dec 2021 – May 2025"
            />

            <WorksCards
              Icon={<FaCertificate />}
              title="React.js Certification – Meta"
              description="Completed Meta’s professional React.js certification covering React fundamentals, hooks, context, routing, performance optimization, and production deployment best practices."
              date="Aug 2024"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
