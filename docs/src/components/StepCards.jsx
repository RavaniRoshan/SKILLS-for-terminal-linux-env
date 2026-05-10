import React from 'react';

export default function StepCards() {
  return (
    <section className="w-full py-24 px-4 relative flex flex-col items-center">
      {/* Central continuous line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-orange/30 to-brand-orange/10 z-0 hidden lg:block"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-24">

        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:pr-32">
          <div className="w-full lg:w-1/2 bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">
            <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md absolute -top-6 -left-6 lg:static lg:mb-6">
              01
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Flat Directory Structure</h2>
            <p className="text-brand-subtext leading-relaxed mb-6">
              The library uses a flat directory structure for maximum retrieval precision and agent reliability. No deep nesting is allowed.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm text-brand-navy border border-gray-200 overflow-x-auto shadow-inner">
              <pre>
{`├── agents-sdk/
├── build-web-apps-react/
├── frontend-design-systems/
└── operations-debugging-root-cause/`}
              </pre>
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:flex justify-center relative">
            {/* Connecting dot */}
            <div className="absolute -left-[3.25rem] w-4 h-4 rounded-full bg-white border-4 border-brand-orange z-10"></div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:pl-32">
          <div className="w-full lg:w-1/2 bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">
            <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md absolute -top-6 -right-6 lg:static lg:mb-6">
              02
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Direct Link Loading</h2>
            <p className="text-brand-subtext leading-relaxed mb-6">
              These skills are meant to be read and followed by AI agents during a session. Point your agent to specific SKILL.md files for domain-specific tasks.
            </p>
            <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-green-400 overflow-x-auto shadow-inner">
              $ cat frontend-design-systems/SKILL.md | prompt ...
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:flex justify-center relative">
             {/* Connecting dot */}
             <div className="absolute -right-[3.25rem] w-4 h-4 rounded-full bg-white border-4 border-brand-orange z-10"></div>
          </div>
        </div>

        {/* Step 3 */}
        <div id="install" className="flex flex-col lg:flex-row items-center gap-12 lg:pr-32">
          <div className="w-full lg:w-1/2 bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative">
            <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md absolute -top-6 -left-6 lg:static lg:mb-6">
              03
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Open Agent Ecosystem</h2>
            <p className="text-brand-subtext leading-relaxed mb-6">
              Many of these skills were curated from the Open Agent Skills Ecosystem. You can find and add more using the skills CLI.
            </p>
            <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-blue-400 overflow-x-auto shadow-inner">
              $ npx skills find [query]<br />
              $ npx skills add &lt;owner/repo@skill&gt;
            </div>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:flex justify-center relative">
            {/* Connecting dot */}
            <div className="absolute -left-[3.25rem] w-4 h-4 rounded-full bg-white border-4 border-brand-orange z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
