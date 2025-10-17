"use client";
import React from "react";

type SocialIconProps = {
  link: string;
  icon: React.ReactNode;
  hoverColor?: string;
  bgColor?: string;
  size?: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({
  link,
  icon,
  hoverColor = "hover:bg-cyan-600",
  bgColor = "bg-blue-950/60",
  size = "w-14 h-14",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${size} ${bgColor} rounded-full flex items-center justify-center 
      cursor-pointer ${hoverColor} transition-all duration-300`}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
