import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: Props) {
  return (
    <div
      className="group bg-gradient-to-br from-[#111827] to-[#0b1220] 
      border border-cyan-800/30 rounded-2xl p-8 text-center 
      hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-500 ease-out 
      shadow-lg shadow-black/40"
    >
      <div className="flex justify-center items-center text-cyan-400 text-5xl mb-5">
        {icon}
      </div>
      <h2 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
        {title}
      </h2>
      <p className="text-gray-400 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
