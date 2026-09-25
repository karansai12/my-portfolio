"use client"

import Link from "next/link";
import { Code, Database, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

const HIGHLIGHTS = [
    {
        icon: Code,
        title: "Frontend Engineering",
        description:
            "Specialized in React, Next.js, and TypeScript. Proficient in crafting component architectures using Tailwind CSS, Zustand, and Redux Toolkit.",
    },
    {
        icon: Database,
        title: "Full-Stack & APIs",
        description:
            "Hands-on building REST & GraphQL APIs, Node.js services, JWT role-based auth, and databases with PostgreSQL, Prisma, and MongoDB.",
    },
    {
        icon: Briefcase,
        title: "Production Experience",
        description:
            "Full Stack Developer Intern at Zealnex. Experienced in implementing CI/CD with GitHub Actions, testing endpoints with Postman, and deploying to Vercel.",
    },
];

export default function AboutSection() {
    const router = useRouter();
    return (
        <section id="about" className="relative py-28 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
                    About <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Me</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Narrative */}
                    <div className="flex flex-col gap-6 text-left">
                        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100 leading-snug">
                            Frontend Engineer specializing in scalable React & TypeScript web applications.
                        </h3>

                        <p className="text-neutral-400 text-base leading-relaxed">
                            With 3 years of hands-on experience, I focus on engineering responsive, production-focused applications. My background spans client work and software engineering internships, with deep practice in state management, data-intensive interfaces, and end-to-end integration.
                        </p>

                        <p className="text-neutral-400 text-base leading-relaxed">
                            I have delivered applications featuring role-based access control, real-time analytics data pipelines, and reusable UI systems. I take pride in writing clean, type-safe code that bridges intuitive interfaces with reliable backend services.
                        </p>

                        {/* Quick Actions */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <a
                                href="/contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/contact");
                                }}
                                className="px-6 py-2.5 text-sm font-semibold rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-all shadow-[0_0_15px_rgba(147,51,234,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Experience Highlights */}
                    <div className="flex flex-col gap-4">
                        {HIGHLIGHTS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border border-white/10 bg-[#0e0e13]/60 backdrop-blur-sm hover:border-purple-500/40 hover:bg-[#13121d]/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/30 flex items-start gap-5"
                                >
                                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 shrink-0">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-100 mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}