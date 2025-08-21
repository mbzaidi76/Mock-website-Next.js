import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#22d3ee,transparent_35%),radial-gradient(circle_at_70%_0%,#a78bfa,transparent_35%),radial-gradient(circle_at_50%_80%,#f59e0b,transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs tracking-wider uppercase">Sports Hub</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Your daily dose of scores, highlights, and hype
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Follow football, basketball, cricket, and more. Live updates, quick reads, and weekend deep-dives.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#live" className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-white/90 transition">Live Scores</a>
            <a href="#news" className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium hover:bg-white/10 transition">Latest News</a>
          </div>
        </div>
      </section>

      {/* Cards */}
      <main className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Football", desc: "Transfers, tactics, weekend fixtures.", icon: "/globe.svg" },
          { title: "Basketball", desc: "Game recaps, power rankings, trades.", icon: "/window.svg" },
          { title: "Cricket", desc: "Series results, player form, insights.", icon: "/file.svg" },
        ].map((card) => (
          <article key={card.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
            <div className="flex items-center gap-3">
              <Image src={card.icon} alt="" width={24} height={24} className="opacity-80 group-hover:opacity-100 transition" />
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <p className="mt-3 text-white/80">{card.desc}</p>
            <a href="#" className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200">Explore →</a>
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Sports Hub</span>
          <a href="https://vercel.com" className="hover:text-white/90">Powered by Vercel</a>
        </div>
      </footer>
    </div>
  );
}
