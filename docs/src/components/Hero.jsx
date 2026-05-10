import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 px-4 text-center relative overflow-hidden">
      {/* Decorative dots based on reference */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand-navy/10 flex items-center justify-center">
          <Terminal size={16} className="text-brand-navy" />
        </div>
        <div className="h-px w-8 bg-brand-navy/20"></div>
        <div className="text-xs font-bold text-brand-navy uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm border border-brand-navy/10">
          Agent Library
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl md:text-7xl font-black text-brand-navy leading-tight tracking-tight uppercase">
          SKILLS FOR TERMINAL & <br />
          <span className="text-brand-orange">LINUX ENVIRONMENTS</span>
        </h1>

        <p className="mt-6 text-xl text-brand-subtext max-w-2xl mx-auto font-medium leading-relaxed">
          A curated, flat, agent-readable, and capability-oriented skill library optimized for AI agents like Gemini CLI, Claude Code, and Cursor.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#install" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_8px_20px_rgba(255,90,54,0.3)] hover:shadow-[0_12px_25px_rgba(255,90,54,0.4)] hover:-translate-y-1">
            Get Started <ChevronRight size={20} />
          </a>
          <a href="https://github.com" className="inline-flex items-center gap-2 bg-white text-brand-navy border-2 border-brand-navy/10 hover:border-brand-navy px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
