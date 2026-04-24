import React from "react";

type Props = {
  Icon: React.ReactNode;
  title: string;
  description: string;
  date?: string;
};

export default function WorksCards({ Icon, title, description, date }: Props) {
  return (
    <div className="relative pl-6 sm:pl-8 group">
      {/* Timeline vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/15 to-transparent" />
      {/* Timeline dot */}
      <div
        className="absolute left-[-5px] top-7 w-[10px] h-[10px] rounded-full
          bg-[var(--bg-base)] border-2 border-cyan-500/50
          group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]
          transition-all duration-400"
      />

      <div className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4">
        {/* Icon */}
        <div
          className="shrink-0 w-12 h-12 rounded-xl
            bg-cyan-500/10 border border-cyan-500/15
            flex items-center justify-center text-cyan-300 text-xl
            group-hover:scale-105 transition-transform duration-300"
        >
          {Icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {date && (
            <span className="inline-block mb-2.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-semibold tracking-wide">
              {date}
            </span>
          )}
          <h3 className="text-white text-lg font-bold mb-1.5 group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
