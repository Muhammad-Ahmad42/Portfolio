"use client";
import React from "react";

type Props = {
  link: string;
  icon: React.ReactNode;
  hoverColor?: string;
  bgColor?: string;
  size?: string;
};

export default function SocialIcon({
  link,
  icon,
  hoverColor = "hover:bg-cyan-600",
  bgColor = "bg-white/[0.06]",
  size = "w-11 h-11",
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${size} ${bgColor} ${hoverColor} rounded-full flex items-center justify-center
        border border-white/[0.06] hover:border-white/10
        hover:scale-105 transition-all duration-200 cursor-pointer`}
    >
      {icon}
    </a>
  );
}
