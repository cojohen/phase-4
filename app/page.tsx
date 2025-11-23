import Image from "next/image";
import DiscordButton from "./components/DiscordButton";
import Navbar from "./components/Navbar";
import WaitlistButton from "./components/WaitlistButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#5865F2] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#5865F2]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#4752C4]/20 rounded-full blur-[120px]" />
        {/* Grid pattern simulation */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero Part 1: The Hook */}
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_30%] lg:col- gap-0 lg:gap-4 items-center pb-8">
          {/* Text Column */}
          <div className="text-center lg:text-left mt-40 lg:mt-0">
            <h1 className="font-tt-hoves text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 ">
                Stop Waiting for&nbsp;Permission.
              </span>
            </h1>
          </div>

          {/* Logo Column */}
          <div className="relative flex items-center justify-center lg:justify-start animate-fade-in-up">
            <div className="relative w-[200px] sm:w-[240px] lg:w-[250px] h-[415px]">
              <Image
                src="/phase-logo-large.png"
                alt="Phase 4"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hidden sm:block">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Hero Part 2: The Action */}
      <section className="relative z-10 w-full min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-tt-hoves text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 text-[#5865F2] leading-tight">
            Start Shipping Software.
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            The job market is broken. The old path is dead.
            <br />
            We are providing{" "}
            <span className="text-white font-bold">jetpacks</span> to 1,000
            junior engineers—teaching rapid building & launching of AI
            applications.
          </p>

          <div className="flex flex-col items-center space-y-6">
            <div className="transform sm:scale-125">
              <DiscordButton href="https://discord.gg/b2cqNemxD4">
                Join the Discord (Free)
              </DiscordButton>
            </div>
            <p className="text-base sm:text-lg text-white/40 italic pt-4">
              No gatekeepers. No waiting for internships.
            </p>
          </div>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm border-y border-white/5">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="font-tt-hoves text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12">
            You Have the Degree. <br className="hidden sm:block" />
            <span className="text-red-500">But Do You Have the Leverage?</span>
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-md">
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium leading-relaxed mb-8">
              Let’s be honest. You’ve sent hundreds of resumes. <br />
              You’ve heard "we need more experience" for entry-level roles.
            </p>
            <div className="bg-black/40 rounded-xl p-6 mb-8 border border-white/5">
              <p className="text-lg sm:text-xl text-white/60 italic">
                The Internship Paradox:&nbsp;&nbsp;
                <span className="text-white not-italic font-bold">
                  You need a job to get skills, but you need skills to get a
                  job.
                </span>
              </p>
            </div>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10">
              While you wait for a callback, the industry is changing. AI is
              rewriting the rules of software engineering. You can either fear
              it, or you can wield it.
            </p>
            <p className="font-tt-hoves text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5865F2] to-[#99AAB5] uppercase tracking-wider">
              Phase 4 is the weapon.
            </p>
          </div>
        </div>
      </section>

      {/* What is Phase 4? */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="font-tt-hoves text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The World's First{" "}
              <span className="text-[#5865F2]">Hyperdeveloper</span> Accelerator
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl mx-auto">
              Phase 4 is not a bootcamp. It is a decentralized accelerator for
              rapid applications development. We teach junior engineers how to
              use AI as a design partner to develop and launch complete
              applications in days, not months.
            </p>
            <p className="mt-6 text-xl sm:text-2xl font-bold text-white">
              Some build to learn.{" "}
              <span className="underline decoration-[#5865F2] decoration-4 underline-offset-4">
                We build to launch.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="font-tt-hoves text-2xl font-bold mb-4">
                  Extreme Velocity
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Stop writing boilerplate and get out of tutorials. Learn to
                  use AI tools to architect complex systems in days, not months.
                  You will move faster than any legacy engineer.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-4xl mb-6">🌐</div>
                <h3 className="font-tt-hoves text-2xl font-bold mb-4">
                  Scale & Deployment
                </h3>
                <p className="text-white/70 leading-relaxed">
                  "It works on my machine" doesn't get you hired. We'll teach
                  you how to deploy your applications to the cloud immediately.
                  Real experience going 0 to 1.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-4xl mb-6">💰</div>
                <h3 className="font-tt-hoves text-2xl font-bold mb-4">
                  Market & Monetize
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Code in a vacuum is useless. We teach you how to go to market
                  and leverage LinkedIn and GitHub to grow your visibility and
                  attract investors, clients, and recruiters to <i>you</i>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Strategy */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#5865F2]/10">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16">
          <div className="flex-1 text-left">
            <h2 className="font-tt-hoves text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We Don't Just Code. <br />
              <span className="text-[#5865F2]">We Network.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
              Phase 4 utilizes a "Social Lift" strategy. When you ship, we
              support. When you post on LinkedIn, we engage. When you launch we
              upvote, comment, retweet and signup.
            </p>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              By joining Phase 4, you are instantly plugging into a network of
              builders who are actively boosting each other's visibility in the
              algorithm.{" "}
              <span className="text-white font-bold">
                You will not be invisible anymore.
              </span>
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-square max-w-md mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center p-8 animate-pulse-slow">
              {/* Abstract Network Visualization */}
              <div className="absolute inset-0 rounded-full border border-[#5865F2]/30 scale-75" />
              <div className="absolute inset-0 rounded-full border border-[#5865F2]/20 scale-50" />
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <div className="text-xl font-bold text-white">Social Lift</div>
                <div className="text-sm text-white/50">Algorithm Boosting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="font-tt-hoves text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
            Choose Your Path
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Hangar (Free) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col">
              <div className="mb-8">
                <h3 className="font-tt-hoves text-2xl font-bold text-white mb-2">
                  The Hangar
                </h3>
                <p className="text-[#5865F2] font-bold text-xl">Free</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">
                    Full Community Discord Access
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">
                    Weekly Live Calls & Workshops
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">
                    Participation in the Social Lift program
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">
                    Feedback on your builds from peers
                  </span>
                </li>
              </ul>
              <DiscordButton href="https://discord.gg/b2cqNemxD4">
                Join for Free
              </DiscordButton>
            </div>

            {/* The Accelerator (Premium) */}
            <div className="relative bg-gradient-to-b from-[#5865F2]/20 to-black border border-[#5865F2] rounded-2xl p-8 sm:p-10 flex flex-col transform md:-translate-y-4 shadow-2xl shadow-[#5865F2]/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5865F2] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Recommended
              </div>
              <div className="mb-8">
                <h3 className="font-tt-hoves text-2xl font-bold text-white mb-2">
                  The Accelerator
                </h3>
                <p className="text-[#5865F2] font-bold text-xl">Premium</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start">
                  <span className="text-[#5865F2] mr-3 font-bold">★</span>
                  <span className="text-white font-medium">
                    Everything in Free, plus:
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">
                    Additional weekly calls in smaller groups
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">Weekly office hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">
                    Direct mentorship on resume/portfolio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">
                    Private members channel Discord
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/80">
                    Phase 4's starter kit GitHub repository
                  </span>
                </li>
              </ul>
              <WaitlistButton />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="font-tt-hoves text-4xl sm:text-5xl md:text-7xl font-bold mb-8">
            Your Jetpack is Waiting.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            The next 6 months will go by anyway. You can spend it waiting for an
            email rejection, or you can spend it building a portfolio that makes
            you undeniable.
          </p>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DiscordButton href="https://discord.gg/b2cqNemxD4">
              LAUNCH YOUR CAREER NOW
            </DiscordButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 border-t border-white/10 text-center text-white/40 text-sm">
        <p>
          © 2025 Phase 4. All rights reserved. Safety not guaranteed. Always
          wear a helmet when flying a jetpack.
        </p>
      </footer>
    </main>
  );
}
