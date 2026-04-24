"use client";
import React from "react";
import { FaCode, FaShoppingCart, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const serviceItems = [
  {
    icon: <FaCode />,
    title: "Web & Mobile Apps",
    description:
      "High-quality web and mobile applications built with modern frameworks for seamless, performant cross-platform experiences.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce Solutions",
    description:
      "Customized online store experiences designed to boost conversions and optimize the end-to-end user journey.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI & UX Design",
    description:
      "Beautiful, intuitive interfaces that elevate your brand identity and drive meaningful, lasting user engagement.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Design & Creation",
    description:
      "Creative branding and visual systems that tell your story with clarity, consistency, and measurable impact.",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" style={{ background: "var(--bg-surface)" }} className="py-24">
      <div
        ref={ref}
        className={`w-[90%] md:w-[85%] lg:w-[80%] mx-auto transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="section-eyebrow mb-5 block">What I Do</span>
          <h2 className="display-font text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Collaborate with brands &amp; agencies
            <br className="hidden sm:block" />
            <span className="gradient-text"> to create impactful results</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceItems.map((item, i) => (
            <ServiceCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={i * 90}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
