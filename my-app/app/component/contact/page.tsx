"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, ArrowUp, Send, CheckCircle2 } from "lucide-react";

// Self-contained LinkedIn SVG (no external package needed)
function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:karansaimd2003@gmail.com?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get In <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Touch</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Whether you have an upcoming project, an opportunity, or just want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-neutral-100 mb-2">
              Contact Details
            </h3>

            {/* Email Card */}
            <a
              href="mailto:karansaimd2003@gmail.com"
              className="p-5 rounded-2xl border border-white/10 bg-[#0e0e13]/60 backdrop-blur-sm hover:border-purple-500/40 hover:bg-[#13121d]/80 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold text-neutral-200 group-hover:text-purple-300 transition-colors truncate">
                  karansaimd2003@gmail.com
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+918825803503"
              className="p-5 rounded-2xl border border-white/10 bg-[#0e0e13]/60 backdrop-blur-sm hover:border-purple-500/40 hover:bg-[#13121d]/80 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">Phone</p>
                <p className="text-sm font-semibold text-neutral-200 group-hover:text-purple-300 transition-colors">
                  +91 8825803503
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/karansai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-white/10 bg-[#0e0e13]/60 backdrop-blur-sm hover:border-purple-500/40 hover:bg-[#13121d]/80 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">LinkedIn</p>
                <p className="text-sm font-semibold text-neutral-200 group-hover:text-purple-300 transition-colors">
                  linkedin.com/in/karansai
                </p>
              </div>
            </a>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl border border-white/10 bg-[#0e0e13]/70 backdrop-blur-md">
            <h3 className="text-xl font-bold text-neutral-100 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-neutral-300 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Karan Sai"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-white/10 text-neutral-100 placeholder:text-neutral-500 text-sm focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-white/10 text-neutral-100 placeholder:text-neutral-500 text-sm focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Hi Karan, let's discuss a project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-white/10 text-neutral-100 placeholder:text-neutral-500 text-sm focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] active:scale-[0.99]"
              >
                {isSent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Karan Sai. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 p-2.5 rounded-full border border-white/10 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-purple-500/40 transition-all"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </footer>
      </div>
    </section>
  );
}