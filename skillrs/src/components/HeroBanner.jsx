import AgentCarousel from './AgentCarousel'

export default function HeroBanner() {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-5xl md:text-7xl font-black tracking-tight mb-6 relative"
          style={{
            textShadow:
              '0 0 10px rgba(255,0,0,0.5), -2px -2px 0 rgba(255,0,0,0.3), 2px 2px 0 rgba(0,255,255,0.3)',
          }}
        >
          <span className="text-white relative">
            Roshan'skills
            <span className="absolute -inset-1 bg-cyan/5 blur-xl rounded-full" />
          </span>{' '}
          <span className="text-cyan">ECOSYSTEM</span>
        </h2>

        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover, install, and manage AI agent skills from a curated ecosystem of production-ready
          capabilities. Each skill is a <span className="text-cyan font-mono text-sm">.skill.md</span> file
          that teaches your AI agent new superpowers.
        </p>

        <div className="flex flex-col items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">
            Available for these agents
          </p>
          <AgentCarousel />
        </div>
      </div>
    </section>
  )
}