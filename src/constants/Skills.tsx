import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiMongodb,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

type Skill = {
  name: string;
  icon: React.ReactNode;
  percentage: number;
};

export const skills: Skill[] = [
  {
    name: "React.js",
    icon: <SiReact className="text-cyan-400 text-6xl" />,
    percentage: 90,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-200 text-6xl" />,
    percentage: 92,
  },
  {
    name: "React Native",
    icon: <FaReact className="text-blue-400 text-6xl" />,
    percentage: 92,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300 text-6xl" />,
    percentage: 87,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-6xl" />,
    percentage: 90,
  },
  {
    name: "JavaScript",
    icon: <SiMongodb className="text-green-500 text-6xl" />,
    percentage: 89,
  },
];
