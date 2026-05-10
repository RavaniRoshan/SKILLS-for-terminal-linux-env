import React from 'react';
import { BookOpen, Cog, BrainCircuit, Code, Globe, PenTool } from 'lucide-react';

export default function SkillNodes() {
  return (
    <section className="w-full py-20 relative flex flex-col items-center">
      {/* Central line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-orange/20 via-brand-orange/40 to-transparent z-0 hidden md:block"></div>

      {/* Starting point */}
      <div className="relative z-10 bg-white rounded-full p-2 shadow-md border border-brand-orange/20 mb-16 hidden md:block">
        <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-32 md:gap-y-16">

          {/* Node 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 transform md:-translate-y-8 relative group hover:-translate-y-10 hover:shadow-xl transition-all">
            <div className="absolute right-0 top-1/2 translate-x-full w-16 h-0.5 bg-brand-orange/20 hidden md:block group-hover:bg-brand-orange/50 transition-colors"></div>

            <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
              <BookOpen className="text-red-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-navy">Research & Thinking</h3>
              <p className="text-sm text-brand-subtext mt-1 leading-relaxed">
                Deep paper distillation, synthesis frameworks, systems thinking, and constraint analysis.
              </p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 transform md:translate-y-8 relative group hover:translate-y-6 hover:shadow-xl transition-all">
            <div className="absolute left-0 top-1/2 -translate-x-full w-16 h-0.5 bg-brand-orange/20 hidden md:block group-hover:bg-brand-orange/50 transition-colors"></div>

            <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
              <Cog className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-navy">Operations & Planning</h3>
              <p className="text-sm text-brand-subtext mt-1 leading-relaxed">
                Systematic debugging (Root Cause Analysis), vertical-slice task planning, and context engineering.
              </p>
            </div>
          </div>

          {/* Node 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 transform md:-translate-y-4 relative group hover:-translate-y-6 hover:shadow-xl transition-all">
            <div className="absolute right-0 top-1/2 translate-x-full w-16 h-0.5 bg-brand-orange/20 hidden md:block group-hover:bg-brand-orange/50 transition-colors"></div>

            <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
              <BrainCircuit className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-navy">AI Engineering</h3>
              <p className="text-sm text-brand-subtext mt-1 leading-relaxed">
                Context optimization, evaluation frameworks, and prompt system design.
              </p>
            </div>
          </div>

          {/* Node 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 transform md:translate-y-12 relative group hover:translate-y-10 hover:shadow-xl transition-all">
            <div className="absolute left-0 top-1/2 -translate-x-full w-16 h-0.5 bg-brand-orange/20 hidden md:block group-hover:bg-brand-orange/50 transition-colors"></div>

            <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
              <Code className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-navy">Frontend & Design</h3>
              <p className="text-sm text-brand-subtext mt-1 leading-relaxed">
                Interaction psychology, perceived performance optimization, cinematic motion, and design systems.
              </p>
            </div>
          </div>

          {/* Node 5 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 transform md:-translate-y-0 relative group hover:-translate-y-2 hover:shadow-xl transition-all">
            <div className="absolute right-0 top-1/2 translate-x-full w-16 h-0.5 bg-brand-orange/20 hidden md:block group-hover:bg-brand-orange/50 transition-colors"></div>

            <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
              <Globe className="text-orange-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-navy">Web Development</h3>
              <p className="text-sm text-brand-subtext mt-1 leading-relaxed">
                Specialized best practices for React, ASP.NET Core, Supabase, Stripe, and Vercel.
              </p>
            </div>
          </div>

          {/* Node 6 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 transform md:translate-y-16 relative group hover:translate-y-14 hover:shadow-xl transition-all">
            <div className="absolute left-0 top-1/2 -translate-x-full w-16 h-0.5 bg-brand-orange/20 hidden md:block group-hover:bg-brand-orange/50 transition-colors"></div>

            <div className="bg-teal-100 p-3 rounded-xl flex-shrink-0">
              <PenTool className="text-teal-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-navy">Content & Writing</h3>
              <p className="text-sm text-brand-subtext mt-1 leading-relaxed">
                Technical specification drafting, narrative design for presentations, and knowledge packaging.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Center focus text */}
      <div className="mt-40 relative z-10 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm">
        <span className="text-brand-subtext font-medium text-sm">Self-contained within individual directories via SKILL.md</span>
      </div>
    </section>
  );
}
