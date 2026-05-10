import React from 'react';
import { Terminal, ShieldCheck, FileText } from 'lucide-react';

export default function DashboardMockup() {
  return (
    <section id="usage" className="w-full py-24 flex flex-col items-center relative">
      <h2 className="text-3xl font-black text-brand-navy mb-16 tracking-widest text-center uppercase">
        AGENT EXECUTION
      </h2>

      {/* Funnel design */}
      <div className="relative flex flex-col items-center mb-12">
        <div className="w-64 h-64 border-[1px] border-dashed border-brand-orange/30 rounded-full absolute -top-12 animate-[spin_30s_linear_infinite]"></div>
        <div className="w-48 h-48 border-[1px] border-brand-orange/20 rounded-full absolute -top-4"></div>

        <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white z-10 shadow-lg mt-8">
          <FileText size={20} />
        </div>

        <div className="mt-4 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 text-center z-10">
          <p className="font-bold text-brand-navy">SKILL.md</p>
          <p className="text-xs text-brand-subtext">Context Loaded</p>
        </div>

        <div className="h-16 w-0.5 bg-gradient-to-b from-brand-orange to-transparent my-4"></div>

        <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm text-xs text-brand-subtext z-10">
          Agent Context Window
        </div>

        <div className="h-24 w-0.5 bg-gradient-to-b from-transparent to-[#80A8E3] my-4"></div>
      </div>

      {/* Terminal UI */}
      <div className="w-full max-w-5xl mx-4 bg-gradient-to-br from-[#80A8E3] to-[#A2C2ED] p-4 md:p-8 rounded-[2rem] shadow-2xl relative">
        <div className="absolute top-4 left-6 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
        </div>
        <div className="absolute top-4 right-6 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-brand-navy flex items-center gap-1">
          Claude Code <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>

        <div className="mt-8 bg-[#1e1e1e] rounded-2xl shadow-lg overflow-hidden text-gray-300 font-mono text-sm">
          <div className="p-6">
            <div className="mb-4">
              <span className="text-green-400">user@dev:~/project$</span> claude --context ./frontend-design-systems/SKILL.md "Implement a new button component"
            </div>
            <div className="mb-2 opacity-70">
              [SYSTEM] Loading context from ./frontend-design-systems/SKILL.md...
            </div>
            <div className="mb-2 opacity-70">
              [SYSTEM] Applying rules: "perceived performance optimization", "interaction psychology"...
            </div>
            <div className="mb-4 text-brand-orange">
              <br/>
              Agent: I've read the frontend design systems skill document. I will implement the button component ensuring:
              <br/>1. It follows the required interaction psychology patterns (hover states, active states).
              <br/>2. It uses the cinematic motion principles outlined in the skill rules.
            </div>
            <div className="text-blue-400">
              Generating code...
              <br/>
              [==================================&gt;] 100%
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-5 -right-5 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
          <ShieldCheck size={16} className="text-green-500" />
          <span className="text-sm font-bold text-brand-navy">High Quality Enforced</span>
        </div>
      </div>
    </section>
  );
}
