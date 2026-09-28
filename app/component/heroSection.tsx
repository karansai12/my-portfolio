import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 z-10">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Full-Stack Developer</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
            Karan
          </span>
        </h1>

        {/* Bio Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed">
          I build high-performance, modern web applications with thoughtful user experiences. 
          Specializing in React, Next.js, and modern full-stack architectures.
        </p>
      </div>

      {/* Bouncing Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500 hover:text-purple-400 transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 text-purple-400" />
      </a>
    </section>
  );
}