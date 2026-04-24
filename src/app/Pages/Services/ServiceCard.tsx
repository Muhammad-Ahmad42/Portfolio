"use client";
import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  index?: number;
};

export default function ServiceCard({
  icon,
  title,
  description,
  delay = 0,
  index = 0,
}: Props) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group glass-card rounded-2xl p-7 flex flex-col transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Serial number */}
      <p className="text-xs font-bold tracking-widest text-slate-700 mb-5 uppercase select-none">
        0{index + 1}
      </p>

      {/* Icon container */}
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center
        justify-center text-cyan-400 text-xl mb-5
        transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-white text-lg font-semibold mb-2.5 group-hover:text-cyan-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {/* Hover arrow */}
      <div className="mt-5 flex items-center gap-1.5 text-cyan-400 opacity-0 group-hover:opacity-100
        transition-all duration-300 text-xs font-semibold tracking-wide -translate-x-1 group-hover:translate-x-0">
        <span>Learn more</span>
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
      </div>
    </div>
  );
}
