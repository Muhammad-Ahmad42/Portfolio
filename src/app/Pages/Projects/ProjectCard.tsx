import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

function ProjectCard({ imageSrc, title, subtitle }: Props) {
  return (
    <Link
      href="https://github.com/Muhammad-Ahmad42"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-[hsl(219,46%,12%)] w-[90%] sm:w-[85%] lg:w-[80%] mx-auto rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/30 flex flex-col h-[400px]">
        
        <div className="relative w-full h-[70%] overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-top bg-amber-50"
          />
        </div>

        <div className="p-5 flex flex-col justify-center flex-grow">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
            {title}
          </h2>
          <p className="text-cyan-300 text-base sm:text-lg font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
