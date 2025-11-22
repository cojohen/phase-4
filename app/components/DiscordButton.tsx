"use client";

import { useCallback } from "react";
import confetti from "canvas-confetti";

interface DiscordButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function DiscordButton({ href, children }: DiscordButtonProps) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Create a burst of confetti from multiple angles
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    // Burst from center
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#5865F2", "#4752C4", "#7289DA", "#FFFFFF", "#23272A"],
    });

    // Burst from left
    fire(0.2, {
      spread: 60,
      origin: { x: 0.2, y: 0.7 },
      startVelocity: 45,
      colors: ["#5865F2", "#4752C4", "#7289DA", "#FFFFFF"],
    });

    // Burst from right
    fire(0.2, {
      spread: 60,
      origin: { x: 0.8, y: 0.7 },
      startVelocity: 45,
      colors: ["#5865F2", "#4752C4", "#7289DA", "#FFFFFF"],
    });

    // Additional bursts
    fire(0.15, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#5865F2", "#4752C4", "#7289DA"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#5865F2", "#4752C4", "#7289DA", "#FFFFFF"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#5865F2", "#4752C4", "#7289DA"],
    });

    // Wait 1 second before navigating
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 1000);
  }, [href]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative inline-flex items-center justify-center font-tt-hoves font-bold text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-[4px] bg-[#5865F2] hover:bg-[#4752C4] active:bg-[#3C45A5] focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 ease-out transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl hover:shadow-[#5865F2]/50 active:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg before:absolute before:inset-0 before:rounded-[4px] before:bg-gradient-to-r before:from-[#5865F2] before:via-[#7289DA] before:to-[#5865F2] before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-200"
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}

