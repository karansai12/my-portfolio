import Link from "next/link";
import { ExternalLink, Layers, Sparkles } from "lucide-react";

// Self-contained GitHub SVG (no extra package needed)
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
}

const PROJECTS: Project[] = [
  {
    title: "PulseBoard",
    subtitle: "Real-Time User Analytics Platform",
    description:
      "A real-time web analytics dashboard with an embeddable tracking client that monitors user visits and navigation streams from external applications.",
    tags: ["Next.js", "GraphQL", "Apollo Server", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://pulse-board-gray.vercel.app/",
    githubUrl: "https://github.com/karansai12/pulse_board",
    highlights: [
      "Integrated live navigation tracking directly into production systems without seeded data",
      "Interactive category filtering and dynamic visits-over-time trend graphs",
      "Apollo Client & Server setup with strongly typed GraphQL schemas",
    ],
  },
  {
    title: "Pro-Tech Suite",
    subtitle: "Enterprise Project & Workflow Management",
    description:
      "A full-stack workflow system managing task distributions, role-based access control, and team progress tracking across Manager and Employee tiers.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "shadcn/ui", "AG Grid", "JWT"],
    liveUrl: "https://pro-tech-suite.vercel.app/",
    githubUrl: "https://github.com/karansai12",
    highlights: [
      "Role-based authentication pipelines (RBAC) with secure JWT workflows",
      "Data-intensive grid views supporting complex sorting, filtering, and live statuses",
      "Relational database architecture built on PostgreSQL and Prisma ORM",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Projects</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Production-grade full-stack applications with real-world integrations, live data, and scalable architectures.
          </p>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-white/10 bg-[#0e0e13]/70 backdrop-blur-md p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/40 hover:bg-[#13121d]/90 hover:shadow-2xl hover:shadow-purple-950/40 hover:-translate-y-1.5"
            >
              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <span className="text-xs uppercase font-mono tracking-wider text-purple-300/80">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-neutral-900/60 border border-white/10 text-neutral-300 hover:text-white hover:border-purple-500/40 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white transition-all shadow-[0_0_10px_rgba(147,51,234,0.3)]"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-neutral-100 group-hover:text-purple-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Tags & Action */}
              <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    <span>Visit Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/karansai12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-xs md:text-sm font-semibold rounded-full border border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-neutral-900 transition-all hover:scale-105 active:scale-95"
          >
            <GithubIcon className="w-4 h-4 text-purple-400" />
            <span>Explore More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}