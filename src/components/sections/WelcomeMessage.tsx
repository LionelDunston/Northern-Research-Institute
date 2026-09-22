export function WelcomeMessage() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0a2de0] via-[#1e3af5] to-[#06b6d4] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="container-wide relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold tracking-widest uppercase">Welcome to NRI</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">Where Ideas Become Impact</h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center text-lg font-bold text-[#0a2de0]">1</div>
              <h3 className="mt-3 font-bold">Discover</h3>
              <p className="text-sm text-white/80 mt-1">Submit published or unpublished research — we evaluate for real-world potential.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-300 to-teal-400 flex items-center justify-center text-lg font-bold text-[#0a2de0]">2</div>
              <h3 className="mt-3 font-bold">Develop</h3>
              <p className="text-sm text-white/80 mt-1">Get mentorship, lab access, funding links and incubation to build your prototype.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-300 to-violet-400 flex items-center justify-center text-lg font-bold text-white">3</div>
              <h3 className="mt-3 font-bold">Deliver</h3>
              <p className="text-sm text-white/80 mt-1">Launch as enterprise or community programme — measure jobs, income and impact.</p>
            </div>
          </div>
          <p className="text-center text-white/75 mt-10 max-w-3xl mx-auto">Through our flagship <span className="text-white font-bold">Research-to-Impact</span> programme, we bridge the gap between academic research and real-world application.</p>
        </div>
      </div>
    </section>
  )
}
