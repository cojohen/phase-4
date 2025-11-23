"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function WaitlistButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const triggerConfetti = () => {
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

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
            colors: ["#5865F2", "#4752C4", "#7289DA", "#FFFFFF", "#23272A"],
        });

        fire(0.2, {
            spread: 60,
            origin: { x: 0.2, y: 0.7 },
            startVelocity: 45,
            colors: ["#5865F2", "#4752C4", "#7289DA", "#FFFFFF"],
        });

        fire(0.2, {
            spread: 60,
            origin: { x: 0.8, y: 0.7 },
            startVelocity: 45,
            colors: ["#5865F2", "#4752C4", "#7289DA", "#FFFFFF"],
        });

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
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const FORMSPREE_ID = "xzzwknkp";

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");

                // Trigger confetti immediately on success
                triggerConfetti();

                // Wait 1 second before navigating and closing
                setTimeout(() => {
                    window.open("https://discord.gg/b2cqNemxD4", "_blank", "noopener,noreferrer");
                    setIsOpen(false);
                    setStatus("idle");
                }, 1000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="w-full bg-white text-black font-tt-hoves font-bold text-lg py-4 rounded-[4px] hover:bg-gray-200 transition-colors"
            >
                Join the Waitlist
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal */}
                    <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in-up">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                        >
                            ✕
                        </button>

                        <h3 className="font-tt-hoves text-2xl font-bold text-white mb-2">
                            Join the Accelerator
                        </h3>
                        <p className="text-white/60 mb-6">
                            Enter your email to get early access to the premium curriculum and mentorship.
                        </p>

                        {status === "success" ? (
                            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                                <p className="text-green-400 font-bold">You're on the list! 🚀</p>
                                <p className="text-white/60 text-sm mt-1">Opening Discord...</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#5865F2] transition-colors"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-[#5865F2] text-white font-bold py-3 rounded-lg hover:bg-[#4752C4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {status === "submitting" ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        "Join Waitlist"
                                    )}
                                </button>

                                {status === "error" && (
                                    <p className="text-red-400 text-sm text-center">
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
