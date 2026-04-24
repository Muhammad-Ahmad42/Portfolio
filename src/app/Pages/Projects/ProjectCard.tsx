import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  imageSrc: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

export default function ProjectCard({ imageSrc, title, subtitle, tags = [] }: Props) {
  return (
    <Link
      href="https://github.com/Muhammad-Ahmad42"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full group"
    >
      <article className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(34,211,238,0.09)]">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1528] via-[#0a1528]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
          {/* CTA chip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-cyan-500/90 text-white text-xs font-semibold backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 whitespace-nowrap shadow-lg shadow-cyan-500/30">
            View Project ↗
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-white text-lg font-bold mb-1.5 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 flex-grow">
            {subtitle}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-300 border border-cyan-800/35"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
