import React from "react";

type Props = {
  Icon: React.ReactNode;
  title: string;
  description: string;
  date?: string;
};

function WorksCards({ Icon, title, description, date }: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-start space-x-4 bg-gradient-to-r from-blue-950/40 to-cyan-900/20 transition-all duration-500
       hover:from-blue-900/50 hover:to-cyan-800/30 hover:-translate-y-2 hover:shadow-2xl sm:p-6 p-6 rounded-2xl backdrop-blur-sm border
        border-blue-900/40 ">
      
        <div className="sm:w-16 sm:h-16 w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-800/40 rounded-2xl flex items-center 
        justify-center shadow-inner">
          <div className="text-white sm:text-3xl text-2xl">{Icon}</div>
        </div>
        <div className="flex-1">
          {date && (
            <span className="inline-block mb-3 px-6 py-3 rounded-full bg-white text-blue-950 font-semibold text-xs sm:text-sm shadow-md">
              {date}
            </span>
          )}
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 tracking-wide">
            {title}
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorksCards;
