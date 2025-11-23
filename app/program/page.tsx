import Navbar from "../components/Navbar";
import DiscordButton from "../components/DiscordButton";

export default function ProgramPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#5865F2] selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#5865F2]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#4752C4]/10 rounded-full blur-[120px]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="font-tt-hoves text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        The <span className="text-[#5865F2]">Program</span> Cadence
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        We don't just dump content on you. We run a live, synchronized accelerator where everyone builds, ships, and grows together.
                    </p>
                </div>

                {/* Schedule Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">

                    {/* Daily & Weekly Routine (Left Column) */}
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="font-tt-hoves text-2xl font-bold mb-6 flex items-center">
                            <span className="w-2 h-8 bg-[#5865F2] mr-4 rounded-full"></span>
                            Weekly Schedule
                        </h2>

                        {/* Tech Instruction */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Tech Instruction</h3>
                                    <p className="text-white/60 text-sm">Live coding & architecture deep dives</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-[#5865F2]/20 text-[#5865F2] text-xs font-bold uppercase">
                                    Core
                                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center text-white/80">
                                    <span className="mr-4 w-28 font-mono text-sm text-white/40">MON 4PM EST</span>
                                    <span>Learning to Build (All Members)</span>
                                </div>
                                <div className="flex items-center text-[#5865F2]">
                                    <span className="mr-4 w-28 font-mono text-sm opacity-60">WED 10AM EST</span>
                                    <span className="font-bold">Advanced Patterns (Premium Only)</span>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Office Hours Q&A</h3>
                                    <p className="text-white/60 text-sm">Unblock your progress directly with mentors</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-[#5865F2]/20 text-[#5865F2] text-xs font-bold uppercase">
                                    Support
                                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center text-white/80">
                                    <span className="mr-4 w-28 font-mono text-sm text-white/40">WED 4PM EST</span>
                                    <span>General Q&A (All Members)</span>
                                </div>
                                <div className="flex items-center text-[#5865F2]">
                                    <span className="mr-4 w-28 font-mono text-sm opacity-60">FRI 10AM EST</span>
                                    <span className="font-bold">Strategy & Career (Premium Only)</span>
                                </div>
                            </div>
                        </div>

                        {/* App Building Challenge */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Weekly Build Challenge</h3>
                                    <p className="text-white/60 text-sm">Ship a specific feature or app every week</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase">
                                    Action
                                </span>
                            </div>
                            <div className="flex items-center text-white/80">
                                <span className="mr-4 w-28 font-mono text-sm text-white/40">MON 9AM EST</span>
                                <span>Challenge Drop & Resources Released</span>
                            </div>
                        </div>
                    </div>

                    {/* Special Events & Community (Right Column) */}
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="font-tt-hoves text-2xl font-bold mb-6 flex items-center">
                            <span className="w-2 h-8 bg-white/20 mr-4 rounded-full"></span>
                            Community & Events
                        </h2>

                        {/* Demo Day */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#5865F2]/20 to-black border border-[#5865F2]/50 rounded-xl p-6">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Demo Day</h3>
                            <p className="text-white/80 mb-4">Live streamed to the world. Show off what you've built.</p>
                            <div className="inline-block bg-[#5865F2] text-white text-sm font-bold px-3 py-1 rounded">
                                Last Saturday of Month
                            </div>
                        </div>

                        {/* Community Chat */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">24/7 Community Chat</h3>
                            <p className="text-white/60 text-sm mb-4">
                                Get help, ask questions, network, and socialize with other builders.
                            </p>
                            <div className="flex items-center space-x-2 text-green-400 text-sm font-mono">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span>Always Active</span>
                            </div>
                        </div>

                        {/* Social Lift */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Social Lift Program</h3>
                            <p className="text-white/60 text-sm mb-4">
                                We boost your LinkedIn & Twitter presence to help make sure you get seen.
                            </p>
                            <div className="flex -space-x-2 overflow-hidden mb-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-white/10 flex items-center justify-center text-xs">
                                        👤
                                    </div>
                                ))}
                                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-[#5865F2] flex items-center justify-center text-xs font-bold">
                                    +1k
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Program Requirements Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="font-tt-hoves text-3xl sm:text-4xl font-bold mb-4">
                            Program Requirements
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            We are looking for builders who are ready to move fast.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Ideal Candidates */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="font-tt-hoves text-2xl font-bold text-white mb-6">
                                Who is this for?
                            </h3>
                            <div className="space-y-4 text-white/80 leading-relaxed">
                                <p>
                                    <strong className="text-white">Ideal Candidates:</strong> CS grads or students as early as 2nd year. Self-taught developers who want to build more, faster and with more impact.
                                </p>
                                <p>
                                    Tech founders, recent grads, and junior developers looking to level up.
                                </p>
                                <p>
                                    Senior developers who don't know how to use AI to build quickly and want to modernize their workflow.
                                </p>
                            </div>
                        </div>

                        {/* Prerequisites */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="font-tt-hoves text-2xl font-bold text-white mb-6">
                                Prerequisites
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Must know at least one programming language (we can't teach you how to program).",
                                    "A reliable internet connection to attend meetings.",
                                    "Must attend video meetings, reliably, on time.",
                                    "Provide professional, positive interactions with teammates.",
                                    "Helps if you have some app development experience (but not required).",
                                    "Willing to learn new things and try new methods."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-[#5865F2] mr-3 mt-1">●</span>
                                        <span className="text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-12">
                    <h2 className="font-tt-hoves text-3xl font-bold mb-6">Ready to to take the leap?</h2>
                    <div className="flex justify-center">
                        <DiscordButton href="https://discord.gg/b2cqNemxD4">
                            Join the Discord
                        </DiscordButton>
                    </div>
                </div>

            </div>
        </main>
    );
}
