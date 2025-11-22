import Image from "next/image";
import DiscordButton from "./components/DiscordButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Logo Container with Overlay Text */}
          <div className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] aspect-square mb-6 sm:mb-8 lg:mb-12">
            <Image
              src="/logo.png"
              alt="Phase 4 Logo"
              fill
              className="object-contain"
              priority
            />
            {/* Phase Text Overlay */}
            <h1 className="absolute mt-8 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-tt-hoves text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-tight leading-tight whitespace-nowrap">
              phase
            </h1>

            {/* Subtext */}
            <p className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold w-full uppercase ml-4">
              builder accelerator
            </p>

            {/* Sub-subtext */}
            <div className="text-black  absolute bottom-[50px] right-[140px]    -translate-y-1/2 text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-leading-8 space-y-1 flex gap-0 flex-col">
              <div className="m-0 p-0">learn.</div>
              <div className="m-0 p-0">build.</div>
              <div className="m-0 p-0">launch.</div>
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
