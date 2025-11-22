import Image from "next/image";
import DiscordButton from "./components/DiscordButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Logo */}
            <div className="relative w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Phase 4 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Text Content - Right side */}
            <div className="flex flex-col items-start justify-center text-left space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="font-tt-hoves text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight leading-tight">
                phase
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold uppercase">
                builder accelerator
              </p>
              <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold leading-tight space-y-1">
                <div>learn.</div>
                <div>build.</div>
                <div>launch.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full bg-black py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="font-tt-hoves text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What You Get
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              An interactive community preparing new CS grads and junior
              engineers with the skills needed to rapidly develop applications
              and launch them in the real world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Community */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Community
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Join a community of developers learning new AI development
                skills together.
              </p>
            </div>

            {/* Rapid Development Skills */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Rapid AI Development
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Master the skills to build AI applications quickly and scalably.
              </p>
            </div>

            {/* Hands-On Instruction */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Hands-On Instruction
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Learn by doing with practical, real-world projects and guidance.
              </p>
            </div>

            {/* Weekly Calls */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Weekly Calls
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Regular check-ins and support sessions to keep you on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="font-tt-hoves text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Ready to Launch?
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
            Join our Discord community and start building with us today.
          </p>
          <DiscordButton href="https://discord.gg/b2cqNemxD4">
            Join Discord
          </DiscordButton>
        </div>
      </section>
    </main>
  );
}
