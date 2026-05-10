import React from 'react';

export default function FeaturesDark() {
  return (
    <section id="features" className="w-full bg-brand-darkBg text-white py-24 px-6 my-20 rounded-[3rem] mx-auto max-w-[95%] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-navy to-brand-darkBg opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-wide">
          BUILT FOR <span className="text-brand-orange">AGENTS.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col">
            <div className="h-1 w-12 bg-brand-orange mb-6 rounded-full"></div>
            <h3 className="text-xl font-bold mb-4 text-white">Procedural Knowledge</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Each package is designed to enhance the reasoning and execution capabilities of AI agents, not just provide generic documentation.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col">
            <div className="h-1 w-12 bg-brand-orange mb-6 rounded-full"></div>
            <h3 className="text-xl font-bold mb-4 text-white">Strict SKILL.md Structure</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Every skill follows a strict structure including explicit purposes, hard rules, known failure modes, and verification checklists.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col">
            <div className="h-1 w-12 bg-brand-orange mb-6 rounded-full"></div>
            <h3 className="text-xl font-bold mb-4 text-white">Context Loading</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Easily add relevant skill directories to your agent's context window to enforce high-quality engineering standards immediately.
            </p>
          </div>
        </div>

        {/* Pagination dots (decorative) */}
        <div className="flex justify-center gap-2 mt-20">
          <div className="w-8 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
