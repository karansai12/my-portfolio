"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#09090b]/80 backdrop-blur-md py-4 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group text-xl font-bold tracking-tight">
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            KaranSai.M.D
          </span>
        </Link>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide text-white bg-purple-600 rounded-full hover:bg-purple-500 transition-all shadow-[0_0_15px_rgba(147,51,234,0.4)] hover:shadow-[0_0_20px_rgba(147,51,234,0.6)]"
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
        </a>
      </div>
    </header>
  );
}