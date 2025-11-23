"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-tt-hoves font-bold text-2xl text-white tracking-tight hover:text-[#5865F2] transition-colors"
          >
            phase4
          </Link>
        </div>

        <div className="flex items-center space-between gap-8">
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/program"
              className="text-md font-medium text-white/70 hover:text-[#5865F2] transition-colors"
            >
              The Program
            </Link>
          </div>
          {/* CTA */}
          <a
            href="https://discord.gg/b2cqNemxD4"
            target="_blank"
            rel="noopener noreferrer"
            className="font-tt-hoves font-bold text-sm bg-white text-black px-5 py-2.5 rounded-[4px] hover:bg-[#5865F2] hover:text-white hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(88,101,242,0.5)]"
          >
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
}
