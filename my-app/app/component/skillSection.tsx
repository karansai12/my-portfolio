"use client";

import { useState } from "react";
import {
  Code2,
  FileCode,
  Layers,
  Palette,
  Cpu,
  Database,
  Server,
  Network,
  Boxes,
  Container,
  Workflow,
  Radio,
} from "lucide-react";
import { cn } from "../lib/utils";


type Category = "All" | "Frontend" | "Backend & DB" | "Tools";

interface SkillItem {
  name: string;
  category: Category;
  icon: React.ElementType;
  description: string;
}

const SKILLS: SkillItem[] = [
  // Frontend
  { name: "TypeScript", category: "Frontend", icon: FileCode, description: "Type-Safe Architecture" },
  { name: "React.js", category: "Frontend", icon: Code2, description: "Component Design & Hooks" },
  { name: "Next.js", category: "Frontend", icon: Layers, description: "App Router & SSR / SSG" },
  { name: "Tailwind CSS", category: "Frontend", icon: Palette, description: "Responsive & Modern Styling" },
  { name: "Zustand", category: "Frontend", icon: Cpu, description: "Predictable Global State" },
  { name: "Redux Toolkit", category: "Frontend", icon: Workflow, description: "Complex Data Management" },

  // Backend & DB
  { name: "Node.js", category: "Backend & DB", icon: Server, description: "Server-side Runtimes & REST" },
  { name: "GraphQL", category: "Backend & DB", icon: Network, description: "Apollo Server & Queries" },
  { name: "PostgreSQL", category: "Backend & DB", icon: Database, description: "Relational Schema & Queries" },
  { name: "Prisma ORM", category: "Backend & DB", icon: Boxes, description: "Type-Safe DB Models" },
  { name: "MongoDB", category: "Backend & DB", icon: Database, description: "NoSQL Collections & Documents" },
  { name: "JWT & Auth", category: "Backend & DB", icon: Radio, description: "Role-Based Access Control" },

  // Tools & DevOps
  { name: "Docker", category: "Tools", icon: Container, description: "Containerized Workflows" },
  { name: "Git & GitHub", category: "Tools", icon: Workflow, description: "Version Control & Branching" },
  { name: "GitHub Actions", category: "Tools", icon: Cpu, description: "CI/CD Deployment Pipelines" },
  { name: "Postman", category: "Tools", icon: Network, description: "API Testing & Debugging" },
];

const CATEGORIES: Category[] = ["All", "Frontend", "Backend & DB", "Tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Skills</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Core technologies and tools I work with daily to engineer reliable, full-stack applications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)] scale-105"
                  : "bg-neutral-900/60 border border-white/10 text-neutral-400 hover:text-neutral-200 hover:border-purple-500/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative p-5 rounded-2xl border border-white/10 bg-[#0e0e13]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:bg-[#13121d]/80 hover:shadow-xl hover:shadow-purple-950/30 flex flex-col items-start gap-3"
              >
                {/* Glowing Icon Wrapper */}
                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-100 group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}